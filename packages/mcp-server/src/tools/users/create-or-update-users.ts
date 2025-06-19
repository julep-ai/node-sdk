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
  httpPath: '/users/{user_id}',
  operationId: 'create_or_update_user_users__user_id__post',
};

export const tool: Tool = {
  name: 'create_or_update_users',
  description: 'Create Or Update User',
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
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
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.users.createOrUpdate(user_id, body));
};

export default { metadata, tool, handler };
