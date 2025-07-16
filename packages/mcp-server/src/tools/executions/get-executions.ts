// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'executions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/executions/{execution_id}',
  operationId: 'get_execution_details_executions__execution_id__get',
};

export const tool: Tool = {
  name: 'get_executions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Execution Details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/execution',\n  $defs: {\n    execution: {\n      type: 'object',\n      title: 'Execution',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        input: {\n          type: 'object',\n          title: 'Input'\n        },\n        status: {\n          type: 'string',\n          title: 'Status',\n          enum: [            'queued',\n            'starting',\n            'running',\n            'awaiting_input',\n            'succeeded',\n            'failed',\n            'cancelled'\n          ]\n        },\n        task_id: {\n          type: 'string',\n          title: 'Task Id'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        error: {\n          type: 'string',\n          title: 'Error'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        output: {\n          type: 'object',\n          title: 'Output'\n        },\n        transition_count: {\n          type: 'integer',\n          title: 'Transition Count'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'input',\n        'status',\n        'task_id',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
        title: 'Execution Id',
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
  const { execution_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.executions.get(execution_id)));
};

export default { metadata, tool, handler };
