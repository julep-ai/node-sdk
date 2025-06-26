// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';
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
  delete(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<SessionDeleteResponse> {
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
   * Returns: ChatResponse or StreamingResponse: The chat response or streaming
   * response.
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

export interface BaseTokenLogProb {
  token: string;

  logprob: number;

  bytes?: Array<number> | null;
}

export interface ChatInput {
  messages: Array<ChatInput.Message>;

  agent?: string | null;

  frequency_penalty?: number | null;

  length_penalty?: number | null;

  logit_bias?: { [key: string]: number } | null;

  max_tokens?: number | null;

  metadata?: unknown | null;

  min_p?: number | null;

  model?: string | null;

  presence_penalty?: number | null;

  recall?: boolean;

  remember?: boolean;

  repetition_penalty?: number | null;

  response_format?: SimpleCompletionResponseFormat | SchemaCompletionResponseFormat | null;

  save?: boolean;

  seed?: number | null;

  stop?: Array<string>;

  stream?: boolean;

  temperature?: number | null;

  tool_choice?: 'auto' | 'none' | Shared.NamedToolChoice | null;

  tools?: Array<ChatInput.Tool> | null;

  top_p?: number | null;
}

export namespace ChatInput {
  export interface Message {
    role: 'user' | 'assistant' | 'system' | 'tool';

    content?:
      | string
      | Array<string>
      | Array<
          | Message.AgentsAPIAutogenChatContent
          | Message.ContentModel7
          | Message.AgentsAPIAutogenChatContentModelInput
        >
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface AgentsAPIAutogenChatContent {
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
}

export interface ChatResponse {
  id: string;

  choices: Array<ChatResponse.SingleChatOutput | ChatResponse.MultipleChatOutput>;

  created_at: string;

  docs?: Array<Shared.DocReference>;

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

    logprobs?: SessionsAPI.LogProbResponse | null;

    tool_calls?: Array<
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
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
        | SessionsAPI.ChosenFunctionCall
        | SessionsAPI.ChosenComputer20241022
        | SessionsAPI.ChosenTextEditor20241022
        | SessionsAPI.ChosenBash20241022
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

    logprobs?: SessionsAPI.LogProbResponse | null;

    tool_calls?: Array<
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
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
        | SessionsAPI.ChosenFunctionCall
        | SessionsAPI.ChosenComputer20241022
        | SessionsAPI.ChosenTextEditor20241022
        | SessionsAPI.ChosenBash20241022
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

export interface ChosenBash20241022 {
  command?: string | null;

  restart?: boolean;
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

export interface ChosenFunctionCall {
  function: Shared.FunctionCallOption;

  id?: string | null;

  api_call?: unknown;

  bash_20241022?: ChosenBash20241022 | null;

  computer_20241022?: ChosenComputer20241022 | null;

  integration?: unknown;

  system?: unknown;

  text_editor_20241022?: ChosenTextEditor20241022 | null;

  type?: 'function';
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

export interface Entry {
  id: string;

  content:
    | Array<
        | Entry.ContentOutput
        | Entry.AgentsAPIAutogenEntriesContentModel3
        | Entry.AgentsAPIAutogenEntriesContentModel
      >
    | Entry.Tool
    | ChosenFunctionCall
    | ChosenComputer20241022
    | ChosenTextEditor20241022
    | ChosenBash20241022
    | string
    | Entry.ToolResponse
    | Array<
        | Array<
            | Entry.AgentsAPIAutogenEntriesContentModel1
            | Entry.AgentsAPIAutogenEntriesContentModel3
            | Entry.AgentsAPIAutogenEntriesContentModel2
          >
        | Entry.Tool
        | ChosenFunctionCall
        | ChosenComputer20241022
        | ChosenTextEditor20241022
        | ChosenBash20241022
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
    ChosenFunctionCall | ChosenComputer20241022 | ChosenTextEditor20241022 | ChosenBash20241022
  > | null;
}

export namespace Entry {
  export interface ContentOutput {
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

export interface HybridDocSearch {
  alpha?: number;

  confidence?: number;

  include_embeddings?: boolean;

  k_multiplier?: number;

  lang?: string;

  limit?: number;

  max_query_length?: number;

  metadata_filter?: unknown;

  mmr_strength?: number;

  mode?: 'hybrid';

  num_search_messages?: number;

  trigram_similarity_threshold?: number;
}

export interface LogProbResponse {
  content: Array<TokenLogProb> | null;
}

export interface SchemaCompletionResponseFormat {
  json_schema: unknown;

  type?: 'json_schema';
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

  recall_options?: VectorDocSearch | TextOnlyDocSearch | HybridDocSearch | null;

  render_templates?: boolean;

  situation?: string | null;

  summary?: string | null;

  system_template?: string | null;

  token_budget?: number | null;
}

export interface SimpleCompletionResponseFormat {
  type?: 'text' | 'json_object';
}

export interface TextOnlyDocSearch {
  include_embeddings?: boolean;

  lang?: string;

  limit?: number;

  max_query_length?: number;

  metadata_filter?: unknown;

  mode?: 'text';

  num_search_messages?: number;

  trigram_similarity_threshold?: number;
}

export interface TokenLogProb {
  token: string;

  logprob: number;

  top_logprobs: Array<BaseTokenLogProb>;

  bytes?: Array<number> | null;
}

export interface VectorDocSearch {
  confidence?: number;

  include_embeddings?: boolean;

  lang?: string;

  limit?: number;

  max_query_length?: number;

  metadata_filter?: unknown;

  mmr_strength?: number;

  mode?: 'vector';

  num_search_messages?: number;
}

export interface SessionDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export type SessionChatResponse = SessionChatResponse.ChunkChatResponse | ChatResponse;

export namespace SessionChatResponse {
  export interface ChunkChatResponse {
    id: string;

    choices: Array<ChunkChatResponse.Choice>;

    created_at: string;

    docs?: Array<Shared.DocReference>;

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

      logprobs?: SessionsAPI.LogProbResponse | null;

      tool_calls?: Array<
        | SessionsAPI.ChosenFunctionCall
        | SessionsAPI.ChosenComputer20241022
        | SessionsAPI.ChosenTextEditor20241022
        | SessionsAPI.ChosenBash20241022
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
          | SessionsAPI.ChosenFunctionCall
          | SessionsAPI.ChosenComputer20241022
          | SessionsAPI.ChosenTextEditor20241022
          | SessionsAPI.ChosenBash20241022
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

  docs?: Array<Shared.DocReference>;

  tool_choice?: 'auto' | 'none' | Shared.NamedToolChoice | null;

  tools?: Array<SessionRenderResponse.Tool> | null;
}

export namespace SessionRenderResponse {
  export interface Message {
    role: 'user' | 'assistant' | 'system' | 'tool';

    content?:
      | string
      | Array<string>
      | Array<Message.ContentOutput | Message.ContentModel7 | Message.AgentsAPIAutogenChatContentModelOutput>
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface ContentOutput {
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
}

export interface SessionCreateParams {
  agent?: string | null;

  agents?: Array<string> | null;

  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  metadata?: unknown | null;

  recall_options?: VectorDocSearch | TextOnlyDocSearch | HybridDocSearch | null;

  render_templates?: boolean;

  situation?: string | null;

  system_template?: string | null;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
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

    include_embeddings?: boolean;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'vector';

    num_search_messages?: number;
  }

  export interface TextOnlyDocSearchUpdate {
    include_embeddings?: boolean;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mode?: 'text';

    num_search_messages?: number;

    trigram_similarity_threshold?: number;
  }

  export interface HybridDocSearchUpdate {
    alpha?: number;

    confidence?: number;

    include_embeddings?: boolean;

    k_multiplier?: number;

    lang?: string;

    limit?: number;

    max_query_length?: number;

    metadata_filter?: unknown;

    mmr_strength?: number;

    mode?: 'hybrid';

    num_search_messages?: number;

    trigram_similarity_threshold?: number;
  }
}

export interface SessionListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: { [key: string]: unknown };

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
  logit_bias?: { [key: string]: number } | null;

  /**
   * Body param:
   */
  max_tokens?: number | null;

  /**
   * Body param:
   */
  metadata?: unknown | null;

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
  response_format?: SimpleCompletionResponseFormat | SchemaCompletionResponseFormat | null;

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
  tool_choice?: 'auto' | 'none' | Shared.NamedToolChoice | null;

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
      | Array<
          | Message.AgentsAPIAutogenChatContent
          | Message.ContentModel7
          | Message.AgentsAPIAutogenChatContentModelInput
        >
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface AgentsAPIAutogenChatContent {
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
}

export interface SessionCreateOrUpdateParams {
  agent?: string | null;

  agents?: Array<string> | null;

  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  metadata?: unknown | null;

  recall_options?: VectorDocSearch | TextOnlyDocSearch | HybridDocSearch | null;

  render_templates?: boolean;

  situation?: string | null;

  system_template?: string | null;

  token_budget?: number | null;

  user?: string | null;

  users?: Array<string> | null;
}

export interface SessionRenderParams {
  messages: Array<SessionRenderParams.Message>;

  agent?: string | null;

  frequency_penalty?: number | null;

  length_penalty?: number | null;

  logit_bias?: { [key: string]: number } | null;

  max_tokens?: number | null;

  metadata?: unknown | null;

  min_p?: number | null;

  model?: string | null;

  presence_penalty?: number | null;

  recall?: boolean;

  repetition_penalty?: number | null;

  response_format?: SimpleCompletionResponseFormat | SchemaCompletionResponseFormat | null;

  save?: boolean;

  seed?: number | null;

  stop?: Array<string>;

  stream?: boolean;

  temperature?: number | null;

  tool_choice?: 'auto' | 'none' | Shared.NamedToolChoice | null;

  tools?: Array<SessionRenderParams.Tool> | null;

  top_p?: number | null;
}

export namespace SessionRenderParams {
  export interface Message {
    role: 'user' | 'assistant' | 'system' | 'tool';

    content?:
      | string
      | Array<string>
      | Array<
          | Message.AgentsAPIAutogenChatContent
          | Message.ContentModel7
          | Message.AgentsAPIAutogenChatContentModelInput
        >
      | null;

    continue?: boolean | null;

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
    > | null;
  }

  export namespace Message {
    export interface AgentsAPIAutogenChatContent {
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
}

export interface SessionResetParams {
  auto_run_tools?: boolean;

  context_overflow?: 'truncate' | 'adaptive' | null;

  forward_tool_calls?: boolean;

  metadata?: unknown | null;

  recall_options?: VectorDocSearch | TextOnlyDocSearch | HybridDocSearch | null;

  render_templates?: boolean;

  situation?: string | null;

  system_template?: string | null;

  token_budget?: number | null;
}

Sessions.SessionsOffsetPagination = SessionsOffsetPagination;

export declare namespace Sessions {
  export {
    type BaseTokenLogProb as BaseTokenLogProb,
    type ChatInput as ChatInput,
    type ChatResponse as ChatResponse,
    type ChosenBash20241022 as ChosenBash20241022,
    type ChosenComputer20241022 as ChosenComputer20241022,
    type ChosenFunctionCall as ChosenFunctionCall,
    type ChosenTextEditor20241022 as ChosenTextEditor20241022,
    type Entry as Entry,
    type History as History,
    type HybridDocSearch as HybridDocSearch,
    type LogProbResponse as LogProbResponse,
    type SchemaCompletionResponseFormat as SchemaCompletionResponseFormat,
    type Session as Session,
    type SimpleCompletionResponseFormat as SimpleCompletionResponseFormat,
    type TextOnlyDocSearch as TextOnlyDocSearch,
    type TokenLogProb as TokenLogProb,
    type VectorDocSearch as VectorDocSearch,
    type SessionDeleteResponse as SessionDeleteResponse,
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
