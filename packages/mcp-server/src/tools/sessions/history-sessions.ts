// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/sessions/{session_id}/history',
  operationId: 'get_session_history_sessions__session_id__history_get',
};

export const tool: Tool = {
  name: 'history_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Session History",
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.sessions.history(session_id));
};

export default { metadata, tool, handler };
