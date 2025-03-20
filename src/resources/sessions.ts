// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as DocsAPI from './docs';
import * as Shared from './shared';
import { OffsetPagination, type OffsetPaginationParams } from '../pagination';

export class Sessions extends APIResource {
  /**
   * Create Session
   */
  create(body: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.post('/sessions', { body, ...options });
  }

  /**
   * Patch Session
   */
  update(
    sessionId: string,
    body: SessionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.patch(`/sessions/${sessionId}`, { body, ...options });
  }

  /**
   * List Sessions
   */
  list(
    query?: SessionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsOffsetPagination, Session>;
  list(options?: Core.RequestOptions): Core.PagePromise<SessionsOffsetPagination, Session>;
  list(
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<SessionsOffsetPagination, Session> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/sessions', SessionsOffsetPagination, { query, ...options });
  }

  /**
   * Delete Session
   */
  delete(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ResourceDeleted> {
    return this._client.delete(`/sessions/${sessionId}`, options);
  }

  /**
   * Initiates a chat session.
   *
   * Parameters: developer (Developer): The developer associated with the chat
   * session. session_id (UUID): The unique identifier of the chat session.
   * chat_input (ChatInput): The chat input data. background_tasks (BackgroundTasks):
   * The background tasks to run. x_custom_api_key (Optional[str]): The custom API
   * key.
   *
   * Returns: ChatResponse: The chat response.
   */
  chat(
    sessionId: string,
    params: SessionChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionChatResponse> {
    const { connection_pool, 'X-Custom-Api-Key': xCustomAPIKey, ...body } = params;
    return this._client.post(`/sessions/${sessionId}/chat`, {
      query: { connection_pool },
      body,
      ...options,
      headers: {
        ...(xCustomAPIKey != null ? { 'X-Custom-Api-Key': xCustomAPIKey } : undefined),
        ...options?.headers,
      },
    });
  }

  /**
   * Create Or Update Session
   */
  createOrUpdate(
    sessionId: string,
    body: SessionCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.post(`/sessions/${sessionId}`, { body, ...options });
  }

  /**
   * Get Session
   */
  get(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.get(`/sessions/${sessionId}`, options);
  }

  /**
   * Get Session History
   */
  history(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<History> {
    return this._client.get(`/sessions/${sessionId}/history`, options);
  }

  /**
   * Renders a chat input.
   *
   * Parameters: developer (Developer): The developer associated with the chat
   * session. session_id (UUID): The unique identifier of the chat session.
   * chat_input (ChatInput): The chat input data.
   *
   * Returns: RenderResponse: The rendered chat input.
   */
  render(
    sessionId: string,
    body: SessionRenderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionRenderResponse> {
    return this._client.post(`/sessions/${sessionId}/render`, { body, ...options });
  }

  /**
   * Update Session
   */
  reset(
    sessionId: string,
    body: SessionResetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Session> {
    return this._client.put(`/sessions/${sessionId}`, { body, ...options });
  }
}

export class SessionsOffsetPagination extends OffsetPagination<Session> {}

export interface ChatInput {
  messages: Array<ChatInput.Message>;

  agent?: string | null;

  frequency_penalty?: number | null;

  length_penalty?: number | null;

  logit_bias?: Record<string, number> | null;

  max_tokens?: number | null;

  min_p?: number | null;

  model?: string | null;

  presence_penalty?: number | null;

  recall?: boolean;

  remember?: boolean;

  repetition_penalty?: number | null;

  response_format?:
    | ChatInput.SimpleCompletionResponseFormat
    | ChatInput.SchemaCompletionResponseFormat
    | null;

  save?: boolean;

  seed?: number | null;

  stop?: Array<string>;

  stream?: boolean;

  temperature?: number | null;

  tool_choice?: 'auto' | 'none' | ChatInput.NamedToolChoice | null;

  tools?: Array<ChatInput.Tool> | null;

  top_p?: number | null;
}

export namespace ChatInput {
  export interface Message {
    role: 'user' | 'assistant' | 'system' | 'tool';

    content?:
      | string
      | Array<string>
      | Array<Message.Content | Message.ContentModel7 | Message.AgentsAPIAutogenChatContentModelInput>
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | Message.ChosenFunctionCall
      | Message.ChosenComputer20241022
      | Message.ChosenTextEditor20241022
      | Message.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface Content {
      text: string;

      type?: 'text';
    }

    export interface ContentModel7 {
      /**
       * The image URL
       */
      image_url: ContentModel7.ImageURL;

      type?: 'image_url';
    }

    export namespace ContentModel7 {
      /**
       * The image URL
       */
      export interface ImageURL {
        url: string;

        detail?: 'low' | 'high' | 'auto';
      }
    }

    /**
     * Anthropic image content part
     */
    export interface AgentsAPIAutogenChatContentModelInput {
      content:
        | Array<AgentsAPIAutogenChatContentModelInput.UnionMember0>
        | Array<AgentsAPIAutogenChatContentModelInput.UnionMember1>;

      tool_use_id: string;

      type?: 'tool_result';
    }

    export namespace AgentsAPIAutogenChatContentModelInput {
      export interface UnionMember0 {
        text: string;

        type?: 'text';
      }

      export interface UnionMember1 {
        source: UnionMember1.Source;

        type?: 'image';
      }

      export namespace UnionMember1 {
        export interface Source {
          data: string;

          media_type: string;

          type?: 'base64';
        }
      }
    }

    export interface ChosenFunctionCall {
      function: ChosenFunctionCall.Function;

      id?: string | null;

      api_call?: unknown;

      bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

      computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

      integration?: unknown;

      system?: unknown;

      text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

      type?: 'function';
    }

    export namespace ChosenFunctionCall {
      export interface Function {
        name: string;

        arguments?: string | null;
      }

      export interface Bash20241022 {
        command?: string | null;

        restart?: boolean;
      }

      export interface Computer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface TextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }
    }

    export interface ChosenComputer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface ChosenTextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }

    export interface ChosenBash20241022 {
      command?: string | null;

      restart?: boolean;
    }
  }

  export interface SimpleCompletionResponseFormat {
    type?: 'text' | 'json_object';
  }

  export interface SchemaCompletionResponseFormat {
    json_schema: unknown;

    type?: 'json_schema';
  }

  export interface NamedToolChoice {
    function?: NamedToolChoice.Function | null;
  }

  export namespace NamedToolChoice {
    export interface Function {
      name: string;

      arguments?: string | null;
    }
  }

  /**
   * Payload for creating a tool
   */
  export interface Tool {
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
    api_call?: Tool.APICall | null;

    bash_20241022?: Tool.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: Tool.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: Tool.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | Tool.DummyIntegrationDef
      | Tool.BraveIntegrationDef
      | Tool.EmailIntegrationDef
      | Tool.SpiderIntegrationDef
      | Tool.WikipediaIntegrationDef
      | Tool.WeatherIntegrationDef
      | Tool.BrowserbaseContextIntegrationDef
      | Tool.BrowserbaseExtensionIntegrationDef
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseCompleteSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
      | Tool.UnstructuredIntegrationDef
      | Tool.AlgoliaIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: Tool.System | null;

    text_editor_20241022?: Tool.TextEditor20241022 | null;
  }

  export namespace Tool {
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
}

export interface ChatResponse {
  id: string;

  choices: Array<ChatResponse.SingleChatOutput | ChatResponse.MultipleChatOutput>;

  created_at: string;

  docs?: Array<ChatResponse.Doc>;

  jobs?: Array<string>;

  /**
   * Usage statistics for the completion request
   */
  usage?: ChatResponse.Usage | null;
}

export namespace ChatResponse {
  /**
   * The output returned by the model. Note that, depending on the model provider,
   * they might return more than one message.
   */
  export interface SingleChatOutput {
    index: number;

    message: SingleChatOutput.Message;

    finish_reason?: 'stop' | 'length' | 'content_filter' | 'tool_calls';

    logprobs?: SingleChatOutput.Logprobs | null;

    tool_calls?: Array<
      | SingleChatOutput.ChosenFunctionCall
      | SingleChatOutput.ChosenComputer20241022
      | SingleChatOutput.ChosenTextEditor20241022
      | SingleChatOutput.ChosenBash20241022
    > | null;
  }

  export namespace SingleChatOutput {
    export interface Message {
      role: 'user' | 'assistant' | 'system' | 'tool';

      id?: string | null;

      content?:
        | string
        | Array<string>
        | Array<Message.AgentsAPIAutogenChatContentModel3 | Message.ContentModel7 | Message.ContentModel4>
        | null;

      created_at?: string | null;

      name?: string | null;

      tool_call_id?: string | null;

      tool_calls?: Array<
        | Message.ChosenFunctionCall
        | Message.ChosenComputer20241022
        | Message.ChosenTextEditor20241022
        | Message.ChosenBash20241022
      > | null;
    }

    export namespace Message {
      export interface AgentsAPIAutogenChatContentModel3 {
        text: string;

        type?: 'text';
      }

      export interface ContentModel7 {
        /**
         * The image URL
         */
        image_url: ContentModel7.ImageURL;

        type?: 'image_url';
      }

      export namespace ContentModel7 {
        /**
         * The image URL
         */
        export interface ImageURL {
          url: string;

          detail?: 'low' | 'high' | 'auto';
        }
      }

      /**
       * Anthropic image content part
       */
      export interface ContentModel4 {
        content: Array<ContentModel4.UnionMember0> | Array<ContentModel4.UnionMember1>;

        tool_use_id: string;

        type?: 'tool_result';
      }

      export namespace ContentModel4 {
        export interface UnionMember0 {
          text: string;

          type?: 'text';
        }

        export interface UnionMember1 {
          source: UnionMember1.Source;

          type?: 'image';
        }

        export namespace UnionMember1 {
          export interface Source {
            data: string;

            media_type: string;

            type?: 'base64';
          }
        }
      }

      export interface ChosenFunctionCall {
        function: ChosenFunctionCall.Function;

        id?: string | null;

        api_call?: unknown;

        bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

        computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

        integration?: unknown;

        system?: unknown;

        text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

        type?: 'function';
      }

      export namespace ChosenFunctionCall {
        export interface Function {
          name: string;

          arguments?: string | null;
        }

        export interface Bash20241022 {
          command?: string | null;

          restart?: boolean;
        }

        export interface Computer20241022 {
          action:
            | 'key'
            | 'type'
            | 'cursor_position'
            | 'mouse_move'
            | 'left_click'
            | 'right_click'
            | 'middle_click'
            | 'double_click'
            | 'screenshot';

          coordinate?: Array<number> | null;

          text?: string | null;
        }

        export interface TextEditor20241022 {
          command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

          path: string;

          file_text?: string | null;

          insert_line?: number | null;

          new_str?: string | null;

          old_str?: string | null;

          view_range?: Array<number> | null;
        }
      }

      export interface ChosenComputer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface ChosenTextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }

      export interface ChosenBash20241022 {
        command?: string | null;

        restart?: boolean;
      }
    }

    export interface Logprobs {
      content: Array<Logprobs.Content> | null;
    }

    export namespace Logprobs {
      export interface Content {
        token: string;

        logprob: number;

        top_logprobs: Array<Content.TopLogprob>;

        bytes?: Array<number> | null;
      }

      export namespace Content {
        export interface TopLogprob {
          token: string;

          logprob: number;

          bytes?: Array<number> | null;
        }
      }
    }

    export interface ChosenFunctionCall {
      function: ChosenFunctionCall.Function;

      id?: string | null;

      api_call?: unknown;

      bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

      computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

      integration?: unknown;

      system?: unknown;

      text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

      type?: 'function';
    }

    export namespace ChosenFunctionCall {
      export interface Function {
        name: string;

        arguments?: string | null;
      }

      export interface Bash20241022 {
        command?: string | null;

        restart?: boolean;
      }

      export interface Computer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface TextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }
    }

    export interface ChosenComputer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface ChosenTextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }

    export interface ChosenBash20241022 {
      command?: string | null;

      restart?: boolean;
    }
  }

  /**
   * The output returned by the model. Note that, depending on the model provider,
   * they might return more than one message.
   */
  export interface MultipleChatOutput {
    index: number;

    messages: Array<MultipleChatOutput.Message>;

    finish_reason?: 'stop' | 'length' | 'content_filter' | 'tool_calls';

    logprobs?: MultipleChatOutput.Logprobs | null;

    tool_calls?: Array<
      | MultipleChatOutput.ChosenFunctionCall
      | MultipleChatOutput.ChosenComputer20241022
      | MultipleChatOutput.ChosenTextEditor20241022
      | MultipleChatOutput.ChosenBash20241022
    > | null;
  }

  export namespace MultipleChatOutput {
    export interface Message {
      role: 'user' | 'assistant' | 'system' | 'tool';

      id?: string | null;

      content?:
        | string
        | Array<string>
        | Array<Message.AgentsAPIAutogenChatContentModel3 | Message.ContentModel7 | Message.ContentModel4>
        | null;

      created_at?: string | null;

      name?: string | null;

      tool_call_id?: string | null;

      tool_calls?: Array<
        | Message.ChosenFunctionCall
        | Message.ChosenComputer20241022
        | Message.ChosenTextEditor20241022
        | Message.ChosenBash20241022
      > | null;
    }

    export namespace Message {
      export interface AgentsAPIAutogenChatContentModel3 {
        text: string;

        type?: 'text';
      }

      export interface ContentModel7 {
        /**
         * The image URL
         */
        image_url: ContentModel7.ImageURL;

        type?: 'image_url';
      }

      export namespace ContentModel7 {
        /**
         * The image URL
         */
        export interface ImageURL {
          url: string;

          detail?: 'low' | 'high' | 'auto';
        }
      }

      /**
       * Anthropic image content part
       */
      export interface ContentModel4 {
        content: Array<ContentModel4.UnionMember0> | Array<ContentModel4.UnionMember1>;

        tool_use_id: string;

        type?: 'tool_result';
      }

      export namespace ContentModel4 {
        export interface UnionMember0 {
          text: string;

          type?: 'text';
        }

        export interface UnionMember1 {
          source: UnionMember1.Source;

          type?: 'image';
        }

        export namespace UnionMember1 {
          export interface Source {
            data: string;

            media_type: string;

            type?: 'base64';
          }
        }
      }

      export interface ChosenFunctionCall {
        function: ChosenFunctionCall.Function;

        id?: string | null;

        api_call?: unknown;

        bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

        computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

        integration?: unknown;

        system?: unknown;

        text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

        type?: 'function';
      }

      export namespace ChosenFunctionCall {
        export interface Function {
          name: string;

          arguments?: string | null;
        }

        export interface Bash20241022 {
          command?: string | null;

          restart?: boolean;
        }

        export interface Computer20241022 {
          action:
            | 'key'
            | 'type'
            | 'cursor_position'
            | 'mouse_move'
            | 'left_click'
            | 'right_click'
            | 'middle_click'
            | 'double_click'
            | 'screenshot';

          coordinate?: Array<number> | null;

          text?: string | null;
        }

        export interface TextEditor20241022 {
          command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

          path: string;

          file_text?: string | null;

          insert_line?: number | null;

          new_str?: string | null;

          old_str?: string | null;

          view_range?: Array<number> | null;
        }
      }

      export interface ChosenComputer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface ChosenTextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }

      export interface ChosenBash20241022 {
        command?: string | null;

        restart?: boolean;
      }
    }

    export interface Logprobs {
      content: Array<Logprobs.Content> | null;
    }

    export namespace Logprobs {
      export interface Content {
        token: string;

        logprob: number;

        top_logprobs: Array<Content.TopLogprob>;

        bytes?: Array<number> | null;
      }

      export namespace Content {
        export interface TopLogprob {
          token: string;

          logprob: number;

          bytes?: Array<number> | null;
        }
      }
    }

    export interface ChosenFunctionCall {
      function: ChosenFunctionCall.Function;

      id?: string | null;

      api_call?: unknown;

      bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

      computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

      integration?: unknown;

      system?: unknown;

      text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

      type?: 'function';
    }

    export namespace ChosenFunctionCall {
      export interface Function {
        name: string;

        arguments?: string | null;
      }

      export interface Bash20241022 {
        command?: string | null;

        restart?: boolean;
      }

      export interface Computer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface TextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }
    }

    export interface ChosenComputer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface ChosenTextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }

    export interface ChosenBash20241022 {
      command?: string | null;

      restart?: boolean;
    }
  }

  export interface Doc {
    id: string;

    owner: Doc.Owner;

    snippet: DocsAPI.Snippet;

    distance?: number | null;

    metadata?: unknown | null;

    title?: string | null;
  }

  export namespace Doc {
    export interface Owner {
      id: string;

      role: 'user' | 'agent';
    }
  }

  /**
   * Usage statistics for the completion request
   */
  export interface Usage {
    completion_tokens?: number | null;

    prompt_tokens?: number | null;

    total_tokens?: number | null;
  }
}

export interface Entry {
  id: string;

  content:
    | Array<
        Entry.Content | Entry.AgentsAPIAutogenEntriesContentModel3 | Entry.AgentsAPIAutogenEntriesContentModel
      >
    | Entry.Tool
    | Entry.ChosenFunctionCall
    | Entry.ChosenComputer20241022
    | Entry.ChosenTextEditor20241022
    | Entry.ChosenBash20241022
    | string
    | Entry.ToolResponse
    | Array<
        | Array<
            | Entry.AgentsAPIAutogenEntriesContentModel1
            | Entry.AgentsAPIAutogenEntriesContentModel3
            | Entry.AgentsAPIAutogenEntriesContentModel2
          >
        | Entry.Tool
        | Entry.ChosenFunctionCall
        | Entry.ChosenComputer20241022
        | Entry.ChosenTextEditor20241022
        | Entry.ChosenBash20241022
        | string
        | Entry.ToolResponse
      >;

  created_at: string;

  role: 'user' | 'assistant' | 'system' | 'tool';

  source: 'api_request' | 'api_response' | 'tool_response' | 'internal' | 'summarizer' | 'meta';

  timestamp: string;

  token_count: number;

  tokenizer: string;

  model?: string;

  name?: string | null;

  tool_call_id?: string | null;

  tool_calls?: Array<
    | Entry.ChosenFunctionCall
    | Entry.ChosenComputer20241022
    | Entry.ChosenTextEditor20241022
    | Entry.ChosenBash20241022
  > | null;
}

export namespace Entry {
  export interface Content {
    text: string;

    type?: 'text';
  }

  export interface AgentsAPIAutogenEntriesContentModel3 {
    /**
     * The image URL
     */
    image_url: AgentsAPIAutogenEntriesContentModel3.ImageURL;

    type?: 'image_url';
  }

  export namespace AgentsAPIAutogenEntriesContentModel3 {
    /**
     * The image URL
     */
    export interface ImageURL {
      url: string;

      detail?: 'low' | 'high' | 'auto';
    }
  }

  /**
   * Anthropic image content part
   */
  export interface AgentsAPIAutogenEntriesContentModel {
    content:
      | Array<AgentsAPIAutogenEntriesContentModel.UnionMember0>
      | Array<AgentsAPIAutogenEntriesContentModel.UnionMember1>;

    tool_use_id: string;

    type?: 'tool_result';
  }

  export namespace AgentsAPIAutogenEntriesContentModel {
    export interface UnionMember0 {
      text: string;

      type?: 'text';
    }

    export interface UnionMember1 {
      source: UnionMember1.Source;

      type?: 'image';
    }

    export namespace UnionMember1 {
      export interface Source {
        data: string;

        media_type: string;

        type?: 'base64';
      }
    }
  }

  export interface Tool {
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
    api_call?: Tool.APICall | null;

    bash_20241022?: Tool.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: Tool.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: Tool.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | Tool.DummyIntegrationDef
      | Tool.BraveIntegrationDef
      | Tool.EmailIntegrationDef
      | Tool.SpiderIntegrationDef
      | Tool.WikipediaIntegrationDef
      | Tool.WeatherIntegrationDef
      | Tool.BrowserbaseContextIntegrationDef
      | Tool.BrowserbaseExtensionIntegrationDef
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseCompleteSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
      | Tool.UnstructuredIntegrationDef
      | Tool.AlgoliaIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: Tool.System | null;

    text_editor_20241022?: Tool.TextEditor20241022 | null;
  }

  export namespace Tool {
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

  export interface ChosenFunctionCall {
    function: ChosenFunctionCall.Function;

    id?: string | null;

    api_call?: unknown;

    bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

    computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

    integration?: unknown;

    system?: unknown;

    text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

    type?: 'function';
  }

  export namespace ChosenFunctionCall {
    export interface Function {
      name: string;

      arguments?: string | null;
    }

    export interface Bash20241022 {
      command?: string | null;

      restart?: boolean;
    }

    export interface Computer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface TextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }
  }

  export interface ChosenComputer20241022 {
    action:
      | 'key'
      | 'type'
      | 'cursor_position'
      | 'mouse_move'
      | 'left_click'
      | 'right_click'
      | 'middle_click'
      | 'double_click'
      | 'screenshot';

    coordinate?: Array<number> | null;

    text?: string | null;
  }

  export interface ChosenTextEditor20241022 {
    command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

    path: string;

    file_text?: string | null;

    insert_line?: number | null;

    new_str?: string | null;

    old_str?: string | null;

    view_range?: Array<number> | null;
  }

  export interface ChosenBash20241022 {
    command?: string | null;

    restart?: boolean;
  }

  export interface ToolResponse {
    id: string;

    output: unknown;
  }

  export interface AgentsAPIAutogenEntriesContentModel1 {
    text: string;

    type?: 'text';
  }

  export interface AgentsAPIAutogenEntriesContentModel3 {
    /**
     * The image URL
     */
    image_url: AgentsAPIAutogenEntriesContentModel3.ImageURL;

    type?: 'image_url';
  }

  export namespace AgentsAPIAutogenEntriesContentModel3 {
    /**
     * The image URL
     */
    export interface ImageURL {
      url: string;

      detail?: 'low' | 'high' | 'auto';
    }
  }

  /**
   * Anthropic image content part
   */
  export interface AgentsAPIAutogenEntriesContentModel2 {
    content:
      | Array<AgentsAPIAutogenEntriesContentModel2.UnionMember0>
      | Array<AgentsAPIAutogenEntriesContentModel2.UnionMember1>;

    tool_use_id: string;

    type?: 'tool_result';
  }

  export namespace AgentsAPIAutogenEntriesContentModel2 {
    export interface UnionMember0 {
      text: string;

      type?: 'text';
    }

    export interface UnionMember1 {
      source: UnionMember1.Source;

      type?: 'image';
    }

    export namespace UnionMember1 {
      export interface Source {
        data: string;

        media_type: string;

        type?: 'base64';
      }
    }
  }

  export interface Tool {
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
    api_call?: Tool.APICall | null;

    bash_20241022?: Tool.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: Tool.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: Tool.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | Tool.DummyIntegrationDef
      | Tool.BraveIntegrationDef
      | Tool.EmailIntegrationDef
      | Tool.SpiderIntegrationDef
      | Tool.WikipediaIntegrationDef
      | Tool.WeatherIntegrationDef
      | Tool.BrowserbaseContextIntegrationDef
      | Tool.BrowserbaseExtensionIntegrationDef
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseCompleteSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
      | Tool.UnstructuredIntegrationDef
      | Tool.AlgoliaIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: Tool.System | null;

    text_editor_20241022?: Tool.TextEditor20241022 | null;
  }

  export namespace Tool {
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

  export interface ChosenFunctionCall {
    function: ChosenFunctionCall.Function;

    id?: string | null;

    api_call?: unknown;

    bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

    computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

    integration?: unknown;

    system?: unknown;

    text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

    type?: 'function';
  }

  export namespace ChosenFunctionCall {
    export interface Function {
      name: string;

      arguments?: string | null;
    }

    export interface Bash20241022 {
      command?: string | null;

      restart?: boolean;
    }

    export interface Computer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface TextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }
  }

  export interface ChosenComputer20241022 {
    action:
      | 'key'
      | 'type'
      | 'cursor_position'
      | 'mouse_move'
      | 'left_click'
      | 'right_click'
      | 'middle_click'
      | 'double_click'
      | 'screenshot';

    coordinate?: Array<number> | null;

    text?: string | null;
  }

  export interface ChosenTextEditor20241022 {
    command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

    path: string;

    file_text?: string | null;

    insert_line?: number | null;

    new_str?: string | null;

    old_str?: string | null;

    view_range?: Array<number> | null;
  }

  export interface ChosenBash20241022 {
    command?: string | null;

    restart?: boolean;
  }

  export interface ToolResponse {
    id: string;

    output: unknown;
  }

  export interface ChosenFunctionCall {
    function: ChosenFunctionCall.Function;

    id?: string | null;

    api_call?: unknown;

    bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

    computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

    integration?: unknown;

    system?: unknown;

    text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

    type?: 'function';
  }

  export namespace ChosenFunctionCall {
    export interface Function {
      name: string;

      arguments?: string | null;
    }

    export interface Bash20241022 {
      command?: string | null;

      restart?: boolean;
    }

    export interface Computer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface TextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }
  }

  export interface ChosenComputer20241022 {
    action:
      | 'key'
      | 'type'
      | 'cursor_position'
      | 'mouse_move'
      | 'left_click'
      | 'right_click'
      | 'middle_click'
      | 'double_click'
      | 'screenshot';

    coordinate?: Array<number> | null;

    text?: string | null;
  }

  export interface ChosenTextEditor20241022 {
    command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

    path: string;

    file_text?: string | null;

    insert_line?: number | null;

    new_str?: string | null;

    old_str?: string | null;

    view_range?: Array<number> | null;
  }

  export interface ChosenBash20241022 {
    command?: string | null;

    restart?: boolean;
  }
}

export interface History {
  created_at: string;

  entries: Array<Entry>;

  relations: Array<History.Relation>;

  session_id: string;
}

export namespace History {
  export interface Relation {
    head: string;

    relation: string;

    tail: string;
  }
}

export interface Session {
  id: string;

  created_at: string;

  updated_at: string;

  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  kind?: string | null;

  metadata?: unknown | null;

  recall_options?: Session.VectorDocSearch | Session.TextOnlyDocSearch | Session.HybridDocSearch | null;

  render_templates?: boolean;

  situation?: string | null;

  summary?: string | null;

  system_template?: string | null;

  token_budget?: number | null;
}

export namespace Session {
  export interface VectorDocSearch {
    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'vector';

    num_search_messages?: number;
  }

  export interface TextOnlyDocSearch {
    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mode?: 'text';

    num_search_messages?: number;
  }

  export interface HybridDocSearch {
    alpha?: number;

    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'hybrid';

    num_search_messages?: number;
  }
}

export type SessionChatResponse = SessionChatResponse.ChunkChatResponse | ChatResponse;

export namespace SessionChatResponse {
  export interface ChunkChatResponse {
    id: string;

    choices: Array<ChunkChatResponse.Choice>;

    created_at: string;

    docs?: Array<ChunkChatResponse.Doc>;

    jobs?: Array<string>;

    /**
     * Usage statistics for the completion request
     */
    usage?: ChunkChatResponse.Usage | null;
  }

  export namespace ChunkChatResponse {
    /**
     * Streaming chat completion output
     */
    export interface Choice {
      /**
       * The message generated by the model
       */
      delta: Choice.Delta;

      index: number;

      finish_reason?: 'stop' | 'length' | 'content_filter' | 'tool_calls';

      logprobs?: Choice.Logprobs | null;

      tool_calls?: Array<
        | Choice.ChosenFunctionCall
        | Choice.ChosenComputer20241022
        | Choice.ChosenTextEditor20241022
        | Choice.ChosenBash20241022
      > | null;
    }

    export namespace Choice {
      /**
       * The message generated by the model
       */
      export interface Delta {
        role: 'user' | 'assistant' | 'system' | 'tool';

        content?:
          | string
          | Array<string>
          | Array<
              | Delta.AgentsAPIAutogenChatContentModel1
              | Delta.ContentModel7
              | Delta.AgentsAPIAutogenChatContentModel2
            >
          | null;

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | Delta.ChosenFunctionCall
          | Delta.ChosenComputer20241022
          | Delta.ChosenTextEditor20241022
          | Delta.ChosenBash20241022
        > | null;
      }

      export namespace Delta {
        export interface AgentsAPIAutogenChatContentModel1 {
          text: string;

          type?: 'text';
        }

        export interface ContentModel7 {
          /**
           * The image URL
           */
          image_url: ContentModel7.ImageURL;

          type?: 'image_url';
        }

        export namespace ContentModel7 {
          /**
           * The image URL
           */
          export interface ImageURL {
            url: string;

            detail?: 'low' | 'high' | 'auto';
          }
        }

        /**
         * Anthropic image content part
         */
        export interface AgentsAPIAutogenChatContentModel2 {
          content:
            | Array<AgentsAPIAutogenChatContentModel2.UnionMember0>
            | Array<AgentsAPIAutogenChatContentModel2.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace AgentsAPIAutogenChatContentModel2 {
          export interface UnionMember0 {
            text: string;

            type?: 'text';
          }

          export interface UnionMember1 {
            source: UnionMember1.Source;

            type?: 'image';
          }

          export namespace UnionMember1 {
            export interface Source {
              data: string;

              media_type: string;

              type?: 'base64';
            }
          }
        }

        export interface ChosenFunctionCall {
          function: ChosenFunctionCall.Function;

          id?: string | null;

          api_call?: unknown;

          bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

          computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

          integration?: unknown;

          system?: unknown;

          text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

          type?: 'function';
        }

        export namespace ChosenFunctionCall {
          export interface Function {
            name: string;

            arguments?: string | null;
          }

          export interface Bash20241022 {
            command?: string | null;

            restart?: boolean;
          }

          export interface Computer20241022 {
            action:
              | 'key'
              | 'type'
              | 'cursor_position'
              | 'mouse_move'
              | 'left_click'
              | 'right_click'
              | 'middle_click'
              | 'double_click'
              | 'screenshot';

            coordinate?: Array<number> | null;

            text?: string | null;
          }

          export interface TextEditor20241022 {
            command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

            path: string;

            file_text?: string | null;

            insert_line?: number | null;

            new_str?: string | null;

            old_str?: string | null;

            view_range?: Array<number> | null;
          }
        }

        export interface ChosenComputer20241022 {
          action:
            | 'key'
            | 'type'
            | 'cursor_position'
            | 'mouse_move'
            | 'left_click'
            | 'right_click'
            | 'middle_click'
            | 'double_click'
            | 'screenshot';

          coordinate?: Array<number> | null;

          text?: string | null;
        }

        export interface ChosenTextEditor20241022 {
          command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

          path: string;

          file_text?: string | null;

          insert_line?: number | null;

          new_str?: string | null;

          old_str?: string | null;

          view_range?: Array<number> | null;
        }

        export interface ChosenBash20241022 {
          command?: string | null;

          restart?: boolean;
        }
      }

      export interface Logprobs {
        content: Array<Logprobs.Content> | null;
      }

      export namespace Logprobs {
        export interface Content {
          token: string;

          logprob: number;

          top_logprobs: Array<Content.TopLogprob>;

          bytes?: Array<number> | null;
        }

        export namespace Content {
          export interface TopLogprob {
            token: string;

            logprob: number;

            bytes?: Array<number> | null;
          }
        }
      }

      export interface ChosenFunctionCall {
        function: ChosenFunctionCall.Function;

        id?: string | null;

        api_call?: unknown;

        bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

        computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

        integration?: unknown;

        system?: unknown;

        text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

        type?: 'function';
      }

      export namespace ChosenFunctionCall {
        export interface Function {
          name: string;

          arguments?: string | null;
        }

        export interface Bash20241022 {
          command?: string | null;

          restart?: boolean;
        }

        export interface Computer20241022 {
          action:
            | 'key'
            | 'type'
            | 'cursor_position'
            | 'mouse_move'
            | 'left_click'
            | 'right_click'
            | 'middle_click'
            | 'double_click'
            | 'screenshot';

          coordinate?: Array<number> | null;

          text?: string | null;
        }

        export interface TextEditor20241022 {
          command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

          path: string;

          file_text?: string | null;

          insert_line?: number | null;

          new_str?: string | null;

          old_str?: string | null;

          view_range?: Array<number> | null;
        }
      }

      export interface ChosenComputer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface ChosenTextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }

      export interface ChosenBash20241022 {
        command?: string | null;

        restart?: boolean;
      }
    }

    export interface Doc {
      id: string;

      owner: Doc.Owner;

      snippet: DocsAPI.Snippet;

      distance?: number | null;

      metadata?: unknown | null;

      title?: string | null;
    }

    export namespace Doc {
      export interface Owner {
        id: string;

        role: 'user' | 'agent';
      }
    }

    /**
     * Usage statistics for the completion request
     */
    export interface Usage {
      completion_tokens?: number | null;

      prompt_tokens?: number | null;

      total_tokens?: number | null;
    }
  }
}

export interface SessionRenderResponse {
  messages: Array<SessionRenderResponse.Message>;

  docs?: Array<SessionRenderResponse.Doc>;

  tool_choice?: 'auto' | 'none' | SessionRenderResponse.NamedToolChoice | null;

  tools?: Array<SessionRenderResponse.Tool> | null;
}

export namespace SessionRenderResponse {
  export interface Message {
    role: 'user' | 'assistant' | 'system' | 'tool';

    content?:
      | string
      | Array<string>
      | Array<Message.Content | Message.ContentModel7 | Message.AgentsAPIAutogenChatContentModelOutput>
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | Message.ChosenFunctionCall
      | Message.ChosenComputer20241022
      | Message.ChosenTextEditor20241022
      | Message.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface Content {
      text: string;

      type?: 'text';
    }

    export interface ContentModel7 {
      /**
       * The image URL
       */
      image_url: ContentModel7.ImageURL;

      type?: 'image_url';
    }

    export namespace ContentModel7 {
      /**
       * The image URL
       */
      export interface ImageURL {
        url: string;

        detail?: 'low' | 'high' | 'auto';
      }
    }

    /**
     * Anthropic image content part
     */
    export interface AgentsAPIAutogenChatContentModelOutput {
      content:
        | Array<AgentsAPIAutogenChatContentModelOutput.UnionMember0>
        | Array<AgentsAPIAutogenChatContentModelOutput.UnionMember1>;

      tool_use_id: string;

      type?: 'tool_result';
    }

    export namespace AgentsAPIAutogenChatContentModelOutput {
      export interface UnionMember0 {
        text: string;

        type?: 'text';
      }

      export interface UnionMember1 {
        source: UnionMember1.Source;

        type?: 'image';
      }

      export namespace UnionMember1 {
        export interface Source {
          data: string;

          media_type: string;

          type?: 'base64';
        }
      }
    }

    export interface ChosenFunctionCall {
      function: ChosenFunctionCall.Function;

      id?: string | null;

      api_call?: unknown;

      bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

      computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

      integration?: unknown;

      system?: unknown;

      text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

      type?: 'function';
    }

    export namespace ChosenFunctionCall {
      export interface Function {
        name: string;

        arguments?: string | null;
      }

      export interface Bash20241022 {
        command?: string | null;

        restart?: boolean;
      }

      export interface Computer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface TextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }
    }

    export interface ChosenComputer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface ChosenTextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }

    export interface ChosenBash20241022 {
      command?: string | null;

      restart?: boolean;
    }
  }

  export interface Doc {
    id: string;

    owner: Doc.Owner;

    snippet: DocsAPI.Snippet;

    distance?: number | null;

    metadata?: unknown | null;

    title?: string | null;
  }

  export namespace Doc {
    export interface Owner {
      id: string;

      role: 'user' | 'agent';
    }
  }

  export interface NamedToolChoice {
    function?: NamedToolChoice.Function | null;
  }

  export namespace NamedToolChoice {
    export interface Function {
      name: string;

      arguments?: string | null;
    }
  }

  /**
   * Payload for creating a tool
   */
  export interface Tool {
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
    api_call?: Tool.APICall | null;

    bash_20241022?: Tool.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: Tool.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: Tool.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | Tool.DummyIntegrationDef
      | Tool.BraveIntegrationDef
      | Tool.EmailIntegrationDef
      | Tool.SpiderIntegrationDef
      | Tool.WikipediaIntegrationDef
      | Tool.WeatherIntegrationDef
      | Tool.BrowserbaseContextIntegrationDef
      | Tool.BrowserbaseExtensionIntegrationDef
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseCompleteSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
      | Tool.UnstructuredIntegrationDef
      | Tool.AlgoliaIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: Tool.System | null;

    text_editor_20241022?: Tool.TextEditor20241022 | null;
  }

  export namespace Tool {
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
}

export interface SessionCreateParams {
  agent?: string | null;

  agents?: Array<string> | null;

  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  metadata?: unknown | null;

  recall_options?:
    | SessionCreateParams.VectorDocSearch
    | SessionCreateParams.TextOnlyDocSearch
    | SessionCreateParams.HybridDocSearch
    | null;

  render_templates?: boolean;

  situation?: string | null;

  system_template?: string | null;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
}

export namespace SessionCreateParams {
  export interface VectorDocSearch {
    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'vector';

    num_search_messages?: number;
  }

  export interface TextOnlyDocSearch {
    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mode?: 'text';

    num_search_messages?: number;
  }

  export interface HybridDocSearch {
    alpha?: number;

    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'hybrid';

    num_search_messages?: number;
  }
}

export interface SessionUpdateParams {
  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  metadata?: unknown | null;

  recall_options?:
    | SessionUpdateParams.VectorDocSearchUpdate
    | SessionUpdateParams.TextOnlyDocSearchUpdate
    | SessionUpdateParams.HybridDocSearchUpdate
    | null;

  render_templates?: boolean;

  situation?: string | null;

  system_template?: string | null;

  token_budget?: number | null;
}

export namespace SessionUpdateParams {
  export interface VectorDocSearchUpdate {
    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'vector';

    num_search_messages?: number;
  }

  export interface TextOnlyDocSearchUpdate {
    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mode?: 'text';

    num_search_messages?: number;
  }

  export interface HybridDocSearchUpdate {
    alpha?: number;

    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'hybrid';

    num_search_messages?: number;
  }
}

export interface SessionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: Record<string, unknown>;

  sort_by?: 'created_at' | 'updated_at';
}

export interface SessionChatParams {
  /**
   * Body param:
   */
  messages: Array<SessionChatParams.Message>;

  /**
   * Query param:
   */
  connection_pool?: unknown;

  /**
   * Body param:
   */
  agent?: string | null;

  /**
   * Body param:
   */
  frequency_penalty?: number | null;

  /**
   * Body param:
   */
  length_penalty?: number | null;

  /**
   * Body param:
   */
  logit_bias?: Record<string, number> | null;

  /**
   * Body param:
   */
  max_tokens?: number | null;

  /**
   * Body param:
   */
  min_p?: number | null;

  /**
   * Body param:
   */
  model?: string | null;

  /**
   * Body param:
   */
  presence_penalty?: number | null;

  /**
   * Body param:
   */
  recall?: boolean;

  /**
   * Body param:
   */
  repetition_penalty?: number | null;

  /**
   * Body param:
   */
  response_format?:
    | SessionChatParams.SimpleCompletionResponseFormat
    | SessionChatParams.SchemaCompletionResponseFormat
    | null;

  /**
   * Body param:
   */
  save?: boolean;

  /**
   * Body param:
   */
  seed?: number | null;

  /**
   * Body param:
   */
  stop?: Array<string>;

  /**
   * Body param:
   */
  stream?: boolean;

  /**
   * Body param:
   */
  temperature?: number | null;

  /**
   * Body param:
   */
  tool_choice?: 'auto' | 'none' | SessionChatParams.NamedToolChoice | null;

  /**
   * Body param:
   */
  tools?: Array<SessionChatParams.Tool> | null;

  /**
   * Body param:
   */
  top_p?: number | null;

  /**
   * Header param:
   */
  'X-Custom-Api-Key'?: string;
}

export namespace SessionChatParams {
  export interface Message {
    role: 'user' | 'assistant' | 'system' | 'tool';

    content?:
      | string
      | Array<string>
      | Array<Message.Content | Message.ContentModel7 | Message.AgentsAPIAutogenChatContentModelInput>
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | Message.ChosenFunctionCall
      | Message.ChosenComputer20241022
      | Message.ChosenTextEditor20241022
      | Message.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface Content {
      text: string;

      type?: 'text';
    }

    export interface ContentModel7 {
      /**
       * The image URL
       */
      image_url: ContentModel7.ImageURL;

      type?: 'image_url';
    }

    export namespace ContentModel7 {
      /**
       * The image URL
       */
      export interface ImageURL {
        url: string;

        detail?: 'low' | 'high' | 'auto';
      }
    }

    /**
     * Anthropic image content part
     */
    export interface AgentsAPIAutogenChatContentModelInput {
      content:
        | Array<AgentsAPIAutogenChatContentModelInput.UnionMember0>
        | Array<AgentsAPIAutogenChatContentModelInput.UnionMember1>;

      tool_use_id: string;

      type?: 'tool_result';
    }

    export namespace AgentsAPIAutogenChatContentModelInput {
      export interface UnionMember0 {
        text: string;

        type?: 'text';
      }

      export interface UnionMember1 {
        source: UnionMember1.Source;

        type?: 'image';
      }

      export namespace UnionMember1 {
        export interface Source {
          data: string;

          media_type: string;

          type?: 'base64';
        }
      }
    }

    export interface ChosenFunctionCall {
      function: ChosenFunctionCall.Function;

      api_call?: unknown;

      bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

      computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

      integration?: unknown;

      system?: unknown;

      text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

      type?: 'function';
    }

    export namespace ChosenFunctionCall {
      export interface Function {
        name: string;

        arguments?: string | null;
      }

      export interface Bash20241022 {
        command?: string | null;

        restart?: boolean;
      }

      export interface Computer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface TextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }
    }

    export interface ChosenComputer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface ChosenTextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }

    export interface ChosenBash20241022 {
      command?: string | null;

      restart?: boolean;
    }
  }

  export interface SimpleCompletionResponseFormat {
    type?: 'text' | 'json_object';
  }

  export interface SchemaCompletionResponseFormat {
    json_schema: unknown;

    type?: 'json_schema';
  }

  export interface NamedToolChoice {
    function?: NamedToolChoice.Function | null;
  }

  export namespace NamedToolChoice {
    export interface Function {
      name: string;

      arguments?: string | null;
    }
  }

  /**
   * Payload for creating a tool
   */
  export interface Tool {
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
    api_call?: Tool.APICall | null;

    bash_20241022?: Tool.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: Tool.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: Tool.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | Tool.DummyIntegrationDef
      | Tool.BraveIntegrationDef
      | Tool.EmailIntegrationDef
      | Tool.SpiderIntegrationDef
      | Tool.WikipediaIntegrationDef
      | Tool.WeatherIntegrationDef
      | Tool.BrowserbaseContextIntegrationDef
      | Tool.BrowserbaseExtensionIntegrationDef
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseCompleteSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
      | Tool.UnstructuredIntegrationDef
      | Tool.AlgoliaIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: Tool.System | null;

    text_editor_20241022?: Tool.TextEditor20241022 | null;
  }

  export namespace Tool {
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
}

export interface SessionCreateOrUpdateParams {
  agent?: string | null;

  agents?: Array<string> | null;

  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  metadata?: unknown | null;

  recall_options?:
    | SessionCreateOrUpdateParams.VectorDocSearch
    | SessionCreateOrUpdateParams.TextOnlyDocSearch
    | SessionCreateOrUpdateParams.HybridDocSearch
    | null;

  render_templates?: boolean;

  situation?: string | null;

  system_template?: string | null;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
}

export namespace SessionCreateOrUpdateParams {
  export interface VectorDocSearch {
    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'vector';

    num_search_messages?: number;
  }

  export interface TextOnlyDocSearch {
    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mode?: 'text';

    num_search_messages?: number;
  }

  export interface HybridDocSearch {
    alpha?: number;

    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'hybrid';

    num_search_messages?: number;
  }
}

export interface SessionRenderParams {
  messages: Array<SessionRenderParams.Message>;

  agent?: string | null;

  frequency_penalty?: number | null;

  length_penalty?: number | null;

  logit_bias?: Record<string, number> | null;

  max_tokens?: number | null;

  min_p?: number | null;

  model?: string | null;

  presence_penalty?: number | null;

  recall?: boolean;

  repetition_penalty?: number | null;

  response_format?:
    | SessionRenderParams.SimpleCompletionResponseFormat
    | SessionRenderParams.SchemaCompletionResponseFormat
    | null;

  save?: boolean;

  seed?: number | null;

  stop?: Array<string>;

  stream?: boolean;

  temperature?: number | null;

  tool_choice?: 'auto' | 'none' | SessionRenderParams.NamedToolChoice | null;

  tools?: Array<SessionRenderParams.Tool> | null;

  top_p?: number | null;
}

export namespace SessionRenderParams {
  export interface Message {
    role: 'user' | 'assistant' | 'system' | 'tool';

    content?:
      | string
      | Array<string>
      | Array<Message.Content | Message.ContentModel7 | Message.AgentsAPIAutogenChatContentModelInput>
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | Message.ChosenFunctionCall
      | Message.ChosenComputer20241022
      | Message.ChosenTextEditor20241022
      | Message.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface Content {
      text: string;

      type?: 'text';
    }

    export interface ContentModel7 {
      /**
       * The image URL
       */
      image_url: ContentModel7.ImageURL;

      type?: 'image_url';
    }

    export namespace ContentModel7 {
      /**
       * The image URL
       */
      export interface ImageURL {
        url: string;

        detail?: 'low' | 'high' | 'auto';
      }
    }

    /**
     * Anthropic image content part
     */
    export interface AgentsAPIAutogenChatContentModelInput {
      content:
        | Array<AgentsAPIAutogenChatContentModelInput.UnionMember0>
        | Array<AgentsAPIAutogenChatContentModelInput.UnionMember1>;

      tool_use_id: string;

      type?: 'tool_result';
    }

    export namespace AgentsAPIAutogenChatContentModelInput {
      export interface UnionMember0 {
        text: string;

        type?: 'text';
      }

      export interface UnionMember1 {
        source: UnionMember1.Source;

        type?: 'image';
      }

      export namespace UnionMember1 {
        export interface Source {
          data: string;

          media_type: string;

          type?: 'base64';
        }
      }
    }

    export interface ChosenFunctionCall {
      function: ChosenFunctionCall.Function;

      api_call?: unknown;

      bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

      computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

      integration?: unknown;

      system?: unknown;

      text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

      type?: 'function';
    }

    export namespace ChosenFunctionCall {
      export interface Function {
        name: string;

        arguments?: string | null;
      }

      export interface Bash20241022 {
        command?: string | null;

        restart?: boolean;
      }

      export interface Computer20241022 {
        action:
          | 'key'
          | 'type'
          | 'cursor_position'
          | 'mouse_move'
          | 'left_click'
          | 'right_click'
          | 'middle_click'
          | 'double_click'
          | 'screenshot';

        coordinate?: Array<number> | null;

        text?: string | null;
      }

      export interface TextEditor20241022 {
        command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

        path: string;

        file_text?: string | null;

        insert_line?: number | null;

        new_str?: string | null;

        old_str?: string | null;

        view_range?: Array<number> | null;
      }
    }

    export interface ChosenComputer20241022 {
      action:
        | 'key'
        | 'type'
        | 'cursor_position'
        | 'mouse_move'
        | 'left_click'
        | 'right_click'
        | 'middle_click'
        | 'double_click'
        | 'screenshot';

      coordinate?: Array<number> | null;

      text?: string | null;
    }

    export interface ChosenTextEditor20241022 {
      command: 'str_replace' | 'insert' | 'view' | 'undo_edit';

      path: string;

      file_text?: string | null;

      insert_line?: number | null;

      new_str?: string | null;

      old_str?: string | null;

      view_range?: Array<number> | null;
    }

    export interface ChosenBash20241022 {
      command?: string | null;

      restart?: boolean;
    }
  }

  export interface SimpleCompletionResponseFormat {
    type?: 'text' | 'json_object';
  }

  export interface SchemaCompletionResponseFormat {
    json_schema: unknown;

    type?: 'json_schema';
  }

  export interface NamedToolChoice {
    function?: NamedToolChoice.Function | null;
  }

  export namespace NamedToolChoice {
    export interface Function {
      name: string;

      arguments?: string | null;
    }
  }

  /**
   * Payload for creating a tool
   */
  export interface Tool {
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
    api_call?: Tool.APICall | null;

    bash_20241022?: Tool.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: Tool.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: Tool.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | Tool.DummyIntegrationDef
      | Tool.BraveIntegrationDef
      | Tool.EmailIntegrationDef
      | Tool.SpiderIntegrationDef
      | Tool.WikipediaIntegrationDef
      | Tool.WeatherIntegrationDef
      | Tool.BrowserbaseContextIntegrationDef
      | Tool.BrowserbaseExtensionIntegrationDef
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseCompleteSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
      | Tool.UnstructuredIntegrationDef
      | Tool.AlgoliaIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: Tool.System | null;

    text_editor_20241022?: Tool.TextEditor20241022 | null;
  }

  export namespace Tool {
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
}

export interface SessionResetParams {
  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  metadata?: unknown | null;

  recall_options?:
    | SessionResetParams.VectorDocSearch
    | SessionResetParams.TextOnlyDocSearch
    | SessionResetParams.HybridDocSearch
    | null;

  render_templates?: boolean;

  situation?: string | null;

  system_template?: string | null;

  token_budget?: number | null;
}

export namespace SessionResetParams {
  export interface VectorDocSearch {
    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'vector';

    num_search_messages?: number;
  }

  export interface TextOnlyDocSearch {
    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mode?: 'text';

    num_search_messages?: number;
  }

  export interface HybridDocSearch {
    alpha?: number;

    confidence?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'hybrid';

    num_search_messages?: number;
  }
}

Sessions.SessionsOffsetPagination = SessionsOffsetPagination;

export declare namespace Sessions {
  export {
    type ChatInput as ChatInput,
    type ChatResponse as ChatResponse,
    type Entry as Entry,
    type History as History,
    type Session as Session,
    type SessionChatResponse as SessionChatResponse,
    type SessionRenderResponse as SessionRenderResponse,
    SessionsOffsetPagination as SessionsOffsetPagination,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
    type SessionChatParams as SessionChatParams,
    type SessionCreateOrUpdateParams as SessionCreateOrUpdateParams,
    type SessionRenderParams as SessionRenderParams,
    type SessionResetParams as SessionResetParams,
  };
}
