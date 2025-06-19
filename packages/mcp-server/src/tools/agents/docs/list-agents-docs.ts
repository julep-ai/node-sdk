// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.docs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/agents/{agent_id}/docs',
  operationId: 'list_agent_docs_agents__agent_id__docs_get',
};

export const tool: Tool = {
  name: 'list_agents_docs',
  description: 'List Agent Docs',
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
      metadata_filter: {
        type: 'object',
        title: 'MetadataFilter',
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
  return asTextContentResult(await client.agents.docs.list(agent_id, body));
};

export default { metadata, tool, handler };
