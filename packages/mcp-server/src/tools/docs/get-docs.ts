// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'docs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/docs/{doc_id}',
  operationId: 'get_doc_docs__doc_id__get',
};

export const tool: Tool = {
  name: 'get_docs',
  description: 'Get Doc',
  inputSchema: {
    type: 'object',
    properties: {
      doc_id: {
        type: 'string',
        title: 'Doc Id',
      },
      include_embeddings: {
        type: 'boolean',
        title: 'Include Embeddings',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { doc_id, ...body } = args as any;
  return asTextContentResult(await client.docs.get(doc_id, body));
};

export default { metadata, tool, handler };
