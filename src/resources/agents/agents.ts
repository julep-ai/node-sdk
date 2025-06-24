// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as DocsAPI from './docs';
import {
  DocBulkDeleteParams,
  DocBulkDeleteResponse,
  DocCreateParams,
  DocDeleteResponse,
  DocListParams,
  DocSearchParams,
  DocSearchResponse,
  Docs,
} from './docs';
import * as ToolsAPI from './tools';
import {
  BrowserbaseSetupUpdate,
  ToolCreateParams,
  ToolCreateResponse,
  ToolDeleteResponse,
  ToolListParams,
  ToolListResponse,
  ToolListResponsesOffsetPagination,
  ToolResetParams,
  ToolResetResponse,
  ToolUpdateParams,
  ToolUpdateResponse,
  Tools,
} from './tools';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Agents extends APIResource {
  tools: ToolsAPI.Tools = new ToolsAPI.Tools(this._client);
  docs: DocsAPI.Docs = new DocsAPI.Docs(this._client);

  /**
   * Create Agent
   */
  create(body: AgentCreateParams, options?: Core.RequestOptions): Core.APIPromise<Agent> {
    return this._client.post('/agents', { body, ...options });
  }

  /**
   * Patch Agent
   */
  update(agentId: string, body: AgentUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Agent> {
    return this._client.patch(`/agents/${agentId}`, { body, ...options });
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
  ): Core.APIPromise<Agent> {
    return this._client.post(`/agents/${agentId}`, { body, ...options });
  }

  /**
   * Get Agent Details
   */
  get(agentId: string, options?: Core.RequestOptions): Core.APIPromise<Agent> {
    return this._client.get(`/agents/${agentId}`, options);
  }

  /**
   * List all available models that can be used with agents.
   *
   * Returns: ListModelsResponse: A list of available models
   */
  listModels(
    params?: AgentListModelsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentListModelsResponse>;
  listModels(options?: Core.RequestOptions): Core.APIPromise<AgentListModelsResponse>;
  listModels(
    params: AgentListModelsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AgentListModelsResponse> {
    if (isRequestOptions(params)) {
      return this.listModels({}, params);
    }
    const { 'x-custom-api-key': xCustomAPIKey } = params;
    return this._client.get('/agents/models', {
      ...options,
      headers: {
        ...(xCustomAPIKey != null ? { 'x-custom-api-key': xCustomAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Update Agent
   */
  reset(agentId: string, body: AgentResetParams, options?: Core.RequestOptions): Core.APIPromise<Agent> {
    return this._client.put(`/agents/${agentId}`, { body, ...options });
  }
}

export class AgentsOffsetPagination extends OffsetPagination<Agent> {}

export interface Agent {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  about?: string;

  canonical_name?: string | null;

  default_settings?: unknown | null;

  default_system_template?: string;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  project?: string | null;
}

export interface AgentDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

/**
 * Response for the list models endpoint
 */
export interface AgentListModelsResponse {
  models: Array<AgentListModelsResponse.Model>;
}

export namespace AgentListModelsResponse {
  /**
   * Model information returned by the model list endpoint
   */
  export interface Model {
    id: string;
  }
}

export interface AgentCreateParams {
  name: string;

  about?: string;

  canonical_name?: string | null;

  default_settings?: unknown | null;

  default_system_template?: string;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  project?: string | null;
}

export interface AgentUpdateParams {
  about?: string;

  canonical_name?: string | null;

  default_settings?: unknown | null;

  default_system_template?: string;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  name?: string | null;

  project?: string | null;
}

export interface AgentListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: { [key: string]: unknown };

  sort_by?: 'created_at' | 'updated_at';
}

export interface AgentCreateOrUpdateParams {
  name: string;

  about?: string;

  canonical_name?: string | null;

  default_settings?: unknown | null;

  default_system_template?: string;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  project?: string | null;
}

export interface AgentListModelsParams {
  'x-custom-api-key'?: string;
}

export interface AgentResetParams {
  name: string;

  about?: string;

  canonical_name?: string | null;

  default_settings?: unknown | null;

  default_system_template?: string;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  project?: string | null;
}

Agents.AgentsOffsetPagination = AgentsOffsetPagination;
Agents.Tools = Tools;
Agents.ToolListResponsesOffsetPagination = ToolListResponsesOffsetPagination;
Agents.Docs = Docs;

export declare namespace Agents {
  export {
    type Agent as Agent,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentListModelsResponse as AgentListModelsResponse,
    AgentsOffsetPagination as AgentsOffsetPagination,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentCreateOrUpdateParams as AgentCreateOrUpdateParams,
    type AgentListModelsParams as AgentListModelsParams,
    type AgentResetParams as AgentResetParams,
  };

  export {
    Tools as Tools,
    type BrowserbaseSetupUpdate as BrowserbaseSetupUpdate,
    type ToolCreateResponse as ToolCreateResponse,
    type ToolUpdateResponse as ToolUpdateResponse,
    type ToolListResponse as ToolListResponse,
    type ToolDeleteResponse as ToolDeleteResponse,
    type ToolResetResponse as ToolResetResponse,
    ToolListResponsesOffsetPagination as ToolListResponsesOffsetPagination,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolResetParams as ToolResetParams,
  };

  export {
    Docs as Docs,
    type DocDeleteResponse as DocDeleteResponse,
    type DocBulkDeleteResponse as DocBulkDeleteResponse,
    type DocSearchResponse as DocSearchResponse,
    type DocCreateParams as DocCreateParams,
    type DocListParams as DocListParams,
    type DocBulkDeleteParams as DocBulkDeleteParams,
    type DocSearchParams as DocSearchParams,
  };
}
