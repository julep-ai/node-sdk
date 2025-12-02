// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asErrorResult, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description: 'Get Session History',
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
    },
    required: ['session_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  try {
    return asTextContentResult(await client.sessions.history(session_id));
  } catch (error) {
    if (error instanceof Julep.APIError) {
      return asErrorResult(error.message);
    }
    throw error;
  }
};

export default { metadata, tool, handler };
