// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Secrets extends APIResource {
  /**
   * Create a new secret for a developer.
   *
   * Args: developer_id: ID of the developer creating the secret secret: Secret to
   * create
   *
   * Returns: The created secret
   *
   * Raises: HTTPException: If a secret with this name already exists (409 Conflict)
   */
  create(body: SecretCreateParams, options?: Core.RequestOptions): Core.APIPromise<Secret> {
    return this._client.post('/secrets', { body, ...options });
  }

  /**
   * Update a developer secret.
   *
   * Args: developer_id: ID of the developer who owns the secret secret_id: ID of the
   * secret to update data: New secret data
   *
   * Returns: The updated secret
   *
   * Raises: HTTPException: If the secret doesn't exist or doesn't belong to the
   * developer
   */
  update(secretId: string, body: SecretUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Secret> {
    return this._client.put(`/secrets/${secretId}`, { body, ...options });
  }

  /**
   * List all secrets for a developer.
   *
   * Args: x_developer_id: ID of the developer whose secrets to list limit: Maximum
   * number of secrets to return offset: Number of secrets to skip
   *
   * Returns: List of secrets
   */
  list(query?: SecretListParams, options?: Core.RequestOptions): Core.APIPromise<SecretListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SecretListResponse>;
  list(
    query: SecretListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecretListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/secrets', { query, ...options });
  }

  /**
   * Delete a secret.
   *
   * Args: secret_id: ID of the secret to delete x_developer_id: ID of the developer
   * who owns the secret
   *
   * Returns: The deleted secret
   *
   * Raises: HTTPException: If the secret doesn't exist
   */
  delete(secretId: string, options?: Core.RequestOptions): Core.APIPromise<SecretDeleteResponse> {
    return this._client.delete(`/secrets/${secretId}`, options);
  }
}

/**
 * A secret that can be used in tasks and sessions
 */
export interface Secret {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  value: string;

  description?: string | null;

  metadata?: unknown | null;
}

export type SecretListResponse = Array<Secret>;

export interface SecretDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface SecretCreateParams {
  name: string;

  value: string;

  description?: string | null;

  metadata?: unknown | null;
}

export interface SecretUpdateParams {
  name: string;

  value: string;

  description?: string | null;

  metadata?: unknown | null;
}

export interface SecretListParams {
  limit?: number;

  offset?: number;
}

export declare namespace Secrets {
  export {
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretListParams as SecretListParams,
  };
}
