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
    | Task.EmbedStep
    | Task.SearchStep
    | Task.ReturnStep
    | Task.SleepStep
    | Task.ErrorWorkflowStep
    | Task.YieldStep
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

  tools?: Array<Tool>;
  [k: string]: unknown;
}

export namespace Task {
  export interface EvaluateStep {
    evaluate: Record<string, string>;

    kind_?: 'evaluate';
  }

  export interface ToolCallStep {
    tool: string;

    arguments?: Record<string, string> | '_';

    kind_?: 'tool_call';
  }

  export interface PromptStepOutput {
    prompt: Array<PromptStepOutput.UnionMember0> | string;

    forward_tool_results?: boolean | null;

    kind_?: 'prompt';

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

    tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequest>;

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
      type: 'function' | 'integration' | 'system' | 'api_call';

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

    export interface CreateToolRequest {
      name: string;

      /**
       * Function definition
       */
      function?: CreateToolRequest.Function | null;

      /**
       * Integration definition
       */
      integration?: CreateToolRequest.Integration | null;

      /**
       * System definition
       */
      system?: CreateToolRequest.System | null;

      type?: 'function' | 'integration' | 'system' | 'api_call';
    }

    export namespace CreateToolRequest {
      /**
       * Function definition
       */
      export interface Function {
        description?: string | null;

        name?: unknown | null;

        parameters?: unknown | null;
      }

      /**
       * Integration definition
       */
      export interface Integration {
        provider:
          | 'dummy'
          | 'dall-e'
          | 'duckduckgo'
          | 'hackernews'
          | 'weather'
          | 'wikipedia'
          | 'twitter'
          | 'webpage'
          | 'requests';

        arguments?: unknown | null;

        description?: string | null;

        method?: string | null;

        setup?: unknown | null;
      }

      /**
       * System definition
       */
      export interface System {
        call: string;

        arguments?: unknown | null;

        description?: string | null;
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

  export interface EmbedStep {
    embed: EmbedStep.Embed;

    kind_?: 'embed';
  }

  export namespace EmbedStep {
    export interface Embed {
      text: string | Array<string>;
    }
  }

  export interface SearchStep {
    search:
      | SearchStep.VectorDocSearchRequest
      | SearchStep.TextOnlyDocSearchRequest
      | SearchStep.HybridDocSearchRequest;

    kind_?: 'search';
  }

  export namespace SearchStep {
    export interface VectorDocSearchRequest {
      vector: Array<number>;

      confidence?: number;

      lang?: 'en-US';

      limit?: number;
    }

    export interface TextOnlyDocSearchRequest {
      text: string;

      lang?: 'en-US';

      limit?: number;
    }

    export interface HybridDocSearchRequest {
      text: string;

      vector: Array<number>;

      alpha?: number;

      confidence?: number;

      lang?: 'en-US';

      limit?: number;
    }
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

  export interface YieldStep {
    workflow: string;

    arguments?: Record<string, string> | '_';

    kind_?: 'yield';
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
      | IfElseWorkflowStepOutput.EmbedStep
      | IfElseWorkflowStepOutput.SearchStep
      | IfElseWorkflowStepOutput.ReturnStep
      | IfElseWorkflowStepOutput.SleepStep
      | IfElseWorkflowStepOutput.ErrorWorkflowStep
      | IfElseWorkflowStepOutput.YieldStep
      | IfElseWorkflowStepOutput.WaitForInputStep;

    else?:
      | IfElseWorkflowStepOutput.EvaluateStep
      | IfElseWorkflowStepOutput.ToolCallStep
      | IfElseWorkflowStepOutput.PromptStepOutput
      | IfElseWorkflowStepOutput.GetStep
      | IfElseWorkflowStepOutput.SetStep
      | IfElseWorkflowStepOutput.LogStep
      | IfElseWorkflowStepOutput.EmbedStep
      | IfElseWorkflowStepOutput.SearchStep
      | IfElseWorkflowStepOutput.ReturnStep
      | IfElseWorkflowStepOutput.SleepStep
      | IfElseWorkflowStepOutput.ErrorWorkflowStep
      | IfElseWorkflowStepOutput.YieldStep
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

      arguments?: Record<string, string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;

      kind_?: 'embed';
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;

      kind_?: 'search';
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';

      kind_?: 'yield';
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

      arguments?: Record<string, string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;

      kind_?: 'embed';
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;

      kind_?: 'search';
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';

      kind_?: 'yield';
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
        | Switch.EmbedStep
        | Switch.SearchStep
        | Switch.ReturnStep
        | Switch.SleepStep
        | Switch.ErrorWorkflowStep
        | Switch.YieldStep
        | Switch.WaitForInputStep;
    }

    export namespace Switch {
      export interface EvaluateStep {
        evaluate: Record<string, string>;

        kind_?: 'evaluate';
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, string> | '_';

        kind_?: 'tool_call';
      }

      export interface PromptStepOutput {
        prompt: Array<PromptStepOutput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        kind_?: 'prompt';

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequest>;

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
          type: 'function' | 'integration' | 'system' | 'api_call';

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

        export interface CreateToolRequest {
          name: string;

          /**
           * Function definition
           */
          function?: CreateToolRequest.Function | null;

          /**
           * Integration definition
           */
          integration?: CreateToolRequest.Integration | null;

          /**
           * System definition
           */
          system?: CreateToolRequest.System | null;

          type?: 'function' | 'integration' | 'system' | 'api_call';
        }

        export namespace CreateToolRequest {
          /**
           * Function definition
           */
          export interface Function {
            description?: string | null;

            name?: unknown | null;

            parameters?: unknown | null;
          }

          /**
           * Integration definition
           */
          export interface Integration {
            provider:
              | 'dummy'
              | 'dall-e'
              | 'duckduckgo'
              | 'hackernews'
              | 'weather'
              | 'wikipedia'
              | 'twitter'
              | 'webpage'
              | 'requests';

            arguments?: unknown | null;

            description?: string | null;

            method?: string | null;

            setup?: unknown | null;
          }

          /**
           * System definition
           */
          export interface System {
            call: string;

            arguments?: unknown | null;

            description?: string | null;
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

      export interface EmbedStep {
        embed: EmbedStep.Embed;

        kind_?: 'embed';
      }

      export namespace EmbedStep {
        export interface Embed {
          text: string | Array<string>;
        }
      }

      export interface SearchStep {
        search:
          | SearchStep.VectorDocSearchRequest
          | SearchStep.TextOnlyDocSearchRequest
          | SearchStep.HybridDocSearchRequest;

        kind_?: 'search';
      }

      export namespace SearchStep {
        export interface VectorDocSearchRequest {
          vector: Array<number>;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }

        export interface TextOnlyDocSearchRequest {
          text: string;

          lang?: 'en-US';

          limit?: number;
        }

        export interface HybridDocSearchRequest {
          text: string;

          vector: Array<number>;

          alpha?: number;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }
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

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';

        kind_?: 'yield';
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
        | Foreach.EvaluateStep
        | Foreach.ToolCallStep
        | Foreach.PromptStepOutput
        | Foreach.GetStep
        | Foreach.SetStep
        | Foreach.LogStep
        | Foreach.EmbedStep
        | Foreach.SearchStep;

      in: string;
    }

    export namespace Foreach {
      export interface EvaluateStep {
        evaluate: Record<string, string>;

        kind_?: 'evaluate';
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, string> | '_';

        kind_?: 'tool_call';
      }

      export interface PromptStepOutput {
        prompt: Array<PromptStepOutput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        kind_?: 'prompt';

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequest>;

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
          type: 'function' | 'integration' | 'system' | 'api_call';

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

        export interface CreateToolRequest {
          name: string;

          /**
           * Function definition
           */
          function?: CreateToolRequest.Function | null;

          /**
           * Integration definition
           */
          integration?: CreateToolRequest.Integration | null;

          /**
           * System definition
           */
          system?: CreateToolRequest.System | null;

          type?: 'function' | 'integration' | 'system' | 'api_call';
        }

        export namespace CreateToolRequest {
          /**
           * Function definition
           */
          export interface Function {
            description?: string | null;

            name?: unknown | null;

            parameters?: unknown | null;
          }

          /**
           * Integration definition
           */
          export interface Integration {
            provider:
              | 'dummy'
              | 'dall-e'
              | 'duckduckgo'
              | 'hackernews'
              | 'weather'
              | 'wikipedia'
              | 'twitter'
              | 'webpage'
              | 'requests';

            arguments?: unknown | null;

            description?: string | null;

            method?: string | null;

            setup?: unknown | null;
          }

          /**
           * System definition
           */
          export interface System {
            call: string;

            arguments?: unknown | null;

            description?: string | null;
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

      export interface EmbedStep {
        embed: EmbedStep.Embed;

        kind_?: 'embed';
      }

      export namespace EmbedStep {
        export interface Embed {
          text: string | Array<string>;
        }
      }

      export interface SearchStep {
        search:
          | SearchStep.VectorDocSearchRequest
          | SearchStep.TextOnlyDocSearchRequest
          | SearchStep.HybridDocSearchRequest;

        kind_?: 'search';
      }

      export namespace SearchStep {
        export interface VectorDocSearchRequest {
          vector: Array<number>;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }

        export interface TextOnlyDocSearchRequest {
          text: string;

          lang?: 'en-US';

          limit?: number;
        }

        export interface HybridDocSearchRequest {
          text: string;

          vector: Array<number>;

          alpha?: number;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }
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
      | ParallelStepOutput.EmbedStep
      | ParallelStepOutput.SearchStep
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

      arguments?: Record<string, string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;

      kind_?: 'embed';
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;

      kind_?: 'search';
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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
      | MainOutput.EmbedStep
      | MainOutput.SearchStep;

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

      arguments?: Record<string, string> | '_';

      kind_?: 'tool_call';
    }

    export interface PromptStepOutput {
      prompt: Array<PromptStepOutput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepOutput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;

      kind_?: 'embed';
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;

      kind_?: 'search';
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
    }
  }
}

export interface Tool {
  name: string;

  /**
   * Function definition
   */
  function?: Tool.Function | null;

  inherited?: boolean;

  /**
   * Integration definition
   */
  integration?: Tool.Integration | null;

  /**
   * System definition
   */
  system?: Tool.System | null;

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

  /**
   * Integration definition
   */
  export interface Integration {
    provider:
      | 'dummy'
      | 'dall-e'
      | 'duckduckgo'
      | 'hackernews'
      | 'weather'
      | 'wikipedia'
      | 'twitter'
      | 'webpage'
      | 'requests';

    arguments?: unknown | null;

    description?: string | null;

    method?: string | null;

    setup?: unknown | null;
  }

  /**
   * System definition
   */
  export interface System {
    call: string;

    arguments?: unknown | null;

    description?: string | null;
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
    | TaskCreateParams.EmbedStep
    | TaskCreateParams.SearchStep
    | TaskCreateParams.ReturnStep
    | TaskCreateParams.SleepStep
    | TaskCreateParams.ErrorWorkflowStep
    | TaskCreateParams.YieldStep
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

  tools?: Array<Tool>;
}

export namespace TaskCreateParams {
  export interface EvaluateStep {
    evaluate: Record<string, string>;
  }

  export interface ToolCallStep {
    tool: string;

    arguments?: Record<string, string> | '_';
  }

  export interface PromptStepInput {
    prompt: Array<PromptStepInput.UnionMember0> | string;

    forward_tool_results?: boolean | null;

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

    tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
      type: 'function' | 'integration' | 'system' | 'api_call';

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

    export interface CreateToolRequest {
      name: string;

      /**
       * Function definition
       */
      function?: CreateToolRequest.Function | null;

      /**
       * Integration definition
       */
      integration?: CreateToolRequest.Integration | null;

      /**
       * System definition
       */
      system?: CreateToolRequest.System | null;

      type?: 'function' | 'integration' | 'system' | 'api_call';
    }

    export namespace CreateToolRequest {
      /**
       * Function definition
       */
      export interface Function {
        description?: string | null;

        name?: unknown | null;

        parameters?: unknown | null;
      }

      /**
       * Integration definition
       */
      export interface Integration {
        provider:
          | 'dummy'
          | 'dall-e'
          | 'duckduckgo'
          | 'hackernews'
          | 'weather'
          | 'wikipedia'
          | 'twitter'
          | 'webpage'
          | 'requests';

        arguments?: unknown | null;

        description?: string | null;

        method?: string | null;

        setup?: unknown | null;
      }

      /**
       * System definition
       */
      export interface System {
        call: string;

        arguments?: unknown | null;

        description?: string | null;
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

  export interface EmbedStep {
    embed: EmbedStep.Embed;
  }

  export namespace EmbedStep {
    export interface Embed {
      text: string | Array<string>;
    }
  }

  export interface SearchStep {
    search:
      | SearchStep.VectorDocSearchRequest
      | SearchStep.TextOnlyDocSearchRequest
      | SearchStep.HybridDocSearchRequest;
  }

  export namespace SearchStep {
    export interface VectorDocSearchRequest {
      vector: Array<number>;

      confidence?: number;

      lang?: 'en-US';

      limit?: number;
    }

    export interface TextOnlyDocSearchRequest {
      text: string;

      lang?: 'en-US';

      limit?: number;
    }

    export interface HybridDocSearchRequest {
      text: string;

      vector: Array<number>;

      alpha?: number;

      confidence?: number;

      lang?: 'en-US';

      limit?: number;
    }
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

  export interface YieldStep {
    workflow: string;

    arguments?: Record<string, string> | '_';
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
      | IfElseWorkflowStepInput.EmbedStep
      | IfElseWorkflowStepInput.SearchStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.WaitForInputStep;

    else?:
      | IfElseWorkflowStepInput.EvaluateStep
      | IfElseWorkflowStepInput.ToolCallStep
      | IfElseWorkflowStepInput.PromptStepInput
      | IfElseWorkflowStepInput.GetStep
      | IfElseWorkflowStepInput.SetStep
      | IfElseWorkflowStepInput.LogStep
      | IfElseWorkflowStepInput.EmbedStep
      | IfElseWorkflowStepInput.SearchStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.WaitForInputStep
      | null;
  }

  export namespace IfElseWorkflowStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
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

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
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
        | Switch.EmbedStep
        | Switch.SearchStep
        | Switch.ReturnStep
        | Switch.SleepStep
        | Switch.ErrorWorkflowStep
        | Switch.YieldStep
        | Switch.WaitForInputStep;
    }

    export namespace Switch {
      export interface EvaluateStep {
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
          type: 'function' | 'integration' | 'system' | 'api_call';

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

        export interface CreateToolRequest {
          name: string;

          /**
           * Function definition
           */
          function?: CreateToolRequest.Function | null;

          /**
           * Integration definition
           */
          integration?: CreateToolRequest.Integration | null;

          /**
           * System definition
           */
          system?: CreateToolRequest.System | null;

          type?: 'function' | 'integration' | 'system' | 'api_call';
        }

        export namespace CreateToolRequest {
          /**
           * Function definition
           */
          export interface Function {
            description?: string | null;

            name?: unknown | null;

            parameters?: unknown | null;
          }

          /**
           * Integration definition
           */
          export interface Integration {
            provider:
              | 'dummy'
              | 'dall-e'
              | 'duckduckgo'
              | 'hackernews'
              | 'weather'
              | 'wikipedia'
              | 'twitter'
              | 'webpage'
              | 'requests';

            arguments?: unknown | null;

            description?: string | null;

            method?: string | null;

            setup?: unknown | null;
          }

          /**
           * System definition
           */
          export interface System {
            call: string;

            arguments?: unknown | null;

            description?: string | null;
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

      export interface EmbedStep {
        embed: EmbedStep.Embed;
      }

      export namespace EmbedStep {
        export interface Embed {
          text: string | Array<string>;
        }
      }

      export interface SearchStep {
        search:
          | SearchStep.VectorDocSearchRequest
          | SearchStep.TextOnlyDocSearchRequest
          | SearchStep.HybridDocSearchRequest;
      }

      export namespace SearchStep {
        export interface VectorDocSearchRequest {
          vector: Array<number>;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }

        export interface TextOnlyDocSearchRequest {
          text: string;

          lang?: 'en-US';

          limit?: number;
        }

        export interface HybridDocSearchRequest {
          text: string;

          vector: Array<number>;

          alpha?: number;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }
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

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';
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
        | Foreach.EvaluateStep
        | Foreach.ToolCallStep
        | Foreach.PromptStepInput
        | Foreach.GetStep
        | Foreach.SetStep
        | Foreach.LogStep
        | Foreach.EmbedStep
        | Foreach.SearchStep;

      in: string;
    }

    export namespace Foreach {
      export interface EvaluateStep {
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
          type: 'function' | 'integration' | 'system' | 'api_call';

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

        export interface CreateToolRequest {
          name: string;

          /**
           * Function definition
           */
          function?: CreateToolRequest.Function | null;

          /**
           * Integration definition
           */
          integration?: CreateToolRequest.Integration | null;

          /**
           * System definition
           */
          system?: CreateToolRequest.System | null;

          type?: 'function' | 'integration' | 'system' | 'api_call';
        }

        export namespace CreateToolRequest {
          /**
           * Function definition
           */
          export interface Function {
            description?: string | null;

            name?: unknown | null;

            parameters?: unknown | null;
          }

          /**
           * Integration definition
           */
          export interface Integration {
            provider:
              | 'dummy'
              | 'dall-e'
              | 'duckduckgo'
              | 'hackernews'
              | 'weather'
              | 'wikipedia'
              | 'twitter'
              | 'webpage'
              | 'requests';

            arguments?: unknown | null;

            description?: string | null;

            method?: string | null;

            setup?: unknown | null;
          }

          /**
           * System definition
           */
          export interface System {
            call: string;

            arguments?: unknown | null;

            description?: string | null;
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

      export interface EmbedStep {
        embed: EmbedStep.Embed;
      }

      export namespace EmbedStep {
        export interface Embed {
          text: string | Array<string>;
        }
      }

      export interface SearchStep {
        search:
          | SearchStep.VectorDocSearchRequest
          | SearchStep.TextOnlyDocSearchRequest
          | SearchStep.HybridDocSearchRequest;
      }

      export namespace SearchStep {
        export interface VectorDocSearchRequest {
          vector: Array<number>;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }

        export interface TextOnlyDocSearchRequest {
          text: string;

          lang?: 'en-US';

          limit?: number;
        }

        export interface HybridDocSearchRequest {
          text: string;

          vector: Array<number>;

          alpha?: number;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }
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
      | ParallelStepInput.EmbedStep
      | ParallelStepInput.SearchStep
    >;
  }

  export namespace ParallelStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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
      | MainInput.EmbedStep
      | MainInput.SearchStep;

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

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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
    | TaskCreateOrUpdateParams.EmbedStep
    | TaskCreateOrUpdateParams.SearchStep
    | TaskCreateOrUpdateParams.ReturnStep
    | TaskCreateOrUpdateParams.SleepStep
    | TaskCreateOrUpdateParams.ErrorWorkflowStep
    | TaskCreateOrUpdateParams.YieldStep
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

  tools?: Array<Tool>;
}

export namespace TaskCreateOrUpdateParams {
  export interface EvaluateStep {
    evaluate: Record<string, string>;
  }

  export interface ToolCallStep {
    tool: string;

    arguments?: Record<string, string> | '_';
  }

  export interface PromptStepInput {
    prompt: Array<PromptStepInput.UnionMember0> | string;

    forward_tool_results?: boolean | null;

    settings?: SessionsAPI.ChatSettings | null;

    tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

    tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
      type: 'function' | 'integration' | 'system' | 'api_call';

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

    export interface CreateToolRequest {
      name: string;

      /**
       * Function definition
       */
      function?: CreateToolRequest.Function | null;

      /**
       * Integration definition
       */
      integration?: CreateToolRequest.Integration | null;

      /**
       * System definition
       */
      system?: CreateToolRequest.System | null;

      type?: 'function' | 'integration' | 'system' | 'api_call';
    }

    export namespace CreateToolRequest {
      /**
       * Function definition
       */
      export interface Function {
        description?: string | null;

        name?: unknown | null;

        parameters?: unknown | null;
      }

      /**
       * Integration definition
       */
      export interface Integration {
        provider:
          | 'dummy'
          | 'dall-e'
          | 'duckduckgo'
          | 'hackernews'
          | 'weather'
          | 'wikipedia'
          | 'twitter'
          | 'webpage'
          | 'requests';

        arguments?: unknown | null;

        description?: string | null;

        method?: string | null;

        setup?: unknown | null;
      }

      /**
       * System definition
       */
      export interface System {
        call: string;

        arguments?: unknown | null;

        description?: string | null;
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

  export interface EmbedStep {
    embed: EmbedStep.Embed;
  }

  export namespace EmbedStep {
    export interface Embed {
      text: string | Array<string>;
    }
  }

  export interface SearchStep {
    search:
      | SearchStep.VectorDocSearchRequest
      | SearchStep.TextOnlyDocSearchRequest
      | SearchStep.HybridDocSearchRequest;
  }

  export namespace SearchStep {
    export interface VectorDocSearchRequest {
      vector: Array<number>;

      confidence?: number;

      lang?: 'en-US';

      limit?: number;
    }

    export interface TextOnlyDocSearchRequest {
      text: string;

      lang?: 'en-US';

      limit?: number;
    }

    export interface HybridDocSearchRequest {
      text: string;

      vector: Array<number>;

      alpha?: number;

      confidence?: number;

      lang?: 'en-US';

      limit?: number;
    }
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

  export interface YieldStep {
    workflow: string;

    arguments?: Record<string, string> | '_';
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
      | IfElseWorkflowStepInput.EmbedStep
      | IfElseWorkflowStepInput.SearchStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.WaitForInputStep;

    else?:
      | IfElseWorkflowStepInput.EvaluateStep
      | IfElseWorkflowStepInput.ToolCallStep
      | IfElseWorkflowStepInput.PromptStepInput
      | IfElseWorkflowStepInput.GetStep
      | IfElseWorkflowStepInput.SetStep
      | IfElseWorkflowStepInput.LogStep
      | IfElseWorkflowStepInput.EmbedStep
      | IfElseWorkflowStepInput.SearchStep
      | IfElseWorkflowStepInput.ReturnStep
      | IfElseWorkflowStepInput.SleepStep
      | IfElseWorkflowStepInput.ErrorWorkflowStep
      | IfElseWorkflowStepInput.YieldStep
      | IfElseWorkflowStepInput.WaitForInputStep
      | null;
  }

  export namespace IfElseWorkflowStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
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

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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

    export interface YieldStep {
      workflow: string;

      arguments?: Record<string, string> | '_';
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
        | Switch.EmbedStep
        | Switch.SearchStep
        | Switch.ReturnStep
        | Switch.SleepStep
        | Switch.ErrorWorkflowStep
        | Switch.YieldStep
        | Switch.WaitForInputStep;
    }

    export namespace Switch {
      export interface EvaluateStep {
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
          type: 'function' | 'integration' | 'system' | 'api_call';

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

        export interface CreateToolRequest {
          name: string;

          /**
           * Function definition
           */
          function?: CreateToolRequest.Function | null;

          /**
           * Integration definition
           */
          integration?: CreateToolRequest.Integration | null;

          /**
           * System definition
           */
          system?: CreateToolRequest.System | null;

          type?: 'function' | 'integration' | 'system' | 'api_call';
        }

        export namespace CreateToolRequest {
          /**
           * Function definition
           */
          export interface Function {
            description?: string | null;

            name?: unknown | null;

            parameters?: unknown | null;
          }

          /**
           * Integration definition
           */
          export interface Integration {
            provider:
              | 'dummy'
              | 'dall-e'
              | 'duckduckgo'
              | 'hackernews'
              | 'weather'
              | 'wikipedia'
              | 'twitter'
              | 'webpage'
              | 'requests';

            arguments?: unknown | null;

            description?: string | null;

            method?: string | null;

            setup?: unknown | null;
          }

          /**
           * System definition
           */
          export interface System {
            call: string;

            arguments?: unknown | null;

            description?: string | null;
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

      export interface EmbedStep {
        embed: EmbedStep.Embed;
      }

      export namespace EmbedStep {
        export interface Embed {
          text: string | Array<string>;
        }
      }

      export interface SearchStep {
        search:
          | SearchStep.VectorDocSearchRequest
          | SearchStep.TextOnlyDocSearchRequest
          | SearchStep.HybridDocSearchRequest;
      }

      export namespace SearchStep {
        export interface VectorDocSearchRequest {
          vector: Array<number>;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }

        export interface TextOnlyDocSearchRequest {
          text: string;

          lang?: 'en-US';

          limit?: number;
        }

        export interface HybridDocSearchRequest {
          text: string;

          vector: Array<number>;

          alpha?: number;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }
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

      export interface YieldStep {
        workflow: string;

        arguments?: Record<string, string> | '_';
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
        | Foreach.EvaluateStep
        | Foreach.ToolCallStep
        | Foreach.PromptStepInput
        | Foreach.GetStep
        | Foreach.SetStep
        | Foreach.LogStep
        | Foreach.EmbedStep
        | Foreach.SearchStep;

      in: string;
    }

    export namespace Foreach {
      export interface EvaluateStep {
        evaluate: Record<string, string>;
      }

      export interface ToolCallStep {
        tool: string;

        arguments?: Record<string, string> | '_';
      }

      export interface PromptStepInput {
        prompt: Array<PromptStepInput.UnionMember0> | string;

        forward_tool_results?: boolean | null;

        settings?: SessionsAPI.ChatSettings | null;

        tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

        tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
          type: 'function' | 'integration' | 'system' | 'api_call';

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

        export interface CreateToolRequest {
          name: string;

          /**
           * Function definition
           */
          function?: CreateToolRequest.Function | null;

          /**
           * Integration definition
           */
          integration?: CreateToolRequest.Integration | null;

          /**
           * System definition
           */
          system?: CreateToolRequest.System | null;

          type?: 'function' | 'integration' | 'system' | 'api_call';
        }

        export namespace CreateToolRequest {
          /**
           * Function definition
           */
          export interface Function {
            description?: string | null;

            name?: unknown | null;

            parameters?: unknown | null;
          }

          /**
           * Integration definition
           */
          export interface Integration {
            provider:
              | 'dummy'
              | 'dall-e'
              | 'duckduckgo'
              | 'hackernews'
              | 'weather'
              | 'wikipedia'
              | 'twitter'
              | 'webpage'
              | 'requests';

            arguments?: unknown | null;

            description?: string | null;

            method?: string | null;

            setup?: unknown | null;
          }

          /**
           * System definition
           */
          export interface System {
            call: string;

            arguments?: unknown | null;

            description?: string | null;
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

      export interface EmbedStep {
        embed: EmbedStep.Embed;
      }

      export namespace EmbedStep {
        export interface Embed {
          text: string | Array<string>;
        }
      }

      export interface SearchStep {
        search:
          | SearchStep.VectorDocSearchRequest
          | SearchStep.TextOnlyDocSearchRequest
          | SearchStep.HybridDocSearchRequest;
      }

      export namespace SearchStep {
        export interface VectorDocSearchRequest {
          vector: Array<number>;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }

        export interface TextOnlyDocSearchRequest {
          text: string;

          lang?: 'en-US';

          limit?: number;
        }

        export interface HybridDocSearchRequest {
          text: string;

          vector: Array<number>;

          alpha?: number;

          confidence?: number;

          lang?: 'en-US';

          limit?: number;
        }
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
      | ParallelStepInput.EmbedStep
      | ParallelStepInput.SearchStep
    >;
  }

  export namespace ParallelStepInput {
    export interface EvaluateStep {
      evaluate: Record<string, string>;
    }

    export interface ToolCallStep {
      tool: string;

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
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
      | MainInput.EmbedStep
      | MainInput.SearchStep;

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

      arguments?: Record<string, string> | '_';
    }

    export interface PromptStepInput {
      prompt: Array<PromptStepInput.UnionMember0> | string;

      forward_tool_results?: boolean | null;

      settings?: SessionsAPI.ChatSettings | null;

      tool_choice?: 'auto' | 'none' | PromptStepInput.NamedToolChoice | null;

      tools?: 'all' | Array<PromptStepInput.ToolRef | PromptStepInput.CreateToolRequest>;

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
        type: 'function' | 'integration' | 'system' | 'api_call';

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

      export interface CreateToolRequest {
        name: string;

        /**
         * Function definition
         */
        function?: CreateToolRequest.Function | null;

        /**
         * Integration definition
         */
        integration?: CreateToolRequest.Integration | null;

        /**
         * System definition
         */
        system?: CreateToolRequest.System | null;

        type?: 'function' | 'integration' | 'system' | 'api_call';
      }

      export namespace CreateToolRequest {
        /**
         * Function definition
         */
        export interface Function {
          description?: string | null;

          name?: unknown | null;

          parameters?: unknown | null;
        }

        /**
         * Integration definition
         */
        export interface Integration {
          provider:
            | 'dummy'
            | 'dall-e'
            | 'duckduckgo'
            | 'hackernews'
            | 'weather'
            | 'wikipedia'
            | 'twitter'
            | 'webpage'
            | 'requests';

          arguments?: unknown | null;

          description?: string | null;

          method?: string | null;

          setup?: unknown | null;
        }

        /**
         * System definition
         */
        export interface System {
          call: string;

          arguments?: unknown | null;

          description?: string | null;
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

    export interface EmbedStep {
      embed: EmbedStep.Embed;
    }

    export namespace EmbedStep {
      export interface Embed {
        text: string | Array<string>;
      }
    }

    export interface SearchStep {
      search:
        | SearchStep.VectorDocSearchRequest
        | SearchStep.TextOnlyDocSearchRequest
        | SearchStep.HybridDocSearchRequest;
    }

    export namespace SearchStep {
      export interface VectorDocSearchRequest {
        vector: Array<number>;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }

      export interface TextOnlyDocSearchRequest {
        text: string;

        lang?: 'en-US';

        limit?: number;
      }

      export interface HybridDocSearchRequest {
        text: string;

        vector: Array<number>;

        alpha?: number;

        confidence?: number;

        lang?: 'en-US';

        limit?: number;
      }
    }
  }
}

export namespace Tasks {
  export import Task = TasksAPI.Task;
  export import Tool = TasksAPI.Tool;
  export import TasksOffsetPagination = TasksAPI.TasksOffsetPagination;
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskListParams = TasksAPI.TaskListParams;
  export import TaskCreateOrUpdateParams = TasksAPI.TaskCreateOrUpdateParams;
}
