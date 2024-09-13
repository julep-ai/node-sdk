// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AgentsDocsAPI from './docs';
import * as DocsAPI from '../docs';
import { DocsOffsetPagination } from '../docs';
import { type OffsetPaginationParams } from '../../pagination';

export class Docs extends APIResource {
  /**
   * Create Agent Doc
   */
  create(
    agentId: string,
    body: DocCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocCreateResponse> {
    return this._client.post(`/agents/${agentId}/docs`, { body, ...options });
  }

  /**
   * List Agent Docs
   */
  list(
    agentId: string,
    query?: DocListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocsOffsetPagination, DocsAPI.Doc>;
  list(agentId: string, options?: Core.RequestOptions): Core.PagePromise<DocsOffsetPagination, DocsAPI.Doc>;
  list(
    agentId: string,
    query: DocListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocsOffsetPagination, DocsAPI.Doc> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.getAPIList(`/agents/${agentId}/docs`, DocsOffsetPagination, { query, ...options });
  }

  /**
   * Delete Agent Doc
   */
  delete(agentId: string, docId: string, options?: Core.RequestOptions): Core.APIPromise<DocDeleteResponse> {
    return this._client.delete(`/agents/${agentId}/docs/${docId}`, options);
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
  export import DocCreateResponse = AgentsDocsAPI.DocCreateResponse;
  export import DocDeleteResponse = AgentsDocsAPI.DocDeleteResponse;
  export import DocCreateParams = AgentsDocsAPI.DocCreateParams;
  export import DocListParams = AgentsDocsAPI.DocListParams;
}

export { DocsOffsetPagination };
