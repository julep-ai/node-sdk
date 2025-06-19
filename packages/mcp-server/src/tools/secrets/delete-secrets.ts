// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/secrets/{secret_id}',
  operationId: 'delete_developer_secret_secrets__secret_id__delete',
};

export const tool: Tool = {
  name: 'delete_secrets',
  description:
    "Delete a secret.\n\nArgs:\n    secret_id: ID of the secret to delete\n    x_developer_id: ID of the developer who owns the secret\n\nReturns:\n    The deleted secret\n\nRaises:\n    HTTPException: If the secret doesn't exist",
  inputSchema: {
    type: 'object',
    properties: {
      secret_id: {
        type: 'string',
        title: 'Secret Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { secret_id, ...body } = args as any;
  return asTextContentResult(await client.secrets.delete(secret_id));
};

export default { metadata, tool, handler };
