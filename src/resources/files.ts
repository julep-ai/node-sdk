// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as Shared from './shared';

export class Files extends APIResource {
  /**
   * Create File
   */
  create(body: FileCreateParams, options?: Core.RequestOptions): Core.APIPromise<File> {
    return this._client.post('/files', { body, ...options });
  }

  /**
   * Delete File
   */
  delete(fileId: string, options?: Core.RequestOptions): Core.APIPromise<Shared.ResourceDeleted> {
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
}

export interface FileCreateParams {
  content: string;

  name: string;

  description?: string;

  mime_type?: string | null;
}

export declare namespace Files {
  export { type File as File, type FileCreateParams as FileCreateParams };
}
