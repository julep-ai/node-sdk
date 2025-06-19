// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.tools',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/agents/{agent_id}/tools/{tool_id}',
  operationId: 'delete_agent_tool_agents__agent_id__tools__tool_id__delete',
};

export const tool: Tool = {
  name: 'delete_agents_tools',
  description: 'Delete Agent Tool',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      tool_id: {
        type: 'string',
        title: 'Tool Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, tool_id, ...body } = args as any;
  return asTextContentResult(await client.agents.tools.delete(agent_id, tool_id));
};

export default { metadata, tool, handler };
