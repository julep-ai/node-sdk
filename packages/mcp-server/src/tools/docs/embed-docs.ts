// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEmbed\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/embed_query_response',\n  $defs: {\n    embed_query_response: {\n      type: 'object',\n      title: 'EmbedQueryResponse',\n      properties: {\n        vectors: {\n          type: 'array',\n          title: 'Vectors',\n          items: {\n            type: 'array',\n            items: {\n              type: 'number'\n            }\n          }\n        }\n      },\n      required: [        'vectors'\n      ]\n    }\n  }\n}\n```",
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
    properties: {
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.docs.embed(body)));
};

export default { metadata, tool, handler };
