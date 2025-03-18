// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TransitionsAPI from './transitions';
import {
  TransitionListParams,
  TransitionStreamParams,
  TransitionStreamResponse,
  Transitions,
} from './transitions';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Executions extends APIResource {
  transitions: TransitionsAPI.Transitions = new TransitionsAPI.Transitions(this._client);

  /**
   * Create Task Execution
   */
  create(
    taskId: string,
    body: ExecutionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Execution> {
    return this._client.post(`/tasks/${taskId}/executions`, { body, ...options });
  }

  /**
   * List Task Executions
   */
  list(
    taskId: string,
    query?: ExecutionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsOffsetPagination, Execution>;
  list(
    taskId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsOffsetPagination, Execution>;
  list(
    taskId: string,
    query: ExecutionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ExecutionsOffsetPagination, Execution> {
    if (isRequestOptions(query)) {
      return this.list(taskId, {}, query);
    }
    return this._client.getAPIList(`/tasks/${taskId}/executions`, ExecutionsOffsetPagination, {
      query,
      ...options,
    });
  }

  /**
   * Update Execution
   */
  changeStatus(
    executionId: string,
    body: ExecutionChangeStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    return this._client.put(`/executions/${executionId}`, { body, ...options });
  }

  /**
   * Get Execution Details
   */
  get(executionId: string, options?: Core.RequestOptions): Core.APIPromise<Execution> {
    return this._client.get(`/executions/${executionId}`, options);
  }
}

export class ExecutionsOffsetPagination extends OffsetPagination<Execution> {}

export class TransitionsOffsetPagination extends OffsetPagination<Transition> {}

export interface Execution {
  id: string;

  created_at: string;

  input: unknown;

  status: 'queued' | 'starting' | 'running' | 'awaiting_input' | 'succeeded' | 'failed' | 'cancelled';

  task_id: string;

  updated_at: string;

  error?: string | null;

  metadata?: unknown | null;

  output?: unknown;

  transition_count?: number | null;
}

export interface Transition {
  id: string;

  created_at: string;

  current: Transition.Current;

  execution_id: string;

  next: Transition.Next | null;

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

  step_label?: string | null;
}

export namespace Transition {
  export interface Current {
    scope_id: string;

    step: number;

    workflow: string;
  }

  export interface Next {
    scope_id: string;

    step: number;

    workflow: string;
  }
}

export type ExecutionChangeStatusResponse = unknown;

export interface ExecutionCreateParams {
  input: unknown;

  error?: string | null;

  metadata?: unknown | null;

  output?: unknown;

  transition_count?: number | null;
}

export interface ExecutionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export type ExecutionChangeStatusParams =
  | ExecutionChangeStatusParams.ResumeExecutionRequest
  | ExecutionChangeStatusParams.StopExecutionRequest;

export declare namespace ExecutionChangeStatusParams {
  export interface ResumeExecutionRequest {
    input?: unknown | null;

    status?: 'running';
  }

  export interface StopExecutionRequest {
    reason?: string | null;

    status?: 'cancelled';
  }
}

Executions.ExecutionsOffsetPagination = ExecutionsOffsetPagination;
Executions.Transitions = Transitions;

export declare namespace Executions {
  export {
    type Execution as Execution,
    type Transition as Transition,
    type ExecutionChangeStatusResponse as ExecutionChangeStatusResponse,
    ExecutionsOffsetPagination as ExecutionsOffsetPagination,
    type ExecutionCreateParams as ExecutionCreateParams,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionChangeStatusParams as ExecutionChangeStatusParams,
  };

  export {
    Transitions as Transitions,
    type TransitionStreamResponse as TransitionStreamResponse,
    type TransitionListParams as TransitionListParams,
    type TransitionStreamParams as TransitionStreamParams,
  };
}
