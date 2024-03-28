import {Hono} from 'hono';
import namor from 'namor';
import crypto from 'crypto';
import {eq} from 'drizzle-orm';
import {basicAuth} from 'hono/basic-auth';

import {db} from '../db';
import {readAuth} from '../middleware';
import {Project, chunks, projects} from '../db/schema';

// RECHUNK_USERNAME required for basicAuth in creating a new project
if (!process.env.RECHUNK_USERNAME) {
  throw Error(
    '[RECHUNK]: RECHUNK_USERNAME environment variable not found, add RECHUNK_USERNAME to .env file.',
  );
}

// RECHUNK_PASSWORD required for basicAuth in creating a new project
if (!process.env.RECHUNK_PASSWORD) {
  throw Error(
    '[RECHUNK]: RECHUNK_PASSWORD environment variable not found, add RECHUNK_PASSWORD to .env file',
  );
}

type Variables = {
  project: Project;
};

const project = new Hono<{Variables: Variables}>();

project.get('/', readAuth(), async c => {
  const project = c.get('project');

  const res = await db.query.chunks.findMany({
    where: eq(chunks.projectId, project.id),
  });

  return c.json(res);
});

// Use basic auth and for now it's okay to expose username and password
// In future use secrets
project.post(
  '/',
  basicAuth({
    username: process.env.RECHUNK_USERNAME,
    password: process.env.RECHUNK_PASSWORD,
  }),
  async c => {
    const project = namor.generate({words: 3});
    const readKey = `read-${crypto.randomUUID()}`;
    const writeKey = `write-${crypto.randomUUID()}`;
    const {privateKey, publicKey} = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });

    const pub = publicKey.export({type: 'spki', format: 'pem'}) as string;
    const priv = privateKey.export({type: 'pkcs8', format: 'pem'}) as string;

    await db.insert(projects).values({
      readKey,
      writeKey,
      publicKey: pub,
      privateKey: priv,
      name: project,
    });

    return c.json({
      project,
      readKey,
      writeKey,
      publicKey,
      privateKey,
      entry: [],
      external: [],
    });
  },
);

export default project;
