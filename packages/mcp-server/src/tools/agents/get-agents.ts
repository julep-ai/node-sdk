// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/agents/{agent_id}',
  operationId: 'get_agent_details_agents__agent_id__get',
};

export const tool: Tool = {
  name: 'get_agents',
  description: 'Get Agent Details',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult(await client.agents.get(agent_id));
};

export default { metadata, tool, handler };
