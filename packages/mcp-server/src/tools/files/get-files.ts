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
  httpPath: '/files/{file_id}',
  operationId: 'get_file_files__file_id__get',
};

export const tool: Tool = {
  name: 'get_files',
  description: 'Get File',
  inputSchema: {
    type: 'object',
    properties: {
      file_id: {
        type: 'string',
        title: 'File Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { file_id, ...body } = args as any;
  return asTextContentResult(await client.files.get(file_id));
};

export default { metadata, tool, handler };
