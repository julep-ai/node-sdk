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
  httpPath: '/executions/{execution_id}/transitions/{transition_id}',
  operationId: 'get_execution_transition_executions__execution_id__transitions__transition_id__get',
};

export const tool: Tool = {
  name: 'retrieve_executions_transitions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Execution Transition\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/transition',\n  $defs: {\n    transition: {\n      type: 'object',\n      title: 'Transition',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        current: {\n          type: 'object',\n          title: 'TransitionTarget',\n          properties: {\n            scope_id: {\n              type: 'string',\n              title: 'Scope Id'\n            },\n            step: {\n              type: 'integer',\n              title: 'Step'\n            },\n            workflow: {\n              type: 'string',\n              title: 'Workflow'\n            }\n          },\n          required: [            'scope_id',\n            'step',\n            'workflow'\n          ]\n        },\n        execution_id: {\n          type: 'string',\n          title: 'Execution Id'\n        },\n        next: {\n          type: 'object',\n          title: 'TransitionTarget',\n          properties: {\n            scope_id: {\n              type: 'string',\n              title: 'Scope Id'\n            },\n            step: {\n              type: 'integer',\n              title: 'Step'\n            },\n            workflow: {\n              type: 'string',\n              title: 'Workflow'\n            }\n          },\n          required: [            'scope_id',\n            'step',\n            'workflow'\n          ]\n        },\n        output: {\n          type: 'object',\n          title: 'Output'\n        },\n        type: {\n          type: 'string',\n          title: 'Type',\n          enum: [            'init',\n            'init_branch',\n            'finish',\n            'finish_branch',\n            'wait',\n            'resume',\n            'error',\n            'step',\n            'cancelled'\n          ]\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        step_label: {\n          type: 'string',\n          title: 'Step Label'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'current',\n        'execution_id',\n        'next',\n        'output',\n        'type',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
        title: 'Execution Id',
      },
      transition_id: {
        type: 'string',
        title: 'Transition Id',
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
  const { execution_id, transition_id, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.executions.transitions.retrieve(execution_id, transition_id)),
  );
};

export default { metadata, tool, handler };
