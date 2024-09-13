// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TransitionsAPI from './transitions';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Transitions extends APIResource {
  /**
   * List Execution Transitions
   */
  list(
    executionId: string,
    query?: TransitionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransitionListResponsesOffsetPagination, TransitionListResponse>;
  list(
    executionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransitionListResponsesOffsetPagination, TransitionListResponse>;
  list(
    executionId: string,
    query: TransitionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransitionListResponsesOffsetPagination, TransitionListResponse> {
    if (isRequestOptions(query)) {
      return this.list(executionId, {}, query);
    }
    return this._client.getAPIList(
      `/executions/${executionId}/transitions`,
      TransitionListResponsesOffsetPagination,
      { query, ...options },
    );
  }

  /**
   * Stream Transitions Events
   */
  stream(
    executionId: string,
    query?: TransitionStreamParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown>;
  stream(executionId: string, options?: Core.RequestOptions): Core.APIPromise<unknown>;
  stream(
    executionId: string,
    query: TransitionStreamParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    if (isRequestOptions(query)) {
      return this.stream(executionId, {}, query);
    }
    return this._client.get(`/executions/${executionId}/transitions.stream`, { query, ...options });
  }
}

export class TransitionListResponsesOffsetPagination extends OffsetPagination<TransitionListResponse> {}

export interface TransitionListResponse {
  id: string;

  created_at: string;

  current: TransitionListResponse.Current;

  execution_id: string;

  next: TransitionListResponse.Next | null;

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

export namespace TransitionListResponse {
  export interface Current {
    step: number;

    workflow: string;
  }

  export interface Next {
    step: number;

    workflow: string;
  }
}

export type TransitionStreamResponse = unknown;

export interface TransitionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export interface TransitionStreamParams {
  next_page_token?: string | null;
}

export namespace Transitions {
  export import TransitionListResponse = TransitionsAPI.TransitionListResponse;
  export import TransitionStreamResponse = TransitionsAPI.TransitionStreamResponse;
  export import TransitionListResponsesOffsetPagination = TransitionsAPI.TransitionListResponsesOffsetPagination;
  export import TransitionListParams = TransitionsAPI.TransitionListParams;
  export import TransitionStreamParams = TransitionsAPI.TransitionStreamParams;
}
