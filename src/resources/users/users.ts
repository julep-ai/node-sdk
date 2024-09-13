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
   * Get User Details
   */
  get(userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/users/${userId}`, options);
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

export namespace Users {
  export import User = UsersAPI.User;
  export import UserCreateResponse = UsersAPI.UserCreateResponse;
  export import UserUpdateResponse = UsersAPI.UserUpdateResponse;
  export import UserDeleteResponse = UsersAPI.UserDeleteResponse;
  export import UserCreateOrUpdateResponse = UsersAPI.UserCreateOrUpdateResponse;
  export import UserPatchResponse = UsersAPI.UserPatchResponse;
  export import UsersOffsetPagination = UsersAPI.UsersOffsetPagination;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserUpdateParams = UsersAPI.UserUpdateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import UserCreateOrUpdateParams = UsersAPI.UserCreateOrUpdateParams;
  export import UserPatchParams = UsersAPI.UserPatchParams;
  export import Docs = DocsAPI.Docs;
  export import DocCreateResponse = DocsAPI.DocCreateResponse;
  export import DocDeleteResponse = DocsAPI.DocDeleteResponse;
  export import DocSearchResponse = DocsAPI.DocSearchResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
  export import DocListParams = DocsAPI.DocListParams;
  export import DocSearchParams = DocsAPI.DocSearchParams;
}
