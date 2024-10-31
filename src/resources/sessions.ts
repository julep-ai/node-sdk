// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';
import * as DocsAPI from './docs';
import * as Shared from './shared';
import { OffsetPagination, type OffsetPaginationParams } from '../pagination';

export class Sessions extends APIResource {
  /**
   * Create Session
   */
  create(body: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ResourceCreated> {
    return this._client.post('/sessions', { body, ...options });
  }

  /**
   * Update Session
   */
  update(
    sessionId: string,
    body: SessionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceUpdated> {
    return this._client.put(`/sessions/${sessionId}`, { body, ...options });
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
   * Chat
   */
  chat(
    sessionId: string,
    params: SessionChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionChatResponse> {
    const { 'X-Custom-Api-Key': xCustomAPIKey, ...body } = params;
    return this._client.post(`/sessions/${sessionId}/chat`, {
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
  ): Core.APIPromise<Shared.ResourceUpdated> {
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
   * Patch Session
   */
  patch(
    sessionId: string,
    body: SessionPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceUpdated> {
    return this._client.patch(`/sessions/${sessionId}`, { body, ...options });
  }
}

export class SessionsOffsetPagination extends OffsetPagination<Session> {}

export interface ChatInput {
  messages: Array<Message>;

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

  tools?: Array<ChatInput.Tool>;

  top_p?: number | null;
}

export namespace ChatInput {
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
      | Tool.BrowserbaseGetSessionConnectURLIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
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
  }

  export namespace SingleChatOutput {
    export interface Message {
      content: string | Array<string> | Array<Message.Content | Message.ContentModel>;

      role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

      id?: string | null;

      created_at?: string | null;

      name?: string | null;

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

      export interface ContentModel {
        /**
         * The image URL
         */
        image_url: ContentModel.ImageURL;

        type?: 'image_url';
      }

      export namespace ContentModel {
        /**
         * The image URL
         */
        export interface ImageURL {
          url: string;

          detail?: 'low' | 'high' | 'auto';
        }
      }

      export interface ChosenFunctionCall {
        function: ChosenFunctionCall.Function;

        id?: string | null;

        api_call?: unknown | null;

        bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

        computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

        integration?: unknown | null;

        system?: unknown | null;

        text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

        type?: 'function';
      }

      export namespace ChosenFunctionCall {
        export interface Function {
          name: string;
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
      content?: Array<Logprobs.Content> | null;
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
  }

  export namespace MultipleChatOutput {
    export interface Message {
      content: string | Array<string> | Array<Message.Content | Message.ContentModel>;

      role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

      id?: string | null;

      created_at?: string | null;

      name?: string | null;

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

      export interface ContentModel {
        /**
         * The image URL
         */
        image_url: ContentModel.ImageURL;

        type?: 'image_url';
      }

      export namespace ContentModel {
        /**
         * The image URL
         */
        export interface ImageURL {
          url: string;

          detail?: 'low' | 'high' | 'auto';
        }
      }

      export interface ChosenFunctionCall {
        function: ChosenFunctionCall.Function;

        id?: string | null;

        api_call?: unknown | null;

        bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

        computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

        integration?: unknown | null;

        system?: unknown | null;

        text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

        type?: 'function';
      }

      export namespace ChosenFunctionCall {
        export interface Function {
          name: string;
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
      content?: Array<Logprobs.Content> | null;
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
  }

  export interface Doc {
    id: string;

    owner: Doc.Owner;

    snippets: Array<DocsAPI.Snippet>;

    distance?: number | null;

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

export interface ChatSettings {
  agent?: string | null;

  frequency_penalty?: number | null;

  length_penalty?: number | null;

  logit_bias?: Record<string, number> | null;

  max_tokens?: number | null;

  min_p?: number | null;

  model?: string | null;

  presence_penalty?: number | null;

  repetition_penalty?: number | null;

  response_format?:
    | ChatSettings.SimpleCompletionResponseFormat
    | ChatSettings.SchemaCompletionResponseFormat
    | null;

  seed?: number | null;

  stop?: Array<string>;

  stream?: boolean;

  temperature?: number | null;

  top_p?: number | null;
}

export namespace ChatSettings {
  export interface SimpleCompletionResponseFormat {
    type?: 'text' | 'json_object';
  }

  export interface SchemaCompletionResponseFormat {
    json_schema: unknown;

    type?: 'json_schema';
  }
}

export interface Entry {
  id: string;

  content:
    | Array<Entry.Content | Entry.ContentModel>
    | Entry.ToolOutput
    | Entry.ChosenFunctionCall
    | Entry.ChosenComputer20241022
    | Entry.ChosenTextEditor20241022
    | Entry.ChosenBash20241022
    | string
    | Entry.ToolResponse
    | Array<
        | Array<Entry.Content | Entry.ContentModel>
        | Entry.ToolOutput
        | Entry.ChosenFunctionCall
        | Entry.ChosenComputer20241022
        | Entry.ChosenTextEditor20241022
        | Entry.ChosenBash20241022
        | string
        | Entry.ToolResponse
      >;

  created_at: string;

  role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

  source: 'api_request' | 'api_response' | 'tool_response' | 'internal' | 'summarizer' | 'meta';

  timestamp: number;

  token_count: number;

  tokenizer: string;

  name?: string | null;
}

export namespace Entry {
  export interface Content {
    text: string;

    type?: 'text';
  }

  export interface ContentModel {
    /**
     * The image URL
     */
    image_url: ContentModel.ImageURL;

    type?: 'image_url';
  }

  export namespace ContentModel {
    /**
     * The image URL
     */
    export interface ImageURL {
      url: string;

      detail?: 'low' | 'high' | 'auto';
    }
  }

  export interface ToolOutput {
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
    api_call?: ToolOutput.APICall | null;

    bash_20241022?: ToolOutput.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: ToolOutput.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: ToolOutput.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | ToolOutput.DummyIntegrationDef
      | ToolOutput.BraveIntegrationDef
      | ToolOutput.EmailIntegrationDef
      | ToolOutput.SpiderIntegrationDef
      | ToolOutput.WikipediaIntegrationDef
      | ToolOutput.WeatherIntegrationDef
      | ToolOutput.BrowserbaseContextIntegrationDef
      | ToolOutput.BrowserbaseExtensionIntegrationDef
      | ToolOutput.BrowserbaseListSessionsIntegrationDef
      | ToolOutput.BrowserbaseCreateSessionIntegrationDef
      | ToolOutput.BrowserbaseGetSessionIntegrationDef
      | ToolOutput.BrowserbaseCompleteSessionIntegrationDef
      | ToolOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
      | ToolOutput.BrowserbaseGetSessionConnectURLIntegrationDef
      | ToolOutput.RemoteBrowserIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: ToolOutput.System | null;

    text_editor_20241022?: ToolOutput.TextEditor20241022 | null;
  }

  export namespace ToolOutput {
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

  export interface ChosenFunctionCall {
    function: ChosenFunctionCall.Function;

    id?: string | null;

    api_call?: unknown | null;

    bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

    computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

    integration?: unknown | null;

    system?: unknown | null;

    text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

    type?: 'function';
  }

  export namespace ChosenFunctionCall {
    export interface Function {
      name: string;
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

  export interface Content {
    text: string;

    type?: 'text';
  }

  export interface ContentModel {
    /**
     * The image URL
     */
    image_url: ContentModel.ImageURL;

    type?: 'image_url';
  }

  export namespace ContentModel {
    /**
     * The image URL
     */
    export interface ImageURL {
      url: string;

      detail?: 'low' | 'high' | 'auto';
    }
  }

  export interface ToolOutput {
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
    api_call?: ToolOutput.APICall | null;

    bash_20241022?: ToolOutput.Bash20241022 | null;

    /**
     * Anthropic new tools
     */
    computer_20241022?: ToolOutput.Computer20241022 | null;

    description?: string | null;

    /**
     * Function definition
     */
    function?: ToolOutput.Function | null;

    /**
     * Brave integration definition
     */
    integration?:
      | ToolOutput.DummyIntegrationDef
      | ToolOutput.BraveIntegrationDef
      | ToolOutput.EmailIntegrationDef
      | ToolOutput.SpiderIntegrationDef
      | ToolOutput.WikipediaIntegrationDef
      | ToolOutput.WeatherIntegrationDef
      | ToolOutput.BrowserbaseContextIntegrationDef
      | ToolOutput.BrowserbaseExtensionIntegrationDef
      | ToolOutput.BrowserbaseListSessionsIntegrationDef
      | ToolOutput.BrowserbaseCreateSessionIntegrationDef
      | ToolOutput.BrowserbaseGetSessionIntegrationDef
      | ToolOutput.BrowserbaseCompleteSessionIntegrationDef
      | ToolOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
      | ToolOutput.BrowserbaseGetSessionConnectURLIntegrationDef
      | ToolOutput.RemoteBrowserIntegrationDef
      | null;

    /**
     * System definition
     */
    system?: ToolOutput.System | null;

    text_editor_20241022?: ToolOutput.TextEditor20241022 | null;
  }

  export namespace ToolOutput {
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

  export interface ChosenFunctionCall {
    function: ChosenFunctionCall.Function;

    id?: string | null;

    api_call?: unknown | null;

    bash_20241022?: ChosenFunctionCall.Bash20241022 | null;

    computer_20241022?: ChosenFunctionCall.Computer20241022 | null;

    integration?: unknown | null;

    system?: unknown | null;

    text_editor_20241022?: ChosenFunctionCall.TextEditor20241022 | null;

    type?: 'function';
  }

  export namespace ChosenFunctionCall {
    export interface Function {
      name: string;
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

export interface Message {
  content: string | Array<string> | Array<Message.Content | Message.ContentModel>;

  role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

  continue?: boolean | null;

  name?: string | null;
}

export namespace Message {
  export interface Content {
    text: string;

    type?: 'text';
  }

  export interface ContentModel {
    /**
     * The image URL
     */
    image_url: ContentModel.ImageURL;

    type?: 'image_url';
  }

  export namespace ContentModel {
    /**
     * The image URL
     */
    export interface ImageURL {
      url: string;

      detail?: 'low' | 'high' | 'auto';
    }
  }
}

export interface Session {
  id: string;

  created_at: string;

  updated_at: string;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_results?: boolean | null;

  kind?: string | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  summary?: string | null;

  token_budget?: number | null;
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
    }

    export namespace Choice {
      /**
       * The message generated by the model
       */
      export interface Delta {
        content: string | Array<string> | Array<Delta.Content | Delta.ContentModel>;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace Delta {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface ContentModel {
          /**
           * The image URL
           */
          image_url: ContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace ContentModel {
          /**
           * The image URL
           */
          export interface ImageURL {
            url: string;

            detail?: 'low' | 'high' | 'auto';
          }
        }
      }

      export interface Logprobs {
        content?: Array<Logprobs.Content> | null;
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
    }

    export interface Doc {
      id: string;

      owner: Doc.Owner;

      snippets: Array<DocsAPI.Snippet>;

      distance?: number | null;

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

export interface SessionCreateParams {
  agent?: string | null;

  agents?: Array<string> | null;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_results?: boolean | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
}

export interface SessionUpdateParams {
  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_results?: boolean | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  token_budget?: number | null;
}

export interface SessionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export interface SessionChatParams {
  /**
   * Body param:
   */
  messages: Array<Message>;

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
  tools?: Array<SessionChatParams.Tool>;

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
    }
  }

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
      | Tool.BrowserbaseGetSessionConnectURLIntegrationDef
      | Tool.RemoteBrowserIntegrationDef
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
}

export interface SessionCreateOrUpdateParams {
  agent?: string | null;

  agents?: Array<string> | null;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_results?: boolean | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
}

export interface SessionPatchParams {
  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_results?: boolean | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  token_budget?: number | null;
}

export namespace Sessions {
  export import ChatInput = SessionsAPI.ChatInput;
  export import ChatResponse = SessionsAPI.ChatResponse;
  export import ChatSettings = SessionsAPI.ChatSettings;
  export import Entry = SessionsAPI.Entry;
  export import History = SessionsAPI.History;
  export import Message = SessionsAPI.Message;
  export import Session = SessionsAPI.Session;
  export import SessionChatResponse = SessionsAPI.SessionChatResponse;
  export import SessionsOffsetPagination = SessionsAPI.SessionsOffsetPagination;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionUpdateParams = SessionsAPI.SessionUpdateParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
  export import SessionChatParams = SessionsAPI.SessionChatParams;
  export import SessionCreateOrUpdateParams = SessionsAPI.SessionCreateOrUpdateParams;
  export import SessionPatchParams = SessionsAPI.SessionPatchParams;
}
