/* tslint:disable */
/* eslint-disable */
/**
 * ReChunk API
 * API for managing chunks in the ReChunk project. Enables secure storage and retrieval of data chunks with project-based organization.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from '../runtime';
import type {Token} from '../models/index';
import {TokenFromJSON, TokenToJSON} from '../models/index';

/**
 *
 */
export class AuthenticationApi extends runtime.BaseAPI {
  /**
   * Generates a new authentication token for project access
   * Create a new project token
   */
  async createTokenRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<Token>> {
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
        path: `/token`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, jsonValue =>
      TokenFromJSON(jsonValue),
    );
  }

  /**
   * Generates a new authentication token for project access
   * Create a new project token
   */
  async createToken(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Token> {
    const response = await this.createTokenRaw(initOverrides);
    return await response.value();
  }
}
