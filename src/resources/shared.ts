// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface ResourceCreated {
  id: string;

  created_at: string;

  jobs?: Array<string>;
}

export interface ResourceDeleted {
  id: string;

  deleted_at: string;

  jobs?: Array<string>;
}

export interface ResourceUpdated {
  id: string;

  updated_at: string;

  jobs?: Array<string>;
}
