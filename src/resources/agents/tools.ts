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
   * API call definition
   */
  api_call?: ToolListResponse.APICall | null;

  bash_20241022?: ToolListResponse.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolListResponse.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolListResponse.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolListResponse.DummyIntegrationDef
    | ToolListResponse.BraveIntegrationDef
    | ToolListResponse.EmailIntegrationDef
    | ToolListResponse.SpiderIntegrationDef
    | ToolListResponse.WikipediaIntegrationDef
    | ToolListResponse.WeatherIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: ToolListResponse.System | null;

  text_editor_20241022?: ToolListResponse.TextEditor20241022 | null;
}

export namespace ToolListResponse {
  /**
   * API call definition
   */
  export interface APICall {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

    url: string;

    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    follow_redirects?: boolean | null;

    headers?: Record<string, string> | null;

    json?: unknown | null;

    params?: string | unknown | null;

    timeout?: number | null;
  }

  export interface Bash20241022 {
    name?: string;

    type?: 'bash_20241022';
  }

  /**
   * Anthropic new tools
   */
  export interface Computer20241022 {
    display_height_px?: number;

    display_number?: number;

    display_width_px?: number;

    name?: string;

    type?: 'computer_20241022';
  }

  /**
   * Function definition
   */
  export interface Function {
    description?: unknown | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown | null;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown | null;
  }

  /**
   * Brave integration definition
   */
  export interface BraveIntegrationDef {
    /**
     * Arguments for Brave Search
     */
    arguments?: BraveIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'brave';

    /**
     * Integration definition for Brave Search
     */
    setup?: BraveIntegrationDef.Setup | null;
  }

  export namespace BraveIntegrationDef {
    /**
     * Arguments for Brave Search
     */
    export interface Arguments {
      query: string;
    }

    /**
     * Integration definition for Brave Search
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * Email integration definition
   */
  export interface EmailIntegrationDef {
    /**
     * Arguments for Email sending
     */
    arguments?: EmailIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'email';

    /**
     * Setup parameters for Email integration
     */
    setup?: EmailIntegrationDef.Setup | null;
  }

  export namespace EmailIntegrationDef {
    /**
     * Arguments for Email sending
     */
    export interface Arguments {
      body: string;

      from: string;

      subject: string;

      to: string;
    }

    /**
     * Setup parameters for Email integration
     */
    export interface Setup {
      host: string;

      password: string;

      port: number;

      user: string;
    }
  }

  /**
   * Spider integration definition
   */
  export interface SpiderIntegrationDef {
    /**
     * Arguments for Spider integration
     */
    arguments?: SpiderIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'spider';

    /**
     * Setup parameters for Spider integration
     */
    setup?: SpiderIntegrationDef.Setup | null;
  }

  export namespace SpiderIntegrationDef {
    /**
     * Arguments for Spider integration
     */
    export interface Arguments {
      url: string;

      mode?: 'scrape';

      params?: unknown | null;
    }

    /**
     * Setup parameters for Spider integration
     */
    export interface Setup {
      spider_api_key: string;
    }
  }

  /**
   * Wikipedia integration definition
   */
  export interface WikipediaIntegrationDef {
    /**
     * Arguments for Wikipedia Search
     */
    arguments?: WikipediaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'wikipedia';

    setup?: unknown | null;
  }

  export namespace WikipediaIntegrationDef {
    /**
     * Arguments for Wikipedia Search
     */
    export interface Arguments {
      query: string;

      load_max_docs?: number;
    }
  }

  /**
   * Weather integration definition
   */
  export interface WeatherIntegrationDef {
    /**
     * Arguments for Weather
     */
    arguments?: WeatherIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'weather';

    /**
     * Integration definition for Weather
     */
    setup?: WeatherIntegrationDef.Setup | null;
  }

  export namespace WeatherIntegrationDef {
    /**
     * Arguments for Weather
     */
    export interface Arguments {
      location: string;
    }

    /**
     * Integration definition for Weather
     */
    export interface Setup {
      openweathermap_api_key: string;
    }
  }

  /**
   * System definition
   */
  export interface System {
    operation:
      | 'create'
      | 'update'
      | 'patch'
      | 'create_or_update'
      | 'embed'
      | 'change_status'
      | 'search'
      | 'chat'
      | 'history'
      | 'delete'
      | 'get'
      | 'list';

    resource: 'agent' | 'user' | 'task' | 'execution' | 'doc' | 'session' | 'job';

    arguments?: unknown | null;

    resource_id?: string | null;

    subresource?: 'tool' | 'doc' | 'execution' | 'transition' | null;
  }

  export interface TextEditor20241022 {
    name?: string;

    type?: 'text_editor_20241022';
  }
}

export interface ToolCreateParams {
  name: string;

  /**
   * API call definition
   */
  api_call?: ToolCreateParams.APICall | null;

  bash_20241022?: ToolCreateParams.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolCreateParams.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolCreateParams.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolCreateParams.DummyIntegrationDef
    | ToolCreateParams.BraveIntegrationDef
    | ToolCreateParams.EmailIntegrationDef
    | ToolCreateParams.SpiderIntegrationDef
    | ToolCreateParams.WikipediaIntegrationDef
    | ToolCreateParams.WeatherIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: ToolCreateParams.System | null;

  text_editor_20241022?: ToolCreateParams.TextEditor20241022 | null;
}

export namespace ToolCreateParams {
  /**
   * API call definition
   */
  export interface APICall {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

    url: string;

    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    follow_redirects?: boolean | null;

    headers?: Record<string, string> | null;

    json?: unknown | null;

    params?: string | unknown | null;

    timeout?: number | null;
  }

  export interface Bash20241022 {
    name?: string;

    type?: 'bash_20241022';
  }

  /**
   * Anthropic new tools
   */
  export interface Computer20241022 {
    display_height_px?: number;

    display_number?: number;

    display_width_px?: number;

    name?: string;

    type?: 'computer_20241022';
  }

  /**
   * Function definition
   */
  export interface Function {
    description?: unknown | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown | null;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown | null;
  }

  /**
   * Brave integration definition
   */
  export interface BraveIntegrationDef {
    /**
     * Arguments for Brave Search
     */
    arguments?: BraveIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'brave';

    /**
     * Integration definition for Brave Search
     */
    setup?: BraveIntegrationDef.Setup | null;
  }

  export namespace BraveIntegrationDef {
    /**
     * Arguments for Brave Search
     */
    export interface Arguments {
      query: string;
    }

    /**
     * Integration definition for Brave Search
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * Email integration definition
   */
  export interface EmailIntegrationDef {
    /**
     * Arguments for Email sending
     */
    arguments?: EmailIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'email';

    /**
     * Setup parameters for Email integration
     */
    setup?: EmailIntegrationDef.Setup | null;
  }

  export namespace EmailIntegrationDef {
    /**
     * Arguments for Email sending
     */
    export interface Arguments {
      body: string;

      from: string;

      subject: string;

      to: string;
    }

    /**
     * Setup parameters for Email integration
     */
    export interface Setup {
      host: string;

      password: string;

      port: number;

      user: string;
    }
  }

  /**
   * Spider integration definition
   */
  export interface SpiderIntegrationDef {
    /**
     * Arguments for Spider integration
     */
    arguments?: SpiderIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'spider';

    /**
     * Setup parameters for Spider integration
     */
    setup?: SpiderIntegrationDef.Setup | null;
  }

  export namespace SpiderIntegrationDef {
    /**
     * Arguments for Spider integration
     */
    export interface Arguments {
      url: string;

      mode?: 'scrape';

      params?: unknown | null;
    }

    /**
     * Setup parameters for Spider integration
     */
    export interface Setup {
      spider_api_key: string;
    }
  }

  /**
   * Wikipedia integration definition
   */
  export interface WikipediaIntegrationDef {
    /**
     * Arguments for Wikipedia Search
     */
    arguments?: WikipediaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'wikipedia';

    setup?: unknown | null;
  }

  export namespace WikipediaIntegrationDef {
    /**
     * Arguments for Wikipedia Search
     */
    export interface Arguments {
      query: string;

      load_max_docs?: number;
    }
  }

  /**
   * Weather integration definition
   */
  export interface WeatherIntegrationDef {
    /**
     * Arguments for Weather
     */
    arguments?: WeatherIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'weather';

    /**
     * Integration definition for Weather
     */
    setup?: WeatherIntegrationDef.Setup | null;
  }

  export namespace WeatherIntegrationDef {
    /**
     * Arguments for Weather
     */
    export interface Arguments {
      location: string;
    }

    /**
     * Integration definition for Weather
     */
    export interface Setup {
      openweathermap_api_key: string;
    }
  }

  /**
   * System definition
   */
  export interface System {
    operation:
      | 'create'
      | 'update'
      | 'patch'
      | 'create_or_update'
      | 'embed'
      | 'change_status'
      | 'search'
      | 'chat'
      | 'history'
      | 'delete'
      | 'get'
      | 'list';

    resource: 'agent' | 'user' | 'task' | 'execution' | 'doc' | 'session' | 'job';

    arguments?: unknown | null;

    resource_id?: string | null;

    subresource?: 'tool' | 'doc' | 'execution' | 'transition' | null;
  }

  export interface TextEditor20241022 {
    name?: string;

    type?: 'text_editor_20241022';
  }
}

export interface ToolUpdateParams {
  name: string;

  /**
   * API call definition
   */
  api_call?: ToolUpdateParams.APICall | null;

  bash_20241022?: ToolUpdateParams.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolUpdateParams.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolUpdateParams.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolUpdateParams.DummyIntegrationDef
    | ToolUpdateParams.BraveIntegrationDef
    | ToolUpdateParams.EmailIntegrationDef
    | ToolUpdateParams.SpiderIntegrationDef
    | ToolUpdateParams.WikipediaIntegrationDef
    | ToolUpdateParams.WeatherIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: ToolUpdateParams.System | null;

  text_editor_20241022?: ToolUpdateParams.TextEditor20241022 | null;
}

export namespace ToolUpdateParams {
  /**
   * API call definition
   */
  export interface APICall {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

    url: string;

    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    follow_redirects?: boolean | null;

    headers?: Record<string, string> | null;

    json?: unknown | null;

    params?: string | unknown | null;

    timeout?: number | null;
  }

  export interface Bash20241022 {
    name?: string;

    type?: 'bash_20241022';
  }

  /**
   * Anthropic new tools
   */
  export interface Computer20241022 {
    display_height_px?: number;

    display_number?: number;

    display_width_px?: number;

    name?: string;

    type?: 'computer_20241022';
  }

  /**
   * Function definition
   */
  export interface Function {
    description?: unknown | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown | null;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown | null;
  }

  /**
   * Brave integration definition
   */
  export interface BraveIntegrationDef {
    /**
     * Arguments for Brave Search
     */
    arguments?: BraveIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'brave';

    /**
     * Integration definition for Brave Search
     */
    setup?: BraveIntegrationDef.Setup | null;
  }

  export namespace BraveIntegrationDef {
    /**
     * Arguments for Brave Search
     */
    export interface Arguments {
      query: string;
    }

    /**
     * Integration definition for Brave Search
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * Email integration definition
   */
  export interface EmailIntegrationDef {
    /**
     * Arguments for Email sending
     */
    arguments?: EmailIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'email';

    /**
     * Setup parameters for Email integration
     */
    setup?: EmailIntegrationDef.Setup | null;
  }

  export namespace EmailIntegrationDef {
    /**
     * Arguments for Email sending
     */
    export interface Arguments {
      body: string;

      from: string;

      subject: string;

      to: string;
    }

    /**
     * Setup parameters for Email integration
     */
    export interface Setup {
      host: string;

      password: string;

      port: number;

      user: string;
    }
  }

  /**
   * Spider integration definition
   */
  export interface SpiderIntegrationDef {
    /**
     * Arguments for Spider integration
     */
    arguments?: SpiderIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'spider';

    /**
     * Setup parameters for Spider integration
     */
    setup?: SpiderIntegrationDef.Setup | null;
  }

  export namespace SpiderIntegrationDef {
    /**
     * Arguments for Spider integration
     */
    export interface Arguments {
      url: string;

      mode?: 'scrape';

      params?: unknown | null;
    }

    /**
     * Setup parameters for Spider integration
     */
    export interface Setup {
      spider_api_key: string;
    }
  }

  /**
   * Wikipedia integration definition
   */
  export interface WikipediaIntegrationDef {
    /**
     * Arguments for Wikipedia Search
     */
    arguments?: WikipediaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'wikipedia';

    setup?: unknown | null;
  }

  export namespace WikipediaIntegrationDef {
    /**
     * Arguments for Wikipedia Search
     */
    export interface Arguments {
      query: string;

      load_max_docs?: number;
    }
  }

  /**
   * Weather integration definition
   */
  export interface WeatherIntegrationDef {
    /**
     * Arguments for Weather
     */
    arguments?: WeatherIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'weather';

    /**
     * Integration definition for Weather
     */
    setup?: WeatherIntegrationDef.Setup | null;
  }

  export namespace WeatherIntegrationDef {
    /**
     * Arguments for Weather
     */
    export interface Arguments {
      location: string;
    }

    /**
     * Integration definition for Weather
     */
    export interface Setup {
      openweathermap_api_key: string;
    }
  }

  /**
   * System definition
   */
  export interface System {
    operation:
      | 'create'
      | 'update'
      | 'patch'
      | 'create_or_update'
      | 'embed'
      | 'change_status'
      | 'search'
      | 'chat'
      | 'history'
      | 'delete'
      | 'get'
      | 'list';

    resource: 'agent' | 'user' | 'task' | 'execution' | 'doc' | 'session' | 'job';

    arguments?: unknown | null;

    resource_id?: string | null;

    subresource?: 'tool' | 'doc' | 'execution' | 'transition' | null;
  }

  export interface TextEditor20241022 {
    name?: string;

    type?: 'text_editor_20241022';
  }
}

export interface ToolListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export interface ToolPatchParams {
  /**
   * API call definition
   */
  api_call?: ToolPatchParams.APICall | null;

  bash_20241022?: ToolPatchParams.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolPatchParams.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolPatchParams.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolPatchParams.DummyIntegrationDefUpdate
    | ToolPatchParams.BraveIntegrationDefUpdate
    | ToolPatchParams.EmailIntegrationDefUpdate
    | ToolPatchParams.SpiderIntegrationDefUpdate
    | ToolPatchParams.WikipediaIntegrationDefUpdate
    | ToolPatchParams.WeatherIntegrationDefUpdate
    | null;

  name?: string | null;

  /**
   * System definition
   */
  system?: ToolPatchParams.System | null;

  text_editor_20241022?: ToolPatchParams.TextEditor20241022 | null;
}

export namespace ToolPatchParams {
  /**
   * API call definition
   */
  export interface APICall {
    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    follow_redirects?: boolean | null;

    headers?: Record<string, string> | null;

    json?: unknown | null;

    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | null;

    params?: string | unknown | null;

    timeout?: number | null;

    url?: string | null;
  }

  export interface Bash20241022 {
    name?: string;

    type?: 'bash_20241022';
  }

  /**
   * Anthropic new tools
   */
  export interface Computer20241022 {
    display_height_px?: number;

    display_number?: number;

    display_width_px?: number;

    name?: string;

    type?: 'computer_20241022';
  }

  /**
   * Function definition
   */
  export interface Function {
    description?: unknown | null;

    name?: unknown | null;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDefUpdate {
    arguments?: unknown | null;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown | null;
  }

  /**
   * Brave integration definition
   */
  export interface BraveIntegrationDefUpdate {
    /**
     * Arguments for Brave Search
     */
    arguments?: BraveIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'brave';

    /**
     * Integration definition for Brave Search
     */
    setup?: BraveIntegrationDefUpdate.Setup | null;
  }

  export namespace BraveIntegrationDefUpdate {
    /**
     * Arguments for Brave Search
     */
    export interface Arguments {
      query?: string | null;
    }

    /**
     * Integration definition for Brave Search
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * Email integration definition
   */
  export interface EmailIntegrationDefUpdate {
    /**
     * Arguments for Email sending
     */
    arguments?: EmailIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'email';

    /**
     * Setup parameters for Email integration
     */
    setup?: EmailIntegrationDefUpdate.Setup | null;
  }

  export namespace EmailIntegrationDefUpdate {
    /**
     * Arguments for Email sending
     */
    export interface Arguments {
      body?: string | null;

      from?: string | null;

      subject?: string | null;

      to?: string | null;
    }

    /**
     * Setup parameters for Email integration
     */
    export interface Setup {
      host?: string | null;

      password?: string | null;

      port?: number | null;

      user?: string | null;
    }
  }

  /**
   * Spider integration definition
   */
  export interface SpiderIntegrationDefUpdate {
    /**
     * Arguments for Spider integration
     */
    arguments?: SpiderIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'spider';

    /**
     * Setup parameters for Spider integration
     */
    setup?: SpiderIntegrationDefUpdate.Setup | null;
  }

  export namespace SpiderIntegrationDefUpdate {
    /**
     * Arguments for Spider integration
     */
    export interface Arguments {
      mode?: 'scrape';

      params?: unknown | null;

      url?: string | null;
    }

    /**
     * Setup parameters for Spider integration
     */
    export interface Setup {
      spider_api_key?: string | null;
    }
  }

  /**
   * Wikipedia integration definition
   */
  export interface WikipediaIntegrationDefUpdate {
    /**
     * Arguments for Wikipedia Search
     */
    arguments?: WikipediaIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'wikipedia';

    setup?: unknown | null;
  }

  export namespace WikipediaIntegrationDefUpdate {
    /**
     * Arguments for Wikipedia Search
     */
    export interface Arguments {
      load_max_docs?: number;

      query?: string | null;
    }
  }

  /**
   * Weather integration definition
   */
  export interface WeatherIntegrationDefUpdate {
    /**
     * Arguments for Weather
     */
    arguments?: WeatherIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'weather';

    /**
     * Integration definition for Weather
     */
    setup?: WeatherIntegrationDefUpdate.Setup | null;
  }

  export namespace WeatherIntegrationDefUpdate {
    /**
     * Arguments for Weather
     */
    export interface Arguments {
      location?: string | null;
    }

    /**
     * Integration definition for Weather
     */
    export interface Setup {
      openweathermap_api_key?: string | null;
    }
  }

  /**
   * System definition
   */
  export interface System {
    arguments?: unknown | null;

    operation?:
      | 'create'
      | 'update'
      | 'patch'
      | 'create_or_update'
      | 'embed'
      | 'change_status'
      | 'search'
      | 'chat'
      | 'history'
      | 'delete'
      | 'get'
      | 'list'
      | null;

    resource?: 'agent' | 'user' | 'task' | 'execution' | 'doc' | 'session' | 'job' | null;

    resource_id?: string | null;

    subresource?: 'tool' | 'doc' | 'execution' | 'transition' | null;
  }

  export interface TextEditor20241022 {
    name?: string;

    type?: 'text_editor_20241022';
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
