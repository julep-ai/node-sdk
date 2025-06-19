// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/agents/{agent_id}/docs',
  operationId: 'bulk_delete_agent_docs_agents__agent_id__docs_delete',
};

export const tool: Tool = {
  name: 'bulk_delete_agents_docs',
  description: 'Bulk delete documents owned by an agent based on metadata filter',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      delete_all: {
        type: 'boolean',
        title: 'Delete All',
      },
      metadata_filter: {
        type: 'object',
        title: 'Metadata Filter',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult(await client.agents.docs.bulkDelete(agent_id, body));
};

export default { metadata, tool, handler };
