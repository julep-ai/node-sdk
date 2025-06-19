// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'docs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/embed',
  operationId: 'embed_embed_post',
};

export const tool: Tool = {
  name: 'embed_docs',
  description: 'Embed',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          text: {
            type: 'string',
            title: 'Text',
          },
          embed_instruction: {
            type: 'string',
            title: 'Embed Instruction',
          },
        },
      },
      {
        type: 'object',
        properties: {
          text: {
            type: 'array',
            title: 'Text',
            items: {
              type: 'string',
            },
          },
          embed_instruction: {
            type: 'string',
            title: 'Embed Instruction',
          },
        },
      },
    ],
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.docs.embed(body));
};

export default { metadata, tool, handler };
