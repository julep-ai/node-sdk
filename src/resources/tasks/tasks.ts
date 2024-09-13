// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TasksAPI from './tasks';
import * as SessionsAPI from '../sessions';
import * as ExecutionsAPI from './executions';
import { OffsetPagination } from '../../pagination';

export class Tasks extends APIResource {
  executions: ExecutionsAPI.Executions = new ExecutionsAPI.Executions(this._client);
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

    kind_?: 'prompt';

    settings?: SessionsAPI.ChatSettings | null;
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

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;
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

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;
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

        kind_?: 'prompt';

        settings?: SessionsAPI.ChatSettings | null;
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

        kind_?: 'prompt';

        settings?: SessionsAPI.ChatSettings | null;
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

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;
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

      kind_?: 'prompt';

      settings?: SessionsAPI.ChatSettings | null;
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
  /**
   * Function definition
   */
  function: Tool.Function;

  name: string;

  api_call?: unknown | null;

  inherited?: boolean;

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

export namespace Tasks {
  export import Task = TasksAPI.Task;
  export import Tool = TasksAPI.Tool;
  export import Executions = ExecutionsAPI.Executions;
  export import ExecutionCreateParams = ExecutionsAPI.ExecutionCreateParams;
  export import ExecutionListParams = ExecutionsAPI.ExecutionListParams;
}
