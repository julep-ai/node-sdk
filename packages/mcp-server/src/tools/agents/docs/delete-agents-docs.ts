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
  httpPath: '/agents/{agent_id}/docs/{doc_id}',
  operationId: 'delete_agent_doc_agents__agent_id__docs__doc_id__delete',
};

export const tool: Tool = {
  name: 'delete_agents_docs',
  description: 'Delete Agent Doc',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      doc_id: {
        type: 'string',
        title: 'Doc Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, doc_id, ...body } = args as any;
  return asTextContentResult(await client.agents.docs.delete(agent_id, doc_id));
};

export default { metadata, tool, handler };
