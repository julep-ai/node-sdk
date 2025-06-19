// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/agents/{agent_id}',
  operationId: 'update_agent_agents__agent_id__put',
};

export const tool: Tool = {
  name: 'reset_agents',
  description: 'Update Agent',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      about: {
        type: 'string',
        title: 'About',
      },
      canonical_name: {
        type: 'string',
        title: 'Canonical Name',
      },
      default_settings: {
        type: 'object',
        title: 'Default Settings',
      },
      default_system_template: {
        type: 'string',
        title: 'Default System Template',
      },
      instructions: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        title: 'Instructions',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      model: {
        type: 'string',
        title: 'Model',
      },
      project: {
        type: 'string',
        title: 'Project',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult(await client.agents.reset(agent_id, body));
};

export default { metadata, tool, handler };
