// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as ToolsAPI from './tools';
import * as Shared from '../shared';
import { ToolsOffsetPagination } from '../shared';
import { type OffsetPaginationParams } from '../../pagination';

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
  ): Core.PagePromise<ToolsOffsetPagination, Shared.Tool>;
  list(agentId: string, options?: Core.RequestOptions): Core.PagePromise<ToolsOffsetPagination, Shared.Tool>;
  list(
    agentId: string,
    query: ToolListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ToolsOffsetPagination, Shared.Tool> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.getAPIList(`/agents/${agentId}/tools`, ToolsOffsetPagination, { query, ...options });
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

export interface ToolListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export interface ToolPatchParams {
  api_call?: unknown | null;

  /**
   * Function definition
   */
  function?: ToolPatchParams.Function | null;

  integration?: unknown | null;

  name?: string | null;

  system?: unknown | null;

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
}

export namespace Tools {
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolUpdateParams = ToolsAPI.ToolUpdateParams;
  export import ToolListParams = ToolsAPI.ToolListParams;
  export import ToolPatchParams = ToolsAPI.ToolPatchParams;
}

export { ToolsOffsetPagination };
