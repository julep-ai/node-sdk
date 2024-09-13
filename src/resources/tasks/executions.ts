// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TasksExecutionsAPI from './executions';
import * as Shared from '../shared';
import * as ExecutionsAPI from '../executions/executions';
import { ExecutionsOffsetPagination } from '../executions/executions';
import { type OffsetPaginationParams } from '../../pagination';

export class Executions extends APIResource {
  /**
   * Create Task Execution
   */
  create(
    taskId: string,
    body: ExecutionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceCreated> {
    return this._client.post(`/tasks/${taskId}/executions`, { body, ...options });
  }

  /**
   * List Task Executions
   */
  list(
    taskId: string,
    query?: ExecutionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsOffsetPagination, ExecutionsAPI.Execution>;
  list(
    taskId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsOffsetPagination, ExecutionsAPI.Execution>;
  list(
    taskId: string,
    query: ExecutionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsOffsetPagination, ExecutionsAPI.Execution> {
    if (isRequestOptions(query)) {
      return this.list(taskId, {}, query);
    }
    return this._client.getAPIList(`/tasks/${taskId}/executions`, ExecutionsOffsetPagination, {
      query,
      ...options,
    });
  }
}

export interface ExecutionCreateParams {
  input: unknown;

  error?: string | null;

  metadata?: unknown | null;

  output?: unknown | null;
}

export interface ExecutionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Executions {
  export import ExecutionCreateParams = TasksExecutionsAPI.ExecutionCreateParams;
  export import ExecutionListParams = TasksExecutionsAPI.ExecutionListParams;
}

export { ExecutionsOffsetPagination };
