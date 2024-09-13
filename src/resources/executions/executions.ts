// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ExecutionsAPI from './executions';
import * as TransitionsAPI from './transitions';
import { OffsetPagination } from '../../pagination';

export class Executions extends APIResource {
  transitions: TransitionsAPI.Transitions = new TransitionsAPI.Transitions(this._client);

  /**
   * Update Execution
   */
  update(
    executionId: string,
    body: ExecutionUpdateParams,
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

export interface Execution {
  id: string;

  created_at: string;

  input: unknown;

  status: 'queued' | 'starting' | 'running' | 'awaiting_input' | 'succeeded' | 'failed' | 'cancelled';

  task_id: string;

  updated_at: string;

  error?: string | null;

  metadata?: unknown | null;

  output?: unknown | null;
}

export type ExecutionUpdateResponse = unknown;

export type ExecutionUpdateParams =
  | ExecutionUpdateParams.ResumeExecutionRequest
  | ExecutionUpdateParams.StopExecutionRequest;

export namespace ExecutionUpdateParams {
  export interface ResumeExecutionRequest {
    input?: unknown | null;

    status?: 'running';
  }

  export interface StopExecutionRequest {
    reason?: string | null;

    status?: 'cancelled';
  }
}

export namespace Executions {
  export import Execution = ExecutionsAPI.Execution;
  export import ExecutionUpdateResponse = ExecutionsAPI.ExecutionUpdateResponse;
  export import ExecutionUpdateParams = ExecutionsAPI.ExecutionUpdateParams;
  export import Transitions = TransitionsAPI.Transitions;
  export import TransitionListResponse = TransitionsAPI.TransitionListResponse;
  export import TransitionStreamResponse = TransitionsAPI.TransitionStreamResponse;
  export import TransitionListResponsesOffsetPagination = TransitionsAPI.TransitionListResponsesOffsetPagination;
  export import TransitionListParams = TransitionsAPI.TransitionListParams;
  export import TransitionStreamParams = TransitionsAPI.TransitionStreamParams;
}
