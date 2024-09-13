// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ExecutionsAPI from './executions';
import * as TransitionsAPI from './transitions';
import { OffsetPagination } from '../../pagination';

export class Executions extends APIResource {
  transitions: TransitionsAPI.Transitions = new TransitionsAPI.Transitions(this._client);
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

  output?: unknown | null;
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
}

export namespace Transition {
  export interface Current {
    step: number;

    workflow: string;
  }

  export interface Next {
    step: number;

    workflow: string;
  }
}

export namespace Executions {
  export import Execution = ExecutionsAPI.Execution;
  export import Transition = ExecutionsAPI.Transition;
  export import Transitions = TransitionsAPI.Transitions;
  export import TransitionStreamResponse = TransitionsAPI.TransitionStreamResponse;
  export import TransitionListParams = TransitionsAPI.TransitionListParams;
  export import TransitionStreamParams = TransitionsAPI.TransitionStreamParams;
}
