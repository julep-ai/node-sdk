// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Pagination from './pagination';
import { type OffsetPaginationParams, OffsetPaginationResponse } from './pagination';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { Doc, DocEmbedParams, Docs, EmbedQueryResponse, Snippet } from './resources/docs';
import { File, FileCreateParams, FileDeleteResponse, FileListResponse, Files } from './resources/files';
import { Healthz, HealthzCheckResponse } from './resources/healthz';
import { JobStatus, Jobs } from './resources/jobs';
import {
  ProjectCreateParams,
  ProjectCreateResponse,
  ProjectListParams,
  ProjectListResponse,
  ProjectListResponsesOffsetPagination,
  Projects,
} from './resources/projects';
import {
  Secret,
  SecretCreateParams,
  SecretDeleteResponse,
  SecretListParams,
  SecretListResponse,
  SecretUpdateParams,
  Secrets,
} from './resources/secrets';
import {
  BaseTokenLogProb,
  ChatInput,
  ChatResponse,
  ChosenBash20241022,
  ChosenComputer20241022,
  ChosenFunctionCall,
  ChosenTextEditor20241022,
  Entry,
  History,
  HybridDocSearch,
  LogProbResponse,
  SchemaCompletionResponseFormat,
  Session,
  SessionChatParams,
  SessionChatResponse,
  SessionCreateOrUpdateParams,
  SessionCreateParams,
  SessionDeleteResponse,
  SessionListParams,
  SessionRenderParams,
  SessionRenderResponse,
  SessionResetParams,
  SessionUpdateParams,
  Sessions,
  SessionsOffsetPagination,
  SimpleCompletionResponseFormat,
  TextOnlyDocSearch,
  TokenLogProb,
  VectorDocSearch,
} from './resources/sessions';
import {
  CaseThenOutput,
  ErrorWorkflowStep,
  EvaluateStep,
  ForeachDoOutput,
  ForeachStepOutput,
  GetStep,
  LogStep,
  ParallelStepOutput,
  PromptStepOutput,
  ReturnStep,
  SetStep,
  SleepFor,
  SleepStep,
  SwitchStepOutput,
  Task,
  TaskCreateOrUpdateParams,
  TaskCreateParams,
  TaskListParams,
  Tasks,
  TasksOffsetPagination,
  ToolCallStep,
  WaitForInputInfo,
  WaitForInputStep,
  YieldStep,
} from './resources/tasks';
import {
  Agent as AgentsAPIAgent,
  AgentCreateOrUpdateParams,
  AgentCreateParams,
  AgentDeleteResponse,
  AgentListModelsParams,
  AgentListModelsResponse,
  AgentListParams,
  AgentResetParams,
  AgentUpdateParams,
  Agents,
  AgentsOffsetPagination,
} from './resources/agents/agents';
import {
  Execution,
  ExecutionChangeStatusParams,
  ExecutionChangeStatusResponse,
  ExecutionCreateParams,
  ExecutionListParams,
  Executions,
  ExecutionsOffsetPagination,
  Transition,
} from './resources/executions/executions';
import {
  User,
  UserCreateOrUpdateParams,
  UserCreateParams,
  UserDeleteResponse,
  UserListParams,
  UserResetParams,
  UserUpdateParams,
  Users,
  UsersOffsetPagination,
} from './resources/users/users';

const environments = {
  production: 'https://api.julep.ai/api',
  dev: 'https://dev.julep.ai/api',
  local_multi_tenant: 'http://localhost/api',
  local: 'http://localhost:8080',
};
type Environment = keyof typeof environments;

export interface ClientOptions {
  /**
   * Defaults to process.env['JULEP_API_KEY'].
   */
  apiKey?: string | undefined;

  /**
   * Specifies the environment to use for the API.
   *
   * Each environment maps to a different base URL:
   * - `production` corresponds to `https://api.julep.ai/api`
   * - `dev` corresponds to `https://dev.julep.ai/api`
   * - `local_multi_tenant` corresponds to `http://localhost/api`
   * - `local` corresponds to `http://localhost:8080`
   */
  environment?: Environment | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['JULEP_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number | undefined;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent | undefined;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 5
   */
  maxRetries?: number | undefined;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers | undefined;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery | undefined;
}

/**
 * API Client for interfacing with the Julep API.
 */
export class Julep extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Julep API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['JULEP_API_KEY'] ?? undefined]
   * @param {Environment} [opts.environment=production] - Specifies the environment URL to use for the API.
   * @param {string} [opts.baseURL=process.env['JULEP_BASE_URL'] ?? https://api.julep.ai/api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=2 minutes] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=5] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('JULEP_BASE_URL'),
    apiKey = Core.readEnv('JULEP_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.JulepError(
        "The JULEP_API_KEY environment variable is missing or empty; either provide it, or instantiate the Julep client with an apiKey option, like new Julep({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL,
      environment: opts.environment ?? 'production',
    };

    if (baseURL && opts.environment) {
      throw new Errors.JulepError(
        'Ambiguous URL; The `baseURL` option (or JULEP_BASE_URL env var) and the `environment` option are given. If you want to use the environment you must pass baseURL: null',
      );
    }

    super({
      baseURL: options.baseURL || environments[options.environment || 'production'],
      baseURLOverridden: baseURL ? baseURL !== environments[options.environment || 'production'] : false,
      timeout: options.timeout ?? 120000 /* 2 minutes */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  agents: API.Agents = new API.Agents(this);
  files: API.Files = new API.Files(this);
  sessions: API.Sessions = new API.Sessions(this);
  users: API.Users = new API.Users(this);
  jobs: API.Jobs = new API.Jobs(this);
  docs: API.Docs = new API.Docs(this);
  tasks: API.Tasks = new API.Tasks(this);
  executions: API.Executions = new API.Executions(this);
  secrets: API.Secrets = new API.Secrets(this);
  projects: API.Projects = new API.Projects(this);
  healthz: API.Healthz = new API.Healthz(this);

  /**
   * Check whether the base URL is set to its default.
   */
  #baseURLOverridden(): boolean {
    return this.baseURL !== environments[this._options.environment || 'production'];
  }

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.apiKey}` };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { allowDots: true, arrayFormat: 'repeat' });
  }

  static Julep = this;
  static DEFAULT_TIMEOUT = 120000; // 2 minutes

  static JulepError = Errors.JulepError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Julep.Agents = Agents;
Julep.AgentsOffsetPagination = AgentsOffsetPagination;
Julep.Files = Files;
Julep.Sessions = Sessions;
Julep.SessionsOffsetPagination = SessionsOffsetPagination;
Julep.Users = Users;
Julep.UsersOffsetPagination = UsersOffsetPagination;
Julep.Jobs = Jobs;
Julep.Docs = Docs;
Julep.Tasks = Tasks;
Julep.TasksOffsetPagination = TasksOffsetPagination;
Julep.Executions = Executions;
Julep.ExecutionsOffsetPagination = ExecutionsOffsetPagination;
Julep.Secrets = Secrets;
Julep.Projects = Projects;
Julep.ProjectListResponsesOffsetPagination = ProjectListResponsesOffsetPagination;
Julep.Healthz = Healthz;
export declare namespace Julep {
  export type RequestOptions = Core.RequestOptions;

  export import OffsetPagination = Pagination.OffsetPagination;
  export {
    type OffsetPaginationParams as OffsetPaginationParams,
    type OffsetPaginationResponse as OffsetPaginationResponse,
  };

  export {
    Agents as Agents,
    type AgentsAPIAgent as Agent,
    type AgentDeleteResponse as AgentDeleteResponse,
    type AgentListModelsResponse as AgentListModelsResponse,
    AgentsOffsetPagination as AgentsOffsetPagination,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentCreateOrUpdateParams as AgentCreateOrUpdateParams,
    type AgentListModelsParams as AgentListModelsParams,
    type AgentResetParams as AgentResetParams,
  };

  export {
    Files as Files,
    type File as File,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileCreateParams as FileCreateParams,
  };

  export {
    Sessions as Sessions,
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

  export {
    Users as Users,
    type User as User,
    type UserDeleteResponse as UserDeleteResponse,
    UsersOffsetPagination as UsersOffsetPagination,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserCreateOrUpdateParams as UserCreateOrUpdateParams,
    type UserResetParams as UserResetParams,
  };

  export { Jobs as Jobs, type JobStatus as JobStatus };

  export {
    Docs as Docs,
    type Doc as Doc,
    type EmbedQueryResponse as EmbedQueryResponse,
    type Snippet as Snippet,
    type DocEmbedParams as DocEmbedParams,
  };

  export {
    Tasks as Tasks,
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

  export {
    Executions as Executions,
    type Execution as Execution,
    type Transition as Transition,
    type ExecutionChangeStatusResponse as ExecutionChangeStatusResponse,
    ExecutionsOffsetPagination as ExecutionsOffsetPagination,
    type ExecutionCreateParams as ExecutionCreateParams,
    type ExecutionListParams as ExecutionListParams,
    type ExecutionChangeStatusParams as ExecutionChangeStatusParams,
  };

  export {
    Secrets as Secrets,
    type Secret as Secret,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretCreateParams as SecretCreateParams,
    type SecretUpdateParams as SecretUpdateParams,
    type SecretListParams as SecretListParams,
  };

  export {
    Projects as Projects,
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    ProjectListResponsesOffsetPagination as ProjectListResponsesOffsetPagination,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };

  export { Healthz as Healthz, type HealthzCheckResponse as HealthzCheckResponse };

  export type AlgoliaIntegrationDef = API.AlgoliaIntegrationDef;
  export type AlgoliaSearchArguments = API.AlgoliaSearchArguments;
  export type AlgoliaSetup = API.AlgoliaSetup;
  export type APICallDef = API.APICallDef;
  export type ArxivIntegrationDef = API.ArxivIntegrationDef;
  export type ArxivSearchArguments = API.ArxivSearchArguments;
  export type Bash20241022Def = API.Bash20241022Def;
  export type BraveIntegrationDef = API.BraveIntegrationDef;
  export type BraveSearchArguments = API.BraveSearchArguments;
  export type BraveSearchSetup = API.BraveSearchSetup;
  export type BrowserbaseCompleteSessionArguments = API.BrowserbaseCompleteSessionArguments;
  export type BrowserbaseCompleteSessionIntegrationDef = API.BrowserbaseCompleteSessionIntegrationDef;
  export type BrowserbaseContextArguments = API.BrowserbaseContextArguments;
  export type BrowserbaseContextIntegrationDef = API.BrowserbaseContextIntegrationDef;
  export type BrowserbaseCreateSessionArguments = API.BrowserbaseCreateSessionArguments;
  export type BrowserbaseCreateSessionIntegrationDef = API.BrowserbaseCreateSessionIntegrationDef;
  export type BrowserbaseExtensionArguments = API.BrowserbaseExtensionArguments;
  export type BrowserbaseExtensionIntegrationDef = API.BrowserbaseExtensionIntegrationDef;
  export type BrowserbaseGetSessionArguments = API.BrowserbaseGetSessionArguments;
  export type BrowserbaseGetSessionIntegrationDef = API.BrowserbaseGetSessionIntegrationDef;
  export type BrowserbaseGetSessionLiveURLsArguments = API.BrowserbaseGetSessionLiveURLsArguments;
  export type BrowserbaseGetSessionLiveURLsIntegrationDef = API.BrowserbaseGetSessionLiveURLsIntegrationDef;
  export type BrowserbaseListSessionsArguments = API.BrowserbaseListSessionsArguments;
  export type BrowserbaseListSessionsIntegrationDef = API.BrowserbaseListSessionsIntegrationDef;
  export type BrowserbaseSetup = API.BrowserbaseSetup;
  export type CloudinaryEditArguments = API.CloudinaryEditArguments;
  export type CloudinaryEditIntegrationDef = API.CloudinaryEditIntegrationDef;
  export type CloudinarySetup = API.CloudinarySetup;
  export type CloudinaryUploadArguments = API.CloudinaryUploadArguments;
  export type CloudinaryUploadIntegrationDef = API.CloudinaryUploadIntegrationDef;
  export type Computer20241022Def = API.Computer20241022Def;
  export type DocOwner = API.DocOwner;
  export type DocReference = API.DocReference;
  export type DummyIntegrationDef = API.DummyIntegrationDef;
  export type EmailArguments = API.EmailArguments;
  export type EmailIntegrationDef = API.EmailIntegrationDef;
  export type EmailSetup = API.EmailSetup;
  export type FfmpegIntegrationDef = API.FfmpegIntegrationDef;
  export type FfmpegSearchArguments = API.FfmpegSearchArguments;
  export type FunctionCallOption = API.FunctionCallOption;
  export type FunctionDef = API.FunctionDef;
  export type IfElseStepInput = API.IfElseStepInput;
  export type IfElseStepOutput = API.IfElseStepOutput;
  export type LlamaParseFetchArguments = API.LlamaParseFetchArguments;
  export type LlamaParseIntegrationDef = API.LlamaParseIntegrationDef;
  export type LlamaParseSetup = API.LlamaParseSetup;
  export type MailgunIntegrationDef = API.MailgunIntegrationDef;
  export type MailgunSendEmailArguments = API.MailgunSendEmailArguments;
  export type MailgunSetup = API.MailgunSetup;
  export type NamedToolChoice = API.NamedToolChoice;
  export type PromptStepInput = API.PromptStepInput;
  export type RemoteBrowserArguments = API.RemoteBrowserArguments;
  export type RemoteBrowserIntegrationDef = API.RemoteBrowserIntegrationDef;
  export type RemoteBrowserSetup = API.RemoteBrowserSetup;
  export type SecretRef = API.SecretRef;
  export type SpiderFetchArguments = API.SpiderFetchArguments;
  export type SpiderIntegrationDef = API.SpiderIntegrationDef;
  export type SpiderSetup = API.SpiderSetup;
  export type SystemDef = API.SystemDef;
  export type TextEditor20241022Def = API.TextEditor20241022Def;
  export type UnstructuredIntegrationDef = API.UnstructuredIntegrationDef;
  export type UnstructuredPartitionArguments = API.UnstructuredPartitionArguments;
  export type UnstructuredSetup = API.UnstructuredSetup;
  export type WeatherGetArguments = API.WeatherGetArguments;
  export type WeatherIntegrationDef = API.WeatherIntegrationDef;
  export type WeatherSetup = API.WeatherSetup;
  export type WikipediaIntegrationDef = API.WikipediaIntegrationDef;
  export type WikipediaSearchArguments = API.WikipediaSearchArguments;
}

export { toFile, fileFromPath } from './uploads';
export {
  JulepError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Julep;
