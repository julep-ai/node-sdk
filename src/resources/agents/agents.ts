// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AgentsAPI from './agents';
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
  create(body: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<AgentCreateResponse> {
    return this._client.post('/agents', { body, ...options });
  }

  /**
   * Update Agent
   */
  update(
    agentId: string,
    body: AgentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentUpdateResponse> {
    return this._client.put(`/agents/${agentId}`, { body, ...options });
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

  /**
   * Delete Agent
   */
  delete(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentDeleteResponse> {
    return this._client.delete(`/agents/${agentId}`, options);
  }

  /**
   * Create Or Update Agent
   */
  createOrUpdate(
    agentId: string,
    body: AgentCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentCreateOrUpdateResponse> {
    return this._client.post(`/agents/${agentId}`, { body, ...options });
  }

  /**
   * Get Agent Details
   */
  get(agentId: string, options?: Core.RequestOptions): Core.APIPromise<Agent> {
    return this._client.get(`/agents/${agentId}`, options);
  }

  /**
   * Patch Agent
   */
  patch(
    agentId: string,
    body: AgentPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentPatchResponse> {
    return this._client.patch(`/agents/${agentId}`, { body, ...options });
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

export interface AgentCreateResponse {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface AgentUpdateResponse {
  id: string;

  updated_at: string;

  jobs?: Array<string>;
}

export interface AgentDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface AgentCreateOrUpdateResponse {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface AgentPatchResponse {
  id: string;

  updated_at: string;

  jobs?: Array<string>;
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

export interface AgentUpdateParams {
  about?: string;

  /**
   * Default settings for the chat session (also used by the agent)
   */
  default_settings?: AgentUpdateParams.DefaultSettings | null;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  name?: string;
}

export namespace AgentUpdateParams {
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

export interface AgentCreateOrUpdateParams {
  about?: string;

  /**
   * Default settings for the chat session (also used by the agent)
   */
  default_settings?: AgentCreateOrUpdateParams.DefaultSettings | null;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  name?: string;
}

export namespace AgentCreateOrUpdateParams {
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

export interface AgentPatchParams {
  about?: string;

  /**
   * Default settings for the chat session (also used by the agent)
   */
  default_settings?: AgentPatchParams.DefaultSettings | null;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  name?: string;
}

export namespace AgentPatchParams {
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

export namespace Agents {
  export import Agent = AgentsAPI.Agent;
  export import AgentCreateResponse = AgentsAPI.AgentCreateResponse;
  export import AgentUpdateResponse = AgentsAPI.AgentUpdateResponse;
  export import AgentDeleteResponse = AgentsAPI.AgentDeleteResponse;
  export import AgentCreateOrUpdateResponse = AgentsAPI.AgentCreateOrUpdateResponse;
  export import AgentPatchResponse = AgentsAPI.AgentPatchResponse;
  export import AgentsOffsetPagination = AgentsAPI.AgentsOffsetPagination;
  export import AgentCreateParams = AgentsAPI.AgentCreateParams;
  export import AgentUpdateParams = AgentsAPI.AgentUpdateParams;
  export import AgentListParams = AgentsAPI.AgentListParams;
  export import AgentCreateOrUpdateParams = AgentsAPI.AgentCreateOrUpdateParams;
  export import AgentPatchParams = AgentsAPI.AgentPatchParams;
  export import Tools = ToolsAPI.Tools;
  export import ToolCreateResponse = ToolsAPI.ToolCreateResponse;
  export import ToolUpdateResponse = ToolsAPI.ToolUpdateResponse;
  export import ToolListResponse = ToolsAPI.ToolListResponse;
  export import ToolDeleteResponse = ToolsAPI.ToolDeleteResponse;
  export import ToolPatchResponse = ToolsAPI.ToolPatchResponse;
  export import ToolListResponsesOffsetPagination = ToolsAPI.ToolListResponsesOffsetPagination;
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolUpdateParams = ToolsAPI.ToolUpdateParams;
  export import ToolListParams = ToolsAPI.ToolListParams;
  export import ToolPatchParams = ToolsAPI.ToolPatchParams;
  export import Docs = DocsAPI.Docs;
  export import DocCreateResponse = DocsAPI.DocCreateResponse;
  export import DocDeleteResponse = DocsAPI.DocDeleteResponse;
  export import DocSearchResponse = DocsAPI.DocSearchResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
  export import DocListParams = DocsAPI.DocListParams;
  export import DocSearchParams = DocsAPI.DocSearchParams;
  export import Tasks = TasksAPI.Tasks;
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskCreateOrUpdateResponse = TasksAPI.TaskCreateOrUpdateResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskListParams = TasksAPI.TaskListParams;
  export import TaskCreateOrUpdateParams = TasksAPI.TaskCreateOrUpdateParams;
}
