// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'executions.transitions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/executions/{execution_id}/transitions',
  operationId: 'list_execution_transitions_executions__execution_id__transitions_get',
};

export const tool: Tool = {
  name: 'list_executions_transitions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Execution Transitions\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ListResponse[Transition]',\n  properties: {\n    items: {\n      type: 'array',\n      title: 'Items',\n      items: {\n        $ref: '#/$defs/transition'\n      }\n    }\n  },\n  required: [    'items'\n  ],\n  $defs: {\n    transition: {\n      type: 'object',\n      title: 'Transition',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        current: {\n          type: 'object',\n          title: 'TransitionTarget',\n          properties: {\n            scope_id: {\n              type: 'string',\n              title: 'Scope Id'\n            },\n            step: {\n              type: 'integer',\n              title: 'Step'\n            },\n            workflow: {\n              type: 'string',\n              title: 'Workflow'\n            }\n          },\n          required: [            'scope_id',\n            'step',\n            'workflow'\n          ]\n        },\n        execution_id: {\n          type: 'string',\n          title: 'Execution Id'\n        },\n        next: {\n          type: 'object',\n          title: 'TransitionTarget',\n          properties: {\n            scope_id: {\n              type: 'string',\n              title: 'Scope Id'\n            },\n            step: {\n              type: 'integer',\n              title: 'Step'\n            },\n            workflow: {\n              type: 'string',\n              title: 'Workflow'\n            }\n          },\n          required: [            'scope_id',\n            'step',\n            'workflow'\n          ]\n        },\n        output: {\n          type: 'object',\n          title: 'Output'\n        },\n        type: {\n          type: 'string',\n          title: 'Type',\n          enum: [            'init',\n            'init_branch',\n            'finish',\n            'finish_branch',\n            'wait',\n            'resume',\n            'error',\n            'step',\n            'cancelled'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        step_label: {\n          type: 'string',\n          title: 'Step Label'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'current',\n        'execution_id',\n        'next',\n        'output',\n        'type',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
        title: 'Execution Id',
      },
      direction: {
        type: 'string',
        title: 'Direction',
        enum: ['asc', 'desc'],
      },
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      offset: {
        type: 'integer',
        title: 'Offset',
      },
      scope_id: {
        type: 'string',
        title: 'Scope Id',
      },
      sort_by: {
        type: 'string',
        title: 'Sort By',
        enum: ['created_at', 'updated_at'],
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
  const response = await client.executions.transitions.list(execution_id, body).asResponse();
  return asTextContentResult(await maybeFilter(args, await response.json()));
};

export default { metadata, tool, handler };
