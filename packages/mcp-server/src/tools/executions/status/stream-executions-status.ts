// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'executions.status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/executions/{execution_id}/status.stream',
  operationId: 'stream_execution_status_executions__execution_id__status_stream_get',
};

export const tool: Tool = {
  name: 'stream_executions_status',
  description:
    'SSE endpoint that streams the status of a given execution_id by polling the\nlatest_executions view.',
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
        title: 'Execution Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { execution_id, ...body } = args as any;
  const response = await client.executions.status.stream(execution_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
