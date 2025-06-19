// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/secrets/{secret_id}',
  operationId: 'update_developer_secret_secrets__secret_id__put',
};

export const tool: Tool = {
  name: 'update_secrets',
  description:
    "Update a developer secret.\n\nArgs:\n    developer_id: ID of the developer who owns the secret\n    secret_id: ID of the secret to update\n    data: New secret data\n\nReturns:\n    The updated secret\n\nRaises:\n    HTTPException: If the secret doesn't exist or doesn't belong to the developer",
  inputSchema: {
    type: 'object',
    properties: {
      secret_id: {
        type: 'string',
        title: 'Secret Id',
      },
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
  const { secret_id, ...body } = args as any;
  return asTextContentResult(await client.secrets.update(secret_id, body));
};

export default { metadata, tool, handler };
