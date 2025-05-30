// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ExecutionsAPI from './executions';

export class Status extends APIResource {
  /**
   * Get Execution Details
   */
  get(executionId: string, options?: Core.RequestOptions): Core.APIPromise<ExecutionsAPI.Execution> {
    return this._client.get(`/executions/${executionId}`, options);
  }

  /**
   * SSE endpoint that streams the status of a given execution_id by polling the
   * latest_executions view.
   */
  stream(executionId: string, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get(`/executions/${executionId}/status.stream`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}
