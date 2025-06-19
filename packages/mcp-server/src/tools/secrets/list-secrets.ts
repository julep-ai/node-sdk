// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/secrets',
  operationId: 'list_developer_secrets_secrets_get',
};

export const tool: Tool = {
  name: 'list_secrets',
  description:
    'List all secrets for a developer.\n\nArgs:\n    x_developer_id: ID of the developer whose secrets to list\n    limit: Maximum number of secrets to return\n    offset: Number of secrets to skip\n\nReturns:\n    List of secrets',
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      offset: {
        type: 'integer',
        title: 'Offset',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.secrets.list(body));
};

export default { metadata, tool, handler };
