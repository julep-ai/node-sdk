// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/users/{user_id}/docs',
  operationId: 'bulk_delete_user_docs_users__user_id__docs_delete',
};

export const tool: Tool = {
  name: 'bulk_delete_users_docs',
  description: 'Bulk delete documents owned by a user based on metadata filter',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      delete_all: {
        type: 'boolean',
        title: 'Delete All',
      },
      metadata_filter: {
        type: 'object',
        title: 'Metadata Filter',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.users.docs.bulkDelete(user_id, body));
};

export default { metadata, tool, handler };
