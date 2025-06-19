// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
  description: 'Get Execution Transition',
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
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { execution_id, transition_id, ...body } = args as any;
  return asTextContentResult(await client.executions.transitions.retrieve(execution_id, transition_id));
};

export default { metadata, tool, handler };
