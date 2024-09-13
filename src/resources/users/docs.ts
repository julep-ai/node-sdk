// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersDocsAPI from './docs';
import * as DocsAPI from '../docs';
import { DocsOffsetPagination } from '../docs';
import { type OffsetPaginationParams } from '../../pagination';

export class Docs extends APIResource {
  /**
   * Create User Doc
   */
  create(
    userId: string,
    body: DocCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocCreateResponse> {
    return this._client.post(`/users/${userId}/docs`, { body, ...options });
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
  delete(userId: string, docId: string, options?: Core.RequestOptions): Core.APIPromise<DocDeleteResponse> {
    return this._client.delete(`/users/${userId}/docs/${docId}`, options);
  }
}

export interface DocCreateResponse {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface DocDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface DocCreateParams {
  content: string | Array<string>;

  title: string;

  metadata?: unknown | null;
}

export interface DocListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: string;

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Docs {
  export import DocCreateResponse = UsersDocsAPI.DocCreateResponse;
  export import DocDeleteResponse = UsersDocsAPI.DocDeleteResponse;
  export import DocCreateParams = UsersDocsAPI.DocCreateParams;
  export import DocListParams = UsersDocsAPI.DocListParams;
}

export { DocsOffsetPagination };
