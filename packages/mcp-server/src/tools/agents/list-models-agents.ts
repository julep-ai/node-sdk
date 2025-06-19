// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/agents/models',
  operationId: 'list_models_agents_models_get',
};

export const tool: Tool = {
  name: 'list_models_agents',
  description:
    'List all available models that can be used with agents.\n\nReturns:\n    ListModelsResponse: A list of available models',
  inputSchema: {
    type: 'object',
    properties: {
      'x-custom-api-key': {
        type: 'string',
        title: 'X-Custom-Api-Key',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.agents.listModels(body));
};

export default { metadata, tool, handler };
