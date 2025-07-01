// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Shared from './shared';
import * as DocsAPI from './docs';
import * as SessionsAPI from './sessions';
import * as TasksAPI from './tasks';

/**
 * Algolia integration definition
 */
export interface AlgoliaIntegrationDef {
  /**
   * Arguments for Algolia Search
   */
  arguments?: AlgoliaSearchArguments | null;

  method?: string | null;

  provider?: 'algolia';

  /**
   * Integration definition for Algolia
   */
  setup?: AlgoliaSetup | null;
}

/**
 * Arguments for Algolia Search
 */
export interface AlgoliaSearchArguments {
  index_name: string;

  query: string;

  attributes_to_retrieve?: Array<string> | null;

  hits_per_page?: number;
}

/**
 * Integration definition for Algolia
 */
export interface AlgoliaSetup {
  algolia_api_key: string;

  algolia_application_id: string;
}

/**
 * Arxiv integration definition
 */
export interface ArxivIntegrationDef {
  /**
   * Arguments for Arxiv Search
   */
  arguments?: ArxivSearchArguments | null;

  method?: string | null;

  provider?: 'arxiv';

  setup?: unknown;
}

/**
 * Arguments for Arxiv Search
 */
export interface ArxivSearchArguments {
  query: string;

  download_pdf?: boolean;

  id_list?: Array<string> | null;

  max_results?: number;

  sort_by?: 'relevance' | 'lastUpdatedDate' | 'submittedDate';

  sort_order?: 'ascending' | 'descending';
}

export interface Bash20241022Def {
  name?: string;

  type?: 'bash_20241022';
}

/**
 * Brave integration definition
 */
export interface BraveIntegrationDef {
  /**
   * Arguments for Brave Search
   */
  arguments?: BraveSearchArguments | null;

  method?: string | null;

  provider?: 'brave';

  /**
   * Integration definition for Brave Search
   */
  setup?: BraveSearchSetup | null;
}

/**
 * Arguments for Brave Search
 */
export interface BraveSearchArguments {
  query: string;
}

/**
 * Integration definition for Brave Search
 */
export interface BraveSearchSetup {
  brave_api_key: string;
}

export interface BrowserbaseCompleteSessionArguments {
  id: string;

  status?: 'REQUEST_RELEASE';
}

/**
 * browserbase complete session integration definition
 */
export interface BrowserbaseCompleteSessionIntegrationDef {
  arguments?: BrowserbaseCompleteSessionArguments | null;

  method?: 'complete_session';

  provider?: 'browserbase';

  /**
   * The setup parameters for the browserbase integration
   */
  setup?: BrowserbaseSetup | null;
}

export interface BrowserbaseContextArguments {
  projectId: string;
}

/**
 * browserbase context provider
 */
export interface BrowserbaseContextIntegrationDef {
  arguments?: BrowserbaseContextArguments | null;

  method?: 'create_context';

  provider?: 'browserbase';

  /**
   * The setup parameters for the browserbase integration
   */
  setup?: BrowserbaseSetup | null;
}

export interface BrowserbaseCreateSessionArguments {
  browserSettings?: unknown;

  extensionId?: string | null;

  keepAlive?: boolean;

  projectId?: string | null;

  proxies?: boolean | Array<unknown>;

  timeout?: number;
}

/**
 * browserbase create session integration definition
 */
export interface BrowserbaseCreateSessionIntegrationDef {
  arguments?: BrowserbaseCreateSessionArguments | null;

  method?: 'create_session';

  provider?: 'browserbase';

  /**
   * The setup parameters for the browserbase integration
   */
  setup?: BrowserbaseSetup | null;
}

export interface BrowserbaseExtensionArguments {
  repositoryName: string;

  ref?: string | null;
}

/**
 * browserbase extension provider
 */
export interface BrowserbaseExtensionIntegrationDef {
  arguments?: BrowserbaseExtensionArguments | null;

  method?: 'install_extension_from_github' | null;

  provider?: 'browserbase';

  /**
   * The setup parameters for the browserbase integration
   */
  setup?: BrowserbaseSetup | null;
}

export interface BrowserbaseGetSessionArguments {
  id: string;
}

/**
 * browserbase get session integration definition
 */
export interface BrowserbaseGetSessionIntegrationDef {
  arguments?: BrowserbaseGetSessionArguments | null;

  method?: 'get_session';

  provider?: 'browserbase';

  /**
   * The setup parameters for the browserbase integration
   */
  setup?: BrowserbaseSetup | null;
}

export interface BrowserbaseGetSessionLiveURLsArguments {
  id: string;
}

/**
 * browserbase get session live urls integration definition
 */
export interface BrowserbaseGetSessionLiveURLsIntegrationDef {
  arguments?: BrowserbaseGetSessionLiveURLsArguments | null;

  method?: 'get_live_urls';

  provider?: 'browserbase';

  /**
   * The setup parameters for the browserbase integration
   */
  setup?: BrowserbaseSetup | null;
}

export interface BrowserbaseListSessionsArguments {
  status?: 'RUNNING' | 'ERROR' | 'TIMED_OUT' | 'COMPLETED' | null;
}

/**
 * browserbase list sessions integration definition
 */
export interface BrowserbaseListSessionsIntegrationDef {
  arguments?: BrowserbaseListSessionsArguments | null;

  method?: 'list_sessions';

  provider?: 'browserbase';

  /**
   * The setup parameters for the browserbase integration
   */
  setup?: BrowserbaseSetup | null;
}

/**
 * The setup parameters for the browserbase integration
 */
export interface BrowserbaseSetup {
  api_key: string;

  project_id: string;

  api_url?: string | null;

  connect_url?: string | null;
}

/**
 * Arguments for Cloudinary media edit
 */
export interface CloudinaryEditArguments {
  public_id: string;

  transformation: Array<unknown>;

  return_base64?: boolean;
}

/**
 * Cloudinary edit integration definition
 */
export interface CloudinaryEditIntegrationDef {
  /**
   * Arguments for Cloudinary media edit
   */
  arguments?: CloudinaryEditArguments | null;

  method?: 'media_edit';

  provider?: 'cloudinary';

  /**
   * Setup parameters for Cloudinary integration
   */
  setup?: CloudinarySetup | null;
}

/**
 * Setup parameters for Cloudinary integration
 */
export interface CloudinarySetup {
  cloudinary_api_key: string;

  cloudinary_api_secret: string;

  cloudinary_cloud_name: string;

  params?: unknown | null;
}

/**
 * Arguments for Cloudinary media upload
 */
export interface CloudinaryUploadArguments {
  file: string;

  public_id?: string | null;

  return_base64?: boolean;

  upload_params?: unknown | null;
}

/**
 * Cloudinary upload integration definition
 */
export interface CloudinaryUploadIntegrationDef {
  /**
   * Arguments for Cloudinary media upload
   */
  arguments?: CloudinaryUploadArguments | null;

  method?: 'media_upload';

  provider?: 'cloudinary';

  /**
   * Setup parameters for Cloudinary integration
   */
  setup?: CloudinarySetup | null;
}

/**
 * Anthropic new tools
 */
export interface Computer20241022Def {
  display_height_px?: number;

  display_number?: number;

  display_width_px?: number;

  name?: string;

  type?: 'computer_20241022';
}

export interface DocOwner {
  id: string;

  role: 'user' | 'agent';
}

export interface DocReference {
  id: string;

  owner: DocOwner;

  snippet: DocsAPI.Snippet;

  distance?: number | null;

  metadata?: unknown | null;

  title?: string | null;
}

export interface DummyIntegrationDef {
  arguments?: unknown;

  method?: string | null;

  provider?: 'dummy';

  setup?: unknown;
}

/**
 * Arguments for Email sending
 */
export interface EmailArguments {
  body: string;

  from: string;

  subject: string;

  to: string;
}

/**
 * Email integration definition
 */
export interface EmailIntegrationDef {
  /**
   * Arguments for Email sending
   */
  arguments?: EmailArguments | null;

  method?: string | null;

  provider?: 'email';

  /**
   * Setup parameters for Email integration
   */
  setup?: EmailSetup | null;
}

/**
 * Setup parameters for Email integration
 */
export interface EmailSetup {
  host: string;

  password: string;

  port: number;

  user: string;
}

/**
 * Ffmpeg integration definition
 */
export interface FfmpegIntegrationDef {
  /**
   * Arguments for Ffmpeg CMD
   */
  arguments?: FfmpegSearchArguments | null;

  method?: string | null;

  provider?: 'ffmpeg';

  setup?: unknown;
}

/**
 * Arguments for Ffmpeg CMD
 */
export interface FfmpegSearchArguments {
  cmd: string;

  file?: string | Array<string> | null;
}

export interface FunctionCallOption {
  name: string;

  arguments?: string | null;
}

/**
 * Function definition
 */
export interface FunctionDef {
  description?: unknown;

  name?: unknown;

  parameters?: unknown | null;
}

export interface IfElseStepInput {
  if: string;

  /**
   * The steps to run if the condition is true
   */
  then:
    | TasksAPI.WaitForInputStep
    | TasksAPI.EvaluateStep
    | TasksAPI.ToolCallStep
    | PromptStepInput
    | TasksAPI.GetStep
    | TasksAPI.SetStep
    | TasksAPI.LogStep
    | TasksAPI.YieldStep
    | TasksAPI.ReturnStep
    | TasksAPI.SleepStep
    | TasksAPI.ErrorWorkflowStep
    | IfElseStepInput
    | IfElseStepInput.SwitchStepInput
    | IfElseStepInput.ForeachStepInput
    | IfElseStepInput.ParallelStepInput
    | IfElseStepInput.ThenInput;

  /**
   * The steps to run if the condition is false
   */
  else?:
    | TasksAPI.WaitForInputStep
    | TasksAPI.EvaluateStep
    | TasksAPI.ToolCallStep
    | PromptStepInput
    | TasksAPI.GetStep
    | TasksAPI.SetStep
    | TasksAPI.LogStep
    | TasksAPI.YieldStep
    | TasksAPI.ReturnStep
    | TasksAPI.SleepStep
    | TasksAPI.ErrorWorkflowStep
    | IfElseStepInput
    | IfElseStepInput.SwitchStepInput
    | IfElseStepInput.ForeachStepInput
    | IfElseStepInput.ParallelStepInput
    | IfElseStepInput.ElseInput
    | null;

  kind_?: 'if_else';

  label?: string | null;
}

export namespace IfElseStepInput {
  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;

    kind_?: 'switch';

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

    kind_?: 'foreach';

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

    kind_?: 'parallel';

    label?: string | null;
  }

  /**
   * The steps to run if the condition is true
   */
  export interface ThenInput {
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

    kind_?: 'map_reduce';

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
  }

  export interface SwitchStepInput {
    switch: Array<SwitchStepInput.Switch>;

    kind_?: 'switch';

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

    kind_?: 'foreach';

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

    kind_?: 'parallel';

    label?: string | null;
  }

  /**
   * The steps to run if the condition is false
   */
  export interface ElseInput {
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

    kind_?: 'map_reduce';

    label?: string | null;

    parallelism?: number | null;

    reduce?: string | null;
  }
}

export interface IfElseStepOutput {
  if: string;

  /**
   * The steps to run if the condition is true
   */
  then:
    | TasksAPI.WaitForInputStep
    | TasksAPI.EvaluateStep
    | TasksAPI.ToolCallStep
    | TasksAPI.PromptStepOutput
    | TasksAPI.GetStep
    | TasksAPI.SetStep
    | TasksAPI.LogStep
    | TasksAPI.YieldStep
    | TasksAPI.ReturnStep
    | TasksAPI.SleepStep
    | TasksAPI.ErrorWorkflowStep
    | IfElseStepOutput
    | TasksAPI.SwitchStepOutput
    | TasksAPI.ForeachStepOutput
    | TasksAPI.ParallelStepOutput
    | IfElseStepOutput.ThenOutput;

  /**
   * The steps to run if the condition is false
   */
  else?:
    | TasksAPI.WaitForInputStep
    | TasksAPI.EvaluateStep
    | TasksAPI.ToolCallStep
    | TasksAPI.PromptStepOutput
    | TasksAPI.GetStep
    | TasksAPI.SetStep
    | TasksAPI.LogStep
    | TasksAPI.YieldStep
    | TasksAPI.ReturnStep
    | TasksAPI.SleepStep
    | TasksAPI.ErrorWorkflowStep
    | IfElseStepOutput
    | TasksAPI.SwitchStepOutput
    | TasksAPI.ForeachStepOutput
    | TasksAPI.ParallelStepOutput
    | IfElseStepOutput.ElseOutput
    | null;

  kind_?: 'if_else';

  label?: string | null;
}

export namespace IfElseStepOutput {
  /**
   * The steps to run if the condition is true
   */
  export interface ThenOutput {
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

  /**
   * The steps to run if the condition is false
   */
  export interface ElseOutput {
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
}

/**
 * Arguments for LlamaParse integration
 */
export interface LlamaParseFetchArguments {
  file: string | Array<string>;

  base64?: boolean;

  filename?: string | null;

  params?: unknown | null;
}

/**
 * LlamaParse integration definition
 */
export interface LlamaParseIntegrationDef {
  /**
   * Arguments for LlamaParse integration
   */
  arguments?: LlamaParseFetchArguments | null;

  method?: string | null;

  provider?: 'llama_parse';

  /**
   * Setup parameters for LlamaParse integration
   */
  setup?: LlamaParseSetup | null;
}

/**
 * Setup parameters for LlamaParse integration
 */
export interface LlamaParseSetup {
  llamaparse_api_key: string;

  params?: unknown | null;
}

/**
 * Mailgun integration definition
 */
export interface MailgunIntegrationDef {
  /**
   * Arguments for mailgun.send_email method
   */
  arguments?: MailgunSendEmailArguments | null;

  method?: 'send_email' | null;

  provider?: 'mailgun';

  /**
   * Setup parameters for Mailgun integration
   */
  setup?: MailgunSetup | null;
}

/**
 * Arguments for mailgun.send_email method
 */
export interface MailgunSendEmailArguments {
  body: string;

  from: string;

  subject: string;

  to: string;

  bcc?: string | null;

  cc?: string | null;
}

/**
 * Setup parameters for Mailgun integration
 */
export interface MailgunSetup {
  api_key: string;
}

export interface NamedToolChoice {
  function?: FunctionCallOption | null;
}

export interface PromptStepInput {
  prompt: Array<PromptStepInput.UnionMember0> | string;

  auto_run_tools?: boolean;

  disable_cache?: boolean;

  kind_?: 'prompt';

  label?: string | null;

  settings?: unknown | null;

  tool_choice?: 'auto' | 'none' | NamedToolChoice | null;

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
          | UnionMember0.AgentsAPIAutogenTasksContent
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
      | SessionsAPI.ChosenFunctionCall
      | SessionsAPI.ChosenComputer20241022
      | SessionsAPI.ChosenTextEditor20241022
      | SessionsAPI.ChosenBash20241022
    > | null;
  }

  export namespace UnionMember0 {
    export interface AgentsAPIAutogenTasksContent {
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

  export namespace AgentsAPIAutogenToolsCreateToolRequestInput {
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
  }
}

/**
 * The arguments for the remote browser
 */
export interface RemoteBrowserArguments {
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

/**
 * The integration definition for the remote browser
 */
export interface RemoteBrowserIntegrationDef {
  /**
   * The setup parameters for the remote browser
   */
  setup: RemoteBrowserSetup;

  /**
   * The arguments for the remote browser
   */
  arguments?: RemoteBrowserArguments | null;

  method?: 'perform_action';

  provider?: 'remote_browser';
}

/**
 * The setup parameters for the remote browser
 */
export interface RemoteBrowserSetup {
  connect_url?: string | null;

  height?: number | null;

  width?: number | null;
}

export interface SecretRef {
  name: string;
}

/**
 * Arguments for Spider integration
 */
export interface SpiderFetchArguments {
  url: string;

  content_type?: 'application/json' | 'text/csv' | 'application/xml' | 'application/jsonl';

  params?: unknown | null;
}

/**
 * Spider integration definition
 */
export interface SpiderIntegrationDef {
  /**
   * Arguments for Spider integration
   */
  arguments?: SpiderFetchArguments | null;

  method?: 'crawl' | 'links' | 'screenshot' | 'search' | null;

  provider?: 'spider';

  /**
   * Setup parameters for Spider integration
   */
  setup?: SpiderSetup | null;
}

/**
 * Setup parameters for Spider integration
 */
export interface SpiderSetup {
  spider_api_key: string;
}

/**
 * System definition
 */
export interface SystemDef {
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

export interface TextEditor20241022Def {
  name?: string;

  type?: 'text_editor_20241022';
}

/**
 * Unstructured integration definition
 */
export interface UnstructuredIntegrationDef {
  /**
   * Arguments for Unstructured partition integration
   */
  arguments?: UnstructuredPartitionArguments | null;

  method?: string | null;

  provider?: 'unstructured';

  /**
   * Setup parameters for Unstructured integration
   */
  setup?: UnstructuredSetup | null;
}

/**
 * Arguments for Unstructured partition integration
 */
export interface UnstructuredPartitionArguments {
  file: string;

  filename?: string | null;

  partition_params?: unknown | null;
}

/**
 * Setup parameters for Unstructured integration
 */
export interface UnstructuredSetup {
  unstructured_api_key: string;

  retry_config?: unknown | null;

  server?: string | null;

  server_url?: string | null;

  timeout_ms?: number | null;

  url_params?: unknown | null;
}

/**
 * Arguments for Weather
 */
export interface WeatherGetArguments {
  location: string;
}

/**
 * Weather integration definition
 */
export interface WeatherIntegrationDef {
  /**
   * Arguments for Weather
   */
  arguments?: WeatherGetArguments | null;

  method?: string | null;

  provider?: 'weather';

  /**
   * Integration definition for Weather
   */
  setup?: WeatherSetup | null;
}

/**
 * Integration definition for Weather
 */
export interface WeatherSetup {
  openweathermap_api_key: string;
}

/**
 * Wikipedia integration definition
 */
export interface WikipediaIntegrationDef {
  /**
   * Arguments for Wikipedia Search
   */
  arguments?: WikipediaSearchArguments | null;

  method?: string | null;

  provider?: 'wikipedia';

  setup?: unknown;
}

/**
 * Arguments for Wikipedia Search
 */
export interface WikipediaSearchArguments {
  query: string;

  load_max_docs?: number;
}
