// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ToolsAPI from './tools';

export class Tools extends APIResource {
  /**
   * Create Agent Tool
   */
  create(
    agentId: string,
    body: ToolCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolCreateResponse> {
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
  ): Core.APIPromise<ToolUpdateResponse> {
    return this._client.put(`/agents/${agentId}/tools/${toolId}`, { body, ...options });
  }

  /**
   * List Agent Tools
   */
  list(
    agentId: string,
    query?: ToolListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolListResponse>;
  list(agentId: string, options?: Core.RequestOptions): Core.APIPromise<ToolListResponse>;
  list(
    agentId: string,
    query: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolListResponse> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.get(`/agents/${agentId}/tools`, { query, ...options });
  }

  /**
   * Delete Agent Tool
   */
  delete(
    agentId: string,
    toolId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolDeleteResponse> {
    return this._client.delete(`/agents/${agentId}/tools/${toolId}`, options);
  }
}

export interface ToolCreateResponse {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface ToolUpdateResponse {
  id: string;

  updated_at: string;

  jobs?: Array<string>;
}

export interface ToolListResponse {
  items: Array<ToolListResponse.Item>;
}

export namespace ToolListResponse {
  export interface Item {
    id: string;

    created_at: string;

    /**
     * Function definition
     */
    function: Item.Function;

    name: string;

    updated_at: string;

    api_call?: unknown | null;

    integration?: unknown | null;

    system?: unknown | null;

    type?: 'function' | 'integration' | 'system' | 'api_call';
  }

  export namespace Item {
    /**
     * Function definition
     */
    export interface Function {
      description?: string | null;

      name?: unknown | null;

      parameters?: unknown | null;
    }
  }
}

export interface ToolDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface ToolCreateParams {
  /**
   * Function definition
   */
  function: ToolCreateParams.Function;

  name: string;

  api_call?: unknown | null;

  integration?: unknown | null;

  system?: unknown | null;

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
}

export interface ToolUpdateParams {
  /**
   * Function definition
   */
  function: ToolUpdateParams.Function;

  name: string;

  api_call?: unknown | null;

  integration?: unknown | null;

  system?: unknown | null;

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
}

export interface ToolListParams {
  direction?: 'asc' | 'desc';

  limit?: number;

  offset?: number;

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Tools {
  export import ToolCreateResponse = ToolsAPI.ToolCreateResponse;
  export import ToolUpdateResponse = ToolsAPI.ToolUpdateResponse;
  export import ToolListResponse = ToolsAPI.ToolListResponse;
  export import ToolDeleteResponse = ToolsAPI.ToolDeleteResponse;
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolUpdateParams = ToolsAPI.ToolUpdateParams;
  export import ToolListParams = ToolsAPI.ToolListParams;
}
