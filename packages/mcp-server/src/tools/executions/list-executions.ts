// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'executions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}/executions',
  operationId: 'list_task_executions_tasks__task_id__executions_get',
};

export const tool: Tool = {
  name: 'list_executions',
  description: 'List Task Executions',
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
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
      sort_by: {
        type: 'string',
        title: 'Sort By',
        enum: ['created_at', 'updated_at'],
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { task_id, ...body } = args as any;
  return asTextContentResult(await client.executions.list(task_id, body));
};

export default { metadata, tool, handler };
