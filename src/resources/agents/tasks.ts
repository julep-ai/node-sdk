// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TasksAPI from './tasks';
import * as SessionsAPI from '../sessions';
import * as Shared from '../shared';
import * as TasksTasksAPI from '../tasks/tasks';
import { TasksOffsetPagination } from '../tasks/tasks';
import { type OffsetPaginationParams } from '../../pagination';

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
  ): Core.PagePromise<TasksOffsetPagination, TasksTasksAPI.Task>;
  list(
    agentId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TasksOffsetPagination, TasksTasksAPI.Task>;
  list(
    agentId: string,
    query: TaskListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<TasksOffsetPagination, TasksTasksAPI.Task> {
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

  tools?: Array<TasksTasksAPI.Tool>;
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

    settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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

        settings?: SessionsAPI.ChatSettings | null;
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

        settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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

  tools?: Array<TasksTasksAPI.Tool>;
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

    settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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

        settings?: SessionsAPI.ChatSettings | null;
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

        settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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

      settings?: SessionsAPI.ChatSettings | null;
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
  export import TaskCreateParams = TasksAPI.TaskCreateParams;
  export import TaskListParams = TasksAPI.TaskListParams;
  export import TaskCreateOrUpdateParams = TasksAPI.TaskCreateOrUpdateParams;
}

export { TasksOffsetPagination };
