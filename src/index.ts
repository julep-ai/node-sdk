// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Errors from './error';
import * as Uploads from './uploads';
import { type Agent } from './_shims/index';
import * as Core from './core';
import * as API from './resources/index';

export interface ClientOptions {
  /**
   * Defaults to process.env['JULEP_API_KEY'].
   */
  apiKey?: string | undefined;

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
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

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
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
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
   * @param {string} [opts.baseURL=process.env['JULEP_BASE_URL'] ?? /api] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
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
      baseURL: baseURL || `/api`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  agents: API.Agents = new API.Agents(this);
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
    return { Authorization: this.apiKey };
  }

  static Julep = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

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

export const {
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
} = Errors;

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

export namespace Julep {
  export import RequestOptions = Core.RequestOptions;

  export import Agents = API.Agents;
  export import Agent = API.Agent;
  export import AgentCreateResponse = API.AgentCreateResponse;
  export import AgentUpdateResponse = API.AgentUpdateResponse;
  export import AgentListResponse = API.AgentListResponse;
  export import AgentDeleteResponse = API.AgentDeleteResponse;
  export import AgentSearchResponse = API.AgentSearchResponse;
  export import AgentCreateParams = API.AgentCreateParams;
  export import AgentUpdateParams = API.AgentUpdateParams;
  export import AgentListParams = API.AgentListParams;
  export import AgentSearchParams = API.AgentSearchParams;

  export import Sessions = API.Sessions;
  export import History = API.History;
  export import Session = API.Session;
  export import SessionCreateResponse = API.SessionCreateResponse;
  export import SessionUpdateResponse = API.SessionUpdateResponse;
  export import SessionListResponse = API.SessionListResponse;
  export import SessionDeleteResponse = API.SessionDeleteResponse;
  export import SessionCreateParams = API.SessionCreateParams;
  export import SessionUpdateParams = API.SessionUpdateParams;
  export import SessionListParams = API.SessionListParams;

  export import Users = API.Users;
  export import User = API.User;
  export import UserCreateResponse = API.UserCreateResponse;
  export import UserUpdateResponse = API.UserUpdateResponse;
  export import UserListResponse = API.UserListResponse;
  export import UserDeleteResponse = API.UserDeleteResponse;
  export import UserSearchResponse = API.UserSearchResponse;
  export import UserCreateParams = API.UserCreateParams;
  export import UserUpdateParams = API.UserUpdateParams;
  export import UserListParams = API.UserListParams;
  export import UserSearchParams = API.UserSearchParams;

  export import Jobs = API.Jobs;
  export import JobStatus = API.JobStatus;

  export import Docs = API.Docs;
  export import Doc = API.Doc;
  export import EmbedQueryResponse = API.EmbedQueryResponse;
  export import DocCreateParams = API.DocCreateParams;

  export import Tasks = API.Tasks;
  export import Task = API.Task;

  export import Executions = API.Executions;
  export import Execution = API.Execution;
  export import ExecutionUpdateResponse = API.ExecutionUpdateResponse;
  export import ExecutionUpdateParams = API.ExecutionUpdateParams;
}

export default Julep;
