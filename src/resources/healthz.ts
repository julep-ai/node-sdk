// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Healthz extends APIResource {
  /**
   * Check Health
   */
  check(options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.get('/healthz', options);
  }
}

export type HealthzCheckResponse = unknown;

export declare namespace Healthz {
  export { type HealthzCheckResponse as HealthzCheckResponse };
}
