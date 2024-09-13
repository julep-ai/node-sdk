// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TransitionsAPI from './transitions';

export class Transitions extends APIResource {
  /**
   * List Execution Transitions
   */
  list(
    executionId: string,
    query?: TransitionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransitionListResponse>;
  list(executionId: string, options?: Core.RequestOptions): Core.APIPromise<TransitionListResponse>;
  list(
    executionId: string,
    query: TransitionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TransitionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(executionId, {}, query);
    }
    return this._client.get(`/executions/${executionId}/transitions`, { query, ...options });
  }

  /**
   * Stream Transitions Events
   */
  listStream(
    executionId: string,
    query?: TransitionListStreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  listStream(executionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  listStream(
    executionId: string,
    query: TransitionListStreamParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.listStream(executionId, {}, query);
    }
    return this._client.get(`/executions/${executionId}/transitions.stream`, { query, ...options });
  }
}

export interface TransitionListResponse {
  items: Array<TransitionListResponse.Item>;
}

export namespace TransitionListResponse {
  export interface Item {
    id: string;

    created_at: string;

    current: Item.Current;

    execution_id: string;

    next: Item.Next | null;

    output: unknown;

    type:
      | 'init'
      | 'init_branch'
      | 'finish'
      | 'finish_branch'
      | 'wait'
      | 'resume'
      | 'error'
      | 'step'
      | 'cancelled';

    updated_at: string;

    metadata?: unknown | null;
  }

  export namespace Item {
    export interface Current {
      step: number;

      workflow: string;
    }

    export interface Next {
      step: number;

      workflow: string;
    }
  }
}

export type TransitionListStreamResponse = unknown;

export interface TransitionListParams {
  direction?: 'asc' | 'desc';

  limit?: number;

  offset?: number;

  sort_by?: 'created_at' | 'updated_at';
}

export interface TransitionListStreamParams {
  next_page_token?: string | null;
}

export namespace Transitions {
  export import TransitionListResponse = TransitionsAPI.TransitionListResponse;
  export import TransitionListStreamResponse = TransitionsAPI.TransitionListStreamResponse;
  export import TransitionListParams = TransitionsAPI.TransitionListParams;
  export import TransitionListStreamParams = TransitionsAPI.TransitionListStreamParams;
}
