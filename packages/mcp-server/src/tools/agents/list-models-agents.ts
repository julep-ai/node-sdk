// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
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
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all available models that can be used with agents.\n\nReturns:\n    ListModelsResponse: A list of available models\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ListModelsResponse',\n  description: 'Response for the list models endpoint',\n  properties: {\n    models: {\n      type: 'array',\n      title: 'Models',\n      items: {\n        type: 'object',\n        title: 'ModelInfo',\n        description: 'Model information returned by the model list endpoint',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id'\n          }\n        },\n        required: [          'id'\n        ]\n      }\n    }\n  },\n  required: [    'models'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      'x-custom-api-key': {
        type: 'string',
        title: 'X-Custom-Api-Key',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agents.listModels(body)));
};

export default { metadata, tool, handler };
