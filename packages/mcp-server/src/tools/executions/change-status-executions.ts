// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'executions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/executions/{execution_id}',
  operationId: 'update_execution_executions__execution_id__put',
};

export const tool: Tool = {
  name: 'change_status_executions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate Execution\n\n# Response Schema\n```json\n{\n  type: 'object'\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          execution_id: {
            type: 'string',
            title: 'Execution Id',
          },
          input: {
            type: 'object',
            title: 'Input',
          },
          status: {
            type: 'string',
            title: 'Status',
            enum: ['running'],
          },
        },
        required: ['execution_id'],
      },
      {
        type: 'object',
        properties: {
          execution_id: {
            type: 'string',
            title: 'Execution Id',
          },
          reason: {
            type: 'string',
            title: 'Reason',
          },
          status: {
            type: 'string',
            title: 'Status',
            enum: ['cancelled'],
          },
        },
        required: ['execution_id'],
      },
    ],
    properties: {
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
  const { execution_id, ...body } = args as any;
  return asTextContentResult((await client.executions.changeStatus(execution_id, body)) as object);
};

export default { metadata, tool, handler };
