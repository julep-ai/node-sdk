// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SessionsAPI from './sessions';
import * as Shared from './shared';
import { OffsetPagination, type OffsetPaginationParams } from '../pagination';

export class Tasks extends APIResource {
  /**
   * Create Task
   */
  create(
    agentId: string,
    body: TaskCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceCreated> {
    return this._client.post(`/agents/${agentId}/tasks`, { body, ...options });
  }

  /**
   * List Tasks
   */
  list(
    agentId: string,
    query?: TaskListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TasksOffsetPagination, Task>;
  list(agentId: string, options?: Core.RequestOptions): Core.PagePromise<TasksOffsetPagination, Task>;
  list(
    agentId: string,
    query: TaskListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TasksOffsetPagination, Task> {
    if (isRequestOptions(query)) {
      return this.list(agentId, {}, query);
    }
    return this._client.getAPIList(`/agents/${agentId}/tasks`, TasksOffsetPagination, { query, ...options });
  }

  /**
   * Create Or Update Task
   */
  createOrUpdate(
    agentId: string,
    taskId: string,
    body: TaskCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.ResourceUpdated> {
    return this._client.post(`/agents/${agentId}/tasks/${taskId}`, { body, ...options });
  }

  /**
   * Get Task Details
   */
  get(taskId: string, options?: Core.RequestOptions): Core.APIPromise<Task> {
    return this._client.get(`/tasks/${taskId}`, options);
  }
}

export class TasksOffsetPagination extends OffsetPagination<Task> {}

export interface Task {
  id: string;

  created_at: string;

  main: Array<
    | Task.EvaluateStep
    | Task.ToolCallStep
    | Task.PromptStepOutput
    | Task.GetStep
    | Task.SetStep
    | Task.LogStep
    | Task.YieldStep
    | Task.ReturnStep
    | Task.SleepStep
    | Task.ErrorWorkflowStep
    | Task.WaitForInputStep
    | Task.IfElseWorkflowStepOutput
    | Task.SwitchStepOutput
    | Task.ForeachStepOutput
    | Task.ParallelStepOutput
    | Task.MainOutput
  >;

  name: string;

  updated_at: string;

  description?: string;

  inherit_tools?: boolean;

  input_schema?: unknown | null;

  metadata?: unknown | null;

  tools?: Array<Task.Tool>;
  [k: string]: unknown;
}

export namespace Task {
  export interface EvaluateStep {
    evaluate: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

    kind_?: 'evaluate';

    label?: string | null;
  }

  export interface ToolCallStep {
    tool: string;

    arguments?:
      | Record<
          string,
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | Array<
              Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            >
          | string
        >
      | Array<
          Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        >
      | '_';

    kind_?: 'tool_call';

    label?: string | null;
  }

  export interface PromptStepOutput {
    prompt: Array<PromptStepOutput.UnionMember0> | string;

    auto_run_tools?: boolean;

    disable_cache?: boolean;

    kind_?: 'prompt';

    label?: string | null;

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

    tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

    unwrap?: boolean;
  }

  export namespace PromptStepOutput {
    export interface UnionMember0 {
      content:
        | Array<string>
        | Array<
            | UnionMember0.Content
            | UnionMember0.AgentsAPIAutogenTasksContentModel
            | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
          >
        | string
        | null;

      role: 'user' | 'assistant' | 'system' | 'tool';

      continue?: boolean | null;

      name?: string | null;

      tool_call_id?: string | null;

      tool_calls?: Array<
        | UnionMember0.ChosenFunctionCall
        | UnionMember0.ChosenComputer20241022
        | UnionMember0.ChosenTextEditor20241022
        | UnionMember0.ChosenBash20241022
      > | null;
    }

    export namespace UnionMember0 {
      export interface Content {
        text: string;

        type?: 'text';
      }

      export interface AgentsAPIAutogenTasksContentModel {
        /**
         * The image URL
         */
        image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

        type?: 'image_url';
      }

      export namespace AgentsAPIAutogenTasksContentModel {
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
      export interface AgentsAPIAutogenTasksContentModel1Output {
        content:
          | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember0>
          | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember1>;

        tool_use_id: string;

        type?: 'tool_result';
      }

      export namespace AgentsAPIAutogenTasksContentModel1Output {
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
     * Reference to a tool
     */
    export interface ToolRef {
      /**
       * Reference to a tool by id
       */
      ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
    }

    export namespace ToolRef {
      /**
       * Reference to a tool by id
       */
      export interface ToolRefByID {
        id?: string | null;
      }

      /**
       * Reference to a tool by name
       */
      export interface ToolRefByName {
        name?: string | null;
      }
    }

    /**
     * Payload for creating a tool
     */
    export interface CreateToolRequestOutput {
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
      api_call?: CreateToolRequestOutput.APICall | null;

      bash_20241022?: CreateToolRequestOutput.Bash20241022 | null;

      /**
       * Anthropic new tools
       */
      computer_20241022?: CreateToolRequestOutput.Computer20241022 | null;

      description?: string | null;

      /**
       * Function definition
       */
      function?: CreateToolRequestOutput.Function | null;

      /**
       * Brave integration definition
       */
      integration?:
        | CreateToolRequestOutput.DummyIntegrationDef
        | CreateToolRequestOutput.BraveIntegrationDef
        | CreateToolRequestOutput.EmailIntegrationDef
        | CreateToolRequestOutput.SpiderIntegrationDefOutput
        | CreateToolRequestOutput.WikipediaIntegrationDef
        | CreateToolRequestOutput.WeatherIntegrationDef
        | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
        | CreateToolRequestOutput.BrowserbaseExtensionIntegrationDef
        | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
        | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
        | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
        | CreateToolRequestOutput.BrowserbaseCompleteSessionIntegrationDef
        | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
        | CreateToolRequestOutput.BrowserbaseGetSessionConnectURLIntegrationDef
        | CreateToolRequestOutput.RemoteBrowserIntegrationDef
        | CreateToolRequestOutput.LlamaParseIntegrationDef
        | CreateToolRequestOutput.FfmpegIntegrationDef
        | CreateToolRequestOutput.CloudinaryUploadIntegrationDef
        | CreateToolRequestOutput.CloudinaryEditIntegrationDef
        | CreateToolRequestOutput.ArxivIntegrationDef
        | null;

      /**
       * System definition
       */
      system?: CreateToolRequestOutput.System | null;

      text_editor_20241022?: CreateToolRequestOutput.TextEditor20241022 | null;
    }

    export namespace CreateToolRequestOutput {
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
      export interface SpiderIntegrationDefOutput {
        /**
         * Arguments for Spider integration
         */
        arguments?: SpiderIntegrationDefOutput.Arguments | null;

        method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

        provider?: 'spider';

        /**
         * Setup parameters for Spider integration
         */
        setup?: SpiderIntegrationDefOutput.Setup | null;
      }

      export namespace SpiderIntegrationDefOutput {
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
       * browserbase get session connect url integration definition
       */
      export interface BrowserbaseGetSessionConnectURLIntegrationDef {
        arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

        setup?: unknown | null;
      }

      export namespace FfmpegIntegrationDef {
        /**
         * Arguments for Ffmpeg CMD
         */
        export interface Arguments {
          cmd: string;

          file?: string | null;
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

        setup?: unknown | null;
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

  export interface GetStep {
    get: string;

    kind_?: 'get';

    label?: string | null;
  }

  export interface SetStep {
    set: Record<string, string>;

    kind_?: 'set';

    label?: string | null;
  }

  export interface LogStep {
    log: string;

    kind_?: 'log';

    label?: string | null;
  }

  export interface YieldStep {
    workflow: string;

    arguments?:
      | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
      | '_';

    kind_?: 'yield';

    label?: string | null;
  }

  export interface ReturnStep {
    return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

    kind_?: 'return';

    label?: string | null;
  }

  export interface SleepStep {
    sleep: SleepStep.Sleep;

    kind_?: 'sleep';

    label?: string | null;
  }

  export namespace SleepStep {
    export interface Sleep {
      days?: number;

      hours?: number;

      minutes?: number;

      seconds?: number;
    }
  }

  export interface ErrorWorkflowStep {
    error: string;

    kind_?: 'error';

    label?: string | null;
  }

  export interface WaitForInputStep {
    wait_for_input: WaitForInputStep.WaitForInput;

    kind_?: 'wait_for_input';

    label?: string | null;
  }

  export namespace WaitForInputStep {
    export interface WaitForInput {
      info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
    }
  }

  export interface IfElseWorkflowStepOutput {
    if: string;

    then:
      | IfElseWorkflowStepOutput.EvaluateStep
      | IfElseWorkflowStepOutput.ToolCallStep
      | IfElseWorkflowStepOutput.PromptStepOutput
      | IfElseWorkflowStepOutput.GetStep
      | IfElseWorkflowStepOutput.SetStep
      | IfElseWorkflowStepOutput.LogStep
      | IfElseWorkflowStepOutput.YieldStep
      | IfElseWorkflowStepOutput.ReturnStep
      | IfElseWorkflowStepOutput.SleepStep
      | IfElseWorkflowStepOutput.ErrorWorkflowStep
      | IfElseWorkflowStepOutput.WaitForInputStep;

    else?:
      | IfElseWorkflowStepOutput.EvaluateStep
      | IfElseWorkflowStepOutput.ToolCallStep
      | IfElseWorkflowStepOutput.PromptStepOutput
      | IfElseWorkflowStepOutput.GetStep
      | IfElseWorkflowStepOutput.SetStep
      | IfElseWorkflowStepOutput.LogStep
      | IfElseWorkflowStepOutput.YieldStep
      | IfElseWorkflowStepOutput.ReturnStep
      | IfElseWorkflowStepOutput.SleepStep
      | IfElseWorkflowStepOutput.ErrorWorkflowStep
      | IfElseWorkflowStepOutput.WaitForInputStep
      | null;

    kind_?: 'if_else';

    label?: string | null;
  }

  export namespace IfElseWorkflowStepOutput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      kind_?: 'evaluate';

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      kind_?: 'tool_call';

      label?: string | null;
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      kind_?: 'prompt';

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface AgentsAPIAutogenTasksContentModel1Output {
          content:
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember0>
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace AgentsAPIAutogenTasksContentModel1Output {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface CreateToolRequestOutput {
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
        api_call?: CreateToolRequestOutput.APICall | null;

        bash_20241022?: CreateToolRequestOutput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestOutput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestOutput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestOutput.DummyIntegrationDef
          | CreateToolRequestOutput.BraveIntegrationDef
          | CreateToolRequestOutput.EmailIntegrationDef
          | CreateToolRequestOutput.SpiderIntegrationDefOutput
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseExtensionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCompleteSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionConnectURLIntegrationDef
          | CreateToolRequestOutput.RemoteBrowserIntegrationDef
          | CreateToolRequestOutput.LlamaParseIntegrationDef
          | CreateToolRequestOutput.FfmpegIntegrationDef
          | CreateToolRequestOutput.CloudinaryUploadIntegrationDef
          | CreateToolRequestOutput.CloudinaryEditIntegrationDef
          | CreateToolRequestOutput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestOutput.System | null;

        text_editor_20241022?: CreateToolRequestOutput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestOutput {
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
        export interface SpiderIntegrationDefOutput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefOutput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefOutput.Setup | null;
        }

        export namespace SpiderIntegrationDefOutput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      kind_?: 'get';

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      kind_?: 'yield';

      label?: string | null;
    }

    export interface ReturnStep {
      return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

      kind_?: 'return';

      label?: string | null;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      kind_?: 'sleep';

      label?: string | null;
    }

    export namespace SleepStep {
      export interface Sleep {
        days?: number;

        hours?: number;

        minutes?: number;

        seconds?: number;
      }
    }

    export interface ErrorWorkflowStep {
      error: string;

      kind_?: 'error';

      label?: string | null;
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      kind_?: 'wait_for_input';

      label?: string | null;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
      }
    }

    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      kind_?: 'evaluate';

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      kind_?: 'tool_call';

      label?: string | null;
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      kind_?: 'prompt';

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface AgentsAPIAutogenTasksContentModel1Output {
          content:
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember0>
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace AgentsAPIAutogenTasksContentModel1Output {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface CreateToolRequestOutput {
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
        api_call?: CreateToolRequestOutput.APICall | null;

        bash_20241022?: CreateToolRequestOutput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestOutput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestOutput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestOutput.DummyIntegrationDef
          | CreateToolRequestOutput.BraveIntegrationDef
          | CreateToolRequestOutput.EmailIntegrationDef
          | CreateToolRequestOutput.SpiderIntegrationDefOutput
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseExtensionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCompleteSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionConnectURLIntegrationDef
          | CreateToolRequestOutput.RemoteBrowserIntegrationDef
          | CreateToolRequestOutput.LlamaParseIntegrationDef
          | CreateToolRequestOutput.FfmpegIntegrationDef
          | CreateToolRequestOutput.CloudinaryUploadIntegrationDef
          | CreateToolRequestOutput.CloudinaryEditIntegrationDef
          | CreateToolRequestOutput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestOutput.System | null;

        text_editor_20241022?: CreateToolRequestOutput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestOutput {
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
        export interface SpiderIntegrationDefOutput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefOutput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefOutput.Setup | null;
        }

        export namespace SpiderIntegrationDefOutput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      kind_?: 'get';

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      kind_?: 'yield';

      label?: string | null;
    }

    export interface ReturnStep {
      return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

      kind_?: 'return';

      label?: string | null;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      kind_?: 'sleep';

      label?: string | null;
    }

    export namespace SleepStep {
      export interface Sleep {
        days?: number;

        hours?: number;

        minutes?: number;

        seconds?: number;
      }
    }

    export interface ErrorWorkflowStep {
      error: string;

      kind_?: 'error';

      label?: string | null;
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      kind_?: 'wait_for_input';

      label?: string | null;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
      }
    }
  }

  export interface SwitchStepOutput {
    switch: Array<SwitchStepOutput.Switch>;

    kind_?: 'switch';

    label?: string | null;
  }

  export namespace SwitchStepOutput {
    export interface Switch {
      case: '_';

      then:
        | Switch.EvaluateStep
        | Switch.ToolCallStep
        | Switch.PromptStepOutput
        | Switch.GetStep
        | Switch.SetStep
        | Switch.LogStep
        | Switch.YieldStep
        | Switch.ReturnStep
        | Switch.SleepStep
        | Switch.ErrorWorkflowStep
        | Switch.WaitForInputStep;
    }

    export namespace Switch {
      export interface EvaluateStep {
        evaluate: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        kind_?: 'evaluate';

        label?: string | null;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?:
          | Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          | Array<
              Record<
                string,
                | Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                | Array<
                    Record<
                      string,
                      Array<string> | Record<string, string> | Array<Record<string, string>> | string
                    >
                  >
                | string
              >
            >
          | '_';

        kind_?: 'tool_call';

        label?: string | null;
      }

      export interface PromptStepOutput {
        prompt: Array<PromptStepOutput.UnionMember0> | string;

        auto_run_tools?: boolean;

        disable_cache?: boolean;

        kind_?: 'prompt';

        label?: string | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

        unwrap?: boolean;
      }

      export namespace PromptStepOutput {
        export interface UnionMember0 {
          content:
            | Array<string>
            | Array<
                | UnionMember0.Content
                | UnionMember0.AgentsAPIAutogenTasksContentModel
                | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
              >
            | string
            | null;

          role: 'user' | 'assistant' | 'system' | 'tool';

          continue?: boolean | null;

          name?: string | null;

          tool_call_id?: string | null;

          tool_calls?: Array<
            | UnionMember0.ChosenFunctionCall
            | UnionMember0.ChosenComputer20241022
            | UnionMember0.ChosenTextEditor20241022
            | UnionMember0.ChosenBash20241022
          > | null;
        }

        export namespace UnionMember0 {
          export interface Content {
            text: string;

            type?: 'text';
          }

          export interface AgentsAPIAutogenTasksContentModel {
            /**
             * The image URL
             */
            image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

            type?: 'image_url';
          }

          export namespace AgentsAPIAutogenTasksContentModel {
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
          export interface AgentsAPIAutogenTasksContentModel1Output {
            content:
              | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember0>
              | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember1>;

            tool_use_id: string;

            type?: 'tool_result';
          }

          export namespace AgentsAPIAutogenTasksContentModel1Output {
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
         * Reference to a tool
         */
        export interface ToolRef {
          /**
           * Reference to a tool by id
           */
          ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
        }

        export namespace ToolRef {
          /**
           * Reference to a tool by id
           */
          export interface ToolRefByID {
            id?: string | null;
          }

          /**
           * Reference to a tool by name
           */
          export interface ToolRefByName {
            name?: string | null;
          }
        }

        /**
         * Payload for creating a tool
         */
        export interface CreateToolRequestOutput {
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
          api_call?: CreateToolRequestOutput.APICall | null;

          bash_20241022?: CreateToolRequestOutput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: CreateToolRequestOutput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: CreateToolRequestOutput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | CreateToolRequestOutput.DummyIntegrationDef
            | CreateToolRequestOutput.BraveIntegrationDef
            | CreateToolRequestOutput.EmailIntegrationDef
            | CreateToolRequestOutput.SpiderIntegrationDefOutput
            | CreateToolRequestOutput.WikipediaIntegrationDef
            | CreateToolRequestOutput.WeatherIntegrationDef
            | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
            | CreateToolRequestOutput.BrowserbaseExtensionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseCompleteSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionConnectURLIntegrationDef
            | CreateToolRequestOutput.RemoteBrowserIntegrationDef
            | CreateToolRequestOutput.LlamaParseIntegrationDef
            | CreateToolRequestOutput.FfmpegIntegrationDef
            | CreateToolRequestOutput.CloudinaryUploadIntegrationDef
            | CreateToolRequestOutput.CloudinaryEditIntegrationDef
            | CreateToolRequestOutput.ArxivIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: CreateToolRequestOutput.System | null;

          text_editor_20241022?: CreateToolRequestOutput.TextEditor20241022 | null;
        }

        export namespace CreateToolRequestOutput {
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
          export interface SpiderIntegrationDefOutput {
            /**
             * Arguments for Spider integration
             */
            arguments?: SpiderIntegrationDefOutput.Arguments | null;

            method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

            provider?: 'spider';

            /**
             * Setup parameters for Spider integration
             */
            setup?: SpiderIntegrationDefOutput.Setup | null;
          }

          export namespace SpiderIntegrationDefOutput {
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
           * browserbase get session connect url integration definition
           */
          export interface BrowserbaseGetSessionConnectURLIntegrationDef {
            arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

            setup?: unknown | null;
          }

          export namespace FfmpegIntegrationDef {
            /**
             * Arguments for Ffmpeg CMD
             */
            export interface Arguments {
              cmd: string;

              file?: string | null;
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

            setup?: unknown | null;
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

      export interface GetStep {
        get: string;

        kind_?: 'get';

        label?: string | null;
      }

      export interface SetStep {
        set: Record<string, string>;

        kind_?: 'set';

        label?: string | null;
      }

      export interface LogStep {
        log: string;

        kind_?: 'log';

        label?: string | null;
      }

      export interface YieldStep {
        workflow: string;

        arguments?:
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | '_';

        kind_?: 'yield';

        label?: string | null;
      }

      export interface ReturnStep {
        return: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        kind_?: 'return';

        label?: string | null;
      }

      export interface SleepStep {
        sleep: SleepStep.Sleep;

        kind_?: 'sleep';

        label?: string | null;
      }

      export namespace SleepStep {
        export interface Sleep {
          days?: number;

          hours?: number;

          minutes?: number;

          seconds?: number;
        }
      }

      export interface ErrorWorkflowStep {
        error: string;

        kind_?: 'error';

        label?: string | null;
      }

      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;

        kind_?: 'wait_for_input';

        label?: string | null;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<
            string,
            Array<string> | Record<string, string> | Array<Record<string, string>> | string
          >;
        }
      }
    }
  }

  export interface ForeachStepOutput {
    foreach: ForeachStepOutput.Foreach;

    kind_?: 'foreach';

    label?: string | null;
  }

  export namespace ForeachStepOutput {
    export interface Foreach {
      do:
        | Foreach.WaitForInputStep
        | Foreach.EvaluateStep
        | Foreach.ToolCallStep
        | Foreach.PromptStepOutput
        | Foreach.GetStep
        | Foreach.SetStep
        | Foreach.LogStep
        | Foreach.YieldStep;

      in: string;
    }

    export namespace Foreach {
      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;

        kind_?: 'wait_for_input';

        label?: string | null;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<
            string,
            Array<string> | Record<string, string> | Array<Record<string, string>> | string
          >;
        }
      }

      export interface EvaluateStep {
        evaluate: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        kind_?: 'evaluate';

        label?: string | null;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?:
          | Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          | Array<
              Record<
                string,
                | Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                | Array<
                    Record<
                      string,
                      Array<string> | Record<string, string> | Array<Record<string, string>> | string
                    >
                  >
                | string
              >
            >
          | '_';

        kind_?: 'tool_call';

        label?: string | null;
      }

      export interface PromptStepOutput {
        prompt: Array<PromptStepOutput.UnionMember0> | string;

        auto_run_tools?: boolean;

        disable_cache?: boolean;

        kind_?: 'prompt';

        label?: string | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

        unwrap?: boolean;
      }

      export namespace PromptStepOutput {
        export interface UnionMember0 {
          content:
            | Array<string>
            | Array<
                | UnionMember0.Content
                | UnionMember0.AgentsAPIAutogenTasksContentModel
                | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
              >
            | string
            | null;

          role: 'user' | 'assistant' | 'system' | 'tool';

          continue?: boolean | null;

          name?: string | null;

          tool_call_id?: string | null;

          tool_calls?: Array<
            | UnionMember0.ChosenFunctionCall
            | UnionMember0.ChosenComputer20241022
            | UnionMember0.ChosenTextEditor20241022
            | UnionMember0.ChosenBash20241022
          > | null;
        }

        export namespace UnionMember0 {
          export interface Content {
            text: string;

            type?: 'text';
          }

          export interface AgentsAPIAutogenTasksContentModel {
            /**
             * The image URL
             */
            image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

            type?: 'image_url';
          }

          export namespace AgentsAPIAutogenTasksContentModel {
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
          export interface AgentsAPIAutogenTasksContentModel1Output {
            content:
              | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember0>
              | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember1>;

            tool_use_id: string;

            type?: 'tool_result';
          }

          export namespace AgentsAPIAutogenTasksContentModel1Output {
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
         * Reference to a tool
         */
        export interface ToolRef {
          /**
           * Reference to a tool by id
           */
          ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
        }

        export namespace ToolRef {
          /**
           * Reference to a tool by id
           */
          export interface ToolRefByID {
            id?: string | null;
          }

          /**
           * Reference to a tool by name
           */
          export interface ToolRefByName {
            name?: string | null;
          }
        }

        /**
         * Payload for creating a tool
         */
        export interface CreateToolRequestOutput {
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
          api_call?: CreateToolRequestOutput.APICall | null;

          bash_20241022?: CreateToolRequestOutput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: CreateToolRequestOutput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: CreateToolRequestOutput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | CreateToolRequestOutput.DummyIntegrationDef
            | CreateToolRequestOutput.BraveIntegrationDef
            | CreateToolRequestOutput.EmailIntegrationDef
            | CreateToolRequestOutput.SpiderIntegrationDefOutput
            | CreateToolRequestOutput.WikipediaIntegrationDef
            | CreateToolRequestOutput.WeatherIntegrationDef
            | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
            | CreateToolRequestOutput.BrowserbaseExtensionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseCompleteSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionConnectURLIntegrationDef
            | CreateToolRequestOutput.RemoteBrowserIntegrationDef
            | CreateToolRequestOutput.LlamaParseIntegrationDef
            | CreateToolRequestOutput.FfmpegIntegrationDef
            | CreateToolRequestOutput.CloudinaryUploadIntegrationDef
            | CreateToolRequestOutput.CloudinaryEditIntegrationDef
            | CreateToolRequestOutput.ArxivIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: CreateToolRequestOutput.System | null;

          text_editor_20241022?: CreateToolRequestOutput.TextEditor20241022 | null;
        }

        export namespace CreateToolRequestOutput {
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
          export interface SpiderIntegrationDefOutput {
            /**
             * Arguments for Spider integration
             */
            arguments?: SpiderIntegrationDefOutput.Arguments | null;

            method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

            provider?: 'spider';

            /**
             * Setup parameters for Spider integration
             */
            setup?: SpiderIntegrationDefOutput.Setup | null;
          }

          export namespace SpiderIntegrationDefOutput {
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
           * browserbase get session connect url integration definition
           */
          export interface BrowserbaseGetSessionConnectURLIntegrationDef {
            arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

            setup?: unknown | null;
          }

          export namespace FfmpegIntegrationDef {
            /**
             * Arguments for Ffmpeg CMD
             */
            export interface Arguments {
              cmd: string;

              file?: string | null;
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

            setup?: unknown | null;
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

      export interface GetStep {
        get: string;

        kind_?: 'get';

        label?: string | null;
      }

      export interface SetStep {
        set: Record<string, string>;

        kind_?: 'set';

        label?: string | null;
      }

      export interface LogStep {
        log: string;

        kind_?: 'log';

        label?: string | null;
      }

      export interface YieldStep {
        workflow: string;

        arguments?:
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | '_';

        kind_?: 'yield';

        label?: string | null;
      }
    }
  }

  export interface ParallelStepOutput {
    parallel: Array<
      | ParallelStepOutput.EvaluateStep
      | ParallelStepOutput.ToolCallStep
      | ParallelStepOutput.PromptStepOutput
      | ParallelStepOutput.GetStep
      | ParallelStepOutput.SetStep
      | ParallelStepOutput.LogStep
      | ParallelStepOutput.YieldStep
    >;

    kind_?: 'parallel';

    label?: string | null;
  }

  export namespace ParallelStepOutput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      kind_?: 'evaluate';

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      kind_?: 'tool_call';

      label?: string | null;
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      kind_?: 'prompt';

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface AgentsAPIAutogenTasksContentModel1Output {
          content:
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember0>
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace AgentsAPIAutogenTasksContentModel1Output {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface CreateToolRequestOutput {
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
        api_call?: CreateToolRequestOutput.APICall | null;

        bash_20241022?: CreateToolRequestOutput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestOutput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestOutput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestOutput.DummyIntegrationDef
          | CreateToolRequestOutput.BraveIntegrationDef
          | CreateToolRequestOutput.EmailIntegrationDef
          | CreateToolRequestOutput.SpiderIntegrationDefOutput
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseExtensionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCompleteSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionConnectURLIntegrationDef
          | CreateToolRequestOutput.RemoteBrowserIntegrationDef
          | CreateToolRequestOutput.LlamaParseIntegrationDef
          | CreateToolRequestOutput.FfmpegIntegrationDef
          | CreateToolRequestOutput.CloudinaryUploadIntegrationDef
          | CreateToolRequestOutput.CloudinaryEditIntegrationDef
          | CreateToolRequestOutput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestOutput.System | null;

        text_editor_20241022?: CreateToolRequestOutput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestOutput {
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
        export interface SpiderIntegrationDefOutput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefOutput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefOutput.Setup | null;
        }

        export namespace SpiderIntegrationDefOutput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      kind_?: 'get';

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      kind_?: 'yield';

      label?: string | null;
    }
  }

  export interface MainOutput {
    map:
      | MainOutput.EvaluateStep
      | MainOutput.ToolCallStep
      | MainOutput.PromptStepOutput
      | MainOutput.GetStep
      | MainOutput.SetStep
      | MainOutput.LogStep
      | MainOutput.YieldStep;

    over: string;

    initial?: unknown;

    kind_?: 'map_reduce';

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
  }

  export namespace MainOutput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      kind_?: 'evaluate';

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      kind_?: 'tool_call';

      label?: string | null;
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      kind_?: 'prompt';

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface AgentsAPIAutogenTasksContentModel1Output {
          content:
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember0>
            | Array<AgentsAPIAutogenTasksContentModel1Output.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace AgentsAPIAutogenTasksContentModel1Output {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface CreateToolRequestOutput {
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
        api_call?: CreateToolRequestOutput.APICall | null;

        bash_20241022?: CreateToolRequestOutput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestOutput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestOutput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestOutput.DummyIntegrationDef
          | CreateToolRequestOutput.BraveIntegrationDef
          | CreateToolRequestOutput.EmailIntegrationDef
          | CreateToolRequestOutput.SpiderIntegrationDefOutput
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseExtensionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCompleteSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionConnectURLIntegrationDef
          | CreateToolRequestOutput.RemoteBrowserIntegrationDef
          | CreateToolRequestOutput.LlamaParseIntegrationDef
          | CreateToolRequestOutput.FfmpegIntegrationDef
          | CreateToolRequestOutput.CloudinaryUploadIntegrationDef
          | CreateToolRequestOutput.CloudinaryEditIntegrationDef
          | CreateToolRequestOutput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestOutput.System | null;

        text_editor_20241022?: CreateToolRequestOutput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestOutput {
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
        export interface SpiderIntegrationDefOutput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefOutput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefOutput.Setup | null;
        }

        export namespace SpiderIntegrationDefOutput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      kind_?: 'get';

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      kind_?: 'yield';

      label?: string | null;
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

    inherited?: boolean;

    /**
     * Brave integration definition
     */
    integration?:
      | Tool.DummyIntegrationDef
      | Tool.BraveIntegrationDef
      | Tool.EmailIntegrationDef
      | Tool.SpiderIntegrationDefOutput
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
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
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
    export interface SpiderIntegrationDefOutput {
      /**
       * Arguments for Spider integration
       */
      arguments?: SpiderIntegrationDefOutput.Arguments | null;

      method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

      provider?: 'spider';

      /**
       * Setup parameters for Spider integration
       */
      setup?: SpiderIntegrationDefOutput.Setup | null;
    }

    export namespace SpiderIntegrationDefOutput {
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
     * browserbase get session connect url integration definition
     */
    export interface BrowserbaseGetSessionConnectURLIntegrationDef {
      arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

      setup?: unknown | null;
    }

    export namespace FfmpegIntegrationDef {
      /**
       * Arguments for Ffmpeg CMD
       */
      export interface Arguments {
        cmd: string;

        file?: string | null;
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

      setup?: unknown | null;
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

export interface TaskCreateParams {
  main: Array<
    | TaskCreateParams.EvaluateStep
    | TaskCreateParams.ToolCallStep
    | TaskCreateParams.PromptStepInput
    | TaskCreateParams.GetStep
    | TaskCreateParams.SetStep
    | TaskCreateParams.LogStep
    | TaskCreateParams.YieldStep
    | TaskCreateParams.ReturnStep
    | TaskCreateParams.SleepStep
    | TaskCreateParams.ErrorWorkflowStep
    | TaskCreateParams.WaitForInputStep
    | TaskCreateParams.IfElseWorkflowStepInput
    | TaskCreateParams.SwitchStepInput
    | TaskCreateParams.ForeachStepInput
    | TaskCreateParams.ParallelStepInput
    | TaskCreateParams.MainInput
  >;

  name: string;

  description?: string;

  inherit_tools?: boolean;

  input_schema?: unknown | null;

  metadata?: unknown | null;

  tools?: Array<TaskCreateParams.Tool>;
}

export namespace TaskCreateParams {
  export interface EvaluateStep {
    evaluate: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

    label?: string | null;
  }

  export interface ToolCallStep {
    tool: string;

    arguments?:
      | Record<
          string,
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | Array<
              Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            >
          | string
        >
      | Array<
          Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        >
      | '_';

    label?: string | null;
  }

  export interface PromptStepInput {
    prompt: Array<PromptStepInput.UnionMember0> | string;

    auto_run_tools?: boolean;

    disable_cache?: boolean;

    label?: string | null;

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

    tools?:
      | 'all'
      | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

    unwrap?: boolean;
  }

  export namespace PromptStepInput {
    export interface UnionMember0 {
      content:
        | Array<string>
        | Array<
            | UnionMember0.Content
            | UnionMember0.AgentsAPIAutogenTasksContentModel
            | UnionMember0.ContentModel1Input
          >
        | string
        | null;

      role: 'user' | 'assistant' | 'system' | 'tool';

      continue?: boolean | null;

      name?: string | null;

      tool_call_id?: string | null;

      tool_calls?: Array<
        | UnionMember0.ChosenFunctionCall
        | UnionMember0.ChosenComputer20241022
        | UnionMember0.ChosenTextEditor20241022
        | UnionMember0.ChosenBash20241022
      > | null;
    }

    export namespace UnionMember0 {
      export interface Content {
        text: string;

        type?: 'text';
      }

      export interface AgentsAPIAutogenTasksContentModel {
        /**
         * The image URL
         */
        image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

        type?: 'image_url';
      }

      export namespace AgentsAPIAutogenTasksContentModel {
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
      export interface ContentModel1Input {
        content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

        tool_use_id: string;

        type?: 'tool_result';
      }

      export namespace ContentModel1Input {
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
     * Reference to a tool
     */
    export interface ToolRef {
      /**
       * Reference to a tool by id
       */
      ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
    }

    export namespace ToolRef {
      /**
       * Reference to a tool by id
       */
      export interface ToolRefByID {
        id?: string | null;
      }

      /**
       * Reference to a tool by name
       */
      export interface ToolRefByName {
        name?: string | null;
      }
    }

    /**
     * Payload for creating a tool
     */
    export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
      api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

      bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

      /**
       * Anthropic new tools
       */
      computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

      description?: string | null;

      /**
       * Function definition
       */
      function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

      /**
       * Brave integration definition
       */
      integration?:
        | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
        | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
        | null;

      /**
       * System definition
       */
      system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

      text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
    }

    export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
      export interface SpiderIntegrationDefInput {
        /**
         * Arguments for Spider integration
         */
        arguments?: SpiderIntegrationDefInput.Arguments | null;

        method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

        provider?: 'spider';

        /**
         * Setup parameters for Spider integration
         */
        setup?: SpiderIntegrationDefInput.Setup | null;
      }

      export namespace SpiderIntegrationDefInput {
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
       * browserbase get session connect url integration definition
       */
      export interface BrowserbaseGetSessionConnectURLIntegrationDef {
        arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

        setup?: unknown | null;
      }

      export namespace FfmpegIntegrationDef {
        /**
         * Arguments for Ffmpeg CMD
         */
        export interface Arguments {
          cmd: string;

          file?: string | null;
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

        setup?: unknown | null;
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

  export interface GetStep {
    get: string;

    label?: string | null;
  }

  export interface SetStep {
    set: Record<string, string>;

    label?: string | null;
  }

  export interface LogStep {
    log: string;

    label?: string | null;
  }

  export interface YieldStep {
    workflow: string;

    arguments?:
      | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
      | '_';

    label?: string | null;
  }

  export interface ReturnStep {
    return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

    label?: string | null;
  }

  export interface SleepStep {
    sleep: SleepStep.Sleep;

    label?: string | null;
  }

  export namespace SleepStep {
    export interface Sleep {
      days?: number;

      hours?: number;

      minutes?: number;

      seconds?: number;
    }
  }

  export interface ErrorWorkflowStep {
    error: string;

    label?: string | null;
  }

  export interface WaitForInputStep {
    wait_for_input: WaitForInputStep.WaitForInput;

    label?: string | null;
  }

  export namespace WaitForInputStep {
    export interface WaitForInput {
      info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
    }
  }

  export interface IfElseWorkflowStepInput {
    if: string;

    then:
      | IfElseWorkflowStepInput.EvaluateStep
      | IfElseWorkflowStepInput.ToolCallStep
      | IfElseWorkflowStepInput.PromptStepInput
      | IfElseWorkflowStepInput.GetStep
      | IfElseWorkflowStepInput.SetStep
      | IfElseWorkflowStepInput.LogStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.WaitForInputStep;

    else?:
      | IfElseWorkflowStepInput.EvaluateStep
      | IfElseWorkflowStepInput.ToolCallStep
      | IfElseWorkflowStepInput.PromptStepInput
      | IfElseWorkflowStepInput.GetStep
      | IfElseWorkflowStepInput.SetStep
      | IfElseWorkflowStepInput.LogStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.WaitForInputStep
      | null;

    label?: string | null;
  }

  export namespace IfElseWorkflowStepInput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
    }

    export interface ReturnStep {
      return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

      label?: string | null;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      label?: string | null;
    }

    export namespace SleepStep {
      export interface Sleep {
        days?: number;

        hours?: number;

        minutes?: number;

        seconds?: number;
      }
    }

    export interface ErrorWorkflowStep {
      error: string;

      label?: string | null;
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      label?: string | null;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
      }
    }

    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
    }

    export interface ReturnStep {
      return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

      label?: string | null;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      label?: string | null;
    }

    export namespace SleepStep {
      export interface Sleep {
        days?: number;

        hours?: number;

        minutes?: number;

        seconds?: number;
      }
    }

    export interface ErrorWorkflowStep {
      error: string;

      label?: string | null;
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      label?: string | null;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
      }
    }
  }

  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;

    label?: string | null;
  }

  export namespace SwitchStepInput {
    export interface Switch {
      case: '_';

      then:
        | Switch.EvaluateStep
        | Switch.ToolCallStep
        | Switch.PromptStepInput
        | Switch.GetStep
        | Switch.SetStep
        | Switch.LogStep
        | Switch.YieldStep
        | Switch.ReturnStep
        | Switch.SleepStep
        | Switch.ErrorWorkflowStep
        | Switch.WaitForInputStep;
    }

    export namespace Switch {
      export interface EvaluateStep {
        evaluate: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        label?: string | null;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?:
          | Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          | Array<
              Record<
                string,
                | Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                | Array<
                    Record<
                      string,
                      Array<string> | Record<string, string> | Array<Record<string, string>> | string
                    >
                  >
                | string
              >
            >
          | '_';

        label?: string | null;
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        auto_run_tools?: boolean;

        disable_cache?: boolean;

        label?: string | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?:
          | 'all'
          | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content:
            | Array<string>
            | Array<
                | UnionMember0.Content
                | UnionMember0.AgentsAPIAutogenTasksContentModel
                | UnionMember0.ContentModel1Input
              >
            | string
            | null;

          role: 'user' | 'assistant' | 'system' | 'tool';

          continue?: boolean | null;

          name?: string | null;

          tool_call_id?: string | null;

          tool_calls?: Array<
            | UnionMember0.ChosenFunctionCall
            | UnionMember0.ChosenComputer20241022
            | UnionMember0.ChosenTextEditor20241022
            | UnionMember0.ChosenBash20241022
          > | null;
        }

        export namespace UnionMember0 {
          export interface Content {
            text: string;

            type?: 'text';
          }

          export interface AgentsAPIAutogenTasksContentModel {
            /**
             * The image URL
             */
            image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

            type?: 'image_url';
          }

          export namespace AgentsAPIAutogenTasksContentModel {
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
          export interface ContentModel1Input {
            content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

            tool_use_id: string;

            type?: 'tool_result';
          }

          export namespace ContentModel1Input {
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
         * Reference to a tool
         */
        export interface ToolRef {
          /**
           * Reference to a tool by id
           */
          ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
        }

        export namespace ToolRef {
          /**
           * Reference to a tool by id
           */
          export interface ToolRefByID {
            id?: string | null;
          }

          /**
           * Reference to a tool by name
           */
          export interface ToolRefByName {
            name?: string | null;
          }
        }

        /**
         * Payload for creating a tool
         */
        export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
          api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

          bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
            | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

          text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
          export interface SpiderIntegrationDefInput {
            /**
             * Arguments for Spider integration
             */
            arguments?: SpiderIntegrationDefInput.Arguments | null;

            method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

            provider?: 'spider';

            /**
             * Setup parameters for Spider integration
             */
            setup?: SpiderIntegrationDefInput.Setup | null;
          }

          export namespace SpiderIntegrationDefInput {
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
           * browserbase get session connect url integration definition
           */
          export interface BrowserbaseGetSessionConnectURLIntegrationDef {
            arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

            setup?: unknown | null;
          }

          export namespace FfmpegIntegrationDef {
            /**
             * Arguments for Ffmpeg CMD
             */
            export interface Arguments {
              cmd: string;

              file?: string | null;
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

            setup?: unknown | null;
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

      export interface GetStep {
        get: string;

        label?: string | null;
      }

      export interface SetStep {
        set: Record<string, string>;

        label?: string | null;
      }

      export interface LogStep {
        log: string;

        label?: string | null;
      }

      export interface YieldStep {
        workflow: string;

        arguments?:
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | '_';

        label?: string | null;
      }

      export interface ReturnStep {
        return: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        label?: string | null;
      }

      export interface SleepStep {
        sleep: SleepStep.Sleep;

        label?: string | null;
      }

      export namespace SleepStep {
        export interface Sleep {
          days?: number;

          hours?: number;

          minutes?: number;

          seconds?: number;
        }
      }

      export interface ErrorWorkflowStep {
        error: string;

        label?: string | null;
      }

      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;

        label?: string | null;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<
            string,
            Array<string> | Record<string, string> | Array<Record<string, string>> | string
          >;
        }
      }
    }
  }

  export interface ForeachStepInput {
    foreach: ForeachStepInput.Foreach;

    label?: string | null;
  }

  export namespace ForeachStepInput {
    export interface Foreach {
      do:
        | Foreach.WaitForInputStep
        | Foreach.EvaluateStep
        | Foreach.ToolCallStep
        | Foreach.PromptStepInput
        | Foreach.GetStep
        | Foreach.SetStep
        | Foreach.LogStep
        | Foreach.YieldStep;

      in: string;
    }

    export namespace Foreach {
      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;

        label?: string | null;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<
            string,
            Array<string> | Record<string, string> | Array<Record<string, string>> | string
          >;
        }
      }

      export interface EvaluateStep {
        evaluate: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        label?: string | null;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?:
          | Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          | Array<
              Record<
                string,
                | Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                | Array<
                    Record<
                      string,
                      Array<string> | Record<string, string> | Array<Record<string, string>> | string
                    >
                  >
                | string
              >
            >
          | '_';

        label?: string | null;
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        auto_run_tools?: boolean;

        disable_cache?: boolean;

        label?: string | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?:
          | 'all'
          | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content:
            | Array<string>
            | Array<
                | UnionMember0.Content
                | UnionMember0.AgentsAPIAutogenTasksContentModel
                | UnionMember0.ContentModel1Input
              >
            | string
            | null;

          role: 'user' | 'assistant' | 'system' | 'tool';

          continue?: boolean | null;

          name?: string | null;

          tool_call_id?: string | null;

          tool_calls?: Array<
            | UnionMember0.ChosenFunctionCall
            | UnionMember0.ChosenComputer20241022
            | UnionMember0.ChosenTextEditor20241022
            | UnionMember0.ChosenBash20241022
          > | null;
        }

        export namespace UnionMember0 {
          export interface Content {
            text: string;

            type?: 'text';
          }

          export interface AgentsAPIAutogenTasksContentModel {
            /**
             * The image URL
             */
            image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

            type?: 'image_url';
          }

          export namespace AgentsAPIAutogenTasksContentModel {
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
          export interface ContentModel1Input {
            content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

            tool_use_id: string;

            type?: 'tool_result';
          }

          export namespace ContentModel1Input {
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
         * Reference to a tool
         */
        export interface ToolRef {
          /**
           * Reference to a tool by id
           */
          ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
        }

        export namespace ToolRef {
          /**
           * Reference to a tool by id
           */
          export interface ToolRefByID {
            id?: string | null;
          }

          /**
           * Reference to a tool by name
           */
          export interface ToolRefByName {
            name?: string | null;
          }
        }

        /**
         * Payload for creating a tool
         */
        export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
          api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

          bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
            | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

          text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
          export interface SpiderIntegrationDefInput {
            /**
             * Arguments for Spider integration
             */
            arguments?: SpiderIntegrationDefInput.Arguments | null;

            method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

            provider?: 'spider';

            /**
             * Setup parameters for Spider integration
             */
            setup?: SpiderIntegrationDefInput.Setup | null;
          }

          export namespace SpiderIntegrationDefInput {
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
           * browserbase get session connect url integration definition
           */
          export interface BrowserbaseGetSessionConnectURLIntegrationDef {
            arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

            setup?: unknown | null;
          }

          export namespace FfmpegIntegrationDef {
            /**
             * Arguments for Ffmpeg CMD
             */
            export interface Arguments {
              cmd: string;

              file?: string | null;
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

            setup?: unknown | null;
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

      export interface GetStep {
        get: string;

        label?: string | null;
      }

      export interface SetStep {
        set: Record<string, string>;

        label?: string | null;
      }

      export interface LogStep {
        log: string;

        label?: string | null;
      }

      export interface YieldStep {
        workflow: string;

        arguments?:
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | '_';

        label?: string | null;
      }
    }
  }

  export interface ParallelStepInput {
    parallel: Array<
      | ParallelStepInput.EvaluateStep
      | ParallelStepInput.ToolCallStep
      | ParallelStepInput.PromptStepInput
      | ParallelStepInput.GetStep
      | ParallelStepInput.SetStep
      | ParallelStepInput.LogStep
      | ParallelStepInput.YieldStep
    >;

    label?: string | null;
  }

  export namespace ParallelStepInput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
    }
  }

  export interface MainInput {
    map:
      | MainInput.EvaluateStep
      | MainInput.ToolCallStep
      | MainInput.PromptStepInput
      | MainInput.GetStep
      | MainInput.SetStep
      | MainInput.LogStep
      | MainInput.YieldStep;

    over: string;

    initial?: unknown;

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
  }

  export namespace MainInput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
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
      | Tool.SpiderIntegrationDefInput
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
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
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
    export interface SpiderIntegrationDefInput {
      /**
       * Arguments for Spider integration
       */
      arguments?: SpiderIntegrationDefInput.Arguments | null;

      method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

      provider?: 'spider';

      /**
       * Setup parameters for Spider integration
       */
      setup?: SpiderIntegrationDefInput.Setup | null;
    }

    export namespace SpiderIntegrationDefInput {
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
     * browserbase get session connect url integration definition
     */
    export interface BrowserbaseGetSessionConnectURLIntegrationDef {
      arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

      setup?: unknown | null;
    }

    export namespace FfmpegIntegrationDef {
      /**
       * Arguments for Ffmpeg CMD
       */
      export interface Arguments {
        cmd: string;

        file?: string | null;
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

      setup?: unknown | null;
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

export interface TaskListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  sort_by?: 'created_at' | 'updated_at';
}

export interface TaskCreateOrUpdateParams {
  main: Array<
    | TaskCreateOrUpdateParams.EvaluateStep
    | TaskCreateOrUpdateParams.ToolCallStep
    | TaskCreateOrUpdateParams.PromptStepInput
    | TaskCreateOrUpdateParams.GetStep
    | TaskCreateOrUpdateParams.SetStep
    | TaskCreateOrUpdateParams.LogStep
    | TaskCreateOrUpdateParams.YieldStep
    | TaskCreateOrUpdateParams.ReturnStep
    | TaskCreateOrUpdateParams.SleepStep
    | TaskCreateOrUpdateParams.ErrorWorkflowStep
    | TaskCreateOrUpdateParams.WaitForInputStep
    | TaskCreateOrUpdateParams.IfElseWorkflowStepInput
    | TaskCreateOrUpdateParams.SwitchStepInput
    | TaskCreateOrUpdateParams.ForeachStepInput
    | TaskCreateOrUpdateParams.ParallelStepInput
    | TaskCreateOrUpdateParams.MainInput
  >;

  name: string;

  description?: string;

  inherit_tools?: boolean;

  input_schema?: unknown | null;

  metadata?: unknown | null;

  tools?: Array<TaskCreateOrUpdateParams.Tool>;
}

export namespace TaskCreateOrUpdateParams {
  export interface EvaluateStep {
    evaluate: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

    label?: string | null;
  }

  export interface ToolCallStep {
    tool: string;

    arguments?:
      | Record<
          string,
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | Array<
              Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            >
          | string
        >
      | Array<
          Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        >
      | '_';

    label?: string | null;
  }

  export interface PromptStepInput {
    prompt: Array<PromptStepInput.UnionMember0> | string;

    auto_run_tools?: boolean;

    disable_cache?: boolean;

    label?: string | null;

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

    tools?:
      | 'all'
      | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

    unwrap?: boolean;
  }

  export namespace PromptStepInput {
    export interface UnionMember0 {
      content:
        | Array<string>
        | Array<
            | UnionMember0.Content
            | UnionMember0.AgentsAPIAutogenTasksContentModel
            | UnionMember0.ContentModel1Input
          >
        | string
        | null;

      role: 'user' | 'assistant' | 'system' | 'tool';

      continue?: boolean | null;

      name?: string | null;

      tool_call_id?: string | null;

      tool_calls?: Array<
        | UnionMember0.ChosenFunctionCall
        | UnionMember0.ChosenComputer20241022
        | UnionMember0.ChosenTextEditor20241022
        | UnionMember0.ChosenBash20241022
      > | null;
    }

    export namespace UnionMember0 {
      export interface Content {
        text: string;

        type?: 'text';
      }

      export interface AgentsAPIAutogenTasksContentModel {
        /**
         * The image URL
         */
        image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

        type?: 'image_url';
      }

      export namespace AgentsAPIAutogenTasksContentModel {
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
      export interface ContentModel1Input {
        content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

        tool_use_id: string;

        type?: 'tool_result';
      }

      export namespace ContentModel1Input {
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
     * Reference to a tool
     */
    export interface ToolRef {
      /**
       * Reference to a tool by id
       */
      ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
    }

    export namespace ToolRef {
      /**
       * Reference to a tool by id
       */
      export interface ToolRefByID {
        id?: string | null;
      }

      /**
       * Reference to a tool by name
       */
      export interface ToolRefByName {
        name?: string | null;
      }
    }

    /**
     * Payload for creating a tool
     */
    export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
      api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

      bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

      /**
       * Anthropic new tools
       */
      computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

      description?: string | null;

      /**
       * Function definition
       */
      function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

      /**
       * Brave integration definition
       */
      integration?:
        | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
        | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
        | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
        | null;

      /**
       * System definition
       */
      system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

      text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
    }

    export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
      export interface SpiderIntegrationDefInput {
        /**
         * Arguments for Spider integration
         */
        arguments?: SpiderIntegrationDefInput.Arguments | null;

        method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

        provider?: 'spider';

        /**
         * Setup parameters for Spider integration
         */
        setup?: SpiderIntegrationDefInput.Setup | null;
      }

      export namespace SpiderIntegrationDefInput {
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
       * browserbase get session connect url integration definition
       */
      export interface BrowserbaseGetSessionConnectURLIntegrationDef {
        arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

        setup?: unknown | null;
      }

      export namespace FfmpegIntegrationDef {
        /**
         * Arguments for Ffmpeg CMD
         */
        export interface Arguments {
          cmd: string;

          file?: string | null;
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

        setup?: unknown | null;
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

  export interface GetStep {
    get: string;

    label?: string | null;
  }

  export interface SetStep {
    set: Record<string, string>;

    label?: string | null;
  }

  export interface LogStep {
    log: string;

    label?: string | null;
  }

  export interface YieldStep {
    workflow: string;

    arguments?:
      | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
      | '_';

    label?: string | null;
  }

  export interface ReturnStep {
    return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

    label?: string | null;
  }

  export interface SleepStep {
    sleep: SleepStep.Sleep;

    label?: string | null;
  }

  export namespace SleepStep {
    export interface Sleep {
      days?: number;

      hours?: number;

      minutes?: number;

      seconds?: number;
    }
  }

  export interface ErrorWorkflowStep {
    error: string;

    label?: string | null;
  }

  export interface WaitForInputStep {
    wait_for_input: WaitForInputStep.WaitForInput;

    label?: string | null;
  }

  export namespace WaitForInputStep {
    export interface WaitForInput {
      info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
    }
  }

  export interface IfElseWorkflowStepInput {
    if: string;

    then:
      | IfElseWorkflowStepInput.EvaluateStep
      | IfElseWorkflowStepInput.ToolCallStep
      | IfElseWorkflowStepInput.PromptStepInput
      | IfElseWorkflowStepInput.GetStep
      | IfElseWorkflowStepInput.SetStep
      | IfElseWorkflowStepInput.LogStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.WaitForInputStep;

    else?:
      | IfElseWorkflowStepInput.EvaluateStep
      | IfElseWorkflowStepInput.ToolCallStep
      | IfElseWorkflowStepInput.PromptStepInput
      | IfElseWorkflowStepInput.GetStep
      | IfElseWorkflowStepInput.SetStep
      | IfElseWorkflowStepInput.LogStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.WaitForInputStep
      | null;

    label?: string | null;
  }

  export namespace IfElseWorkflowStepInput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
    }

    export interface ReturnStep {
      return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

      label?: string | null;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      label?: string | null;
    }

    export namespace SleepStep {
      export interface Sleep {
        days?: number;

        hours?: number;

        minutes?: number;

        seconds?: number;
      }
    }

    export interface ErrorWorkflowStep {
      error: string;

      label?: string | null;
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      label?: string | null;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
      }
    }

    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
    }

    export interface ReturnStep {
      return: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;

      label?: string | null;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      label?: string | null;
    }

    export namespace SleepStep {
      export interface Sleep {
        days?: number;

        hours?: number;

        minutes?: number;

        seconds?: number;
      }
    }

    export interface ErrorWorkflowStep {
      error: string;

      label?: string | null;
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      label?: string | null;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>;
      }
    }
  }

  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;

    label?: string | null;
  }

  export namespace SwitchStepInput {
    export interface Switch {
      case: '_';

      then:
        | Switch.EvaluateStep
        | Switch.ToolCallStep
        | Switch.PromptStepInput
        | Switch.GetStep
        | Switch.SetStep
        | Switch.LogStep
        | Switch.YieldStep
        | Switch.ReturnStep
        | Switch.SleepStep
        | Switch.ErrorWorkflowStep
        | Switch.WaitForInputStep;
    }

    export namespace Switch {
      export interface EvaluateStep {
        evaluate: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        label?: string | null;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?:
          | Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          | Array<
              Record<
                string,
                | Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                | Array<
                    Record<
                      string,
                      Array<string> | Record<string, string> | Array<Record<string, string>> | string
                    >
                  >
                | string
              >
            >
          | '_';

        label?: string | null;
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        auto_run_tools?: boolean;

        disable_cache?: boolean;

        label?: string | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?:
          | 'all'
          | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content:
            | Array<string>
            | Array<
                | UnionMember0.Content
                | UnionMember0.AgentsAPIAutogenTasksContentModel
                | UnionMember0.ContentModel1Input
              >
            | string
            | null;

          role: 'user' | 'assistant' | 'system' | 'tool';

          continue?: boolean | null;

          name?: string | null;

          tool_call_id?: string | null;

          tool_calls?: Array<
            | UnionMember0.ChosenFunctionCall
            | UnionMember0.ChosenComputer20241022
            | UnionMember0.ChosenTextEditor20241022
            | UnionMember0.ChosenBash20241022
          > | null;
        }

        export namespace UnionMember0 {
          export interface Content {
            text: string;

            type?: 'text';
          }

          export interface AgentsAPIAutogenTasksContentModel {
            /**
             * The image URL
             */
            image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

            type?: 'image_url';
          }

          export namespace AgentsAPIAutogenTasksContentModel {
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
          export interface ContentModel1Input {
            content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

            tool_use_id: string;

            type?: 'tool_result';
          }

          export namespace ContentModel1Input {
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
         * Reference to a tool
         */
        export interface ToolRef {
          /**
           * Reference to a tool by id
           */
          ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
        }

        export namespace ToolRef {
          /**
           * Reference to a tool by id
           */
          export interface ToolRefByID {
            id?: string | null;
          }

          /**
           * Reference to a tool by name
           */
          export interface ToolRefByName {
            name?: string | null;
          }
        }

        /**
         * Payload for creating a tool
         */
        export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
          api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

          bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
            | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

          text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
          export interface SpiderIntegrationDefInput {
            /**
             * Arguments for Spider integration
             */
            arguments?: SpiderIntegrationDefInput.Arguments | null;

            method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

            provider?: 'spider';

            /**
             * Setup parameters for Spider integration
             */
            setup?: SpiderIntegrationDefInput.Setup | null;
          }

          export namespace SpiderIntegrationDefInput {
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
           * browserbase get session connect url integration definition
           */
          export interface BrowserbaseGetSessionConnectURLIntegrationDef {
            arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

            setup?: unknown | null;
          }

          export namespace FfmpegIntegrationDef {
            /**
             * Arguments for Ffmpeg CMD
             */
            export interface Arguments {
              cmd: string;

              file?: string | null;
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

            setup?: unknown | null;
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

      export interface GetStep {
        get: string;

        label?: string | null;
      }

      export interface SetStep {
        set: Record<string, string>;

        label?: string | null;
      }

      export interface LogStep {
        log: string;

        label?: string | null;
      }

      export interface YieldStep {
        workflow: string;

        arguments?:
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | '_';

        label?: string | null;
      }

      export interface ReturnStep {
        return: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        label?: string | null;
      }

      export interface SleepStep {
        sleep: SleepStep.Sleep;

        label?: string | null;
      }

      export namespace SleepStep {
        export interface Sleep {
          days?: number;

          hours?: number;

          minutes?: number;

          seconds?: number;
        }
      }

      export interface ErrorWorkflowStep {
        error: string;

        label?: string | null;
      }

      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;

        label?: string | null;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<
            string,
            Array<string> | Record<string, string> | Array<Record<string, string>> | string
          >;
        }
      }
    }
  }

  export interface ForeachStepInput {
    foreach: ForeachStepInput.Foreach;

    label?: string | null;
  }

  export namespace ForeachStepInput {
    export interface Foreach {
      do:
        | Foreach.WaitForInputStep
        | Foreach.EvaluateStep
        | Foreach.ToolCallStep
        | Foreach.PromptStepInput
        | Foreach.GetStep
        | Foreach.SetStep
        | Foreach.LogStep
        | Foreach.YieldStep;

      in: string;
    }

    export namespace Foreach {
      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;

        label?: string | null;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<
            string,
            Array<string> | Record<string, string> | Array<Record<string, string>> | string
          >;
        }
      }

      export interface EvaluateStep {
        evaluate: Record<
          string,
          Array<string> | Record<string, string> | Array<Record<string, string>> | string
        >;

        label?: string | null;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?:
          | Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          | Array<
              Record<
                string,
                | Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                | Array<
                    Record<
                      string,
                      Array<string> | Record<string, string> | Array<Record<string, string>> | string
                    >
                  >
                | string
              >
            >
          | '_';

        label?: string | null;
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        auto_run_tools?: boolean;

        disable_cache?: boolean;

        label?: string | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?:
          | 'all'
          | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content:
            | Array<string>
            | Array<
                | UnionMember0.Content
                | UnionMember0.AgentsAPIAutogenTasksContentModel
                | UnionMember0.ContentModel1Input
              >
            | string
            | null;

          role: 'user' | 'assistant' | 'system' | 'tool';

          continue?: boolean | null;

          name?: string | null;

          tool_call_id?: string | null;

          tool_calls?: Array<
            | UnionMember0.ChosenFunctionCall
            | UnionMember0.ChosenComputer20241022
            | UnionMember0.ChosenTextEditor20241022
            | UnionMember0.ChosenBash20241022
          > | null;
        }

        export namespace UnionMember0 {
          export interface Content {
            text: string;

            type?: 'text';
          }

          export interface AgentsAPIAutogenTasksContentModel {
            /**
             * The image URL
             */
            image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

            type?: 'image_url';
          }

          export namespace AgentsAPIAutogenTasksContentModel {
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
          export interface ContentModel1Input {
            content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

            tool_use_id: string;

            type?: 'tool_result';
          }

          export namespace ContentModel1Input {
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
         * Reference to a tool
         */
        export interface ToolRef {
          /**
           * Reference to a tool by id
           */
          ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
        }

        export namespace ToolRef {
          /**
           * Reference to a tool by id
           */
          export interface ToolRefByID {
            id?: string | null;
          }

          /**
           * Reference to a tool by name
           */
          export interface ToolRefByName {
            name?: string | null;
          }
        }

        /**
         * Payload for creating a tool
         */
        export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
          api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

          bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
            | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
            | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

          text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
          export interface SpiderIntegrationDefInput {
            /**
             * Arguments for Spider integration
             */
            arguments?: SpiderIntegrationDefInput.Arguments | null;

            method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

            provider?: 'spider';

            /**
             * Setup parameters for Spider integration
             */
            setup?: SpiderIntegrationDefInput.Setup | null;
          }

          export namespace SpiderIntegrationDefInput {
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
           * browserbase get session connect url integration definition
           */
          export interface BrowserbaseGetSessionConnectURLIntegrationDef {
            arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

            setup?: unknown | null;
          }

          export namespace FfmpegIntegrationDef {
            /**
             * Arguments for Ffmpeg CMD
             */
            export interface Arguments {
              cmd: string;

              file?: string | null;
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

            setup?: unknown | null;
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

      export interface GetStep {
        get: string;

        label?: string | null;
      }

      export interface SetStep {
        set: Record<string, string>;

        label?: string | null;
      }

      export interface LogStep {
        log: string;

        label?: string | null;
      }

      export interface YieldStep {
        workflow: string;

        arguments?:
          | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
          | '_';

        label?: string | null;
      }
    }
  }

  export interface ParallelStepInput {
    parallel: Array<
      | ParallelStepInput.EvaluateStep
      | ParallelStepInput.ToolCallStep
      | ParallelStepInput.PromptStepInput
      | ParallelStepInput.GetStep
      | ParallelStepInput.SetStep
      | ParallelStepInput.LogStep
      | ParallelStepInput.YieldStep
    >;

    label?: string | null;
  }

  export namespace ParallelStepInput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
    }
  }

  export interface MainInput {
    map:
      | MainInput.EvaluateStep
      | MainInput.ToolCallStep
      | MainInput.PromptStepInput
      | MainInput.GetStep
      | MainInput.SetStep
      | MainInput.LogStep
      | MainInput.YieldStep;

    over: string;

    initial?: unknown;

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
  }

  export namespace MainInput {
    export interface EvaluateStep {
      evaluate: Record<
        string,
        Array<string> | Record<string, string> | Array<Record<string, string>> | string
      >;

      label?: string | null;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?:
        | Record<
            string,
            | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
            | Array<
                Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              >
            | string
          >
        | Array<
            Record<
              string,
              | Record<
                  string,
                  Array<string> | Record<string, string> | Array<Record<string, string>> | string
                >
              | Array<
                  Record<
                    string,
                    Array<string> | Record<string, string> | Array<Record<string, string>> | string
                  >
                >
              | string
            >
          >
        | '_';

      label?: string | null;
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      auto_run_tools?: boolean;

      disable_cache?: boolean;

      label?: string | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?:
        | 'all'
        | Array<PromptStepInput.ToolRef | PromptStepInput.AgentsAPIAutogenToolsCreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content:
          | Array<string>
          | Array<
              | UnionMember0.Content
              | UnionMember0.AgentsAPIAutogenTasksContentModel
              | UnionMember0.ContentModel1Input
            >
          | string
          | null;

        role: 'user' | 'assistant' | 'system' | 'tool';

        continue?: boolean | null;

        name?: string | null;

        tool_call_id?: string | null;

        tool_calls?: Array<
          | UnionMember0.ChosenFunctionCall
          | UnionMember0.ChosenComputer20241022
          | UnionMember0.ChosenTextEditor20241022
          | UnionMember0.ChosenBash20241022
        > | null;
      }

      export namespace UnionMember0 {
        export interface Content {
          text: string;

          type?: 'text';
        }

        export interface AgentsAPIAutogenTasksContentModel {
          /**
           * The image URL
           */
          image_url: AgentsAPIAutogenTasksContentModel.ImageURL;

          type?: 'image_url';
        }

        export namespace AgentsAPIAutogenTasksContentModel {
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
        export interface ContentModel1Input {
          content: Array<ContentModel1Input.UnionMember0> | Array<ContentModel1Input.UnionMember1>;

          tool_use_id: string;

          type?: 'tool_result';
        }

        export namespace ContentModel1Input {
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
       * Reference to a tool
       */
      export interface ToolRef {
        /**
         * Reference to a tool by id
         */
        ref: ToolRef.ToolRefByID | ToolRef.ToolRefByName;
      }

      export namespace ToolRef {
        /**
         * Reference to a tool by id
         */
        export interface ToolRefByID {
          id?: string | null;
        }

        /**
         * Reference to a tool by name
         */
        export interface ToolRefByName {
          name?: string | null;
        }
      }

      /**
       * Payload for creating a tool
       */
      export interface AgentsAPIAutogenToolsCreateToolRequestInput {
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
        api_call?: AgentsAPIAutogenToolsCreateToolRequestInput.APICall | null;

        bash_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: AgentsAPIAutogenToolsCreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | AgentsAPIAutogenToolsCreateToolRequestInput.DummyIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BraveIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.EmailIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.SpiderIntegrationDefInput
          | AgentsAPIAutogenToolsCreateToolRequestInput.WikipediaIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.WeatherIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseContextIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseExtensionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseCompleteSessionIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.BrowserbaseGetSessionConnectURLIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.RemoteBrowserIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.LlamaParseIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.FfmpegIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryUploadIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.CloudinaryEditIntegrationDef
          | AgentsAPIAutogenToolsCreateToolRequestInput.ArxivIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: AgentsAPIAutogenToolsCreateToolRequestInput.System | null;

        text_editor_20241022?: AgentsAPIAutogenToolsCreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
        export interface SpiderIntegrationDefInput {
          /**
           * Arguments for Spider integration
           */
          arguments?: SpiderIntegrationDefInput.Arguments | null;

          method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

          provider?: 'spider';

          /**
           * Setup parameters for Spider integration
           */
          setup?: SpiderIntegrationDefInput.Setup | null;
        }

        export namespace SpiderIntegrationDefInput {
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
         * browserbase get session connect url integration definition
         */
        export interface BrowserbaseGetSessionConnectURLIntegrationDef {
          arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

          setup?: unknown | null;
        }

        export namespace FfmpegIntegrationDef {
          /**
           * Arguments for Ffmpeg CMD
           */
          export interface Arguments {
            cmd: string;

            file?: string | null;
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

          setup?: unknown | null;
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

    export interface GetStep {
      get: string;

      label?: string | null;
    }

    export interface SetStep {
      set: Record<string, string>;

      label?: string | null;
    }

    export interface LogStep {
      log: string;

      label?: string | null;
    }

    export interface YieldStep {
      workflow: string;

      arguments?:
        | Record<string, Array<string> | Record<string, string> | Array<Record<string, string>> | string>
        | '_';

      label?: string | null;
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
      | Tool.SpiderIntegrationDefInput
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
      | Tool.LlamaParseIntegrationDef
      | Tool.FfmpegIntegrationDef
      | Tool.CloudinaryUploadIntegrationDef
      | Tool.CloudinaryEditIntegrationDef
      | Tool.ArxivIntegrationDef
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
    export interface SpiderIntegrationDefInput {
      /**
       * Arguments for Spider integration
       */
      arguments?: SpiderIntegrationDefInput.Arguments | null;

      method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

      provider?: 'spider';

      /**
       * Setup parameters for Spider integration
       */
      setup?: SpiderIntegrationDefInput.Setup | null;
    }

    export namespace SpiderIntegrationDefInput {
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
     * browserbase get session connect url integration definition
     */
    export interface BrowserbaseGetSessionConnectURLIntegrationDef {
      arguments?: BrowserbaseGetSessionConnectURLIntegrationDef.Arguments | null;

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

      setup?: unknown | null;
    }

    export namespace FfmpegIntegrationDef {
      /**
       * Arguments for Ffmpeg CMD
       */
      export interface Arguments {
        cmd: string;

        file?: string | null;
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

      setup?: unknown | null;
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

Tasks.TasksOffsetPagination = TasksOffsetPagination;

export declare namespace Tasks {
  export {
    type Task as Task,
    TasksOffsetPagination as TasksOffsetPagination,
    type TaskCreateParams as TaskCreateParams,
    type TaskListParams as TaskListParams,
    type TaskCreateOrUpdateParams as TaskCreateOrUpdateParams,
  };
}
