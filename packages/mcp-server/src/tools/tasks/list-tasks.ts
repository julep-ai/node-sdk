// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'tasks',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/agents/{agent_id}/tasks',
  operationId: 'list_tasks_agents__agent_id__tasks_get',
};

export const tool: Tool = {
  name: 'list_tasks',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Tasks",
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
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
  const { agent_id, ...body } = args as any;
  const response = await client.tasks.list(agent_id, body).asResponse();
  return asTextContentResult(await response.json());
};

export default { metadata, tool, handler };
