// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
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
  ): Core.APIPromise<ToolCreateResponse> {
    return this._client.post(`/agents/${agentId}/tools`, { body, ...options });
  }

  /**
   * Patch Agent Tool
   */
  update(
    agentId: string,
    toolId: string,
    body: ToolUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolUpdateResponse> {
    return this._client.patch(`/agents/${agentId}/tools/${toolId}`, { body, ...options });
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
   * Update Agent Tool
   */
  reset(
    agentId: string,
    toolId: string,
    body: ToolResetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ToolResetResponse> {
    return this._client.put(`/agents/${agentId}/tools/${toolId}`, { body, ...options });
  }
}

export class ToolListResponsesOffsetPagination extends OffsetPagination<ToolListResponse> {}

export interface ToolCreateResponse {
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
  api_call?: ToolCreateResponse.APICall | null;

  bash_20241022?: ToolCreateResponse.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolCreateResponse.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolCreateResponse.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolCreateResponse.DummyIntegrationDef
    | ToolCreateResponse.BraveIntegrationDef
    | ToolCreateResponse.EmailIntegrationDef
    | ToolCreateResponse.SpiderIntegrationDef
    | ToolCreateResponse.WikipediaIntegrationDef
    | ToolCreateResponse.WeatherIntegrationDef
    | ToolCreateResponse.BrowserbaseContextIntegrationDef
    | ToolCreateResponse.BrowserbaseExtensionIntegrationDef
    | ToolCreateResponse.BrowserbaseListSessionsIntegrationDef
    | ToolCreateResponse.BrowserbaseCreateSessionIntegrationDef
    | ToolCreateResponse.BrowserbaseGetSessionIntegrationDef
    | ToolCreateResponse.BrowserbaseCompleteSessionIntegrationDef
    | ToolCreateResponse.BrowserbaseGetSessionLiveURLsIntegrationDef
    | ToolCreateResponse.RemoteBrowserIntegrationDef
    | ToolCreateResponse.LlamaParseIntegrationDef
    | ToolCreateResponse.FfmpegIntegrationDef
    | ToolCreateResponse.CloudinaryUploadIntegrationDef
    | ToolCreateResponse.CloudinaryEditIntegrationDef
    | ToolCreateResponse.ArxivIntegrationDef
    | ToolCreateResponse.UnstructuredIntegrationDef
    | ToolCreateResponse.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: ToolCreateResponse.System | null;

  text_editor_20241022?: ToolCreateResponse.TextEditor20241022 | null;
}

export namespace ToolCreateResponse {
  /**
   * API call definition
   */
  export interface APICall {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

    url: string;

    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    files?: unknown | null;

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
    description?: unknown;

    name?: unknown;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown;
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
      brave_api_key: string;
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

    method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

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

      content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

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

    setup?: unknown;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments?: BrowserbaseCreateSessionIntegrationDef.Arguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      browserSettings?: unknown;

      extensionId?: string | null;

      keepAlive?: boolean;

      projectId?: string | null;

      proxies?: boolean | Array<unknown>;

      timeout?: number;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments?: BrowserbaseGetSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments?: BrowserbaseCompleteSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments?: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    /**
     * The arguments for the remote browser
     */
    arguments?: RemoteBrowserIntegrationDef.Arguments | null;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
    }

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
        | 'refresh';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }
  }

  /**
   * LlamaParse integration definition
   */
  export interface LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    arguments?: LlamaParseIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'llama_parse';

    /**
     * Setup parameters for LlamaParse integration
     */
    setup?: LlamaParseIntegrationDef.Setup | null;
  }

  export namespace LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    export interface Arguments {
      file: string | Array<string>;

      base64?: boolean;

      filename?: string | null;

      params?: unknown | null;
    }

    /**
     * Setup parameters for LlamaParse integration
     */
    export interface Setup {
      llamaparse_api_key: string;

      params?: unknown | null;
    }
  }

  /**
   * Ffmpeg integration definition
   */
  export interface FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    arguments?: FfmpegIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'ffmpeg';

    setup?: unknown;
  }

  export namespace FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    export interface Arguments {
      cmd: string;

      file?: string | Array<string> | null;
    }
  }

  /**
   * Cloudinary upload integration definition
   */
  export interface CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    arguments?: CloudinaryUploadIntegrationDef.Arguments | null;

    method?: 'media_upload';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryUploadIntegrationDef.Setup | null;
  }

  export namespace CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    export interface Arguments {
      file: string;

      public_id?: string | null;

      return_base64?: boolean;

      upload_params?: unknown | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Cloudinary edit integration definition
   */
  export interface CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    arguments?: CloudinaryEditIntegrationDef.Arguments | null;

    method?: 'media_edit';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryEditIntegrationDef.Setup | null;
  }

  export namespace CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    export interface Arguments {
      public_id: string;

      transformation: Array<unknown>;

      return_base64?: boolean;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Arxiv integration definition
   */
  export interface ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    arguments?: ArxivIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'arxiv';

    setup?: unknown;
  }

  export namespace ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    export interface Arguments {
      query: string;

      download_pdf?: boolean;

      id_list?: Array<string> | null;

      max_results?: number;

      sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

      sort_order?: 'ascending' | 'descending';
    }
  }

  /**
   * Unstructured integration definition
   */
  export interface UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    arguments?: UnstructuredIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'unstructured';

    /**
     * Setup parameters for Unstructured integration
     */
    setup?: UnstructuredIntegrationDef.Setup | null;
  }

  export namespace UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    export interface Arguments {
      file: string;

      filename?: string | null;

      partition_params?: unknown | null;
    }

    /**
     * Setup parameters for Unstructured integration
     */
    export interface Setup {
      unstructured_api_key: string;

      retry_config?: unknown | null;

      server?: string | null;

      server_url?: string | null;

      timeout_ms?: number | null;

      url_params?: unknown | null;
    }
  }

  /**
   * Algolia integration definition
   */
  export interface AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    arguments?: AlgoliaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'algolia';

    /**
     * Integration definition for Algolia
     */
    setup?: AlgoliaIntegrationDef.Setup | null;
  }

  export namespace AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    export interface Arguments {
      index_name: string;

      query: string;

      attributes_to_retrieve?: Array<string> | null;

      hits_per_page?: number;
    }

    /**
     * Integration definition for Algolia
     */
    export interface Setup {
      algolia_api_key: string;

      algolia_application_id: string;
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

export interface ToolUpdateResponse {
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
  api_call?: ToolUpdateResponse.APICall | null;

  bash_20241022?: ToolUpdateResponse.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolUpdateResponse.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolUpdateResponse.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolUpdateResponse.DummyIntegrationDef
    | ToolUpdateResponse.BraveIntegrationDef
    | ToolUpdateResponse.EmailIntegrationDef
    | ToolUpdateResponse.SpiderIntegrationDef
    | ToolUpdateResponse.WikipediaIntegrationDef
    | ToolUpdateResponse.WeatherIntegrationDef
    | ToolUpdateResponse.BrowserbaseContextIntegrationDef
    | ToolUpdateResponse.BrowserbaseExtensionIntegrationDef
    | ToolUpdateResponse.BrowserbaseListSessionsIntegrationDef
    | ToolUpdateResponse.BrowserbaseCreateSessionIntegrationDef
    | ToolUpdateResponse.BrowserbaseGetSessionIntegrationDef
    | ToolUpdateResponse.BrowserbaseCompleteSessionIntegrationDef
    | ToolUpdateResponse.BrowserbaseGetSessionLiveURLsIntegrationDef
    | ToolUpdateResponse.RemoteBrowserIntegrationDef
    | ToolUpdateResponse.LlamaParseIntegrationDef
    | ToolUpdateResponse.FfmpegIntegrationDef
    | ToolUpdateResponse.CloudinaryUploadIntegrationDef
    | ToolUpdateResponse.CloudinaryEditIntegrationDef
    | ToolUpdateResponse.ArxivIntegrationDef
    | ToolUpdateResponse.UnstructuredIntegrationDef
    | ToolUpdateResponse.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: ToolUpdateResponse.System | null;

  text_editor_20241022?: ToolUpdateResponse.TextEditor20241022 | null;
}

export namespace ToolUpdateResponse {
  /**
   * API call definition
   */
  export interface APICall {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

    url: string;

    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    files?: unknown | null;

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
    description?: unknown;

    name?: unknown;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown;
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
      brave_api_key: string;
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

    method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

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

      content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

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

    setup?: unknown;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments?: BrowserbaseCreateSessionIntegrationDef.Arguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      browserSettings?: unknown;

      extensionId?: string | null;

      keepAlive?: boolean;

      projectId?: string | null;

      proxies?: boolean | Array<unknown>;

      timeout?: number;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments?: BrowserbaseGetSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments?: BrowserbaseCompleteSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments?: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    /**
     * The arguments for the remote browser
     */
    arguments?: RemoteBrowserIntegrationDef.Arguments | null;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
    }

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
        | 'refresh';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }
  }

  /**
   * LlamaParse integration definition
   */
  export interface LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    arguments?: LlamaParseIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'llama_parse';

    /**
     * Setup parameters for LlamaParse integration
     */
    setup?: LlamaParseIntegrationDef.Setup | null;
  }

  export namespace LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    export interface Arguments {
      file: string | Array<string>;

      base64?: boolean;

      filename?: string | null;

      params?: unknown | null;
    }

    /**
     * Setup parameters for LlamaParse integration
     */
    export interface Setup {
      llamaparse_api_key: string;

      params?: unknown | null;
    }
  }

  /**
   * Ffmpeg integration definition
   */
  export interface FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    arguments?: FfmpegIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'ffmpeg';

    setup?: unknown;
  }

  export namespace FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    export interface Arguments {
      cmd: string;

      file?: string | Array<string> | null;
    }
  }

  /**
   * Cloudinary upload integration definition
   */
  export interface CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    arguments?: CloudinaryUploadIntegrationDef.Arguments | null;

    method?: 'media_upload';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryUploadIntegrationDef.Setup | null;
  }

  export namespace CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    export interface Arguments {
      file: string;

      public_id?: string | null;

      return_base64?: boolean;

      upload_params?: unknown | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Cloudinary edit integration definition
   */
  export interface CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    arguments?: CloudinaryEditIntegrationDef.Arguments | null;

    method?: 'media_edit';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryEditIntegrationDef.Setup | null;
  }

  export namespace CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    export interface Arguments {
      public_id: string;

      transformation: Array<unknown>;

      return_base64?: boolean;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Arxiv integration definition
   */
  export interface ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    arguments?: ArxivIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'arxiv';

    setup?: unknown;
  }

  export namespace ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    export interface Arguments {
      query: string;

      download_pdf?: boolean;

      id_list?: Array<string> | null;

      max_results?: number;

      sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

      sort_order?: 'ascending' | 'descending';
    }
  }

  /**
   * Unstructured integration definition
   */
  export interface UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    arguments?: UnstructuredIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'unstructured';

    /**
     * Setup parameters for Unstructured integration
     */
    setup?: UnstructuredIntegrationDef.Setup | null;
  }

  export namespace UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    export interface Arguments {
      file: string;

      filename?: string | null;

      partition_params?: unknown | null;
    }

    /**
     * Setup parameters for Unstructured integration
     */
    export interface Setup {
      unstructured_api_key: string;

      retry_config?: unknown | null;

      server?: string | null;

      server_url?: string | null;

      timeout_ms?: number | null;

      url_params?: unknown | null;
    }
  }

  /**
   * Algolia integration definition
   */
  export interface AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    arguments?: AlgoliaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'algolia';

    /**
     * Integration definition for Algolia
     */
    setup?: AlgoliaIntegrationDef.Setup | null;
  }

  export namespace AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    export interface Arguments {
      index_name: string;

      query: string;

      attributes_to_retrieve?: Array<string> | null;

      hits_per_page?: number;
    }

    /**
     * Integration definition for Algolia
     */
    export interface Setup {
      algolia_api_key: string;

      algolia_application_id: string;
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
    | ToolListResponse.RemoteBrowserIntegrationDef
    | ToolListResponse.LlamaParseIntegrationDef
    | ToolListResponse.FfmpegIntegrationDef
    | ToolListResponse.CloudinaryUploadIntegrationDef
    | ToolListResponse.CloudinaryEditIntegrationDef
    | ToolListResponse.ArxivIntegrationDef
    | ToolListResponse.UnstructuredIntegrationDef
    | ToolListResponse.AlgoliaIntegrationDef
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

    files?: unknown | null;

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
    description?: unknown;

    name?: unknown;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown;
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
      brave_api_key: string;
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

    method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

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

      content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

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

    setup?: unknown;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments?: BrowserbaseCreateSessionIntegrationDef.Arguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      browserSettings?: unknown;

      extensionId?: string | null;

      keepAlive?: boolean;

      projectId?: string | null;

      proxies?: boolean | Array<unknown>;

      timeout?: number;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments?: BrowserbaseGetSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments?: BrowserbaseCompleteSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments?: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    /**
     * The arguments for the remote browser
     */
    arguments?: RemoteBrowserIntegrationDef.Arguments | null;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
    }

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
        | 'refresh';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }
  }

  /**
   * LlamaParse integration definition
   */
  export interface LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    arguments?: LlamaParseIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'llama_parse';

    /**
     * Setup parameters for LlamaParse integration
     */
    setup?: LlamaParseIntegrationDef.Setup | null;
  }

  export namespace LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    export interface Arguments {
      file: string | Array<string>;

      base64?: boolean;

      filename?: string | null;

      params?: unknown | null;
    }

    /**
     * Setup parameters for LlamaParse integration
     */
    export interface Setup {
      llamaparse_api_key: string;

      params?: unknown | null;
    }
  }

  /**
   * Ffmpeg integration definition
   */
  export interface FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    arguments?: FfmpegIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'ffmpeg';

    setup?: unknown;
  }

  export namespace FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    export interface Arguments {
      cmd: string;

      file?: string | Array<string> | null;
    }
  }

  /**
   * Cloudinary upload integration definition
   */
  export interface CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    arguments?: CloudinaryUploadIntegrationDef.Arguments | null;

    method?: 'media_upload';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryUploadIntegrationDef.Setup | null;
  }

  export namespace CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    export interface Arguments {
      file: string;

      public_id?: string | null;

      return_base64?: boolean;

      upload_params?: unknown | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Cloudinary edit integration definition
   */
  export interface CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    arguments?: CloudinaryEditIntegrationDef.Arguments | null;

    method?: 'media_edit';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryEditIntegrationDef.Setup | null;
  }

  export namespace CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    export interface Arguments {
      public_id: string;

      transformation: Array<unknown>;

      return_base64?: boolean;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Arxiv integration definition
   */
  export interface ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    arguments?: ArxivIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'arxiv';

    setup?: unknown;
  }

  export namespace ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    export interface Arguments {
      query: string;

      download_pdf?: boolean;

      id_list?: Array<string> | null;

      max_results?: number;

      sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

      sort_order?: 'ascending' | 'descending';
    }
  }

  /**
   * Unstructured integration definition
   */
  export interface UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    arguments?: UnstructuredIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'unstructured';

    /**
     * Setup parameters for Unstructured integration
     */
    setup?: UnstructuredIntegrationDef.Setup | null;
  }

  export namespace UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    export interface Arguments {
      file: string;

      filename?: string | null;

      partition_params?: unknown | null;
    }

    /**
     * Setup parameters for Unstructured integration
     */
    export interface Setup {
      unstructured_api_key: string;

      retry_config?: unknown | null;

      server?: string | null;

      server_url?: string | null;

      timeout_ms?: number | null;

      url_params?: unknown | null;
    }
  }

  /**
   * Algolia integration definition
   */
  export interface AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    arguments?: AlgoliaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'algolia';

    /**
     * Integration definition for Algolia
     */
    setup?: AlgoliaIntegrationDef.Setup | null;
  }

  export namespace AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    export interface Arguments {
      index_name: string;

      query: string;

      attributes_to_retrieve?: Array<string> | null;

      hits_per_page?: number;
    }

    /**
     * Integration definition for Algolia
     */
    export interface Setup {
      algolia_api_key: string;

      algolia_application_id: string;
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

export interface ToolResetResponse {
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
  api_call?: ToolResetResponse.APICall | null;

  bash_20241022?: ToolResetResponse.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolResetResponse.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolResetResponse.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolResetResponse.DummyIntegrationDef
    | ToolResetResponse.BraveIntegrationDef
    | ToolResetResponse.EmailIntegrationDef
    | ToolResetResponse.SpiderIntegrationDef
    | ToolResetResponse.WikipediaIntegrationDef
    | ToolResetResponse.WeatherIntegrationDef
    | ToolResetResponse.BrowserbaseContextIntegrationDef
    | ToolResetResponse.BrowserbaseExtensionIntegrationDef
    | ToolResetResponse.BrowserbaseListSessionsIntegrationDef
    | ToolResetResponse.BrowserbaseCreateSessionIntegrationDef
    | ToolResetResponse.BrowserbaseGetSessionIntegrationDef
    | ToolResetResponse.BrowserbaseCompleteSessionIntegrationDef
    | ToolResetResponse.BrowserbaseGetSessionLiveURLsIntegrationDef
    | ToolResetResponse.RemoteBrowserIntegrationDef
    | ToolResetResponse.LlamaParseIntegrationDef
    | ToolResetResponse.FfmpegIntegrationDef
    | ToolResetResponse.CloudinaryUploadIntegrationDef
    | ToolResetResponse.CloudinaryEditIntegrationDef
    | ToolResetResponse.ArxivIntegrationDef
    | ToolResetResponse.UnstructuredIntegrationDef
    | ToolResetResponse.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: ToolResetResponse.System | null;

  text_editor_20241022?: ToolResetResponse.TextEditor20241022 | null;
}

export namespace ToolResetResponse {
  /**
   * API call definition
   */
  export interface APICall {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

    url: string;

    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    files?: unknown | null;

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
    description?: unknown;

    name?: unknown;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown;
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
      brave_api_key: string;
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

    method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

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

      content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

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

    setup?: unknown;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments?: BrowserbaseCreateSessionIntegrationDef.Arguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      browserSettings?: unknown;

      extensionId?: string | null;

      keepAlive?: boolean;

      projectId?: string | null;

      proxies?: boolean | Array<unknown>;

      timeout?: number;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments?: BrowserbaseGetSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments?: BrowserbaseCompleteSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments?: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    /**
     * The arguments for the remote browser
     */
    arguments?: RemoteBrowserIntegrationDef.Arguments | null;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
    }

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
        | 'refresh';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }
  }

  /**
   * LlamaParse integration definition
   */
  export interface LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    arguments?: LlamaParseIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'llama_parse';

    /**
     * Setup parameters for LlamaParse integration
     */
    setup?: LlamaParseIntegrationDef.Setup | null;
  }

  export namespace LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    export interface Arguments {
      file: string | Array<string>;

      base64?: boolean;

      filename?: string | null;

      params?: unknown | null;
    }

    /**
     * Setup parameters for LlamaParse integration
     */
    export interface Setup {
      llamaparse_api_key: string;

      params?: unknown | null;
    }
  }

  /**
   * Ffmpeg integration definition
   */
  export interface FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    arguments?: FfmpegIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'ffmpeg';

    setup?: unknown;
  }

  export namespace FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    export interface Arguments {
      cmd: string;

      file?: string | Array<string> | null;
    }
  }

  /**
   * Cloudinary upload integration definition
   */
  export interface CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    arguments?: CloudinaryUploadIntegrationDef.Arguments | null;

    method?: 'media_upload';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryUploadIntegrationDef.Setup | null;
  }

  export namespace CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    export interface Arguments {
      file: string;

      public_id?: string | null;

      return_base64?: boolean;

      upload_params?: unknown | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Cloudinary edit integration definition
   */
  export interface CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    arguments?: CloudinaryEditIntegrationDef.Arguments | null;

    method?: 'media_edit';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryEditIntegrationDef.Setup | null;
  }

  export namespace CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    export interface Arguments {
      public_id: string;

      transformation: Array<unknown>;

      return_base64?: boolean;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Arxiv integration definition
   */
  export interface ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    arguments?: ArxivIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'arxiv';

    setup?: unknown;
  }

  export namespace ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    export interface Arguments {
      query: string;

      download_pdf?: boolean;

      id_list?: Array<string> | null;

      max_results?: number;

      sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

      sort_order?: 'ascending' | 'descending';
    }
  }

  /**
   * Unstructured integration definition
   */
  export interface UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    arguments?: UnstructuredIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'unstructured';

    /**
     * Setup parameters for Unstructured integration
     */
    setup?: UnstructuredIntegrationDef.Setup | null;
  }

  export namespace UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    export interface Arguments {
      file: string;

      filename?: string | null;

      partition_params?: unknown | null;
    }

    /**
     * Setup parameters for Unstructured integration
     */
    export interface Setup {
      unstructured_api_key: string;

      retry_config?: unknown | null;

      server?: string | null;

      server_url?: string | null;

      timeout_ms?: number | null;

      url_params?: unknown | null;
    }
  }

  /**
   * Algolia integration definition
   */
  export interface AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    arguments?: AlgoliaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'algolia';

    /**
     * Integration definition for Algolia
     */
    setup?: AlgoliaIntegrationDef.Setup | null;
  }

  export namespace AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    export interface Arguments {
      index_name: string;

      query: string;

      attributes_to_retrieve?: Array<string> | null;

      hits_per_page?: number;
    }

    /**
     * Integration definition for Algolia
     */
    export interface Setup {
      algolia_api_key: string;

      algolia_application_id: string;
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
    | ToolCreateParams.RemoteBrowserIntegrationDef
    | ToolCreateParams.LlamaParseIntegrationDef
    | ToolCreateParams.FfmpegIntegrationDef
    | ToolCreateParams.CloudinaryUploadIntegrationDef
    | ToolCreateParams.CloudinaryEditIntegrationDef
    | ToolCreateParams.ArxivIntegrationDef
    | ToolCreateParams.UnstructuredIntegrationDef
    | ToolCreateParams.AlgoliaIntegrationDef
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

    files?: unknown | null;

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
    description?: unknown;

    name?: unknown;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown;
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
      brave_api_key: string;
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

    method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

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

      content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

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

    setup?: unknown;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments?: BrowserbaseCreateSessionIntegrationDef.Arguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      browserSettings?: unknown;

      extensionId?: string | null;

      keepAlive?: boolean;

      projectId?: string | null;

      proxies?: boolean | Array<unknown>;

      timeout?: number;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments?: BrowserbaseGetSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments?: BrowserbaseCompleteSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments?: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    /**
     * The arguments for the remote browser
     */
    arguments?: RemoteBrowserIntegrationDef.Arguments | null;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
    }

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
        | 'refresh';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }
  }

  /**
   * LlamaParse integration definition
   */
  export interface LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    arguments?: LlamaParseIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'llama_parse';

    /**
     * Setup parameters for LlamaParse integration
     */
    setup?: LlamaParseIntegrationDef.Setup | null;
  }

  export namespace LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    export interface Arguments {
      file: string | Array<string>;

      base64?: boolean;

      filename?: string | null;

      params?: unknown | null;
    }

    /**
     * Setup parameters for LlamaParse integration
     */
    export interface Setup {
      llamaparse_api_key: string;

      params?: unknown | null;
    }
  }

  /**
   * Ffmpeg integration definition
   */
  export interface FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    arguments?: FfmpegIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'ffmpeg';

    setup?: unknown;
  }

  export namespace FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    export interface Arguments {
      cmd: string;

      file?: string | Array<string> | null;
    }
  }

  /**
   * Cloudinary upload integration definition
   */
  export interface CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    arguments?: CloudinaryUploadIntegrationDef.Arguments | null;

    method?: 'media_upload';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryUploadIntegrationDef.Setup | null;
  }

  export namespace CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    export interface Arguments {
      file: string;

      public_id?: string | null;

      return_base64?: boolean;

      upload_params?: unknown | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Cloudinary edit integration definition
   */
  export interface CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    arguments?: CloudinaryEditIntegrationDef.Arguments | null;

    method?: 'media_edit';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryEditIntegrationDef.Setup | null;
  }

  export namespace CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    export interface Arguments {
      public_id: string;

      transformation: Array<unknown>;

      return_base64?: boolean;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Arxiv integration definition
   */
  export interface ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    arguments?: ArxivIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'arxiv';

    setup?: unknown;
  }

  export namespace ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    export interface Arguments {
      query: string;

      download_pdf?: boolean;

      id_list?: Array<string> | null;

      max_results?: number;

      sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

      sort_order?: 'ascending' | 'descending';
    }
  }

  /**
   * Unstructured integration definition
   */
  export interface UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    arguments?: UnstructuredIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'unstructured';

    /**
     * Setup parameters for Unstructured integration
     */
    setup?: UnstructuredIntegrationDef.Setup | null;
  }

  export namespace UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    export interface Arguments {
      file: string;

      filename?: string | null;

      partition_params?: unknown | null;
    }

    /**
     * Setup parameters for Unstructured integration
     */
    export interface Setup {
      unstructured_api_key: string;

      retry_config?: unknown | null;

      server?: string | null;

      server_url?: string | null;

      timeout_ms?: number | null;

      url_params?: unknown | null;
    }
  }

  /**
   * Algolia integration definition
   */
  export interface AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    arguments?: AlgoliaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'algolia';

    /**
     * Integration definition for Algolia
     */
    setup?: AlgoliaIntegrationDef.Setup | null;
  }

  export namespace AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    export interface Arguments {
      index_name: string;

      query: string;

      attributes_to_retrieve?: Array<string> | null;

      hits_per_page?: number;
    }

    /**
     * Integration definition for Algolia
     */
    export interface Setup {
      algolia_api_key: string;

      algolia_application_id: string;
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
    | ToolUpdateParams.DummyIntegrationDefUpdate
    | ToolUpdateParams.BraveIntegrationDefUpdate
    | ToolUpdateParams.EmailIntegrationDefUpdate
    | ToolUpdateParams.SpiderIntegrationDefUpdate
    | ToolUpdateParams.WikipediaIntegrationDefUpdate
    | ToolUpdateParams.WeatherIntegrationDefUpdate
    | ToolUpdateParams.BrowserbaseContextIntegrationDefUpdate
    | ToolUpdateParams.BrowserbaseExtensionIntegrationDefUpdate
    | ToolUpdateParams.BrowserbaseListSessionsIntegrationDefUpdate
    | ToolUpdateParams.BrowserbaseCreateSessionIntegrationDefUpdate
    | ToolUpdateParams.BrowserbaseGetSessionIntegrationDefUpdate
    | ToolUpdateParams.BrowserbaseCompleteSessionIntegrationDefUpdate
    | ToolUpdateParams.BrowserbaseGetSessionLiveURLsIntegrationDefUpdate
    | ToolUpdateParams.RemoteBrowserIntegrationDefUpdate
    | ToolUpdateParams.LlamaParseIntegrationDefUpdate
    | ToolUpdateParams.FfmpegIntegrationDefUpdate
    | ToolUpdateParams.CloudinaryUploadIntegrationDefUpdate
    | ToolUpdateParams.CloudinaryEditIntegrationDefUpdate
    | ToolUpdateParams.ArxivIntegrationDefUpdate
    | ToolUpdateParams.UnstructuredIntegrationDefUpdate
    | ToolUpdateParams.AlgoliaIntegrationDefUpdate
    | null;

  name?: string | null;

  /**
   * System definition
   */
  system?: ToolUpdateParams.System | null;

  text_editor_20241022?: ToolUpdateParams.TextEditor20241022 | null;

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

export namespace ToolUpdateParams {
  /**
   * API call definition
   */
  export interface APICall {
    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    files?: unknown | null;

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
    description?: unknown;

    name?: unknown;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDefUpdate {
    arguments?: unknown;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown;
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
      brave_api_key?: string | null;
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

    method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

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
      content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

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

    setup?: unknown;
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

      api_url?: string | null;

      connect_url?: string | null;

      project_id?: string | null;
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

      api_url?: string | null;

      connect_url?: string | null;

      project_id?: string | null;
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

      api_url?: string | null;

      connect_url?: string | null;

      project_id?: string | null;
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
      browserSettings?: unknown;

      extensionId?: string | null;

      keepAlive?: boolean;

      projectId?: string | null;

      proxies?: boolean | Array<unknown>;

      timeout?: number;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key?: string | null;

      api_url?: string | null;

      connect_url?: string | null;

      project_id?: string | null;
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

      api_url?: string | null;

      connect_url?: string | null;

      project_id?: string | null;
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

      api_url?: string | null;

      connect_url?: string | null;

      project_id?: string | null;
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

      api_url?: string | null;

      connect_url?: string | null;

      project_id?: string | null;
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
   * LlamaParse integration definition
   */
  export interface LlamaParseIntegrationDefUpdate {
    /**
     * Arguments for LlamaParse integration
     */
    arguments?: LlamaParseIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'llama_parse';

    /**
     * Setup parameters for LlamaParse integration
     */
    setup?: LlamaParseIntegrationDefUpdate.Setup | null;
  }

  export namespace LlamaParseIntegrationDefUpdate {
    /**
     * Arguments for LlamaParse integration
     */
    export interface Arguments {
      base64?: boolean;

      file?: string | Array<string> | null;

      filename?: string | null;

      params?: unknown | null;
    }

    /**
     * Setup parameters for LlamaParse integration
     */
    export interface Setup {
      llamaparse_api_key?: string | null;

      params?: unknown | null;
    }
  }

  /**
   * Ffmpeg integration definition
   */
  export interface FfmpegIntegrationDefUpdate {
    /**
     * Arguments for Ffmpeg CMD
     */
    arguments?: FfmpegIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'ffmpeg';

    setup?: unknown;
  }

  export namespace FfmpegIntegrationDefUpdate {
    /**
     * Arguments for Ffmpeg CMD
     */
    export interface Arguments {
      cmd?: string | null;

      file?: string | Array<string> | null;
    }
  }

  /**
   * Cloudinary upload integration definition
   */
  export interface CloudinaryUploadIntegrationDefUpdate {
    /**
     * Arguments for Cloudinary media upload
     */
    arguments?: CloudinaryUploadIntegrationDefUpdate.Arguments | null;

    method?: 'media_upload';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryUploadIntegrationDefUpdate.Setup | null;
  }

  export namespace CloudinaryUploadIntegrationDefUpdate {
    /**
     * Arguments for Cloudinary media upload
     */
    export interface Arguments {
      file?: string | null;

      public_id?: string | null;

      return_base64?: boolean;

      upload_params?: unknown | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key?: string | null;

      cloudinary_api_secret?: string | null;

      cloudinary_cloud_name?: string | null;

      params?: unknown | null;
    }
  }

  /**
   * Cloudinary edit integration definition
   */
  export interface CloudinaryEditIntegrationDefUpdate {
    /**
     * Arguments for Cloudinary media edit
     */
    arguments?: CloudinaryEditIntegrationDefUpdate.Arguments | null;

    method?: 'media_edit';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryEditIntegrationDefUpdate.Setup | null;
  }

  export namespace CloudinaryEditIntegrationDefUpdate {
    /**
     * Arguments for Cloudinary media edit
     */
    export interface Arguments {
      public_id?: string | null;

      return_base64?: boolean;

      transformation?: Array<unknown> | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key?: string | null;

      cloudinary_api_secret?: string | null;

      cloudinary_cloud_name?: string | null;

      params?: unknown | null;
    }
  }

  /**
   * Arxiv integration definition
   */
  export interface ArxivIntegrationDefUpdate {
    /**
     * Arguments for Arxiv Search
     */
    arguments?: ArxivIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'arxiv';

    setup?: unknown;
  }

  export namespace ArxivIntegrationDefUpdate {
    /**
     * Arguments for Arxiv Search
     */
    export interface Arguments {
      download_pdf?: boolean;

      id_list?: Array<string> | null;

      max_results?: number;

      query?: string | null;

      sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

      sort_order?: 'ascending' | 'descending';
    }
  }

  /**
   * Unstructured integration definition
   */
  export interface UnstructuredIntegrationDefUpdate {
    /**
     * Arguments for Unstructured partition integration
     */
    arguments?: UnstructuredIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'unstructured';

    /**
     * Setup parameters for Unstructured integration
     */
    setup?: UnstructuredIntegrationDefUpdate.Setup | null;
  }

  export namespace UnstructuredIntegrationDefUpdate {
    /**
     * Arguments for Unstructured partition integration
     */
    export interface Arguments {
      file?: string | null;

      filename?: string | null;

      partition_params?: unknown | null;
    }

    /**
     * Setup parameters for Unstructured integration
     */
    export interface Setup {
      retry_config?: unknown | null;

      server?: string | null;

      server_url?: string | null;

      timeout_ms?: number | null;

      unstructured_api_key?: string | null;

      url_params?: unknown | null;
    }
  }

  /**
   * Algolia integration definition
   */
  export interface AlgoliaIntegrationDefUpdate {
    /**
     * Arguments for Algolia Search
     */
    arguments?: AlgoliaIntegrationDefUpdate.Arguments | null;

    method?: string | null;

    provider?: 'algolia';

    /**
     * Integration definition for Algolia
     */
    setup?: AlgoliaIntegrationDefUpdate.Setup | null;
  }

  export namespace AlgoliaIntegrationDefUpdate {
    /**
     * Arguments for Algolia Search
     */
    export interface Arguments {
      attributes_to_retrieve?: Array<string> | null;

      hits_per_page?: number;

      index_name?: string | null;

      query?: string | null;
    }

    /**
     * Integration definition for Algolia
     */
    export interface Setup {
      algolia_api_key?: string | null;

      algolia_application_id?: string | null;
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

export interface ToolListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export interface ToolResetParams {
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
  api_call?: ToolResetParams.APICall | null;

  bash_20241022?: ToolResetParams.Bash20241022 | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: ToolResetParams.Computer20241022 | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: ToolResetParams.Function | null;

  /**
   * Brave integration definition
   */
  integration?:
    | ToolResetParams.DummyIntegrationDef
    | ToolResetParams.BraveIntegrationDef
    | ToolResetParams.EmailIntegrationDef
    | ToolResetParams.SpiderIntegrationDef
    | ToolResetParams.WikipediaIntegrationDef
    | ToolResetParams.WeatherIntegrationDef
    | ToolResetParams.BrowserbaseContextIntegrationDef
    | ToolResetParams.BrowserbaseExtensionIntegrationDef
    | ToolResetParams.BrowserbaseListSessionsIntegrationDef
    | ToolResetParams.BrowserbaseCreateSessionIntegrationDef
    | ToolResetParams.BrowserbaseGetSessionIntegrationDef
    | ToolResetParams.BrowserbaseCompleteSessionIntegrationDef
    | ToolResetParams.BrowserbaseGetSessionLiveURLsIntegrationDef
    | ToolResetParams.RemoteBrowserIntegrationDef
    | ToolResetParams.LlamaParseIntegrationDef
    | ToolResetParams.FfmpegIntegrationDef
    | ToolResetParams.CloudinaryUploadIntegrationDef
    | ToolResetParams.CloudinaryEditIntegrationDef
    | ToolResetParams.ArxivIntegrationDef
    | ToolResetParams.UnstructuredIntegrationDef
    | ToolResetParams.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: ToolResetParams.System | null;

  text_editor_20241022?: ToolResetParams.TextEditor20241022 | null;
}

export namespace ToolResetParams {
  /**
   * API call definition
   */
  export interface APICall {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

    url: string;

    content?: string | null;

    cookies?: Record<string, string> | null;

    data?: unknown | null;

    files?: unknown | null;

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
    description?: unknown;

    name?: unknown;

    parameters?: unknown | null;
  }

  export interface DummyIntegrationDef {
    arguments?: unknown;

    method?: string | null;

    provider?: 'dummy';

    setup?: unknown;
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
      brave_api_key: string;
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

    method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

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

      content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

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

    setup?: unknown;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDef {
    arguments?: BrowserbaseCreateSessionIntegrationDef.Arguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: BrowserbaseCreateSessionIntegrationDef.Setup | null;
  }

  export namespace BrowserbaseCreateSessionIntegrationDef {
    export interface Arguments {
      browserSettings?: unknown;

      extensionId?: string | null;

      keepAlive?: boolean;

      projectId?: string | null;

      proxies?: boolean | Array<unknown>;

      timeout?: number;
    }

    /**
     * The setup parameters for the browserbase integration
     */
    export interface Setup {
      api_key: string;

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session integration definition
   */
  export interface BrowserbaseGetSessionIntegrationDef {
    arguments?: BrowserbaseGetSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase complete session integration definition
   */
  export interface BrowserbaseCompleteSessionIntegrationDef {
    arguments?: BrowserbaseCompleteSessionIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * browserbase get session live urls integration definition
   */
  export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
    arguments?: BrowserbaseGetSessionLiveURLsIntegrationDef.Arguments | null;

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

      project_id: string;

      api_url?: string | null;

      connect_url?: string | null;
    }
  }

  /**
   * The integration definition for the remote browser
   */
  export interface RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    setup: RemoteBrowserIntegrationDef.Setup;

    /**
     * The arguments for the remote browser
     */
    arguments?: RemoteBrowserIntegrationDef.Arguments | null;

    method?: 'perform_action';

    provider?: 'remote_browser';
  }

  export namespace RemoteBrowserIntegrationDef {
    /**
     * The setup parameters for the remote browser
     */
    export interface Setup {
      connect_url?: string | null;

      height?: number | null;

      width?: number | null;
    }

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
        | 'refresh';

      connect_url?: string | null;

      coordinate?: Array<unknown> | null;

      text?: string | null;
    }
  }

  /**
   * LlamaParse integration definition
   */
  export interface LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    arguments?: LlamaParseIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'llama_parse';

    /**
     * Setup parameters for LlamaParse integration
     */
    setup?: LlamaParseIntegrationDef.Setup | null;
  }

  export namespace LlamaParseIntegrationDef {
    /**
     * Arguments for LlamaParse integration
     */
    export interface Arguments {
      file: string | Array<string>;

      base64?: boolean;

      filename?: string | null;

      params?: unknown | null;
    }

    /**
     * Setup parameters for LlamaParse integration
     */
    export interface Setup {
      llamaparse_api_key: string;

      params?: unknown | null;
    }
  }

  /**
   * Ffmpeg integration definition
   */
  export interface FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    arguments?: FfmpegIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'ffmpeg';

    setup?: unknown;
  }

  export namespace FfmpegIntegrationDef {
    /**
     * Arguments for Ffmpeg CMD
     */
    export interface Arguments {
      cmd: string;

      file?: string | Array<string> | null;
    }
  }

  /**
   * Cloudinary upload integration definition
   */
  export interface CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    arguments?: CloudinaryUploadIntegrationDef.Arguments | null;

    method?: 'media_upload';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryUploadIntegrationDef.Setup | null;
  }

  export namespace CloudinaryUploadIntegrationDef {
    /**
     * Arguments for Cloudinary media upload
     */
    export interface Arguments {
      file: string;

      public_id?: string | null;

      return_base64?: boolean;

      upload_params?: unknown | null;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Cloudinary edit integration definition
   */
  export interface CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    arguments?: CloudinaryEditIntegrationDef.Arguments | null;

    method?: 'media_edit';

    provider?: 'cloudinary';

    /**
     * Setup parameters for Cloudinary integration
     */
    setup?: CloudinaryEditIntegrationDef.Setup | null;
  }

  export namespace CloudinaryEditIntegrationDef {
    /**
     * Arguments for Cloudinary media edit
     */
    export interface Arguments {
      public_id: string;

      transformation: Array<unknown>;

      return_base64?: boolean;
    }

    /**
     * Setup parameters for Cloudinary integration
     */
    export interface Setup {
      cloudinary_api_key: string;

      cloudinary_api_secret: string;

      cloudinary_cloud_name: string;

      params?: unknown | null;
    }
  }

  /**
   * Arxiv integration definition
   */
  export interface ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    arguments?: ArxivIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'arxiv';

    setup?: unknown;
  }

  export namespace ArxivIntegrationDef {
    /**
     * Arguments for Arxiv Search
     */
    export interface Arguments {
      query: string;

      download_pdf?: boolean;

      id_list?: Array<string> | null;

      max_results?: number;

      sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

      sort_order?: 'ascending' | 'descending';
    }
  }

  /**
   * Unstructured integration definition
   */
  export interface UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    arguments?: UnstructuredIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'unstructured';

    /**
     * Setup parameters for Unstructured integration
     */
    setup?: UnstructuredIntegrationDef.Setup | null;
  }

  export namespace UnstructuredIntegrationDef {
    /**
     * Arguments for Unstructured partition integration
     */
    export interface Arguments {
      file: string;

      filename?: string | null;

      partition_params?: unknown | null;
    }

    /**
     * Setup parameters for Unstructured integration
     */
    export interface Setup {
      unstructured_api_key: string;

      retry_config?: unknown | null;

      server?: string | null;

      server_url?: string | null;

      timeout_ms?: number | null;

      url_params?: unknown | null;
    }
  }

  /**
   * Algolia integration definition
   */
  export interface AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    arguments?: AlgoliaIntegrationDef.Arguments | null;

    method?: string | null;

    provider?: 'algolia';

    /**
     * Integration definition for Algolia
     */
    setup?: AlgoliaIntegrationDef.Setup | null;
  }

  export namespace AlgoliaIntegrationDef {
    /**
     * Arguments for Algolia Search
     */
    export interface Arguments {
      index_name: string;

      query: string;

      attributes_to_retrieve?: Array<string> | null;

      hits_per_page?: number;
    }

    /**
     * Integration definition for Algolia
     */
    export interface Setup {
      algolia_api_key: string;

      algolia_application_id: string;
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

Tools.ToolListResponsesOffsetPagination = ToolListResponsesOffsetPagination;

export declare namespace Tools {
  export {
    type ToolCreateResponse as ToolCreateResponse,
    type ToolUpdateResponse as ToolUpdateResponse,
    type ToolListResponse as ToolListResponse,
    type ToolResetResponse as ToolResetResponse,
    ToolListResponsesOffsetPagination as ToolListResponsesOffsetPagination,
    type ToolCreateParams as ToolCreateParams,
    type ToolUpdateParams as ToolUpdateParams,
    type ToolListParams as ToolListParams,
    type ToolResetParams as ToolResetParams,
  };
}
