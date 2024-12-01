import mdx from '@mdx-js/rollup';
import {vitePlugin as remix} from '@remix-run/dev';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFormat from 'rehype-format';
import {rehypePrettyCode} from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkFrontmatter from 'remark-frontmatter';
import remarkGfm from 'remark-gfm';
import remarkMdxFrontmatter from 'remark-mdx-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import {defineConfig} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    mdx({
      providerImportSource: '@mdx-js/react',
      remarkPlugins: [
        remarkGfm,
        remarkParse,
        remarkFrontmatter,
        remarkMdxFrontmatter,
        remarkRehype,
      ],
      rehypePlugins: [
        rehypeSlug,
        rehypeFormat,
        rehypePrettyCode,
        rehypeAutolinkHeadings,
      ],
    }),
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
  ],
});
