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
  create(agentId: string, body: TaskCreateParams, options?: Core.RequestOptions): Core.APIPromise<Task> {
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
  ): Core.APIPromise<Task> {
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

export interface CaseThenOutput {
  case: '_';

  then:
    | EvaluateStep
    | ToolCallStep
    | PromptStepOutput
    | GetStep
    | SetStep
    | LogStep
    | YieldStep
    | ReturnStep
    | SleepStep
    | ErrorWorkflowStep
    | WaitForInputStep;
}

export interface ErrorWorkflowStep {
  error: string;

  kind_?: 'error';

  label?: string | null;
}

export interface EvaluateStep {
  evaluate: { [key: string]: unknown | string };

  kind_?: 'evaluate';

  label?: string | null;
}

export interface ForeachDoOutput {
  do:
    | WaitForInputStep
    | EvaluateStep
    | ToolCallStep
    | PromptStepOutput
    | GetStep
    | SetStep
    | LogStep
    | YieldStep;

  in: string;
}

export interface ForeachStepOutput {
  foreach: ForeachDoOutput;

  kind_?: 'foreach';

  label?: string | null;
}

export interface GetStep {
  get: string;

  kind_?: 'get';

  label?: string | null;
}

export interface LogStep {
  log: string;

  kind_?: 'log';

  label?: string | null;
}

export interface ParallelStepOutput {
  parallel: Array<EvaluateStep | ToolCallStep | PromptStepOutput | GetStep | SetStep | LogStep | YieldStep>;

  kind_?: 'parallel';

  label?: string | null;
}

export interface PromptStepOutput {
  prompt: Array<PromptStepOutput.UnionMember0> | string;

  auto_run_tools?: boolean;

  disable_cache?: boolean;

  kind_?: 'prompt';

  label?: string | null;

  settings?: unknown | null;

  tool_choice?: 'auto' | 'none' | Shared.NamedToolChoice | null;

  tools?: 'all' | Array<PromptStepOutput.ToolRef | PromptStepOutput.CreateToolRequestOutput>;

  unwrap?: boolean;
}

export namespace PromptStepOutput {
  export interface UnionMember0 {
    content:
      | Array<string>
      | Array<
          | UnionMember0.ContentOutput
          | UnionMember0.AgentsAPIAutogenTasksContentModel
          | UnionMember0.AgentsAPIAutogenTasksContentModel1Output
        >
      | string
      | null;

    role: 'user' | 'assistant' | 'system' | 'tool';

    name?: string | null;

    tool_call_id?: string | null;

    tool_calls?: Array<
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
    > | null;
  }

  export namespace UnionMember0 {
    export interface ContentOutput {
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
      | CreateToolRequestOutput.GoogleSheetsIntegrationDefOutput
      | null;

    /**
     * System definition
     */
    system?: Shared.SystemDef | null;

    text_editor_20241022?: Shared.TextEditor20241022Def | null;
  }

  export namespace CreateToolRequestOutput {
    /**
     * API call definition
     */
    export interface APICall {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

      url: string;

      content?: string | null;

      cookies?: { [key: string]: string } | null;

      data?: unknown | null;

      files?: unknown | null;

      follow_redirects?: boolean | null;

      headers?: { [key: string]: string } | null;

      include_response_content?: boolean;

      json?: unknown | null;

      params?: string | unknown | null;

      /**
       * JSON Schema for API call parameters
       */
      params_schema?: APICall.ParamsSchema | null;

      schema?: unknown | null;

      secrets?: { [key: string]: Shared.SecretRef } | null;

      timeout?: number | null;
    }

    export namespace APICall {
      /**
       * JSON Schema for API call parameters
       */
      export interface ParamsSchema {
        properties: { [key: string]: ParamsSchema.Properties };

        additionalProperties?: boolean | null;

        required?: Array<string>;

        type?: string;
      }

      export namespace ParamsSchema {
        /**
         * Property definition for parameter schema
         */
        export interface Properties {
          type: string;

          description?: string | null;

          enum?: Array<string> | null;

          items?: unknown;
        }
      }
    }

    /**
     * Google Sheets integration definition
     */
    export interface GoogleSheetsIntegrationDefOutput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      arguments?:
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsReadArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsWriteArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsAppendArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsClearArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsBatchReadArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsBatchWriteArguments
        | null;

      method?:
        | 'read_values'
        | 'write_values'
        | 'append_values'
        | 'clear_values'
        | 'batch_read'
        | 'batch_write'
        | null;

      provider?: 'google_sheets';

      /**
       * Setup parameters for Google Sheets integration
       */
      setup?: GoogleSheetsIntegrationDefOutput.Setup | null;
    }

    export namespace GoogleSheetsIntegrationDefOutput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      export interface GoogleSheetsReadArguments {
        range: string;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for writing values to a spreadsheet
       */
      export interface GoogleSheetsWriteArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for appending values to a spreadsheet
       */
      export interface GoogleSheetsAppendArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for clearing values from a spreadsheet
       */
      export interface GoogleSheetsClearArguments {
        range: string;

        spreadsheet_id: string;
      }

      /**
       * Arguments for batch reading values from multiple ranges
       */
      export interface GoogleSheetsBatchReadArguments {
        ranges: Array<string>;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for batch updating values in multiple ranges
       */
      export interface GoogleSheetsBatchWriteArguments {
        data: Array<GoogleSheetsBatchWriteArguments.Data>;

        spreadsheet_id: string;

        include_values_in_response?: boolean;

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      export namespace GoogleSheetsBatchWriteArguments {
        /**
         * Represents a range of values to write
         */
        export interface Data {
          range: string;

          values: Array<Array<unknown>>;

          major_dimension?: 'ROWS' | 'COLUMNS';
        }
      }

      /**
       * Setup parameters for Google Sheets integration
       */
      export interface Setup {
        use_julep_service: boolean;

        default_retry_count?: number;

        service_account_json?: string | null;
      }
    }
  }
}

export interface ReturnStep {
  return: {
    [key: string]: Array<string> | { [key: string]: string } | Array<{ [key: string]: string }> | string;
  };

  kind_?: 'return';

  label?: string | null;
}

export interface SetStep {
  set: { [key: string]: unknown | string };

  kind_?: 'set';

  label?: string | null;
}

export interface SleepFor {
  days?: number;

  hours?: number;

  minutes?: number;

  seconds?: number;
}

export interface SleepStep {
  sleep: SleepFor;

  kind_?: 'sleep';

  label?: string | null;
}

export interface SwitchStepOutput {
  switch: Array<CaseThenOutput>;

  kind_?: 'switch';

  label?: string | null;
}

export interface Task {
  id: string;

  created_at: string;

  main: Array<
    | EvaluateStep
    | ToolCallStep
    | PromptStepOutput
    | GetStep
    | SetStep
    | LogStep
    | YieldStep
    | ReturnStep
    | SleepStep
    | ErrorWorkflowStep
    | WaitForInputStep
    | Shared.IfElseStepOutput
    | SwitchStepOutput
    | ForeachStepOutput
    | ParallelStepOutput
    | Task.MainOutput
  >;

  name: string;

  updated_at: string;

  canonical_name?: string | null;

  description?: string;

  inherit_tools?: boolean;

  input_schema?: unknown | null;

  metadata?: unknown | null;

  tools?: Array<Task.Tool>;

  [k: string]: unknown;
}

export namespace Task {
  export interface MainOutput {
    map:
      | TasksAPI.EvaluateStep
      | TasksAPI.ToolCallStep
      | TasksAPI.PromptStepOutput
      | TasksAPI.GetStep
      | TasksAPI.SetStep
      | TasksAPI.LogStep
      | TasksAPI.YieldStep;

    over: string;

    initial?: unknown;

    kind_?: 'map_reduce';

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
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

    inherited?: boolean;

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
      | Tool.GoogleSheetsIntegrationDefOutput
      | null;

    /**
     * System definition
     */
    system?: Shared.SystemDef | null;

    text_editor_20241022?: Shared.TextEditor20241022Def | null;
  }

  export namespace Tool {
    /**
     * API call definition
     */
    export interface APICall {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

      url: string;

      content?: string | null;

      cookies?: { [key: string]: string } | null;

      data?: unknown | null;

      files?: unknown | null;

      follow_redirects?: boolean | null;

      headers?: { [key: string]: string } | null;

      include_response_content?: boolean;

      json?: unknown | null;

      params?: string | unknown | null;

      /**
       * JSON Schema for API call parameters
       */
      params_schema?: APICall.ParamsSchema | null;

      schema?: unknown | null;

      secrets?: { [key: string]: Shared.SecretRef } | null;

      timeout?: number | null;
    }

    export namespace APICall {
      /**
       * JSON Schema for API call parameters
       */
      export interface ParamsSchema {
        properties: { [key: string]: ParamsSchema.Properties };

        additionalProperties?: boolean | null;

        required?: Array<string>;

        type?: string;
      }

      export namespace ParamsSchema {
        /**
         * Property definition for parameter schema
         */
        export interface Properties {
          type: string;

          description?: string | null;

          enum?: Array<string> | null;

          items?: unknown;
        }
      }
    }

    /**
     * Google Sheets integration definition
     */
    export interface GoogleSheetsIntegrationDefOutput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      arguments?:
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsReadArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsWriteArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsAppendArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsClearArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsBatchReadArguments
        | GoogleSheetsIntegrationDefOutput.GoogleSheetsBatchWriteArguments
        | null;

      method?:
        | 'read_values'
        | 'write_values'
        | 'append_values'
        | 'clear_values'
        | 'batch_read'
        | 'batch_write'
        | null;

      provider?: 'google_sheets';

      /**
       * Setup parameters for Google Sheets integration
       */
      setup?: GoogleSheetsIntegrationDefOutput.Setup | null;
    }

    export namespace GoogleSheetsIntegrationDefOutput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      export interface GoogleSheetsReadArguments {
        range: string;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for writing values to a spreadsheet
       */
      export interface GoogleSheetsWriteArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for appending values to a spreadsheet
       */
      export interface GoogleSheetsAppendArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for clearing values from a spreadsheet
       */
      export interface GoogleSheetsClearArguments {
        range: string;

        spreadsheet_id: string;
      }

      /**
       * Arguments for batch reading values from multiple ranges
       */
      export interface GoogleSheetsBatchReadArguments {
        ranges: Array<string>;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for batch updating values in multiple ranges
       */
      export interface GoogleSheetsBatchWriteArguments {
        data: Array<GoogleSheetsBatchWriteArguments.Data>;

        spreadsheet_id: string;

        include_values_in_response?: boolean;

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      export namespace GoogleSheetsBatchWriteArguments {
        /**
         * Represents a range of values to write
         */
        export interface Data {
          range: string;

          values: Array<Array<unknown>>;

          major_dimension?: 'ROWS' | 'COLUMNS';
        }
      }

      /**
       * Setup parameters for Google Sheets integration
       */
      export interface Setup {
        use_julep_service: boolean;

        default_retry_count?: number;

        service_account_json?: string | null;
      }
    }
  }
}

export interface ToolCallStep {
  tool: string;

  arguments?: unknown | '_';

  kind_?: 'tool_call';

  label?: string | null;
}

export interface WaitForInputInfo {
  info: {
    [key: string]: Array<string> | { [key: string]: string } | Array<{ [key: string]: string }> | string;
  };
}

export interface WaitForInputStep {
  wait_for_input: WaitForInputInfo;

  kind_?: 'wait_for_input';

  label?: string | null;
}

export interface YieldStep {
  workflow: string;

  arguments?:
    | { [key: string]: Array<string> | { [key: string]: string } | Array<{ [key: string]: string }> | string }
    | '_';

  kind_?: 'yield';

  label?: string | null;
}

export interface TaskCreateParams {
  main: Array<
    | EvaluateStep
    | ToolCallStep
    | Shared.PromptStepInput
    | GetStep
    | SetStep
    | LogStep
    | YieldStep
    | ReturnStep
    | SleepStep
    | ErrorWorkflowStep
    | WaitForInputStep
    | Shared.IfElseStepInput
    | TaskCreateParams.SwitchStepInput
    | TaskCreateParams.ForeachStepInput
    | TaskCreateParams.ParallelStepInput
    | TaskCreateParams.MainInput
  >;

  name: string;

  canonical_name?: string | null;

  description?: string;

  inherit_tools?: boolean;

  input_schema?: unknown | null;

  metadata?: unknown | null;

  tools?: Array<TaskCreateParams.Tool>;

  [k: string]: unknown;
}

export namespace TaskCreateParams {
  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;

    label?: string | null;
  }

  export namespace SwitchStepInput {
    export interface Switch {
      case: '_';

      then:
        | TasksAPI.EvaluateStep
        | TasksAPI.ToolCallStep
        | Shared.PromptStepInput
        | TasksAPI.GetStep
        | TasksAPI.SetStep
        | TasksAPI.LogStep
        | TasksAPI.YieldStep
        | TasksAPI.ReturnStep
        | TasksAPI.SleepStep
        | TasksAPI.ErrorWorkflowStep
        | TasksAPI.WaitForInputStep;
    }
  }

  export interface ForeachStepInput {
    foreach: ForeachStepInput.Foreach;

    label?: string | null;
  }

  export namespace ForeachStepInput {
    export interface Foreach {
      do:
        | TasksAPI.WaitForInputStep
        | TasksAPI.EvaluateStep
        | TasksAPI.ToolCallStep
        | Shared.PromptStepInput
        | TasksAPI.GetStep
        | TasksAPI.SetStep
        | TasksAPI.LogStep
        | TasksAPI.YieldStep;

      in: string;
    }
  }

  export interface ParallelStepInput {
    parallel: Array<
      | TasksAPI.EvaluateStep
      | TasksAPI.ToolCallStep
      | Shared.PromptStepInput
      | TasksAPI.GetStep
      | TasksAPI.SetStep
      | TasksAPI.LogStep
      | TasksAPI.YieldStep
    >;

    label?: string | null;
  }

  export interface MainInput {
    map:
      | TasksAPI.EvaluateStep
      | TasksAPI.ToolCallStep
      | Shared.PromptStepInput
      | TasksAPI.GetStep
      | TasksAPI.SetStep
      | TasksAPI.LogStep
      | TasksAPI.YieldStep;

    over: string;

    initial?: unknown;

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
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
      | Tool.GoogleSheetsIntegrationDefInput
      | null;

    /**
     * System definition
     */
    system?: Shared.SystemDef | null;

    text_editor_20241022?: Shared.TextEditor20241022Def | null;
  }

  export namespace Tool {
    /**
     * API call definition
     */
    export interface APICall {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

      url: string;

      content?: string | null;

      cookies?: { [key: string]: string } | null;

      data?: unknown | null;

      files?: unknown | null;

      follow_redirects?: boolean | null;

      headers?: { [key: string]: string } | null;

      include_response_content?: boolean;

      json?: unknown | null;

      params?: string | unknown | null;

      /**
       * JSON Schema for API call parameters
       */
      params_schema?: APICall.ParamsSchema | null;

      schema?: unknown | null;

      secrets?: { [key: string]: Shared.SecretRef } | null;

      timeout?: number | null;
    }

    export namespace APICall {
      /**
       * JSON Schema for API call parameters
       */
      export interface ParamsSchema {
        properties: { [key: string]: ParamsSchema.Properties };

        additionalProperties?: boolean | null;

        required?: Array<string>;

        type?: string;
      }

      export namespace ParamsSchema {
        /**
         * Property definition for parameter schema
         */
        export interface Properties {
          type: string;

          description?: string | null;

          enum?: Array<string> | null;

          items?: unknown;
        }
      }
    }

    /**
     * Google Sheets integration definition
     */
    export interface GoogleSheetsIntegrationDefInput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      arguments?:
        | GoogleSheetsIntegrationDefInput.GoogleSheetsReadArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsWriteArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsAppendArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsClearArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsBatchReadArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsBatchWriteArguments
        | null;

      method?:
        | 'read_values'
        | 'write_values'
        | 'append_values'
        | 'clear_values'
        | 'batch_read'
        | 'batch_write'
        | null;

      provider?: 'google_sheets';

      /**
       * Setup parameters for Google Sheets integration
       */
      setup?: GoogleSheetsIntegrationDefInput.Setup | null;
    }

    export namespace GoogleSheetsIntegrationDefInput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      export interface GoogleSheetsReadArguments {
        range: string;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for writing values to a spreadsheet
       */
      export interface GoogleSheetsWriteArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for appending values to a spreadsheet
       */
      export interface GoogleSheetsAppendArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for clearing values from a spreadsheet
       */
      export interface GoogleSheetsClearArguments {
        range: string;

        spreadsheet_id: string;
      }

      /**
       * Arguments for batch reading values from multiple ranges
       */
      export interface GoogleSheetsBatchReadArguments {
        ranges: Array<string>;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for batch updating values in multiple ranges
       */
      export interface GoogleSheetsBatchWriteArguments {
        data: Array<GoogleSheetsBatchWriteArguments.Data>;

        spreadsheet_id: string;

        include_values_in_response?: boolean;

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      export namespace GoogleSheetsBatchWriteArguments {
        /**
         * Represents a range of values to write
         */
        export interface Data {
          range: string;

          values: Array<Array<unknown>>;

          major_dimension?: 'ROWS' | 'COLUMNS';
        }
      }

      /**
       * Setup parameters for Google Sheets integration
       */
      export interface Setup {
        use_julep_service: boolean;

        default_retry_count?: number;

        service_account_json?: string | null;
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
    | EvaluateStep
    | ToolCallStep
    | Shared.PromptStepInput
    | GetStep
    | SetStep
    | LogStep
    | YieldStep
    | ReturnStep
    | SleepStep
    | ErrorWorkflowStep
    | WaitForInputStep
    | Shared.IfElseStepInput
    | TaskCreateOrUpdateParams.SwitchStepInput
    | TaskCreateOrUpdateParams.ForeachStepInput
    | TaskCreateOrUpdateParams.ParallelStepInput
    | TaskCreateOrUpdateParams.MainInput
  >;

  name: string;

  canonical_name?: string | null;

  description?: string;

  inherit_tools?: boolean;

  input_schema?: unknown | null;

  metadata?: unknown | null;

  tools?: Array<TaskCreateOrUpdateParams.Tool>;

  [k: string]: unknown;
}

export namespace TaskCreateOrUpdateParams {
  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;

    label?: string | null;
  }

  export namespace SwitchStepInput {
    export interface Switch {
      case: '_';

      then:
        | TasksAPI.EvaluateStep
        | TasksAPI.ToolCallStep
        | Shared.PromptStepInput
        | TasksAPI.GetStep
        | TasksAPI.SetStep
        | TasksAPI.LogStep
        | TasksAPI.YieldStep
        | TasksAPI.ReturnStep
        | TasksAPI.SleepStep
        | TasksAPI.ErrorWorkflowStep
        | TasksAPI.WaitForInputStep;
    }
  }

  export interface ForeachStepInput {
    foreach: ForeachStepInput.Foreach;

    label?: string | null;
  }

  export namespace ForeachStepInput {
    export interface Foreach {
      do:
        | TasksAPI.WaitForInputStep
        | TasksAPI.EvaluateStep
        | TasksAPI.ToolCallStep
        | Shared.PromptStepInput
        | TasksAPI.GetStep
        | TasksAPI.SetStep
        | TasksAPI.LogStep
        | TasksAPI.YieldStep;

      in: string;
    }
  }

  export interface ParallelStepInput {
    parallel: Array<
      | TasksAPI.EvaluateStep
      | TasksAPI.ToolCallStep
      | Shared.PromptStepInput
      | TasksAPI.GetStep
      | TasksAPI.SetStep
      | TasksAPI.LogStep
      | TasksAPI.YieldStep
    >;

    label?: string | null;
  }

  export interface MainInput {
    map:
      | TasksAPI.EvaluateStep
      | TasksAPI.ToolCallStep
      | Shared.PromptStepInput
      | TasksAPI.GetStep
      | TasksAPI.SetStep
      | TasksAPI.LogStep
      | TasksAPI.YieldStep;

    over: string;

    initial?: unknown;

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
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
      | Tool.GoogleSheetsIntegrationDefInput
      | null;

    /**
     * System definition
     */
    system?: Shared.SystemDef | null;

    text_editor_20241022?: Shared.TextEditor20241022Def | null;
  }

  export namespace Tool {
    /**
     * API call definition
     */
    export interface APICall {
      method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS' | 'CONNECT' | 'TRACE';

      url: string;

      content?: string | null;

      cookies?: { [key: string]: string } | null;

      data?: unknown | null;

      files?: unknown | null;

      follow_redirects?: boolean | null;

      headers?: { [key: string]: string } | null;

      include_response_content?: boolean;

      json?: unknown | null;

      params?: string | unknown | null;

      /**
       * JSON Schema for API call parameters
       */
      params_schema?: APICall.ParamsSchema | null;

      schema?: unknown | null;

      secrets?: { [key: string]: Shared.SecretRef } | null;

      timeout?: number | null;
    }

    export namespace APICall {
      /**
       * JSON Schema for API call parameters
       */
      export interface ParamsSchema {
        properties: { [key: string]: ParamsSchema.Properties };

        additionalProperties?: boolean | null;

        required?: Array<string>;

        type?: string;
      }

      export namespace ParamsSchema {
        /**
         * Property definition for parameter schema
         */
        export interface Properties {
          type: string;

          description?: string | null;

          enum?: Array<string> | null;

          items?: unknown;
        }
      }
    }

    /**
     * Google Sheets integration definition
     */
    export interface GoogleSheetsIntegrationDefInput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      arguments?:
        | GoogleSheetsIntegrationDefInput.GoogleSheetsReadArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsWriteArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsAppendArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsClearArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsBatchReadArguments
        | GoogleSheetsIntegrationDefInput.GoogleSheetsBatchWriteArguments
        | null;

      method?:
        | 'read_values'
        | 'write_values'
        | 'append_values'
        | 'clear_values'
        | 'batch_read'
        | 'batch_write'
        | null;

      provider?: 'google_sheets';

      /**
       * Setup parameters for Google Sheets integration
       */
      setup?: GoogleSheetsIntegrationDefInput.Setup | null;
    }

    export namespace GoogleSheetsIntegrationDefInput {
      /**
       * Arguments for reading values from a spreadsheet
       */
      export interface GoogleSheetsReadArguments {
        range: string;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for writing values to a spreadsheet
       */
      export interface GoogleSheetsWriteArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for appending values to a spreadsheet
       */
      export interface GoogleSheetsAppendArguments {
        range: string;

        spreadsheet_id: string;

        values: Array<Array<unknown>>;

        include_values_in_response?: boolean;

        insert_data_option?: 'OVERWRITE' | 'INSERT_ROWS';

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      /**
       * Arguments for clearing values from a spreadsheet
       */
      export interface GoogleSheetsClearArguments {
        range: string;

        spreadsheet_id: string;
      }

      /**
       * Arguments for batch reading values from multiple ranges
       */
      export interface GoogleSheetsBatchReadArguments {
        ranges: Array<string>;

        spreadsheet_id: string;

        date_time_render_option?: 'SERIAL_NUMBER' | 'FORMATTED_STRING';

        major_dimension?: 'ROWS' | 'COLUMNS';

        value_render_option?: 'FORMATTED_VALUE' | 'UNFORMATTED_VALUE' | 'FORMULA';
      }

      /**
       * Arguments for batch updating values in multiple ranges
       */
      export interface GoogleSheetsBatchWriteArguments {
        data: Array<GoogleSheetsBatchWriteArguments.Data>;

        spreadsheet_id: string;

        include_values_in_response?: boolean;

        value_input_option?: 'RAW' | 'USER_ENTERED';
      }

      export namespace GoogleSheetsBatchWriteArguments {
        /**
         * Represents a range of values to write
         */
        export interface Data {
          range: string;

          values: Array<Array<unknown>>;

          major_dimension?: 'ROWS' | 'COLUMNS';
        }
      }

      /**
       * Setup parameters for Google Sheets integration
       */
      export interface Setup {
        use_julep_service: boolean;

        default_retry_count?: number;

        service_account_json?: string | null;
      }
    }
  }
}

Tasks.TasksOffsetPagination = TasksOffsetPagination;

export declare namespace Tasks {
  export {
    type CaseThenOutput as CaseThenOutput,
    type ErrorWorkflowStep as ErrorWorkflowStep,
    type EvaluateStep as EvaluateStep,
    type ForeachDoOutput as ForeachDoOutput,
    type ForeachStepOutput as ForeachStepOutput,
    type GetStep as GetStep,
    type LogStep as LogStep,
    type ParallelStepOutput as ParallelStepOutput,
    type PromptStepOutput as PromptStepOutput,
    type ReturnStep as ReturnStep,
    type SetStep as SetStep,
    type SleepFor as SleepFor,
    type SleepStep as SleepStep,
    type SwitchStepOutput as SwitchStepOutput,
    type Task as Task,
    type ToolCallStep as ToolCallStep,
    type WaitForInputInfo as WaitForInputInfo,
    type WaitForInputStep as WaitForInputStep,
    type YieldStep as YieldStep,
    TasksOffsetPagination as TasksOffsetPagination,
    type TaskCreateParams as TaskCreateParams,
    type TaskListParams as TaskListParams,
    type TaskCreateOrUpdateParams as TaskCreateOrUpdateParams,
  };
}
