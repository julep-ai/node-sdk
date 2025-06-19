// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Update Execution',
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
      },
    ],
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { execution_id, ...body } = args as any;
  return asTextContentResult((await client.executions.changeStatus(execution_id, body)) as object);
};

export default { metadata, tool, handler };
