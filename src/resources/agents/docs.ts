// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AgentsDocsAPI from './docs';
import * as DocsAPI from '../docs';
import { DocsOffsetPagination } from '../docs';
import * as Shared from '../shared';
import { type OffsetPaginationParams } from '../../pagination';

export class Docs extends APIResource {
  /**
   * Create Agent Doc
   */
  create(
    agentId: string,
    body: DocCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceCreated> {
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
  delete(
    agentId: string,
    docId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceDeleted> {
    return this._client.delete(`/agents/${agentId}/docs/${docId}`, options);
  }

  /**
   * Search Agent Docs
   */
  search(
    agentId: string,
    body: DocSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DocSearchResponse> {
    return this._client.post(`/agents/${agentId}/search`, { body, ...options });
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

    snippets: Array<DocsAPI.Snippet>;

    distance?: number | null;

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
  content: string | Array<string>;

  title: string;

  metadata?: unknown | null;
}

export interface DocListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export type DocSearchParams =
  | DocSearchParams.TextOnlyDocSearchRequest
  | DocSearchParams.VectorDocSearchRequest
  | DocSearchParams.HybridDocSearchRequest;

export namespace DocSearchParams {
  export interface TextOnlyDocSearchRequest {
    text: string;

    lang?: 'en-US';

    limit?: number;
  }

  export interface VectorDocSearchRequest {
    vector: Array<number>;

    confidence?: number;

    lang?: 'en-US';

    limit?: number;
  }

  export interface HybridDocSearchRequest {
    text: string;

    vector: Array<number>;

    alpha?: number;

    confidence?: number;

    lang?: 'en-US';

    limit?: number;
  }
}

export namespace Docs {
  export import DocSearchResponse = AgentsDocsAPI.DocSearchResponse;
  export import DocCreateParams = AgentsDocsAPI.DocCreateParams;
  export import DocListParams = AgentsDocsAPI.DocListParams;
  export import DocSearchParams = AgentsDocsAPI.DocSearchParams;
}

export { DocsOffsetPagination };
