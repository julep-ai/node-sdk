// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as JobsAPI from './jobs';

export class Jobs extends APIResource {}

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

export namespace Jobs {
  export import JobStatus = JobsAPI.JobStatus;
}
