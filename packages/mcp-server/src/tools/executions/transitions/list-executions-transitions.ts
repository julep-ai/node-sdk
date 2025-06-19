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
  httpPath: '/executions/{execution_id}/transitions',
  operationId: 'list_execution_transitions_executions__execution_id__transitions_get',
};

export const tool: Tool = {
  name: 'list_executions_transitions',
  description: 'List Execution Transitions',
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
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { execution_id, ...body } = args as any;
  return asTextContentResult(await client.executions.transitions.list(execution_id, body));
};

export default { metadata, tool, handler };
