// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/sessions/{session_id}',
  operationId: 'delete_session_sessions__session_id__delete',
};

export const tool: Tool = {
  name: 'delete_sessions',
  description: 'Delete Session',
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
  return asTextContentResult(await client.sessions.delete(session_id));
};

export default { metadata, tool, handler };
