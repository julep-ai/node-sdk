// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/files',
  operationId: 'list_files_files_get',
};

export const tool: Tool = {
  name: 'list_files',
  description: 'List Files',
  inputSchema: {
    type: 'object',
    properties: {},
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  return asTextContentResult(await client.files.list());
};

export default { metadata, tool, handler };
