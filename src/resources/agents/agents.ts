// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AgentsAPI from './agents';
import * as DocsAPI from './docs';
import * as TasksAPI from './tasks';
import * as ToolsAPI from './tools';

export class Agents extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  docs: DocsAPI.Docs = new DocsAPI.Docs(this._client);
  tasks: TasksAPI.Tasks = new TasksAPI.Tasks(this._client);

  /**
   * Create Or Update Agent
   */
  create(
    agentId: string,
    body: AgentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentCreateResponse> {
    return this._client.post(`/agents/${agentId}`, { body, ...options });
  }

  /**
   * Get Agent Details
   */
  retrieve(agentId: string, options?: Core.RequestOptions): Core.APIPromise<Agent> {
    return this._client.get(`/agents/${agentId}`, options);
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
  list(query?: AgentListParams, options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AgentListResponse>;
  list(
    query: AgentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/agents', { query, ...options });
  }

  /**
   * Delete Agent
   */
  delete(agentId: string, options?: Core.RequestOptions): Core.APIPromise<AgentDeleteResponse> {
    return this._client.delete(`/agents/${agentId}`, options);
  }

  /**
   * Search Agent Docs
   */
  search(
    agentId: string,
    body: AgentSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentSearchResponse> {
    return this._client.post(`/agents/${agentId}/search`, { body, ...options });
  }
}

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

export interface AgentListResponse {
  items: Array<Agent>;
}

export interface AgentDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface AgentSearchResponse {
  docs: Array<AgentSearchResponse.Doc>;

  time: number;
}

export namespace AgentSearchResponse {
  export interface Doc {
    id: string;

    owner: Doc.Owner;

    snippets: Array<Doc.Snippet>;

    distance?: number | null;

    title?: string | null;
  }

  export namespace Doc {
    export interface Owner {
      id: string;

      role: 'user' | 'agent';
    }

    export interface Snippet {
      content: string;

      index: number;
    }
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

export interface AgentListParams {
  direction?: 'asc' | 'desc';

  limit?: number;

  metadata_filter?: string;

  offset?: number;

  sort_by?: 'created_at' | 'updated_at';
}

export type AgentSearchParams =
  | AgentSearchParams.TextOnlyDocSearchRequest
  | AgentSearchParams.VectorDocSearchRequest
  | AgentSearchParams.HybridDocSearchRequest;

export namespace AgentSearchParams {
  export interface TextOnlyDocSearchRequest {
    text: string;

    lang?: 'en-US';

    limit?: number;
  }

  export interface VectorDocSearchRequest {
    vector: Array<number>;

    confidence?: number;

    lang?: 'en-US';

    limit?: number;
  }

  export interface HybridDocSearchRequest {
    text: string;

    vector: Array<number>;

    alpha?: number;

    confidence?: number;

    lang?: 'en-US';

    limit?: number;
  }
}

export namespace Agents {
  export import Agent = AgentsAPI.Agent;
  export import AgentCreateResponse = AgentsAPI.AgentCreateResponse;
  export import AgentUpdateResponse = AgentsAPI.AgentUpdateResponse;
  export import AgentListResponse = AgentsAPI.AgentListResponse;
  export import AgentDeleteResponse = AgentsAPI.AgentDeleteResponse;
  export import AgentSearchResponse = AgentsAPI.AgentSearchResponse;
  export import AgentCreateParams = AgentsAPI.AgentCreateParams;
  export import AgentUpdateParams = AgentsAPI.AgentUpdateParams;
  export import AgentListParams = AgentsAPI.AgentListParams;
  export import AgentSearchParams = AgentsAPI.AgentSearchParams;
  export import Tools = ToolsAPI.Tools;
  export import ToolCreateResponse = ToolsAPI.ToolCreateResponse;
  export import ToolUpdateResponse = ToolsAPI.ToolUpdateResponse;
  export import ToolListResponse = ToolsAPI.ToolListResponse;
  export import ToolDeleteResponse = ToolsAPI.ToolDeleteResponse;
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolUpdateParams = ToolsAPI.ToolUpdateParams;
  export import ToolListParams = ToolsAPI.ToolListParams;
  export import Docs = DocsAPI.Docs;
  export import DocCreateResponse = DocsAPI.DocCreateResponse;
  export import DocListResponse = DocsAPI.DocListResponse;
  export import DocDeleteResponse = DocsAPI.DocDeleteResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
  export import DocListParams = DocsAPI.DocListParams;
  export import Tasks = TasksAPI.Tasks;
  export import TaskCreateResponse = TasksAPI.TaskCreateResponse;
  export import TaskListResponse = TasksAPI.TaskListResponse;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskListParams = TasksAPI.TaskListParams;
}
