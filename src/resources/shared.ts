// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import { OffsetPagination } from '../pagination';

export interface Agent {
  id: string;

  created_at: string;

  updated_at: string;

  about?: string;

  /**
   * Default settings for the chat session (also used by the agent)
   */
  default_settings?: Agent.DefaultSettings | null;

  instructions?: string | Array<string>;

  metadata?: unknown | null;

  model?: string;

  name?: string;
}

export namespace Agent {
  /**
   * Default settings for the chat session (also used by the agent)
   */
  export interface DefaultSettings {
    frequency_penalty?: number | null;

    length_penalty?: number | null;

    min_p?: number | null;

    presence_penalty?: number | null;

    repetition_penalty?: number | null;

    temperature?: number | null;

    top_p?: number | null;
  }
}

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

  tools?: Array<Tool>;

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

export interface Doc {
  id: string;

  content: string | Array<string>;

  created_at: string;

  title: string;

  metadata?: unknown | null;
}

export interface DocOwner {
  id: string;

  role: 'user' | 'agent';
}

export interface DocReference {
  id: string;

  owner: DocOwner;

  snippets: Array<Snippet>;

  distance?: number | null;

  title?: string | null;
}

export interface Entry {
  id: string;

  content:
    | Array<Entry.Content | Entry.ContentModel>
    | Tool
    | Entry.ChosenFunctionCall
    | Entry.ChosenIntegrationCall
    | Entry.ChosenSystemCall
    | Entry.ChosenAPICall
    | string
    | Entry.ToolResponse
    | Array<
        | Array<Entry.Content | Entry.ContentModel>
        | Tool
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

export interface Execution {
  id: string;

  created_at: string;

  input: unknown;

  status: 'queued' | 'starting' | 'running' | 'awaiting_input' | 'succeeded' | 'failed' | 'cancelled';

  task_id: string;

  updated_at: string;

  error?: string | null;

  metadata?: unknown | null;

  output?: unknown | null;
}

export interface History {
  created_at: string;

  entries: Array<Entry>;

  relations: Array<Relation>;

  session_id: string;
}

export interface JobStatus {
  id: string;

  created_at: string;

  updated_at: string;

  has_progress?: boolean;

  name?: string;

  progress?: number;

  reason?: string;

  state?: 'pending' | 'in_progress' | 'retrying' | 'succeeded' | 'aborted' | 'failed' | 'unknown';
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

export interface Relation {
  head: string;

  relation: string;

  tail: string;
}

export interface ResourceCreated {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface ResourceDeleted {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface ResourceUpdated {
  id: string;

  updated_at: string;

  jobs?: Array<string>;
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

export interface Snippet {
  content: string;

  index: number;
}

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

    arguments?: Record<string, string> | '_';

    kind_?: 'tool_call';
  }

  export interface PromptStepOutput {
    prompt: Array<PromptStepOutput.UnionMember0> | string;

    kind_?: 'prompt';

    settings?: Shared.ChatSettings | null;
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

      settings?: Shared.ChatSettings | null;
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

      settings?: Shared.ChatSettings | null;
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

        settings?: Shared.ChatSettings | null;
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

        settings?: Shared.ChatSettings | null;
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

      settings?: Shared.ChatSettings | null;
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

      settings?: Shared.ChatSettings | null;
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

export interface Transition {
  id: string;

  created_at: string;

  current: Transition.Current;

  execution_id: string;

  next: Transition.Next | null;

  output: unknown;

  type:
    | 'init'
    | 'init_branch'
    | 'finish'
    | 'finish_branch'
    | 'wait'
    | 'resume'
    | 'error'
    | 'step'
    | 'cancelled';

  updated_at: string;

  metadata?: unknown | null;
}

export namespace Transition {
  export interface Current {
    step: number;

    workflow: string;
  }

  export interface Next {
    step: number;

    workflow: string;
  }
}

export interface User {
  id: string;

  created_at: string;

  updated_at: string;

  about?: string;

  metadata?: unknown | null;

  name?: string;
}

export class ToolsOffsetPagination extends OffsetPagination<Tool> {}
