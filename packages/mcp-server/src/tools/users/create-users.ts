// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users',
  operationId: 'create_user_users_post',
};

export const tool: Tool = {
  name: 'create_users',
  description: 'Create User',
  inputSchema: {
    type: 'object',
    properties: {
      about: {
        type: 'string',
        title: 'About',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      project: {
        type: 'string',
        title: 'Project',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.users.create(body));
};

export default { metadata, tool, handler };
