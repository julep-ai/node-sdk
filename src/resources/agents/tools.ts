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
}

export class ToolListResponsesOffsetPagination extends OffsetPagination<ToolListResponse> {}

export interface ToolListResponse {
  id: string;

  created_at: string;

  /**
   * Function definition
   */
  function: ToolListResponse.Function;

  name: string;

  updated_at: string;

  api_call?: unknown | null;

  integration?: unknown | null;

  system?: unknown | null;

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

export interface ToolListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Tools {
  export import ToolListResponse = ToolsAPI.ToolListResponse;
  export import ToolListResponsesOffsetPagination = ToolsAPI.ToolListResponsesOffsetPagination;
  export import ToolCreateParams = ToolsAPI.ToolCreateParams;
  export import ToolListParams = ToolsAPI.ToolListParams;
}
