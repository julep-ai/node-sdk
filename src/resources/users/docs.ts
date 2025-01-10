// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DocsAPI from '../docs';
import { DocsOffsetPagination } from '../docs';
import * as Shared from '../shared';
import { type OffsetPaginationParams } from '../../pagination';

export class Docs extends APIResource {
  /**
   * Creates a new document for a user.
   *
   * Parameters: user_id (UUID): The unique identifier of the user associated with
   * the document. data (CreateDocRequest): The data to create the document with.
   * x_developer_id (UUID): The unique identifier of the developer associated with
   * the document.
   *
   * Returns: ResourceCreatedResponse: The created document.
   */
  create(
    userId: string,
    params: DocCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceCreated> {
    const { connection_pool, ...body } = params;
    return this._client.post(`/users/${userId}/docs`, { query: { connection_pool }, body, ...options });
  }

  /**
   * List User Docs
   */
  list(
    userId: string,
    query?: DocListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocsOffsetPagination, DocsAPI.Doc>;
  list(userId: string, options?: Core.RequestOptions): Core.PagePromise<DocsOffsetPagination, DocsAPI.Doc>;
  list(
    userId: string,
    query: DocListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocsOffsetPagination, DocsAPI.Doc> {
    if (isRequestOptions(query)) {
      return this.list(userId, {}, query);
    }
    return this._client.getAPIList(`/users/${userId}/docs`, DocsOffsetPagination, { query, ...options });
  }

  /**
   * Delete User Doc
   */
  delete(
    userId: string,
    docId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceDeleted> {
    return this._client.delete(`/users/${userId}/docs/${docId}`, options);
  }

  /**
   * Searches for documents associated with a specific user.
   *
   * Parameters: x_developer_id (UUID): The unique identifier of the developer
   * associated with the user. search_params (TextOnlyDocSearchRequest |
   * VectorDocSearchRequest | HybridDocSearchRequest): The parameters for the search.
   * user_id (UUID): The unique identifier of the user associated with the documents.
   *
   * Returns: DocSearchResponse: The search results.
   */
  search(
    userId: string,
    params: DocSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocSearchResponse> {
    const { connection_pool, ...body } = params;
    return this._client.post(`/users/${userId}/search`, { query: { connection_pool }, body, ...options });
  }
}

export interface DocSearchResponse {
  docs: Array<DocSearchResponse.Doc>;

  time: number;
}

export namespace DocSearchResponse {
  export interface Doc {
    id: string;

    owner: Doc.Owner;

    snippet: DocsAPI.Snippet;

    distance?: number | null;

    metadata?: unknown | null;

    title?: string | null;
  }

  export namespace Doc {
    export interface Owner {
      id: string;

      role: 'user' | 'agent';
    }
  }
}

export interface DocCreateParams {
  /**
   * Body param:
   */
  content: string | Array<string>;

  /**
   * Body param:
   */
  title: string;

  /**
   * Query param:
   */
  connection_pool?: unknown;

  /**
   * Body param:
   */
  embed_instruction?: string | null;

  /**
   * Body param:
   */
  metadata?: unknown | null;
}

export interface DocListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: Record<string, unknown>;

  sort_by?: 'created_at' | 'updated_at';
}

export type DocSearchParams =
  | DocSearchParams.TextOnlyDocSearchRequest
  | DocSearchParams.VectorDocSearchRequest
  | DocSearchParams.HybridDocSearchRequest;

export namespace DocSearchParams {
  export interface TextOnlyDocSearchRequest {
    /**
     * Body param:
     */
    text: string;

    /**
     * Query param:
     */
    connection_pool?: unknown;

    /**
     * Body param:
     */
    lang?: 'en-US';

    /**
     * Body param:
     */
    limit?: number;

    /**
     * Body param:
     */
    metadata_filter?: unknown;

    /**
     * Body param:
     */
    mmr_strength?: number;
  }

  export interface VectorDocSearchRequest {
    /**
     * Body param:
     */
    vector: Array<number>;

    /**
     * Query param:
     */
    connection_pool?: unknown;

    /**
     * Body param:
     */
    confidence?: number;

    /**
     * Body param:
     */
    lang?: 'en-US';

    /**
     * Body param:
     */
    limit?: number;

    /**
     * Body param:
     */
    metadata_filter?: unknown;

    /**
     * Body param:
     */
    mmr_strength?: number;
  }

  export interface HybridDocSearchRequest {
    /**
     * Body param:
     */
    text: string;

    /**
     * Body param:
     */
    vector: Array<number>;

    /**
     * Query param:
     */
    connection_pool?: unknown;

    /**
     * Body param:
     */
    alpha?: number;

    /**
     * Body param:
     */
    confidence?: number;

    /**
     * Body param:
     */
    lang?: 'en-US';

    /**
     * Body param:
     */
    limit?: number;

    /**
     * Body param:
     */
    metadata_filter?: unknown;

    /**
     * Body param:
     */
    mmr_strength?: number;
  }
}

export declare namespace Docs {
  export {
    type DocSearchResponse as DocSearchResponse,
    type DocCreateParams as DocCreateParams,
    type DocListParams as DocListParams,
    type DocSearchParams as DocSearchParams,
  };
}

export { DocsOffsetPagination };
