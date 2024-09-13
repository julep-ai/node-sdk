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
    body: SessionChatParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionChatResponse> {
    return this._client.post(`/sessions/${sessionId}/chat`, { body, ...options });
  }

  /**
   * Create Or Update Session
   */
  createOrUpdate(
    sessionId: string,
    body: SessionCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceCreated> {
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

  tool_choice?:
    | 'auto'
    | 'none'
    | ChatInput.NamedFunctionChoice
    | ChatInput.NamedIntegrationChoice
    | ChatInput.NamedSystemChoice
    | ChatInput.NamedAPICallChoice
    | null;

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

  export interface NamedFunctionChoice {
    function: NamedFunctionChoice.Function;
  }

  export namespace NamedFunctionChoice {
    export interface Function {
      name: string;
    }
  }

  export interface NamedIntegrationChoice {
    integration?: unknown | null;
  }

  export interface NamedSystemChoice {
    system?: unknown | null;
  }

  export interface NamedAPICallChoice {
    api_call?: unknown | null;
  }

  export interface Tool {
    id: string;

    created_at: string;

    /**
     * Function definition
     */
    function: Tool.Function;

    name: string;

    updated_at: string;

    api_call?: unknown | null;

    integration?: unknown | null;

    system?: unknown | null;

    type?: 'function' | 'integration' | 'system' | 'api_call';
  }

  export namespace Tool {
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
        | Message.ChosenIntegrationCall
        | Message.ChosenSystemCall
        | Message.ChosenAPICall
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
        id: string;

        function: ChosenFunctionCall.Function;

        type?: 'function';
      }

      export namespace ChosenFunctionCall {
        export interface Function {
          name: string;
        }
      }

      export interface ChosenIntegrationCall {
        id: string;

        integration: unknown;

        type?: 'integration';
      }

      export interface ChosenSystemCall {
        id: string;

        system: unknown;

        type?: 'system';
      }

      export interface ChosenAPICall {
        id: string;

        api_call: unknown;

        type?: 'api_call';
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
        | Message.ChosenIntegrationCall
        | Message.ChosenSystemCall
        | Message.ChosenAPICall
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
        id: string;

        function: ChosenFunctionCall.Function;

        type?: 'function';
      }

      export namespace ChosenFunctionCall {
        export interface Function {
          name: string;
        }
      }

      export interface ChosenIntegrationCall {
        id: string;

        integration: unknown;

        type?: 'integration';
      }

      export interface ChosenSystemCall {
        id: string;

        system: unknown;

        type?: 'system';
      }

      export interface ChosenAPICall {
        id: string;

        api_call: unknown;

        type?: 'api_call';
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
    | Entry.Tool
    | Entry.ChosenFunctionCall
    | Entry.ChosenIntegrationCall
    | Entry.ChosenSystemCall
    | Entry.ChosenAPICall
    | string
    | Entry.ToolResponse
    | Array<
        | Array<Entry.Content | Entry.ContentModel>
        | Entry.Tool
        | Entry.ChosenFunctionCall
        | Entry.ChosenIntegrationCall
        | Entry.ChosenSystemCall
        | Entry.ChosenAPICall
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

  export interface Tool {
    id: string;

    created_at: string;

    /**
     * Function definition
     */
    function: Tool.Function;

    name: string;

    updated_at: string;

    api_call?: unknown | null;

    integration?: unknown | null;

    system?: unknown | null;

    type?: 'function' | 'integration' | 'system' | 'api_call';
  }

  export namespace Tool {
    /**
     * Function definition
     */
    export interface Function {
      description?: string | null;

      name?: unknown | null;

      parameters?: unknown | null;
    }
  }

  export interface ChosenFunctionCall {
    id: string;

    function: ChosenFunctionCall.Function;

    type?: 'function';
  }

  export namespace ChosenFunctionCall {
    export interface Function {
      name: string;
    }
  }

  export interface ChosenIntegrationCall {
    id: string;

    integration: unknown;

    type?: 'integration';
  }

  export interface ChosenSystemCall {
    id: string;

    system: unknown;

    type?: 'system';
  }

  export interface ChosenAPICall {
    id: string;

    api_call: unknown;

    type?: 'api_call';
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

  export interface Tool {
    id: string;

    created_at: string;

    /**
     * Function definition
     */
    function: Tool.Function;

    name: string;

    updated_at: string;

    api_call?: unknown | null;

    integration?: unknown | null;

    system?: unknown | null;

    type?: 'function' | 'integration' | 'system' | 'api_call';
  }

  export namespace Tool {
    /**
     * Function definition
     */
    export interface Function {
      description?: string | null;

      name?: unknown | null;

      parameters?: unknown | null;
    }
  }

  export interface ChosenFunctionCall {
    id: string;

    function: ChosenFunctionCall.Function;

    type?: 'function';
  }

  export namespace ChosenFunctionCall {
    export interface Function {
      name: string;
    }
  }

  export interface ChosenIntegrationCall {
    id: string;

    integration: unknown;

    type?: 'integration';
  }

  export interface ChosenSystemCall {
    id: string;

    system: unknown;

    type?: 'system';
  }

  export interface ChosenAPICall {
    id: string;

    api_call: unknown;

    type?: 'api_call';
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

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
}

export interface SessionUpdateParams {
  context_overflow?: 'truncate' | 'adaptive' | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  token_budget?: number | null;
}

export interface SessionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: string;

  sort_by?: 'created_at' | 'updated_at';
}

export interface SessionChatParams {
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

  repetition_penalty?: number | null;

  response_format?:
    | SessionChatParams.SimpleCompletionResponseFormat
    | SessionChatParams.SchemaCompletionResponseFormat
    | null;

  save?: boolean;

  seed?: number | null;

  stop?: Array<string>;

  stream?: boolean;

  temperature?: number | null;

  tool_choice?:
    | 'auto'
    | 'none'
    | SessionChatParams.NamedFunctionChoice
    | SessionChatParams.NamedIntegrationChoice
    | SessionChatParams.NamedSystemChoice
    | SessionChatParams.NamedAPICallChoice
    | null;

  tools?: Array<SessionChatParams.Tool>;

  top_p?: number | null;
}

export namespace SessionChatParams {
  export interface SimpleCompletionResponseFormat {
    type?: 'text' | 'json_object';
  }

  export interface SchemaCompletionResponseFormat {
    json_schema: unknown;

    type?: 'json_schema';
  }

  export interface NamedFunctionChoice {
    function: NamedFunctionChoice.Function;
  }

  export namespace NamedFunctionChoice {
    export interface Function {
      name: string;
    }
  }

  export interface NamedIntegrationChoice {
    integration?: unknown | null;
  }

  export interface NamedSystemChoice {
    system?: unknown | null;
  }

  export interface NamedAPICallChoice {
    api_call?: unknown | null;
  }

  export interface Tool {
    /**
     * Function definition
     */
    function: Tool.Function;

    name: string;

    api_call?: unknown | null;

    integration?: unknown | null;

    system?: unknown | null;

    type?: 'function' | 'integration' | 'system' | 'api_call';
  }

  export namespace Tool {
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

export interface SessionCreateOrUpdateParams {
  agent?: string | null;

  agents?: Array<string> | null;

  context_overflow?: 'truncate' | 'adaptive' | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
}

export interface SessionPatchParams {
  context_overflow?: 'truncate' | 'adaptive' | null;

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
