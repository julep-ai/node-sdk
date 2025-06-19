// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'executions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/tasks/{task_id}/executions',
  operationId: 'create_task_execution_tasks__task_id__executions_post',
};

export const tool: Tool = {
  name: 'create_executions',
  description: 'Create Task Execution',
  inputSchema: {
    type: 'object',
    properties: {
      task_id: {
        type: 'string',
        title: 'Task Id',
      },
      input: {
        type: 'object',
        title: 'Input',
      },
      error: {
        type: 'string',
        title: 'Error',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      output: {
        type: 'object',
        title: 'Output',
      },
      transition_count: {
        type: 'integer',
        title: 'Transition Count',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { task_id, ...body } = args as any;
  return asTextContentResult(await client.executions.create(task_id, body));
};

export default { metadata, tool, handler };
