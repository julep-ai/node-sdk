// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as Shared from '../shared';
import * as DocsAPI from './docs';
import { OffsetPagination, type OffsetPaginationParams } from '../../pagination';

export class Users extends APIResource {
  docs: DocsAPI.Docs = new DocsAPI.Docs(this._client);

  /**
   * Create User
   */
  create(body: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<Shared.ResourceCreated> {
    return this._client.post('/users', { body, ...options });
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

export interface UserListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: string;

  sort_by?: 'created_at' | 'updated_at';
}

export namespace Users {
  export import User = UsersAPI.User;
  export import UsersOffsetPagination = UsersAPI.UsersOffsetPagination;
  export import UserCreateParams = UsersAPI.UserCreateParams;
  export import UserListParams = UsersAPI.UserListParams;
  export import Docs = DocsAPI.Docs;
  export import DocSearchResponse = DocsAPI.DocSearchResponse;
  export import DocCreateParams = DocsAPI.DocCreateParams;
  export import DocListParams = DocsAPI.DocListParams;
  export import DocSearchParams = DocsAPI.DocSearchParams;
}
