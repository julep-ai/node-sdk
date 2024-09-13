// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as SessionsAPI from './sessions';
import * as ChatsAPI from './chats';

export class Sessions extends APIResource {
  chats: ChatsAPI.Chats = new ChatsAPI.Chats(this._client);

  /**
   * Create Session
   */
  create(body: SessionCreateParams, options?: Core.RequestOptions): Core.APIPromise<SessionCreateResponse> {
    return this._client.post('/sessions', { body, ...options });
  }

  /**
   * Get Session
   */
  retrieve(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<Session> {
    return this._client.get(`/sessions/${sessionId}`, options);
  }

  /**
   * Update Session
   */
  update(
    sessionId: string,
    body: SessionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionUpdateResponse> {
    return this._client.put(`/sessions/${sessionId}`, { body, ...options });
  }

  /**
   * List Sessions
   */
  list(query?: SessionListParams, options?: Core.RequestOptions): Core.APIPromise<SessionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SessionListResponse>;
  list(
    query: SessionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SessionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/sessions', { query, ...options });
  }

  /**
   * Delete Session
   */
  delete(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<SessionDeleteResponse> {
    return this._client.delete(`/sessions/${sessionId}`, options);
  }

  /**
   * Get Session History
   */
  history(sessionId: string, options?: Core.RequestOptions): Core.APIPromise<History> {
    return this._client.get(`/sessions/${sessionId}/history`, options);
  }
}

export interface History {
  created_at: string;

  entries: Array<History.Entry>;

  relations: Array<History.Relation>;

  session_id: string;
}

export namespace History {
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

  context_overflow?: 'truncate' | 'adaptive' | null;

  kind?: string | null;

  metadata?: unknown | null;

  render_templates?: boolean;

  situation?: string;

  summary?: string | null;

  token_budget?: number | null;
}

export interface SessionCreateResponse {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface SessionUpdateResponse {
  id: string;

  updated_at: string;

  jobs?: Array<string>;
}

export interface SessionListResponse {
  items: Array<Session>;
}

export interface SessionDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
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

export interface SessionListParams {
  direction?: 'asc' | 'desc';

  limit?: number;

  metadata_filter?: string;

  offset?: number;

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Sessions {
  export import History = SessionsAPI.History;
  export import Session = SessionsAPI.Session;
  export import SessionCreateResponse = SessionsAPI.SessionCreateResponse;
  export import SessionUpdateResponse = SessionsAPI.SessionUpdateResponse;
  export import SessionListResponse = SessionsAPI.SessionListResponse;
  export import SessionDeleteResponse = SessionsAPI.SessionDeleteResponse;
  export import SessionCreateParams = SessionsAPI.SessionCreateParams;
  export import SessionUpdateParams = SessionsAPI.SessionUpdateParams;
  export import SessionListParams = SessionsAPI.SessionListParams;
  export import Chats = ChatsAPI.Chats;
  export import ChatCreateResponse = ChatsAPI.ChatCreateResponse;
  export import ChatCreateParams = ChatsAPI.ChatCreateParams;
}
