// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ExecutionsAPI from './executions';
import { TransitionsOffsetPagination } from './executions';
import { type OffsetPaginationParams } from '../../pagination';

export class Transitions extends APIResource {
  /**
   * List Execution Transitions
   */
  list(
    executionId: string,
    query?: TransitionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransitionsOffsetPagination, ExecutionsAPI.Transition>;
  list(
    executionId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransitionsOffsetPagination, ExecutionsAPI.Transition>;
  list(
    executionId: string,
    query: TransitionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TransitionsOffsetPagination, ExecutionsAPI.Transition> {
    if (isRequestOptions(query)) {
      return this.list(executionId, {}, query);
    }
    return this._client.getAPIList(`/executions/${executionId}/transitions`, TransitionsOffsetPagination, {
      query,
      ...options,
    });
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

export type TransitionStreamResponse = unknown;

export interface TransitionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  scope_id?: string | null;

  sort_by?: 'created_at' | 'updated_at';
}

export interface TransitionStreamParams {
  next_page_token?: string | null;
}

export declare namespace Transitions {
  export {
    type TransitionStreamResponse as TransitionStreamResponse,
    type TransitionListParams as TransitionListParams,
    type TransitionStreamParams as TransitionStreamParams,
  };
}

export { TransitionsOffsetPagination };
