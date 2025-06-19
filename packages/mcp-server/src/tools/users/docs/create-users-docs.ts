// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users/{user_id}/docs',
  operationId: 'create_user_doc_users__user_id__docs_post',
};

export const tool: Tool = {
  name: 'create_users_docs',
  description:
    'Creates a new document for a user.\n\nParameters:\n    user_id (UUID): The unique identifier of the user associated with the document.\n    data (CreateDocRequest): The data to create the document with.\n    x_developer_id (UUID): The unique identifier of the developer associated with the document.\n\nReturns:\n    Doc: The created document.',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      content: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        title: 'Content',
      },
      title: {
        type: 'string',
        title: 'Title',
      },
      connection_pool: {
        type: 'object',
        title: 'Connection Pool',
      },
      embed_instruction: {
        type: 'string',
        title: 'Embed Instruction',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.users.docs.create(user_id, body));
};

export default { metadata, tool, handler };
