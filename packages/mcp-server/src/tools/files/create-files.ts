// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/files',
  operationId: 'create_file_files_post',
};

export const tool: Tool = {
  name: 'create_files',
  description: 'Create File',
  inputSchema: {
    type: 'object',
    properties: {
      content: {
        type: 'string',
        title: 'Content',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
      mime_type: {
        type: 'string',
        title: 'Mime Type',
      },
      project: {
        type: 'string',
        title: 'Project',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.files.create(body));
};

export default { metadata, tool, handler };
