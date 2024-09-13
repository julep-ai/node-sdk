// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as DocsAPI from './docs';

export class Users extends APIResource {
  docs: DocsAPI.Docs = new DocsAPI.Docs(this._client);

  /**
   * Create User
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserCreateResponse> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Get User Details
   */
  retrieve(userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/users/${userId}`, options);
  }

  /**
   * Update User
   */
  update(
    userId: string,
    body: UserUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserUpdateResponse> {
    return this._client.put(`/users/${userId}`, { body, ...options });
  }

  /**
   * List Users
   */
  list(query?: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/users', { query, ...options });
  }

  /**
   * Delete User
   */
  delete(userId: string, options?: Core.RequestOptions): Core.APIPromise<UserDeleteResponse> {
    return this._client.delete(`/users/${userId}`, options);
  }

  /**
   * Search User Docs
   */
  search(
    userId: string,
    body: UserSearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserSearchResponse> {
    return this._client.post(`/users/${userId}/search`, { body, ...options });
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

export interface UserCreateResponse {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface UserUpdateResponse {
  id: string;

  updated_at: string;

  jobs?: Array<string>;
}

export interface UserListResponse {
  items: Array<User>;
}

export interface UserDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface UserSearchResponse {
  docs: Array<UserSearchResponse.Doc>;

  time: number;
}

export namespace UserSearchResponse {
  export interface Doc {
    id: string;

    owner: Doc.Owner;

    snippets: Array<Doc.Snippet>;

    distance?: number | null;

    title?: string | null;
  }

  export namespace Doc {
    export interface Owner {
      id: string;

      role: 'user' | 'agent';
    }

    export interface Snippet {
      content: string;

      index: number;
    }
  }
}

export interface UserCreateParams {
  about?: string;

  metadata?: unknown | null;

  name?: string;
}

export interface UserUpdateParams {
  about?: string;

  metadata?: unknown | null;

  name?: string;
}

export interface UserListParams {
  direction?: 'asc' | 'desc';

  limit?: number;

  metadata_filter?: string;

  offset?: number;

  sort_by?: 'created_at' | 'updated_at';
}

export type UserSearchParams =
  | UserSearchParams.TextOnlyDocSearchRequest
  | UserSearchParams.VectorDocSearchRequest
  | UserSearchParams.HybridDocSearchRequest;

export namespace UserSearchParams {
  export interface TextOnlyDocSearchRequest {
    text: string;

    lang?: 'en-US';

    limit?: number;
  }

  export interface VectorDocSearchRequest {
    vector: Array<number>;

    confidence?: number;

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

export namespace Users {
  export import User = UsersAPI.User;
  export import UserCreateResponse = UsersAPI.UserCreateResponse;
  export import UserUpdateResponse = UsersAPI.UserUpdateResponse;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserSearchResponse = UsersAPI.UserSearchResponse;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import UserSearchParams = UsersAPI.UserSearchParams;
  export import Docs = DocsAPI.Docs;
  export import DocCreateResponse = DocsAPI.DocCreateResponse;
  export import DocListResponse = DocsAPI.DocListResponse;
  export import DocDeleteResponse = DocsAPI.DocDeleteResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
  export import DocListParams = DocsAPI.DocListParams;
}
