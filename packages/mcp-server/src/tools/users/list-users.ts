// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users',
  operationId: 'list_users_users_get',
};

export const tool: Tool = {
  name: 'list_users',
  description: 'List Users',
  inputSchema: {
    type: 'object',
    properties: {
      direction: {
        type: 'string',
        title: 'Direction',
        enum: ['asc', 'desc'],
      },
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      metadata_filter: {
        type: 'object',
        title: 'MetadataFilter',
      },
      offset: {
        type: 'integer',
        title: 'Offset',
      },
      sort_by: {
        type: 'string',
        title: 'Sort By',
        enum: ['created_at', 'updated_at'],
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.users.list(body));
};

export default { metadata, tool, handler };
