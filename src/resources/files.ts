// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Files extends APIResource {
  /**
   * Create File
   */
  create(body: FileCreateParams, options?: Core.RequestOptions): Core.APIPromise<File> {
    return this._client.post('/files', { body, ...options });
  }

  /**
   * List Files
   */
  list(options?: Core.RequestOptions): Core.APIPromise<FileListResponse> {
    return this._client.get('/files', options);
  }

  /**
   * Delete File
   */
  delete(fileId: string, options?: Core.RequestOptions): Core.APIPromise<FileDeleteResponse> {
    return this._client.delete(`/files/${fileId}`, options);
  }

  /**
   * Get File
   */
  get(fileId: string, options?: Core.RequestOptions): Core.APIPromise<File> {
    return this._client.get(`/files/${fileId}`, options);
  }
}

export interface File {
  id: string;

  content: string;

  created_at: string;

  hash: string;

  name: string;

  size: number;

  description?: string;

  mime_type?: string | null;

  project?: string | null;
}

export type FileListResponse = Array<File>;

export interface FileDeleteResponse {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface FileCreateParams {
  content: string;

  name: string;

  description?: string;

  mime_type?: string | null;

  project?: string | null;
}

export declare namespace Files {
  export {
    type File as File,
    type FileListResponse as FileListResponse,
    type FileDeleteResponse as FileDeleteResponse,
    type FileCreateParams as FileCreateParams,
  };
}
