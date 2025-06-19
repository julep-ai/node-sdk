// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/secrets',
  operationId: 'create_developer_secret_secrets_post',
};

export const tool: Tool = {
  name: 'create_secrets',
  description:
    'Create a new secret for a developer.\n\nArgs:\n    developer_id: ID of the developer creating the secret\n    secret: Secret to create\n\nReturns:\n    The created secret\n\nRaises:\n    HTTPException: If a secret with this name already exists (409 Conflict)',
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      value: {
        type: 'string',
        title: 'Value',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.secrets.create(body));
};

export default { metadata, tool, handler };
