// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as DocsAPI from './docs';

export class Docs extends APIResource {
  /**
   * Embed
   */
  create(body: DocCreateParams, options?: Core.RequestOptions): Core.APIPromise<EmbedQueryResponse> {
    return this._client.post('/embed', { body, ...options });
  }

  /**
   * Get Doc
   */
  retrieve(docId: string, options?: Core.RequestOptions): Core.APIPromise<Doc> {
    return this._client.get(`/docs/${docId}`, options);
  }
}

export interface Doc {
  id: string;

  content: string | Array<string>;

  created_at: string;

  title: string;

  metadata?: unknown | null;
}

export interface EmbedQueryResponse {
  vectors: Array<Array<number>>;
}

export interface DocCreateParams {
  text: string | Array<string>;
}

export namespace Docs {
  export import Doc = DocsAPI.Doc;
  export import EmbedQueryResponse = DocsAPI.EmbedQueryResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
}
