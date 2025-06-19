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
  httpPath: '/sessions/{session_id}',
  operationId: 'get_session_sessions__session_id__get',
};

export const tool: Tool = {
  name: 'get_sessions',
  description: 'Get Session',
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
  return asTextContentResult(await client.sessions.get(session_id));
};

export default { metadata, tool, handler };
