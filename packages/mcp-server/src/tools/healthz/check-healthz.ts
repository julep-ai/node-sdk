// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'healthz',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/healthz',
  operationId: 'check_health_healthz_get',
};

export const tool: Tool = {
  name: 'check_healthz',
  description: 'Check Health',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  return asTextContentResult((await client.healthz.check()) as object);
};

export default { metadata, tool, handler };
