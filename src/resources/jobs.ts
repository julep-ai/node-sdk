// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Jobs extends APIResource {
  /**
   * Get Job Status
   */
  get(jobId: string, options?: Core.RequestOptions): Core.APIPromise<JobStatus> {
    return this._client.get(`/jobs/${jobId}`, options);
  }
}

export interface JobStatus {
  id: string;

  created_at: string;

  updated_at: string;

  has_progress?: boolean;

  name?: string;

  progress?: number;

  reason?: string;

  state?: 'pending' | 'in_progress' | 'retrying' | 'succeeded' | 'aborted' | 'failed' | 'unknown';
}

export declare namespace Jobs {
  export { type JobStatus as JobStatus };
}
