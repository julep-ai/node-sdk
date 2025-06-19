// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/agents/{agent_id}/docs',
  operationId: 'create_agent_doc_agents__agent_id__docs_post',
};

export const tool: Tool = {
  name: 'create_agents_docs',
  description: 'Create Agent Doc',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      content: {
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
        title: 'Content',
      },
      title: {
        type: 'string',
        title: 'Title',
      },
      connection_pool: {
        type: 'object',
        title: 'Connection Pool',
      },
      embed_instruction: {
        type: 'string',
        title: 'Embed Instruction',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult(await client.agents.docs.create(agent_id, body));
};

export default { metadata, tool, handler };
