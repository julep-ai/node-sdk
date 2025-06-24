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
  ): Core.APIPromise<ToolDeleteResponse> {
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

/**
 * The setup parameters for the browserbase integration
 */
export interface BrowserbaseSetupUpdate {
  api_key?: string | null;

  api_url?: string | null;

  connect_url?: string | null;

  project_id?: string | null;
}

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
  api_call?: Shared.APICallDef | null;

  bash_20241022?: Shared.Bash20241022Def | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: Shared.Computer20241022Def | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: Shared.FunctionDef | null;

  /**
   * Brave integration definition
   */
  integration?:
    | Shared.DummyIntegrationDef
    | Shared.BraveIntegrationDef
    | Shared.EmailIntegrationDef
    | Shared.SpiderIntegrationDef
    | Shared.WikipediaIntegrationDef
    | Shared.WeatherIntegrationDef
    | Shared.MailgunIntegrationDef
    | Shared.BrowserbaseContextIntegrationDef
    | Shared.BrowserbaseExtensionIntegrationDef
    | Shared.BrowserbaseListSessionsIntegrationDef
    | Shared.BrowserbaseCreateSessionIntegrationDef
    | Shared.BrowserbaseGetSessionIntegrationDef
    | Shared.BrowserbaseCompleteSessionIntegrationDef
    | Shared.BrowserbaseGetSessionLiveURLsIntegrationDef
    | Shared.RemoteBrowserIntegrationDef
    | Shared.LlamaParseIntegrationDef
    | Shared.FfmpegIntegrationDef
    | Shared.CloudinaryUploadIntegrationDef
    | Shared.CloudinaryEditIntegrationDef
    | Shared.ArxivIntegrationDef
    | Shared.UnstructuredIntegrationDef
    | Shared.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: Shared.SystemDef | null;

  text_editor_20241022?: Shared.TextEditor20241022Def | null;
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
  api_call?: Shared.APICallDef | null;

  bash_20241022?: Shared.Bash20241022Def | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: Shared.Computer20241022Def | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: Shared.FunctionDef | null;

  /**
   * Brave integration definition
   */
  integration?:
    | Shared.DummyIntegrationDef
    | Shared.BraveIntegrationDef
    | Shared.EmailIntegrationDef
    | Shared.SpiderIntegrationDef
    | Shared.WikipediaIntegrationDef
    | Shared.WeatherIntegrationDef
    | Shared.MailgunIntegrationDef
    | Shared.BrowserbaseContextIntegrationDef
    | Shared.BrowserbaseExtensionIntegrationDef
    | Shared.BrowserbaseListSessionsIntegrationDef
    | Shared.BrowserbaseCreateSessionIntegrationDef
    | Shared.BrowserbaseGetSessionIntegrationDef
    | Shared.BrowserbaseCompleteSessionIntegrationDef
    | Shared.BrowserbaseGetSessionLiveURLsIntegrationDef
    | Shared.RemoteBrowserIntegrationDef
    | Shared.LlamaParseIntegrationDef
    | Shared.FfmpegIntegrationDef
    | Shared.CloudinaryUploadIntegrationDef
    | Shared.CloudinaryEditIntegrationDef
    | Shared.ArxivIntegrationDef
    | Shared.UnstructuredIntegrationDef
    | Shared.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: Shared.SystemDef | null;

  text_editor_20241022?: Shared.TextEditor20241022Def | null;
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
  api_call?: Shared.APICallDef | null;

  bash_20241022?: Shared.Bash20241022Def | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: Shared.Computer20241022Def | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: Shared.FunctionDef | null;

  /**
   * Brave integration definition
   */
  integration?:
    | Shared.DummyIntegrationDef
    | Shared.BraveIntegrationDef
    | Shared.EmailIntegrationDef
    | Shared.SpiderIntegrationDef
    | Shared.WikipediaIntegrationDef
    | Shared.WeatherIntegrationDef
    | Shared.MailgunIntegrationDef
    | Shared.BrowserbaseContextIntegrationDef
    | Shared.BrowserbaseExtensionIntegrationDef
    | Shared.BrowserbaseListSessionsIntegrationDef
    | Shared.BrowserbaseCreateSessionIntegrationDef
    | Shared.BrowserbaseGetSessionIntegrationDef
    | Shared.BrowserbaseCompleteSessionIntegrationDef
    | Shared.BrowserbaseGetSessionLiveURLsIntegrationDef
    | Shared.RemoteBrowserIntegrationDef
    | Shared.LlamaParseIntegrationDef
    | Shared.FfmpegIntegrationDef
    | Shared.CloudinaryUploadIntegrationDef
    | Shared.CloudinaryEditIntegrationDef
    | Shared.ArxivIntegrationDef
    | Shared.UnstructuredIntegrationDef
    | Shared.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: Shared.SystemDef | null;

  text_editor_20241022?: Shared.TextEditor20241022Def | null;
}

export interface ToolDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
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
  api_call?: Shared.APICallDef | null;

  bash_20241022?: Shared.Bash20241022Def | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: Shared.Computer20241022Def | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: Shared.FunctionDef | null;

  /**
   * Brave integration definition
   */
  integration?:
    | Shared.DummyIntegrationDef
    | Shared.BraveIntegrationDef
    | Shared.EmailIntegrationDef
    | Shared.SpiderIntegrationDef
    | Shared.WikipediaIntegrationDef
    | Shared.WeatherIntegrationDef
    | Shared.MailgunIntegrationDef
    | Shared.BrowserbaseContextIntegrationDef
    | Shared.BrowserbaseExtensionIntegrationDef
    | Shared.BrowserbaseListSessionsIntegrationDef
    | Shared.BrowserbaseCreateSessionIntegrationDef
    | Shared.BrowserbaseGetSessionIntegrationDef
    | Shared.BrowserbaseCompleteSessionIntegrationDef
    | Shared.BrowserbaseGetSessionLiveURLsIntegrationDef
    | Shared.RemoteBrowserIntegrationDef
    | Shared.LlamaParseIntegrationDef
    | Shared.FfmpegIntegrationDef
    | Shared.CloudinaryUploadIntegrationDef
    | Shared.CloudinaryEditIntegrationDef
    | Shared.ArxivIntegrationDef
    | Shared.UnstructuredIntegrationDef
    | Shared.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: Shared.SystemDef | null;

  text_editor_20241022?: Shared.TextEditor20241022Def | null;
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
  api_call?: Shared.APICallDef | null;

  bash_20241022?: Shared.Bash20241022Def | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: Shared.Computer20241022Def | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: Shared.FunctionDef | null;

  /**
   * Brave integration definition
   */
  integration?:
    | Shared.DummyIntegrationDef
    | Shared.BraveIntegrationDef
    | Shared.EmailIntegrationDef
    | Shared.SpiderIntegrationDef
    | Shared.WikipediaIntegrationDef
    | Shared.WeatherIntegrationDef
    | Shared.MailgunIntegrationDef
    | Shared.BrowserbaseContextIntegrationDef
    | Shared.BrowserbaseExtensionIntegrationDef
    | Shared.BrowserbaseListSessionsIntegrationDef
    | Shared.BrowserbaseCreateSessionIntegrationDef
    | Shared.BrowserbaseGetSessionIntegrationDef
    | Shared.BrowserbaseCompleteSessionIntegrationDef
    | Shared.BrowserbaseGetSessionLiveURLsIntegrationDef
    | Shared.RemoteBrowserIntegrationDef
    | Shared.LlamaParseIntegrationDef
    | Shared.FfmpegIntegrationDef
    | Shared.CloudinaryUploadIntegrationDef
    | Shared.CloudinaryEditIntegrationDef
    | Shared.ArxivIntegrationDef
    | Shared.UnstructuredIntegrationDef
    | Shared.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: Shared.SystemDef | null;

  text_editor_20241022?: Shared.TextEditor20241022Def | null;
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
  function?: Shared.FunctionDef | null;

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
    | ToolUpdateParams.MailgunIntegrationDefUpdate
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

    cookies?: { [key: string]: string } | null;

    data?: unknown | null;

    files?: unknown | null;

    follow_redirects?: boolean | null;

    headers?: { [key: string]: string } | null;

    include_response_content?: boolean;

    json?: unknown | null;

    method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE' | null;

    params?: string | unknown | null;

    schema?: unknown | null;

    secrets?: { [key: string]: APICall.Secrets } | null;

    timeout?: number | null;

    url?: string | null;
  }

  export namespace APICall {
    export interface Secrets {
      name?: string | null;
    }
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
   * Mailgun integration definition
   */
  export interface MailgunIntegrationDefUpdate {
    /**
     * Arguments for mailgun.send_email method
     */
    arguments?: MailgunIntegrationDefUpdate.Arguments | null;

    method?: 'send_email' | null;

    provider?: 'mailgun';

    /**
     * Setup parameters for Mailgun integration
     */
    setup?: MailgunIntegrationDefUpdate.Setup | null;
  }

  export namespace MailgunIntegrationDefUpdate {
    /**
     * Arguments for mailgun.send_email method
     */
    export interface Arguments {
      bcc?: string | null;

      body?: string | null;

      cc?: string | null;

      from?: string | null;

      subject?: string | null;

      to?: string | null;
    }

    /**
     * Setup parameters for Mailgun integration
     */
    export interface Setup {
      api_key?: string | null;
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
    setup?: ToolsAPI.BrowserbaseSetupUpdate | null;
  }

  export namespace BrowserbaseContextIntegrationDefUpdate {
    export interface Arguments {
      projectId?: string | null;
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
    setup?: ToolsAPI.BrowserbaseSetupUpdate | null;
  }

  export namespace BrowserbaseExtensionIntegrationDefUpdate {
    export interface Arguments {
      ref?: string | null;

      repositoryName?: string | null;
    }
  }

  /**
   * browserbase list sessions integration definition
   */
  export interface BrowserbaseListSessionsIntegrationDefUpdate {
    arguments?: Shared.BrowserbaseListSessionsArguments | null;

    method?: 'list_sessions';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: ToolsAPI.BrowserbaseSetupUpdate | null;
  }

  /**
   * browserbase create session integration definition
   */
  export interface BrowserbaseCreateSessionIntegrationDefUpdate {
    arguments?: Shared.BrowserbaseCreateSessionArguments | null;

    method?: 'create_session';

    provider?: 'browserbase';

    /**
     * The setup parameters for the browserbase integration
     */
    setup?: ToolsAPI.BrowserbaseSetupUpdate | null;
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
    setup?: ToolsAPI.BrowserbaseSetupUpdate | null;
  }

  export namespace BrowserbaseGetSessionIntegrationDefUpdate {
    export interface Arguments {
      id?: string | null;
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
    setup?: ToolsAPI.BrowserbaseSetupUpdate | null;
  }

  export namespace BrowserbaseCompleteSessionIntegrationDefUpdate {
    export interface Arguments {
      id?: string | null;

      status?: 'REQUEST_RELEASE';
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
    setup?: ToolsAPI.BrowserbaseSetupUpdate | null;
  }

  export namespace BrowserbaseGetSessionLiveURLsIntegrationDefUpdate {
    export interface Arguments {
      id?: string | null;
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
    setup?: Shared.RemoteBrowserSetup | null;
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
  api_call?: Shared.APICallDef | null;

  bash_20241022?: Shared.Bash20241022Def | null;

  /**
   * Anthropic new tools
   */
  computer_20241022?: Shared.Computer20241022Def | null;

  description?: string | null;

  /**
   * Function definition
   */
  function?: Shared.FunctionDef | null;

  /**
   * Brave integration definition
   */
  integration?:
    | Shared.DummyIntegrationDef
    | Shared.BraveIntegrationDef
    | Shared.EmailIntegrationDef
    | Shared.SpiderIntegrationDef
    | Shared.WikipediaIntegrationDef
    | Shared.WeatherIntegrationDef
    | Shared.MailgunIntegrationDef
    | Shared.BrowserbaseContextIntegrationDef
    | Shared.BrowserbaseExtensionIntegrationDef
    | Shared.BrowserbaseListSessionsIntegrationDef
    | Shared.BrowserbaseCreateSessionIntegrationDef
    | Shared.BrowserbaseGetSessionIntegrationDef
    | Shared.BrowserbaseCompleteSessionIntegrationDef
    | Shared.BrowserbaseGetSessionLiveURLsIntegrationDef
    | Shared.RemoteBrowserIntegrationDef
    | Shared.LlamaParseIntegrationDef
    | Shared.FfmpegIntegrationDef
    | Shared.CloudinaryUploadIntegrationDef
    | Shared.CloudinaryEditIntegrationDef
    | Shared.ArxivIntegrationDef
    | Shared.UnstructuredIntegrationDef
    | Shared.AlgoliaIntegrationDef
    | null;

  /**
   * System definition
   */
  system?: Shared.SystemDef | null;

  text_editor_20241022?: Shared.TextEditor20241022Def | null;
}

Tools.ToolListResponsesOffsetPagination = ToolListResponsesOffsetPagination;

export declare namespace Tools {
  export {
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
}
