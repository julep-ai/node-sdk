// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocsAPI from './docs';
import { OffsetPagination } from '../pagination';

export class Docs extends APIResource {
  /**
   * Embed
   */
  embed(body: DocEmbedParams, options?: Core.RequestOptions): Core.APIPromise<EmbedQueryResponse> {
    return this._client.post('/embed', { body, ...options });
  }

  /**
   * Get Doc
   */
  get(docId: string, options?: Core.RequestOptions): Core.APIPromise<Doc> {
    return this._client.get(`/docs/${docId}`, options);
  }
}

export class DocsOffsetPagination extends OffsetPagination<Doc> {}

export interface Doc {
  id: string;

  content: string | Array<string>;

  created_at: string;

  title: string;

  embeddings?: Array<number> | Array<Array<number>> | null;

  metadata?: unknown | null;
}

export interface EmbedQueryResponse {
  vectors: Array<Array<number>>;
}

export interface Snippet {
  content: string;

  index: number;
}

export interface DocEmbedParams {
  text: string | Array<string>;

  embed_instruction?: string;
}

export namespace Docs {
  export import Doc = DocsAPI.Doc;
  export import EmbedQueryResponse = DocsAPI.EmbedQueryResponse;
  export import Snippet = DocsAPI.Snippet;
  export import DocEmbedParams = DocsAPI.DocEmbedParams;
}
