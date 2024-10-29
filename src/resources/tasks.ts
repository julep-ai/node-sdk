// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as TasksAPI from './tasks';
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
    evaluate: Record<string, string>;

    kind_?: 'evaluate';
  }

  export interface ToolCallStep {
    tool: string;

    arguments?: Record<string, Record<string, string> | string> | '_';

    kind_?: 'tool_call';
  }

  export interface PromptStepOutput {
    prompt: Array<PromptStepOutput.UnionMember0> | string;

    forward_tool_results?: boolean | null;

    kind_?: 'prompt';

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

    tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

    unwrap?: boolean;
  }

  export namespace PromptStepOutput {
    export interface UnionMember0 {
      content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

      role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

      continue?: boolean | null;

      name?: string | null;
    }

    export namespace UnionMember0 {
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

    export interface NamedToolChoice {
      function?: NamedToolChoice.Function | null;
    }

    export namespace NamedToolChoice {
      export interface Function {
        name: string;
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

    export interface CreateToolRequestOutput {
      name: string;

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
        | CreateToolRequestOutput.SpiderIntegrationDef
        | CreateToolRequestOutput.WikipediaIntegrationDef
        | CreateToolRequestOutput.WeatherIntegrationDef
        | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
        | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
        | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
        | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
        | CreateToolRequestOutput.BrowserbaseUpdateSessionIntegrationDef
        | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
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
       * browserbase context provider
       */
      export interface BrowserbaseContextIntegrationDef {
        arguments?: unknown | null;

        method?: 'create_context';

        provider?: 'browserbase';

        /**
         * The setup parameters for the browserbase integration
         */
        setup?: BrowserbaseContextIntegrationDef.Setup | null;
      }

      export namespace BrowserbaseContextIntegrationDef {
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
       * browserbase update session integration definition
       */
      export interface BrowserbaseUpdateSessionIntegrationDef {
        arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

        method?: 'update_session';

        provider?: 'browserbase';

        /**
         * The setup parameters for the browserbase integration
         */
        setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
      }

      export namespace BrowserbaseUpdateSessionIntegrationDef {
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
  }

  export interface SetStep {
    set: Record<string, string>;

    kind_?: 'set';
  }

  export interface LogStep {
    log: string;

    kind_?: 'log';
  }

  export interface YieldStep {
    workflow: string;

    arguments?: Record<string, string> | '_';

    kind_?: 'yield';
  }

  export interface ReturnStep {
    return: Record<string, string>;

    kind_?: 'return';
  }

  export interface SleepStep {
    sleep: SleepStep.Sleep;

    kind_?: 'sleep';
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
  }

  export interface WaitForInputStep {
    wait_for_input: WaitForInputStep.WaitForInput;

    kind_?: 'wait_for_input';
  }

  export namespace WaitForInputStep {
    export interface WaitForInput {
      info: Record<string, string>;
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
  }

  export namespace IfElseWorkflowStepOutput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;

      kind_?: 'evaluate';
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestOutput {
        name: string;

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
          | CreateToolRequestOutput.SpiderIntegrationDef
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';

      kind_?: 'yield';
    }

    export interface ReturnStep {
      return: Record<string, string>;

      kind_?: 'return';
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      kind_?: 'sleep';
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
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      kind_?: 'wait_for_input';
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, string>;
      }
    }

    export interface EvaluateStep {
      evaluate: Record<string, string>;

      kind_?: 'evaluate';
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestOutput {
        name: string;

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
          | CreateToolRequestOutput.SpiderIntegrationDef
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';

      kind_?: 'yield';
    }

    export interface ReturnStep {
      return: Record<string, string>;

      kind_?: 'return';
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;

      kind_?: 'sleep';
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
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;

      kind_?: 'wait_for_input';
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, string>;
      }
    }
  }

  export interface SwitchStepOutput {
    switch: Array<SwitchStepOutput.Switch>;

    kind_?: 'switch';
  }

  export namespace SwitchStepOutput {
    export interface Switch {
      case: '_' | (string & {});

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
        evaluate: Record<string, string>;

        kind_?: 'evaluate';
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, Record<string, string> | string> | '_';

        kind_?: 'tool_call';
      }

      export interface PromptStepOutput {
        prompt: Array<PromptStepOutput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        kind_?: 'prompt';

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

        unwrap?: boolean;
      }

      export namespace PromptStepOutput {
        export interface UnionMember0 {
          content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

          role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

          continue?: boolean | null;

          name?: string | null;
        }

        export namespace UnionMember0 {
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

        export interface NamedToolChoice {
          function?: NamedToolChoice.Function | null;
        }

        export namespace NamedToolChoice {
          export interface Function {
            name: string;
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

        export interface CreateToolRequestOutput {
          name: string;

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
            | CreateToolRequestOutput.SpiderIntegrationDef
            | CreateToolRequestOutput.WikipediaIntegrationDef
            | CreateToolRequestOutput.WeatherIntegrationDef
            | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
            | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseUpdateSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
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
           * browserbase context provider
           */
          export interface BrowserbaseContextIntegrationDef {
            arguments?: unknown | null;

            method?: 'create_context';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseContextIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseContextIntegrationDef {
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
           * browserbase update session integration definition
           */
          export interface BrowserbaseUpdateSessionIntegrationDef {
            arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

            method?: 'update_session';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseUpdateSessionIntegrationDef {
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
      }

      export interface SetStep {
        set: Record<string, string>;

        kind_?: 'set';
      }

      export interface LogStep {
        log: string;

        kind_?: 'log';
      }

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';

        kind_?: 'yield';
      }

      export interface ReturnStep {
        return: Record<string, string>;

        kind_?: 'return';
      }

      export interface SleepStep {
        sleep: SleepStep.Sleep;

        kind_?: 'sleep';
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
      }

      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;

        kind_?: 'wait_for_input';
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<string, string>;
        }
      }
    }
  }

  export interface ForeachStepOutput {
    foreach: ForeachStepOutput.Foreach;

    kind_?: 'foreach';
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
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<string, string>;
        }
      }

      export interface EvaluateStep {
        evaluate: Record<string, string>;

        kind_?: 'evaluate';
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, Record<string, string> | string> | '_';

        kind_?: 'tool_call';
      }

      export interface PromptStepOutput {
        prompt: Array<PromptStepOutput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        kind_?: 'prompt';

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

        unwrap?: boolean;
      }

      export namespace PromptStepOutput {
        export interface UnionMember0 {
          content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

          role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

          continue?: boolean | null;

          name?: string | null;
        }

        export namespace UnionMember0 {
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

        export interface NamedToolChoice {
          function?: NamedToolChoice.Function | null;
        }

        export namespace NamedToolChoice {
          export interface Function {
            name: string;
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

        export interface CreateToolRequestOutput {
          name: string;

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
            | CreateToolRequestOutput.SpiderIntegrationDef
            | CreateToolRequestOutput.WikipediaIntegrationDef
            | CreateToolRequestOutput.WeatherIntegrationDef
            | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
            | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseUpdateSessionIntegrationDef
            | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
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
           * browserbase context provider
           */
          export interface BrowserbaseContextIntegrationDef {
            arguments?: unknown | null;

            method?: 'create_context';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseContextIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseContextIntegrationDef {
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
           * browserbase update session integration definition
           */
          export interface BrowserbaseUpdateSessionIntegrationDef {
            arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

            method?: 'update_session';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseUpdateSessionIntegrationDef {
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
      }

      export interface SetStep {
        set: Record<string, string>;

        kind_?: 'set';
      }

      export interface LogStep {
        log: string;

        kind_?: 'log';
      }

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';

        kind_?: 'yield';
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
  }

  export namespace ParallelStepOutput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;

      kind_?: 'evaluate';
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestOutput {
        name: string;

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
          | CreateToolRequestOutput.SpiderIntegrationDef
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';

      kind_?: 'yield';
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

    parallelism?: number | null;

    reduce?: string | null;
  }

  export namespace MainOutput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;

      kind_?: 'evaluate';
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

      unwrap?: boolean;
    }

    export namespace PromptStepOutput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestOutput {
        name: string;

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
          | CreateToolRequestOutput.SpiderIntegrationDef
          | CreateToolRequestOutput.WikipediaIntegrationDef
          | CreateToolRequestOutput.WeatherIntegrationDef
          | CreateToolRequestOutput.BrowserbaseContextIntegrationDef
          | CreateToolRequestOutput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestOutput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestOutput.BrowserbaseGetSessionLiveURLsIntegrationDef
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;

      kind_?: 'set';
    }

    export interface LogStep {
      log: string;

      kind_?: 'log';
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';

      kind_?: 'yield';
    }
  }

  export interface Tool {
    name: string;

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
      | Tool.SpiderIntegrationDef
      | Tool.WikipediaIntegrationDef
      | Tool.WeatherIntegrationDef
      | Tool.BrowserbaseContextIntegrationDef
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseUpdateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
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
      arguments?: unknown | null;

      method?: 'create_context';

      provider?: 'browserbase';

      /**
       * The setup parameters for the browserbase integration
       */
      setup?: BrowserbaseContextIntegrationDef.Setup | null;
    }

    export namespace BrowserbaseContextIntegrationDef {
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
     * browserbase update session integration definition
     */
    export interface BrowserbaseUpdateSessionIntegrationDef {
      arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

      method?: 'update_session';

      provider?: 'browserbase';

      /**
       * The setup parameters for the browserbase integration
       */
      setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
    }

    export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    evaluate: Record<string, string>;
  }

  export interface ToolCallStep {
    tool: string;

    arguments?: Record<string, Record<string, string> | string> | '_';
  }

  export interface PromptStepInput {
    prompt: Array<PromptStepInput.UnionMember0> | string;

    forward_tool_results?: boolean | null;

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

    tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

    unwrap?: boolean;
  }

  export namespace PromptStepInput {
    export interface UnionMember0 {
      content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

      role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

      continue?: boolean | null;

      name?: string | null;
    }

    export namespace UnionMember0 {
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

    export interface NamedToolChoice {
      function?: NamedToolChoice.Function | null;
    }

    export namespace NamedToolChoice {
      export interface Function {
        name: string;
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

    export interface CreateToolRequestInput {
      name: string;

      /**
       * API call definition
       */
      api_call?: CreateToolRequestInput.APICall | null;

      bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

      /**
       * Anthropic new tools
       */
      computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

      description?: string | null;

      /**
       * Function definition
       */
      function?: CreateToolRequestInput.Function | null;

      /**
       * Brave integration definition
       */
      integration?:
        | CreateToolRequestInput.DummyIntegrationDef
        | CreateToolRequestInput.BraveIntegrationDef
        | CreateToolRequestInput.EmailIntegrationDef
        | CreateToolRequestInput.SpiderIntegrationDef
        | CreateToolRequestInput.WikipediaIntegrationDef
        | CreateToolRequestInput.WeatherIntegrationDef
        | CreateToolRequestInput.BrowserbaseContextIntegrationDef
        | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
        | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
        | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
        | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
        | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
        | null;

      /**
       * System definition
       */
      system?: CreateToolRequestInput.System | null;

      text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
    }

    export namespace CreateToolRequestInput {
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
       * browserbase context provider
       */
      export interface BrowserbaseContextIntegrationDef {
        arguments?: unknown | null;

        method?: 'create_context';

        provider?: 'browserbase';

        /**
         * The setup parameters for the browserbase integration
         */
        setup?: BrowserbaseContextIntegrationDef.Setup | null;
      }

      export namespace BrowserbaseContextIntegrationDef {
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
       * browserbase update session integration definition
       */
      export interface BrowserbaseUpdateSessionIntegrationDef {
        arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

        method?: 'update_session';

        provider?: 'browserbase';

        /**
         * The setup parameters for the browserbase integration
         */
        setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
      }

      export namespace BrowserbaseUpdateSessionIntegrationDef {
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
  }

  export interface SetStep {
    set: Record<string, string>;
  }

  export interface LogStep {
    log: string;
  }

  export interface YieldStep {
    workflow: string;

    arguments?: Record<string, string> | '_';
  }

  export interface ReturnStep {
    return: Record<string, string>;
  }

  export interface SleepStep {
    sleep: SleepStep.Sleep;
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
  }

  export interface WaitForInputStep {
    wait_for_input: WaitForInputStep.WaitForInput;
  }

  export namespace WaitForInputStep {
    export interface WaitForInput {
      info: Record<string, string>;
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
  }

  export namespace IfElseWorkflowStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
    }

    export interface ReturnStep {
      return: Record<string, string>;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;
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
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, string>;
      }
    }

    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
    }

    export interface ReturnStep {
      return: Record<string, string>;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;
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
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, string>;
      }
    }
  }

  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;
  }

  export namespace SwitchStepInput {
    export interface Switch {
      case: '_' | (string & {});

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
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, Record<string, string> | string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

          role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

          continue?: boolean | null;

          name?: string | null;
        }

        export namespace UnionMember0 {
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

        export interface NamedToolChoice {
          function?: NamedToolChoice.Function | null;
        }

        export namespace NamedToolChoice {
          export interface Function {
            name: string;
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

        export interface CreateToolRequestInput {
          name: string;

          /**
           * API call definition
           */
          api_call?: CreateToolRequestInput.APICall | null;

          bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: CreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | CreateToolRequestInput.DummyIntegrationDef
            | CreateToolRequestInput.BraveIntegrationDef
            | CreateToolRequestInput.EmailIntegrationDef
            | CreateToolRequestInput.SpiderIntegrationDef
            | CreateToolRequestInput.WikipediaIntegrationDef
            | CreateToolRequestInput.WeatherIntegrationDef
            | CreateToolRequestInput.BrowserbaseContextIntegrationDef
            | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: CreateToolRequestInput.System | null;

          text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace CreateToolRequestInput {
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
           * browserbase context provider
           */
          export interface BrowserbaseContextIntegrationDef {
            arguments?: unknown | null;

            method?: 'create_context';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseContextIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseContextIntegrationDef {
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
           * browserbase update session integration definition
           */
          export interface BrowserbaseUpdateSessionIntegrationDef {
            arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

            method?: 'update_session';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseUpdateSessionIntegrationDef {
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
      }

      export interface SetStep {
        set: Record<string, string>;
      }

      export interface LogStep {
        log: string;
      }

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';
      }

      export interface ReturnStep {
        return: Record<string, string>;
      }

      export interface SleepStep {
        sleep: SleepStep.Sleep;
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
      }

      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<string, string>;
        }
      }
    }
  }

  export interface ForeachStepInput {
    foreach: ForeachStepInput.Foreach;
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
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<string, string>;
        }
      }

      export interface EvaluateStep {
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, Record<string, string> | string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

          role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

          continue?: boolean | null;

          name?: string | null;
        }

        export namespace UnionMember0 {
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

        export interface NamedToolChoice {
          function?: NamedToolChoice.Function | null;
        }

        export namespace NamedToolChoice {
          export interface Function {
            name: string;
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

        export interface CreateToolRequestInput {
          name: string;

          /**
           * API call definition
           */
          api_call?: CreateToolRequestInput.APICall | null;

          bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: CreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | CreateToolRequestInput.DummyIntegrationDef
            | CreateToolRequestInput.BraveIntegrationDef
            | CreateToolRequestInput.EmailIntegrationDef
            | CreateToolRequestInput.SpiderIntegrationDef
            | CreateToolRequestInput.WikipediaIntegrationDef
            | CreateToolRequestInput.WeatherIntegrationDef
            | CreateToolRequestInput.BrowserbaseContextIntegrationDef
            | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: CreateToolRequestInput.System | null;

          text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace CreateToolRequestInput {
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
           * browserbase context provider
           */
          export interface BrowserbaseContextIntegrationDef {
            arguments?: unknown | null;

            method?: 'create_context';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseContextIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseContextIntegrationDef {
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
           * browserbase update session integration definition
           */
          export interface BrowserbaseUpdateSessionIntegrationDef {
            arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

            method?: 'update_session';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseUpdateSessionIntegrationDef {
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
      }

      export interface SetStep {
        set: Record<string, string>;
      }

      export interface LogStep {
        log: string;
      }

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';
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
  }

  export namespace ParallelStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
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

    parallelism?: number | null;

    reduce?: string | null;
  }

  export namespace MainInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
    }
  }

  export interface Tool {
    name: string;

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
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseUpdateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
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
      arguments?: unknown | null;

      method?: 'create_context';

      provider?: 'browserbase';

      /**
       * The setup parameters for the browserbase integration
       */
      setup?: BrowserbaseContextIntegrationDef.Setup | null;
    }

    export namespace BrowserbaseContextIntegrationDef {
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
     * browserbase update session integration definition
     */
    export interface BrowserbaseUpdateSessionIntegrationDef {
      arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

      method?: 'update_session';

      provider?: 'browserbase';

      /**
       * The setup parameters for the browserbase integration
       */
      setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
    }

    export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    evaluate: Record<string, string>;
  }

  export interface ToolCallStep {
    tool: string;

    arguments?: Record<string, Record<string, string> | string> | '_';
  }

  export interface PromptStepInput {
    prompt: Array<PromptStepInput.UnionMember0> | string;

    forward_tool_results?: boolean | null;

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

    tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

    unwrap?: boolean;
  }

  export namespace PromptStepInput {
    export interface UnionMember0 {
      content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

      role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

      continue?: boolean | null;

      name?: string | null;
    }

    export namespace UnionMember0 {
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

    export interface NamedToolChoice {
      function?: NamedToolChoice.Function | null;
    }

    export namespace NamedToolChoice {
      export interface Function {
        name: string;
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

    export interface CreateToolRequestInput {
      name: string;

      /**
       * API call definition
       */
      api_call?: CreateToolRequestInput.APICall | null;

      bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

      /**
       * Anthropic new tools
       */
      computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

      description?: string | null;

      /**
       * Function definition
       */
      function?: CreateToolRequestInput.Function | null;

      /**
       * Brave integration definition
       */
      integration?:
        | CreateToolRequestInput.DummyIntegrationDef
        | CreateToolRequestInput.BraveIntegrationDef
        | CreateToolRequestInput.EmailIntegrationDef
        | CreateToolRequestInput.SpiderIntegrationDef
        | CreateToolRequestInput.WikipediaIntegrationDef
        | CreateToolRequestInput.WeatherIntegrationDef
        | CreateToolRequestInput.BrowserbaseContextIntegrationDef
        | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
        | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
        | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
        | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
        | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
        | null;

      /**
       * System definition
       */
      system?: CreateToolRequestInput.System | null;

      text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
    }

    export namespace CreateToolRequestInput {
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
       * browserbase context provider
       */
      export interface BrowserbaseContextIntegrationDef {
        arguments?: unknown | null;

        method?: 'create_context';

        provider?: 'browserbase';

        /**
         * The setup parameters for the browserbase integration
         */
        setup?: BrowserbaseContextIntegrationDef.Setup | null;
      }

      export namespace BrowserbaseContextIntegrationDef {
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
       * browserbase update session integration definition
       */
      export interface BrowserbaseUpdateSessionIntegrationDef {
        arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

        method?: 'update_session';

        provider?: 'browserbase';

        /**
         * The setup parameters for the browserbase integration
         */
        setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
      }

      export namespace BrowserbaseUpdateSessionIntegrationDef {
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
  }

  export interface SetStep {
    set: Record<string, string>;
  }

  export interface LogStep {
    log: string;
  }

  export interface YieldStep {
    workflow: string;

    arguments?: Record<string, string> | '_';
  }

  export interface ReturnStep {
    return: Record<string, string>;
  }

  export interface SleepStep {
    sleep: SleepStep.Sleep;
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
  }

  export interface WaitForInputStep {
    wait_for_input: WaitForInputStep.WaitForInput;
  }

  export namespace WaitForInputStep {
    export interface WaitForInput {
      info: Record<string, string>;
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
  }

  export namespace IfElseWorkflowStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
    }

    export interface ReturnStep {
      return: Record<string, string>;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;
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
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, string>;
      }
    }

    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
    }

    export interface ReturnStep {
      return: Record<string, string>;
    }

    export interface SleepStep {
      sleep: SleepStep.Sleep;
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
    }

    export interface WaitForInputStep {
      wait_for_input: WaitForInputStep.WaitForInput;
    }

    export namespace WaitForInputStep {
      export interface WaitForInput {
        info: Record<string, string>;
      }
    }
  }

  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;
  }

  export namespace SwitchStepInput {
    export interface Switch {
      case: '_' | (string & {});

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
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, Record<string, string> | string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

          role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

          continue?: boolean | null;

          name?: string | null;
        }

        export namespace UnionMember0 {
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

        export interface NamedToolChoice {
          function?: NamedToolChoice.Function | null;
        }

        export namespace NamedToolChoice {
          export interface Function {
            name: string;
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

        export interface CreateToolRequestInput {
          name: string;

          /**
           * API call definition
           */
          api_call?: CreateToolRequestInput.APICall | null;

          bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: CreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | CreateToolRequestInput.DummyIntegrationDef
            | CreateToolRequestInput.BraveIntegrationDef
            | CreateToolRequestInput.EmailIntegrationDef
            | CreateToolRequestInput.SpiderIntegrationDef
            | CreateToolRequestInput.WikipediaIntegrationDef
            | CreateToolRequestInput.WeatherIntegrationDef
            | CreateToolRequestInput.BrowserbaseContextIntegrationDef
            | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: CreateToolRequestInput.System | null;

          text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace CreateToolRequestInput {
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
           * browserbase context provider
           */
          export interface BrowserbaseContextIntegrationDef {
            arguments?: unknown | null;

            method?: 'create_context';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseContextIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseContextIntegrationDef {
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
           * browserbase update session integration definition
           */
          export interface BrowserbaseUpdateSessionIntegrationDef {
            arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

            method?: 'update_session';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseUpdateSessionIntegrationDef {
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
      }

      export interface SetStep {
        set: Record<string, string>;
      }

      export interface LogStep {
        log: string;
      }

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';
      }

      export interface ReturnStep {
        return: Record<string, string>;
      }

      export interface SleepStep {
        sleep: SleepStep.Sleep;
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
      }

      export interface WaitForInputStep {
        wait_for_input: WaitForInputStep.WaitForInput;
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<string, string>;
        }
      }
    }
  }

  export interface ForeachStepInput {
    foreach: ForeachStepInput.Foreach;
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
      }

      export namespace WaitForInputStep {
        export interface WaitForInput {
          info: Record<string, string>;
        }
      }

      export interface EvaluateStep {
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, Record<string, string> | string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

        unwrap?: boolean;
      }

      export namespace PromptStepInput {
        export interface UnionMember0 {
          content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

          role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

          continue?: boolean | null;

          name?: string | null;
        }

        export namespace UnionMember0 {
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

        export interface NamedToolChoice {
          function?: NamedToolChoice.Function | null;
        }

        export namespace NamedToolChoice {
          export interface Function {
            name: string;
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

        export interface CreateToolRequestInput {
          name: string;

          /**
           * API call definition
           */
          api_call?: CreateToolRequestInput.APICall | null;

          bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

          /**
           * Anthropic new tools
           */
          computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

          description?: string | null;

          /**
           * Function definition
           */
          function?: CreateToolRequestInput.Function | null;

          /**
           * Brave integration definition
           */
          integration?:
            | CreateToolRequestInput.DummyIntegrationDef
            | CreateToolRequestInput.BraveIntegrationDef
            | CreateToolRequestInput.EmailIntegrationDef
            | CreateToolRequestInput.SpiderIntegrationDef
            | CreateToolRequestInput.WikipediaIntegrationDef
            | CreateToolRequestInput.WeatherIntegrationDef
            | CreateToolRequestInput.BrowserbaseContextIntegrationDef
            | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
            | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
            | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
            | null;

          /**
           * System definition
           */
          system?: CreateToolRequestInput.System | null;

          text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
        }

        export namespace CreateToolRequestInput {
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
           * browserbase context provider
           */
          export interface BrowserbaseContextIntegrationDef {
            arguments?: unknown | null;

            method?: 'create_context';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseContextIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseContextIntegrationDef {
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
           * browserbase update session integration definition
           */
          export interface BrowserbaseUpdateSessionIntegrationDef {
            arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

            method?: 'update_session';

            provider?: 'browserbase';

            /**
             * The setup parameters for the browserbase integration
             */
            setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
          }

          export namespace BrowserbaseUpdateSessionIntegrationDef {
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
      }

      export interface SetStep {
        set: Record<string, string>;
      }

      export interface LogStep {
        log: string;
      }

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';
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
  }

  export namespace ParallelStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
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

    parallelism?: number | null;

    reduce?: string | null;
  }

  export namespace MainInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, Record<string, string> | string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequestInput>;

      unwrap?: boolean;
    }

    export namespace PromptStepInput {
      export interface UnionMember0 {
        content: Array<string> | Array<UnionMember0.Content | UnionMember0.ContentModel> | string;

        role: 'user' | 'assistant' | 'system' | 'function' | 'function_response' | 'function_call' | 'auto';

        continue?: boolean | null;

        name?: string | null;
      }

      export namespace UnionMember0 {
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

      export interface NamedToolChoice {
        function?: NamedToolChoice.Function | null;
      }

      export namespace NamedToolChoice {
        export interface Function {
          name: string;
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

      export interface CreateToolRequestInput {
        name: string;

        /**
         * API call definition
         */
        api_call?: CreateToolRequestInput.APICall | null;

        bash_20241022?: CreateToolRequestInput.Bash20241022 | null;

        /**
         * Anthropic new tools
         */
        computer_20241022?: CreateToolRequestInput.Computer20241022 | null;

        description?: string | null;

        /**
         * Function definition
         */
        function?: CreateToolRequestInput.Function | null;

        /**
         * Brave integration definition
         */
        integration?:
          | CreateToolRequestInput.DummyIntegrationDef
          | CreateToolRequestInput.BraveIntegrationDef
          | CreateToolRequestInput.EmailIntegrationDef
          | CreateToolRequestInput.SpiderIntegrationDef
          | CreateToolRequestInput.WikipediaIntegrationDef
          | CreateToolRequestInput.WeatherIntegrationDef
          | CreateToolRequestInput.BrowserbaseContextIntegrationDef
          | CreateToolRequestInput.BrowserbaseListSessionsIntegrationDef
          | CreateToolRequestInput.BrowserbaseCreateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseUpdateSessionIntegrationDef
          | CreateToolRequestInput.BrowserbaseGetSessionLiveURLsIntegrationDef
          | null;

        /**
         * System definition
         */
        system?: CreateToolRequestInput.System | null;

        text_editor_20241022?: CreateToolRequestInput.TextEditor20241022 | null;
      }

      export namespace CreateToolRequestInput {
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
         * browserbase context provider
         */
        export interface BrowserbaseContextIntegrationDef {
          arguments?: unknown | null;

          method?: 'create_context';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseContextIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseContextIntegrationDef {
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
         * browserbase update session integration definition
         */
        export interface BrowserbaseUpdateSessionIntegrationDef {
          arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

          method?: 'update_session';

          provider?: 'browserbase';

          /**
           * The setup parameters for the browserbase integration
           */
          setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
        }

        export namespace BrowserbaseUpdateSessionIntegrationDef {
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
    }

    export interface SetStep {
      set: Record<string, string>;
    }

    export interface LogStep {
      log: string;
    }

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
    }
  }

  export interface Tool {
    name: string;

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
      | Tool.BrowserbaseListSessionsIntegrationDef
      | Tool.BrowserbaseCreateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionIntegrationDef
      | Tool.BrowserbaseUpdateSessionIntegrationDef
      | Tool.BrowserbaseGetSessionLiveURLsIntegrationDef
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
      arguments?: unknown | null;

      method?: 'create_context';

      provider?: 'browserbase';

      /**
       * The setup parameters for the browserbase integration
       */
      setup?: BrowserbaseContextIntegrationDef.Setup | null;
    }

    export namespace BrowserbaseContextIntegrationDef {
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
     * browserbase update session integration definition
     */
    export interface BrowserbaseUpdateSessionIntegrationDef {
      arguments: BrowserbaseUpdateSessionIntegrationDef.Arguments;

      method?: 'update_session';

      provider?: 'browserbase';

      /**
       * The setup parameters for the browserbase integration
       */
      setup?: BrowserbaseUpdateSessionIntegrationDef.Setup | null;
    }

    export namespace BrowserbaseUpdateSessionIntegrationDef {
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

export namespace Tasks {
  export import Task = TasksAPI.Task;
  export import TasksOffsetPagination = TasksAPI.TasksOffsetPagination;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskListParams = TasksAPI.TaskListParams;
  export import TaskCreateOrUpdateParams = TasksAPI.TaskCreateOrUpdateParams;
}
