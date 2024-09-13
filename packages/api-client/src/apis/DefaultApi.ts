/* tslint:disable */
/* eslint-disable */
/**
 * ReChunk API
 * API for managing chunks in the ReChunk project.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import type {
  Chunk,
  CreateChunkForProject200Response,
  Project,
} from '../models/index';
import {
  ChunkFromJSON,
  ChunkToJSON,
  CreateChunkForProject200ResponseFromJSON,
  CreateChunkForProject200ResponseToJSON,
  ProjectFromJSON,
  ProjectToJSON,
} from '../models/index';

export interface CreateChunkForProjectRequest {
  projectId: string;
  chunkId: string;
  body: string;
}

export interface CreateProjectRequest {
  projectId: string;
}

export interface DeleteChunkByIdRequest {
  projectId: string;
  chunkId: string;
}

export interface GetChunkByIdRequest {
  projectId: string;
  chunkId: string;
}

export interface GetChunksByProjectIdRequest {
  projectId: string;
}

export interface GetProjectByIdRequest {
  projectId: string;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {
  /**
   * Create a chunk in the project.
   */
  async createChunkForProjectRaw(
    requestParameters: CreateChunkForProjectRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<CreateChunkForProject200Response>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling createChunkForProject().',
      );
    }

    if (requestParameters['chunkId'] == null) {
      throw new runtime.RequiredError(
        'chunkId',
        'Required parameter "chunkId" was null or undefined when calling createChunkForProject().',
      );
    }

    if (requestParameters['body'] == null) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter "body" was null or undefined when calling createChunkForProject().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/projects/{projectId}/chunks/{chunkId}`
          .replace(
            `{${'projectId'}}`,
            encodeURIComponent(String(requestParameters['projectId'])),
          )
          .replace(
            `{${'chunkId'}}`,
            encodeURIComponent(String(requestParameters['chunkId'])),
          ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: requestParameters['body'] as any,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateChunkForProject200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * Create a chunk in the project.
   */
  async createChunkForProject(
    requestParameters: CreateChunkForProjectRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<CreateChunkForProject200Response> {
    const response = await this.createChunkForProjectRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Create a new project.
   */
  async createProjectRaw(
    requestParameters: CreateProjectRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling createProject().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/projects/{projectId}`.replace(
          `{${'projectId'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      ProjectFromJSON(jsonValue),
    );
  }

  /**
   * Create a new project.
   */
  async createProject(
    requestParameters: CreateProjectRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Project> {
    const response = await this.createProjectRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Delete a chunk from the project.
   */
  async deleteChunkByIdRaw(
    requestParameters: DeleteChunkByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<CreateChunkForProject200Response>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling deleteChunkById().',
      );
    }

    if (requestParameters['chunkId'] == null) {
      throw new runtime.RequiredError(
        'chunkId',
        'Required parameter "chunkId" was null or undefined when calling deleteChunkById().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/projects/{projectId}/chunks/{chunkId}`
          .replace(
            `{${'projectId'}}`,
            encodeURIComponent(String(requestParameters['projectId'])),
          )
          .replace(
            `{${'chunkId'}}`,
            encodeURIComponent(String(requestParameters['chunkId'])),
          ),
        method: 'DELETE',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      CreateChunkForProject200ResponseFromJSON(jsonValue),
    );
  }

  /**
   * Delete a chunk from the project.
   */
  async deleteChunkById(
    requestParameters: DeleteChunkByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<CreateChunkForProject200Response> {
    const response = await this.deleteChunkByIdRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get details of a chunk in the project.
   */
  async getChunkByIdRaw(
    requestParameters: GetChunkByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Chunk>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getChunkById().',
      );
    }

    if (requestParameters['chunkId'] == null) {
      throw new runtime.RequiredError(
        'chunkId',
        'Required parameter "chunkId" was null or undefined when calling getChunkById().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/projects/{projectId}/chunks/{chunkId}`
          .replace(
            `{${'projectId'}}`,
            encodeURIComponent(String(requestParameters['projectId'])),
          )
          .replace(
            `{${'chunkId'}}`,
            encodeURIComponent(String(requestParameters['chunkId'])),
          ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      ChunkFromJSON(jsonValue),
    );
  }

  /**
   * Get details of a chunk in the project.
   */
  async getChunkById(
    requestParameters: GetChunkByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Chunk> {
    const response = await this.getChunkByIdRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get details of all chunks in the project.
   */
  async getChunksByProjectIdRaw(
    requestParameters: GetChunksByProjectIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Array<Chunk>>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getChunksByProjectId().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/projects/{projectId}/chunks`.replace(
          `{${'projectId'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      jsonValue.map(ChunkFromJSON),
    );
  }

  /**
   * Get details of all chunks in the project.
   */
  async getChunksByProjectId(
    requestParameters: GetChunksByProjectIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<Chunk>> {
    const response = await this.getChunksByProjectIdRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }

  /**
   * Get project details.
   */
  async getProjectByIdRaw(
    requestParameters: GetProjectByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Project>> {
    if (requestParameters['projectId'] == null) {
      throw new runtime.RequiredError(
        'projectId',
        'Required parameter "projectId" was null or undefined when calling getProjectById().',
      );
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    if (
      this.configuration &&
      (this.configuration.username !== undefined ||
        this.configuration.password !== undefined)
    ) {
      headerParameters['Authorization'] =
        'Basic ' +
        btoa(this.configuration.username + ':' + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/projects/{projectId}`.replace(
          `{${'projectId'}}`,
          encodeURIComponent(String(requestParameters['projectId'])),
        ),
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      ProjectFromJSON(jsonValue),
    );
  }

  /**
   * Get project details.
   */
  async getProjectById(
    requestParameters: GetProjectByIdRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Project> {
    const response = await this.getProjectByIdRaw(
      requestParameters,
      initOverrides,
    );
    return await response.value();
  }
}
