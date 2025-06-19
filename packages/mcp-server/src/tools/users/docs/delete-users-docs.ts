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
  httpPath: '/users/{user_id}/docs/{doc_id}',
  operationId: 'delete_user_doc_users__user_id__docs__doc_id__delete',
};

export const tool: Tool = {
  name: 'delete_users_docs',
  description: 'Delete User Doc',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      doc_id: {
        type: 'string',
        title: 'Doc Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { user_id, doc_id, ...body } = args as any;
  return asTextContentResult(await client.users.docs.delete(user_id, doc_id));
};

export default { metadata, tool, handler };
