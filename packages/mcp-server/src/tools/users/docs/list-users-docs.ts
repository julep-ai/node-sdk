// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users.docs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{user_id}/docs',
  operationId: 'list_user_docs_users__user_id__docs_get',
};

export const tool: Tool = {
  name: 'list_users_docs',
  description: 'List User Docs',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      direction: {
        type: 'string',
        title: 'Direction',
        enum: ['asc', 'desc'],
      },
      include_embeddings: {
        type: 'boolean',
        title: 'Include Embeddings',
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
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.users.docs.list(user_id, body));
};

export default { metadata, tool, handler };
