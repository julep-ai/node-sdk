// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { OffsetPagination, type OffsetPaginationParams } from '../pagination';

export class Projects extends APIResource {
  /**
   * Create Project
   */
  create(body: ProjectCreateParams, options?: Core.RequestOptions): Core.APIPromise<ProjectCreateResponse> {
    return this._client.post('/projects', { body, ...options });
  }

  /**
   * List Projects
   */
  list(
    query?: ProjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectListResponsesOffsetPagination, ProjectListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectListResponsesOffsetPagination, ProjectListResponse>;
  list(
    query: ProjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<ProjectListResponsesOffsetPagination, ProjectListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/projects', ProjectListResponsesOffsetPagination, { query, ...options });
  }
}

export class ProjectListResponsesOffsetPagination extends OffsetPagination<ProjectListResponse> {}

/**
 * Project model
 */
export interface ProjectCreateResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  canonical_name?: string | null;

  metadata?: unknown | null;
}

/**
 * Project model
 */
export interface ProjectListResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  canonical_name?: string | null;

  metadata?: unknown | null;
}

export interface ProjectCreateParams {
  name: string;

  canonical_name?: string | null;

  metadata?: unknown | null;
}

export interface ProjectListParams extends OffsetPaginationParams {
  direction?: 'asc' | 'desc';

  metadata_filter?: { [key: string]: unknown };

  sort_by?: 'created_at' | 'updated_at';
}

Projects.ProjectListResponsesOffsetPagination = ProjectListResponsesOffsetPagination;

export declare namespace Projects {
  export {
    type ProjectCreateResponse as ProjectCreateResponse,
    type ProjectListResponse as ProjectListResponse,
    ProjectListResponsesOffsetPagination as ProjectListResponsesOffsetPagination,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectListParams as ProjectListParams,
  };
}
