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
  httpPath: '/executions/{execution_id}/transitions.stream',
  operationId: 'stream_transitions_events_executions__execution_id__transitions_stream_get',
};

export const tool: Tool = {
  name: 'stream_executions_transitions',
  description: 'Stream Transitions Events',
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
        title: 'Execution Id',
      },
      next_page_token: {
        type: 'string',
        title: 'Next Page Token',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { execution_id, ...body } = args as any;
  return asTextContentResult((await client.executions.transitions.stream(execution_id, body)) as object);
};

export default { metadata, tool, handler };
