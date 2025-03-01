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
import { File, FileCreateParams, Files } from './resources/files';
import { JobStatus, Jobs } from './resources/jobs';
import {
  ChatInput,
  ChatResponse,
  Entry,
  History,
  Session,
  SessionChatParams,
  SessionChatResponse,
  SessionCreateOrUpdateParams,
  SessionCreateParams,
  SessionListParams,
  SessionRenderParams,
  SessionRenderResponse,
  SessionResetParams,
  SessionUpdateParams,
  Sessions,
  SessionsOffsetPagination,
} from './resources/sessions';
import {
  Task,
  TaskCreateOrUpdateParams,
  TaskCreateParams,
  TaskListParams,
  Tasks,
  TasksOffsetPagination,
} from './resources/tasks';
import {
  Agent as AgentsAPIAgent,
  AgentCreateOrUpdateParams,
  AgentCreateParams,
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
    AgentsOffsetPagination as AgentsOffsetPagination,
    type AgentCreateParams as AgentCreateParams,
    type AgentUpdateParams as AgentUpdateParams,
    type AgentListParams as AgentListParams,
    type AgentCreateOrUpdateParams as AgentCreateOrUpdateParams,
    type AgentResetParams as AgentResetParams,
  };

  export { Files as Files, type File as File, type FileCreateParams as FileCreateParams };

  export {
    Sessions as Sessions,
    type ChatInput as ChatInput,
    type ChatResponse as ChatResponse,
    type Entry as Entry,
    type History as History,
    type Session as Session,
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
    type Task as Task,
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

  export type ResourceDeleted = API.ResourceDeleted;
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
