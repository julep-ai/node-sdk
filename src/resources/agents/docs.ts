// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AgentsDocsAPI from './docs';
import * as DocsAPI from '../docs';

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
  ): Core.APIPromise<DocListResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<DocListResponse>;
  list(
    agentId: string,
    query: DocListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocListResponse> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.get(`/agents/${agentId}/docs`, { query, ...options });
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

export interface DocListResponse {
  items: Array<DocsAPI.Doc>;
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

export interface DocListParams {
  direction?: 'asc' | 'desc';

  limit?: number;

  metadata_filter?: string;

  offset?: number;

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Docs {
  export import DocCreateResponse = AgentsDocsAPI.DocCreateResponse;
  export import DocListResponse = AgentsDocsAPI.DocListResponse;
  export import DocDeleteResponse = AgentsDocsAPI.DocDeleteResponse;
  export import DocCreateParams = AgentsDocsAPI.DocCreateParams;
  export import DocListParams = AgentsDocsAPI.DocListParams;
}
