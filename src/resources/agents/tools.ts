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

  type:
    | 'function'
    | 'integration'
    | 'system'
    | 'api_call'
    | 'computer_20241022'
    | 'text_editor_20241022'
    | 'bash_20241022';

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
    | ToolListResponse.BrowserbaseContextIntegrationDef
    | ToolListResponse.BrowserbaseExtensionIntegrationDef
    | ToolListResponse.BrowserbaseListSessionsIntegrationDef
    | ToolListResponse.BrowserbaseCreateSessionIntegrationDef
    | ToolListResponse.BrowserbaseGetSessionIntegrationDef
    | ToolListResponse.BrowserbaseCompleteSessionIntegrationDef
    | ToolListResponse.BrowserbaseGetSessionLiveURLsIntegrationDef
    | ToolListResponse.BrowserbaseGetSessionConnectURLIntegrationDef
    | ToolListResponse.RemoteBrowserIntegrationDef
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

    schema?: unknown | null;

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
   * browserbase context provider
   */
  export interface BrowserbaseContextIntegrationDef {
    arguments?: BrowserbaseContextIntegrationDef.Arguments | null;

    method?: 'create_context';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseContextIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseContextIntegrationDef {
    export interface Arguments {
      projectId: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase extension provider
   */
  export interface BrowserbaseExtensionIntegrationDef {
    arguments?: BrowserbaseExtensionIntegrationDef.Arguments | null;

    method?: 'install_extension_from_github' | null;

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseExtensionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseExtensionIntegrationDef {
    export interface Arguments {
      repositoryName: string;

      ref?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase list sessions integration definition
   */
  export interface BrowserbaseListSessionsIntegrationDef {
    arguments?: BrowserbaseListSessionsIntegrationDef.Arguments | null;

    method?: 'list_sessions';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseListSessionsIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseListSessionsIntegrationDef {
    export interface Arguments {
      status?: 'RUNNING' | 'ERROR' | 'TIMED_OUT' | 'COMPLETED' | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments: BrowserbaseCreateSessionIntegrationDef.Arguments;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      projectId: string;

      browserSettings?: unknown | null;

      extensionId?: string | null;

      keepAlive?: boolean | null;

      proxies?: boolean | Array<unknown> | null;

      timeout?: number | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments: BrowserbaseGetSessionIntegrationDef.Arguments;

    method?: 'get_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments: BrowserbaseCompleteSessionIntegrationDef.Arguments;

    method?: 'complete_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCompleteSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCompleteSessionIntegrationDef {
    export interface Arguments {
      id: string;

      status?: 'REQUEST_RELEASE';
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments;

    method?: 'get_live_urls';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionLiveURLsIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionLiveURLsIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session connect url integration definition
   */
  export interface BrowserbaseGetSessionConnectURLIntegrationDef {
    arguments: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments;

    method?: 'get_connect_url';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionConnectURLIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionConnectURLIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The arguments for the remote browser
     */
    arguments: RemoteBrowserIntegrationDef.Arguments;

    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The arguments for the remote browser
     */
    export interface Arguments {
      action:
        | 'key'
        | 'type'
        | 'mouse_move'
        | 'left_click'
        | 'left_click_drag'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot'
        | 'cursor_position'
        | 'navigate'
        | 'refresh'
        | 'wait_for_load';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }

    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
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

  type:
    | 'function'
    | 'integration'
    | 'system'
    | 'api_call'
    | 'computer_20241022'
    | 'text_editor_20241022'
    | 'bash_20241022';

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
    | ToolCreateParams.BrowserbaseContextIntegrationDef
    | ToolCreateParams.BrowserbaseExtensionIntegrationDef
    | ToolCreateParams.BrowserbaseListSessionsIntegrationDef
    | ToolCreateParams.BrowserbaseCreateSessionIntegrationDef
    | ToolCreateParams.BrowserbaseGetSessionIntegrationDef
    | ToolCreateParams.BrowserbaseCompleteSessionIntegrationDef
    | ToolCreateParams.BrowserbaseGetSessionLiveURLsIntegrationDef
    | ToolCreateParams.BrowserbaseGetSessionConnectURLIntegrationDef
    | ToolCreateParams.RemoteBrowserIntegrationDef
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

    schema?: unknown | null;

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
   * browserbase context provider
   */
  export interface BrowserbaseContextIntegrationDef {
    arguments?: BrowserbaseContextIntegrationDef.Arguments | null;

    method?: 'create_context';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseContextIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseContextIntegrationDef {
    export interface Arguments {
      projectId: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase extension provider
   */
  export interface BrowserbaseExtensionIntegrationDef {
    arguments?: BrowserbaseExtensionIntegrationDef.Arguments | null;

    method?: 'install_extension_from_github' | null;

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseExtensionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseExtensionIntegrationDef {
    export interface Arguments {
      repositoryName: string;

      ref?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase list sessions integration definition
   */
  export interface BrowserbaseListSessionsIntegrationDef {
    arguments?: BrowserbaseListSessionsIntegrationDef.Arguments | null;

    method?: 'list_sessions';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseListSessionsIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseListSessionsIntegrationDef {
    export interface Arguments {
      status?: 'RUNNING' | 'ERROR' | 'TIMED_OUT' | 'COMPLETED' | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments: BrowserbaseCreateSessionIntegrationDef.Arguments;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      projectId: string;

      browserSettings?: unknown | null;

      extensionId?: string | null;

      keepAlive?: boolean | null;

      proxies?: boolean | Array<unknown> | null;

      timeout?: number | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments: BrowserbaseGetSessionIntegrationDef.Arguments;

    method?: 'get_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments: BrowserbaseCompleteSessionIntegrationDef.Arguments;

    method?: 'complete_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCompleteSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCompleteSessionIntegrationDef {
    export interface Arguments {
      id: string;

      status?: 'REQUEST_RELEASE';
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments;

    method?: 'get_live_urls';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionLiveURLsIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionLiveURLsIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session connect url integration definition
   */
  export interface BrowserbaseGetSessionConnectURLIntegrationDef {
    arguments: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments;

    method?: 'get_connect_url';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionConnectURLIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionConnectURLIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The arguments for the remote browser
     */
    arguments: RemoteBrowserIntegrationDef.Arguments;

    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The arguments for the remote browser
     */
    export interface Arguments {
      action:
        | 'key'
        | 'type'
        | 'mouse_move'
        | 'left_click'
        | 'left_click_drag'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot'
        | 'cursor_position'
        | 'navigate'
        | 'refresh'
        | 'wait_for_load';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }

    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
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

  type:
    | 'function'
    | 'integration'
    | 'system'
    | 'api_call'
    | 'computer_20241022'
    | 'text_editor_20241022'
    | 'bash_20241022';

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
    | ToolUpdateParams.BrowserbaseContextIntegrationDef
    | ToolUpdateParams.BrowserbaseExtensionIntegrationDef
    | ToolUpdateParams.BrowserbaseListSessionsIntegrationDef
    | ToolUpdateParams.BrowserbaseCreateSessionIntegrationDef
    | ToolUpdateParams.BrowserbaseGetSessionIntegrationDef
    | ToolUpdateParams.BrowserbaseCompleteSessionIntegrationDef
    | ToolUpdateParams.BrowserbaseGetSessionLiveURLsIntegrationDef
    | ToolUpdateParams.BrowserbaseGetSessionConnectURLIntegrationDef
    | ToolUpdateParams.RemoteBrowserIntegrationDef
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

    schema?: unknown | null;

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
   * browserbase context provider
   */
  export interface BrowserbaseContextIntegrationDef {
    arguments?: BrowserbaseContextIntegrationDef.Arguments | null;

    method?: 'create_context';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseContextIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseContextIntegrationDef {
    export interface Arguments {
      projectId: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase extension provider
   */
  export interface BrowserbaseExtensionIntegrationDef {
    arguments?: BrowserbaseExtensionIntegrationDef.Arguments | null;

    method?: 'install_extension_from_github' | null;

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseExtensionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseExtensionIntegrationDef {
    export interface Arguments {
      repositoryName: string;

      ref?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase list sessions integration definition
   */
  export interface BrowserbaseListSessionsIntegrationDef {
    arguments?: BrowserbaseListSessionsIntegrationDef.Arguments | null;

    method?: 'list_sessions';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseListSessionsIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseListSessionsIntegrationDef {
    export interface Arguments {
      status?: 'RUNNING' | 'ERROR' | 'TIMED_OUT' | 'COMPLETED' | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments: BrowserbaseCreateSessionIntegrationDef.Arguments;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      projectId: string;

      browserSettings?: unknown | null;

      extensionId?: string | null;

      keepAlive?: boolean | null;

      proxies?: boolean | Array<unknown> | null;

      timeout?: number | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments: BrowserbaseGetSessionIntegrationDef.Arguments;

    method?: 'get_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments: BrowserbaseCompleteSessionIntegrationDef.Arguments;

    method?: 'complete_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCompleteSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCompleteSessionIntegrationDef {
    export interface Arguments {
      id: string;

      status?: 'REQUEST_RELEASE';
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments;

    method?: 'get_live_urls';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionLiveURLsIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionLiveURLsIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * browserbase get session connect url integration definition
   */
  export interface BrowserbaseGetSessionConnectURLIntegrationDef {
    arguments: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments;

    method?: 'get_connect_url';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionConnectURLIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseGetSessionConnectURLIntegrationDef {
    export interface Arguments {
      id: string;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The arguments for the remote browser
     */
    arguments: RemoteBrowserIntegrationDef.Arguments;

    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The arguments for the remote browser
     */
    export interface Arguments {
      action:
        | 'key'
        | 'type'
        | 'mouse_move'
        | 'left_click'
        | 'left_click_drag'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot'
        | 'cursor_position'
        | 'navigate'
        | 'refresh'
        | 'wait_for_load';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }

    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
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
    | ToolPatchParams.BrowserbaseContextIntegrationDefUpdate
    | ToolPatchParams.BrowserbaseExtensionIntegrationDefUpdate
    | ToolPatchParams.BrowserbaseListSessionsIntegrationDefUpdate
    | ToolPatchParams.BrowserbaseCreateSessionIntegrationDefUpdate
    | ToolPatchParams.BrowserbaseGetSessionIntegrationDefUpdate
    | ToolPatchParams.BrowserbaseCompleteSessionIntegrationDefUpdate
    | ToolPatchParams.BrowserbaseGetSessionLiveURLsIntegrationDefUpdate
    | ToolPatchParams.BrowserbaseGetSessionConnectURLIntegrationDefUpdate
    | ToolPatchParams.RemoteBrowserIntegrationDefUpdate
    | null;

  name?: string | null;

  /**
   * System definition
   */
  system?: ToolPatchParams.System | null;

  text_editor_20241022?: ToolPatchParams.TextEditor20241022 | null;

  type?:
    | 'function'
    | 'integration'
    | 'system'
    | 'api_call'
    | 'computer_20241022'
    | 'text_editor_20241022'
    | 'bash_20241022'
    | null;
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

    schema?: unknown | null;

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
   * browserbase context provider
   */
  export interface BrowserbaseContextIntegrationDefUpdate {
    arguments?: BrowserbaseContextIntegrationDefUpdate.Arguments | null;

    method?: 'create_context';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseContextIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseContextIntegrationDefUpdate {
    export interface Arguments {
      projectId?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * browserbase extension provider
   */
  export interface BrowserbaseExtensionIntegrationDefUpdate {
    arguments?: BrowserbaseExtensionIntegrationDefUpdate.Arguments | null;

    method?: 'install_extension_from_github' | null;

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseExtensionIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseExtensionIntegrationDefUpdate {
    export interface Arguments {
      ref?: string | null;

      repositoryName?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * browserbase list sessions integration definition
   */
  export interface BrowserbaseListSessionsIntegrationDefUpdate {
    arguments?: BrowserbaseListSessionsIntegrationDefUpdate.Arguments | null;

    method?: 'list_sessions';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseListSessionsIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseListSessionsIntegrationDefUpdate {
    export interface Arguments {
      status?: 'RUNNING' | 'ERROR' | 'TIMED_OUT' | 'COMPLETED' | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDefUpdate {
    arguments?: BrowserbaseCreateSessionIntegrationDefUpdate.Arguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDefUpdate {
    export interface Arguments {
      browserSettings?: unknown | null;

      extensionId?: string | null;

      keepAlive?: boolean | null;

      projectId?: string | null;

      proxies?: boolean | Array<unknown> | null;

      timeout?: number | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDefUpdate {
    arguments?: BrowserbaseGetSessionIntegrationDefUpdate.Arguments | null;

    method?: 'get_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseGetSessionIntegrationDefUpdate {
    export interface Arguments {
      id?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDefUpdate {
    arguments?: BrowserbaseCompleteSessionIntegrationDefUpdate.Arguments | null;

    method?: 'complete_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCompleteSessionIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseCompleteSessionIntegrationDefUpdate {
    export interface Arguments {
      id?: string | null;

      status?: 'REQUEST_RELEASE';
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDefUpdate {
    arguments?: BrowserbaseGetSessionLiveURLsIntegrationDefUpdate.Arguments | null;

    method?: 'get_live_urls';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionLiveURLsIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseGetSessionLiveURLsIntegrationDefUpdate {
    export interface Arguments {
      id?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * browserbase get session connect url integration definition
   */
  export interface BrowserbaseGetSessionConnectURLIntegrationDefUpdate {
    arguments?: BrowserbaseGetSessionConnectURLIntegrationDefUpdate.Arguments | null;

    method?: 'get_connect_url';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseGetSessionConnectURLIntegrationDefUpdate.Setup | null;
  }

  export namespace BrowserbaseGetSessionConnectURLIntegrationDefUpdate {
    export interface Arguments {
      id?: string | null;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDefUpdate {
    /**
     * The arguments for the remote browser
     */
    arguments?: RemoteBrowserIntegrationDefUpdate.Arguments | null;

    method?: 'perform_action';

    provider?: 'remote_browser';

    /**
     * The setup parameters for the remote browser
     */
    setup?: RemoteBrowserIntegrationDefUpdate.Setup | null;
  }

  export namespace RemoteBrowserIntegrationDefUpdate {
    /**
     * The arguments for the remote browser
     */
    export interface Arguments {
      action?:
        | 'key'
        | 'type'
        | 'mouse_move'
        | 'left_click'
        | 'left_click_drag'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot'
        | 'cursor_position'
        | 'navigate'
        | 'refresh'
        | 'wait_for_load'
        | null;

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }

    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
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
