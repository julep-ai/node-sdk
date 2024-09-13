// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as DocsAPI from './docs';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

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
  list(query?: UserListParams, options?: Core.RequestOptions): Core.PagePromise<UsersOffsetPagination, User>;
  list(options?: Core.RequestOptions): Core.PagePromise<UsersOffsetPagination, User>;
  list(
    query: UserListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<UsersOffsetPagination, User> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/users', UsersOffsetPagination, { query, ...options });
  }

  /**
   * Delete User
   */
  delete(userId: string, options?: Core.RequestOptions): Core.APIPromise<UserDeleteResponse> {
    return this._client.delete(`/users/${userId}`, options);
  }

  /**
   * Create Or Update User
   */
  createOrUpdate(
    userId: string,
    body: UserCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserCreateOrUpdateResponse> {
    return this._client.post(`/users/${userId}`, { body, ...options });
  }

  /**
   * Patch User
   */
  patch(
    userId: string,
    body: UserPatchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserPatchResponse> {
    return this._client.patch(`/users/${userId}`, { body, ...options });
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

export class UsersOffsetPagination extends OffsetPagination<User> {}

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

export interface UserDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface UserCreateOrUpdateResponse {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface UserPatchResponse {
  id: string;

  updated_at: string;

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

export interface UserListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: string;

  sort_by?: 'created_at' | 'updated_at';
}

export interface UserCreateOrUpdateParams {
  about?: string;

  metadata?: unknown | null;

  name?: string;
}

export interface UserPatchParams {
  about?: string;

  metadata?: unknown | null;

  name?: string;
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
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserCreateOrUpdateResponse = UsersAPI.UserCreateOrUpdateResponse;
  export import UserPatchResponse = UsersAPI.UserPatchResponse;
  export import UserSearchResponse = UsersAPI.UserSearchResponse;
  export import UsersOffsetPagination = UsersAPI.UsersOffsetPagination;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import UserCreateOrUpdateParams = UsersAPI.UserCreateOrUpdateParams;
  export import UserPatchParams = UsersAPI.UserPatchParams;
  export import UserSearchParams = UsersAPI.UserSearchParams;
  export import Docs = DocsAPI.Docs;
  export import DocCreateResponse = DocsAPI.DocCreateResponse;
  export import DocDeleteResponse = DocsAPI.DocDeleteResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
  export import DocListParams = DocsAPI.DocListParams;
}
