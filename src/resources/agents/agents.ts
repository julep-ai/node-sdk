// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AgentsAPI from './agents';
import * as Shared from '../shared';
import * as DocsAPI from './docs';
import * as TasksAPI from './tasks';
import * as ToolsAPI from './tools';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Agents extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  docs: DocsAPI.Docs = new DocsAPI.Docs(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Create Agent
   */
  create(body: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ResourceCreated> {
    return this._client.post('/agents', { body, ...options });
  }

  /**
   * List Agents
   */
  list(
    query?: AgentListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AgentsOffsetPagination, Agent>;
  list(options?: Core.RequestOptions): Core.PagePromise<AgentsOffsetPagination, Agent>;
  list(
    query: AgentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AgentsOffsetPagination, Agent> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/agents', AgentsOffsetPagination, { query, ...options });
  }
}

export class AgentsOffsetPagination extends OffsetPagination<Agent> {}

export interface Agent {
  id: string;

  created_at: string;

  updated_at: string;

  about?: string;

  /**
   * Default settings for the chat session (also used by the agent)
   */
  default_settings?: Agent.DefaultSettings | null;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  name?: string;
}

export namespace Agent {
  /**
   * Default settings for the chat session (also used by the agent)
   */
  export interface DefaultSettings {
    frequency_penalty?: number | null;

    length_penalty?: number | null;

    min_p?: number | null;

    presence_penalty?: number | null;

    repetition_penalty?: number | null;

    temperature?: number | null;

    top_p?: number | null;
  }
}

export interface AgentCreateParams {
  about?: string;

  /**
   * Default settings for the chat session (also used by the agent)
   */
  default_settings?: AgentCreateParams.DefaultSettings | null;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  name?: string;
}

export namespace AgentCreateParams {
  /**
   * Default settings for the chat session (also used by the agent)
   */
  export interface DefaultSettings {
    frequency_penalty?: number | null;

    length_penalty?: number | null;

    min_p?: number | null;

    presence_penalty?: number | null;

    repetition_penalty?: number | null;

    temperature?: number | null;

    top_p?: number | null;
  }
}

export interface AgentListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: string;

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Agents {
  export import Agent = AgentsAPI.Agent;
  export import AgentsOffsetPagination = AgentsAPI.AgentsOffsetPagination;
  export import AgentCreateParams = AgentsAPI.AgentCreateParams;
  export import AgentListParams = AgentsAPI.AgentListParams;
  export import Tools = ToolsAPI.Tools;
  export import ToolListResponse = ToolsAPI.ToolListResponse;
  export import ToolListResponsesOffsetPagination = ToolsAPI.ToolListResponsesOffsetPagination;
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolListParams = ToolsAPI.ToolListParams;
  export import Docs = DocsAPI.Docs;
  export import DocSearchResponse = DocsAPI.DocSearchResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
  export import DocListParams = DocsAPI.DocListParams;
  export import DocSearchParams = DocsAPI.DocSearchParams;
  export import Tasks = TasksAPI.Tasks;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskListParams = TasksAPI.TaskListParams;
}
