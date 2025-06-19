// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/tasks/{task_id}',
  operationId: 'get_task_details_tasks__task_id__get',
};

export const tool: Tool = {
  name: 'get_tasks',
  description: 'Get Task Details',
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { task_id, ...body } = args as any;
  return asTextContentResult(await client.tasks.get(task_id));
};

export default { metadata, tool, handler };
