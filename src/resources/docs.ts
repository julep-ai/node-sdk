// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
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

  embedding_dimensions?: number | null;

  embedding_model?: string | null;

  embeddings?: Array<number> | Array<Array<number>> | null;

  language?: string | null;

  metadata?: unknown | null;

  modality?: string | null;
}

export interface EmbedQueryResponse {
  vectors: Array<Array<number>>;
}

export interface Snippet {
  content: string;

  index: number;

  embedding?: Array<number> | null;
}

export type DocEmbedParams =
  | DocEmbedParams.SingleEmbedQueryRequest
  | DocEmbedParams.MultipleEmbedQueryRequest;

export declare namespace DocEmbedParams {
  export interface SingleEmbedQueryRequest {
    text: string;

    embed_instruction?: string;
  }

  export interface MultipleEmbedQueryRequest {
    text: Array<string>;

    embed_instruction?: string;
  }
}

export declare namespace Docs {
  export {
    type Doc as Doc,
    type EmbedQueryResponse as EmbedQueryResponse,
    type Snippet as Snippet,
    type DocEmbedParams as DocEmbedParams,
  };
}
