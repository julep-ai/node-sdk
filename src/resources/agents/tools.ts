// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ToolsAPI from './tools';
import * as Shared from '../shared';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Tools extends APIResource {
  /**
   * Create Agent Tool
   */
  create(
    agentId: string,
    body: ToolCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceCreated> {
    return this._client.post(`/agents/${agentId}/tools`, { body, ...options });
  }

  /**
   * Update Agent Tool
   */
  update(
    agentId: string,
    toolId: string,
    body: ToolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceUpdated> {
    return this._client.put(`/agents/${agentId}/tools/${toolId}`, { body, ...options });
  }

  /**
   * List Agent Tools
   */
  list(
    agentId: string,
    query?: ToolListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToolListResponsesOffsetPagination, ToolListResponse>;
  list(
    agentId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToolListResponsesOffsetPagination, ToolListResponse>;
  list(
    agentId: string,
    query: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToolListResponsesOffsetPagination, ToolListResponse> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.getAPIList(`/agents/${agentId}/tools`, ToolListResponsesOffsetPagination, {
      query,
      ...options,
    });
  }

  /**
   * Delete Agent Tool
   */
  delete(
    agentId: string,
    toolId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceDeleted> {
    return this._client.delete(`/agents/${agentId}/tools/${toolId}`, options);
  }

  /**
   * Patch Agent Tool
   */
  patch(
    agentId: string,
    toolId: string,
    body: ToolPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceUpdated> {
    return this._client.patch(`/agents/${agentId}/tools/${toolId}`, { body, ...options });
  }
}

export class ToolListResponsesOffsetPagination extends OffsetPagination<ToolListResponse> {}

export interface ToolListResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  /**
   * Function definition
   */
  function?: ToolListResponse.Function | null;

  /**
   * Integration definition
   */
  integration?: ToolListResponse.Integration | null;

  /**
   * System definition
   */
  system?: ToolListResponse.System | null;

  type?: 'function' | 'integration' | 'system' | 'api_call';
}

export namespace ToolListResponse {
  /**
   * Function definition
   */
  export interface Function {
    description?: string | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  /**
   * Integration definition
   */
  export interface Integration {
    provider:
      | 'dummy'
      | 'dall-e'
      | 'duckduckgo'
      | 'hackernews'
      | 'weather'
      | 'wikipedia'
      | 'twitter'
      | 'webpage'
      | 'requests';

    arguments?: unknown | null;

    description?: string | null;

    method?: string | null;

    setup?: unknown | null;
  }

  /**
   * System definition
   */
  export interface System {
    call: string;

    arguments?: unknown | null;

    description?: string | null;
  }
}

export interface ToolCreateParams {
  name: string;

  /**
   * Function definition
   */
  function?: ToolCreateParams.Function | null;

  /**
   * Integration definition
   */
  integration?: ToolCreateParams.Integration | null;

  /**
   * System definition
   */
  system?: ToolCreateParams.System | null;

  type?: 'function' | 'integration' | 'system' | 'api_call';
}

export namespace ToolCreateParams {
  /**
   * Function definition
   */
  export interface Function {
    description?: string | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  /**
   * Integration definition
   */
  export interface Integration {
    provider:
      | 'dummy'
      | 'dall-e'
      | 'duckduckgo'
      | 'hackernews'
      | 'weather'
      | 'wikipedia'
      | 'twitter'
      | 'webpage'
      | 'requests';

    arguments?: unknown | null;

    description?: string | null;

    method?: string | null;

    setup?: unknown | null;
  }

  /**
   * System definition
   */
  export interface System {
    call: string;

    arguments?: unknown | null;

    description?: string | null;
  }
}

export interface ToolUpdateParams {
  name: string;

  /**
   * Function definition
   */
  function?: ToolUpdateParams.Function | null;

  /**
   * Integration definition
   */
  integration?: ToolUpdateParams.Integration | null;

  /**
   * System definition
   */
  system?: ToolUpdateParams.System | null;

  type?: 'function' | 'integration' | 'system' | 'api_call';
}

export namespace ToolUpdateParams {
  /**
   * Function definition
   */
  export interface Function {
    description?: string | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  /**
   * Integration definition
   */
  export interface Integration {
    provider:
      | 'dummy'
      | 'dall-e'
      | 'duckduckgo'
      | 'hackernews'
      | 'weather'
      | 'wikipedia'
      | 'twitter'
      | 'webpage'
      | 'requests';

    arguments?: unknown | null;

    description?: string | null;

    method?: string | null;

    setup?: unknown | null;
  }

  /**
   * System definition
   */
  export interface System {
    call: string;

    arguments?: unknown | null;

    description?: string | null;
  }
}

export interface ToolListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export interface ToolPatchParams {
  /**
   * Function definition
   */
  function?: ToolPatchParams.Function | null;

  /**
   * Integration definition
   */
  integration?: ToolPatchParams.Integration | null;

  name?: string | null;

  /**
   * System definition
   */
  system?: ToolPatchParams.System | null;

  type?: 'function' | 'integration' | 'system' | 'api_call';
}

export namespace ToolPatchParams {
  /**
   * Function definition
   */
  export interface Function {
    description?: string | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  /**
   * Integration definition
   */
  export interface Integration {
    arguments?: unknown | null;

    description?: string | null;

    method?: string | null;

    provider?:
      | 'dummy'
      | 'dall-e'
      | 'duckduckgo'
      | 'hackernews'
      | 'weather'
      | 'wikipedia'
      | 'twitter'
      | 'webpage'
      | 'requests'
      | null;

    setup?: unknown | null;
  }

  /**
   * System definition
   */
  export interface System {
    arguments?: unknown | null;

    call?: string | null;

    description?: string | null;
  }
}

export namespace Tools {
  export import ToolListResponse = ToolsAPI.ToolListResponse;
  export import ToolListResponsesOffsetPagination = ToolsAPI.ToolListResponsesOffsetPagination;
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolUpdateParams = ToolsAPI.ToolUpdateParams;
  export import ToolListParams = ToolsAPI.ToolListParams;
  export import ToolPatchParams = ToolsAPI.ToolPatchParams;
}
