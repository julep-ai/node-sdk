// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';
import * as DocsAPI from './docs';
import { DocCreateParams, DocListParams, DocSearchParams, DocSearchResponse, Docs } from './docs';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Users extends APIResource {
  docs: DocsAPI.Docs = new DocsAPI.Docs(this._client);

  /**
   * Create User
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.post('/users', { body, ...options });
  }

  /**
   * Patch User
   */
  update(userId: string, body: UserUpdateParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.patch(`/users/${userId}`, { body, ...options });
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
  delete(userId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ResourceDeleted> {
    return this._client.delete(`/users/${userId}`, options);
  }

  /**
   * Create Or Update User
   */
  createOrUpdate(
    userId: string,
    body: UserCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<User> {
    return this._client.post(`/users/${userId}`, { body, ...options });
  }

  /**
   * Get User Details
   */
  get(userId: string, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.get(`/users/${userId}`, options);
  }

  /**
   * Update User
   */
  reset(userId: string, body: UserResetParams, options?: Core.RequestOptions): Core.APIPromise<User> {
    return this._client.put(`/users/${userId}`, { body, ...options });
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

  metadata_filter?: Record<string, unknown>;

  sort_by?: 'created_at' | 'updated_at';
}

export interface UserCreateOrUpdateParams {
  about?: string;

  metadata?: unknown | null;

  name?: string;
}

export interface UserResetParams {
  about?: string;

  metadata?: unknown | null;

  name?: string;
}

Users.UsersOffsetPagination = UsersOffsetPagination;
Users.Docs = Docs;

export declare namespace Users {
  export {
    type User as User,
    UsersOffsetPagination as UsersOffsetPagination,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserCreateOrUpdateParams as UserCreateOrUpdateParams,
    type UserResetParams as UserResetParams,
  };

  export {
    Docs as Docs,
    type DocSearchResponse as DocSearchResponse,
    type DocCreateParams as DocCreateParams,
    type DocListParams as DocListParams,
    type DocSearchParams as DocSearchParams,
  };
}
