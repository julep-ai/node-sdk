// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Doc\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/doc',\n  $defs: {\n    doc: {\n      type: 'object',\n      title: 'Doc',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          anyOf: [            {\n              type: 'string'\n            },\n            {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          ],\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        title: {\n          type: 'string',\n          title: 'Title'\n        },\n        embedding_dimensions: {\n          type: 'integer',\n          title: 'Embedding Dimensions'\n        },\n        embedding_model: {\n          type: 'string',\n          title: 'Embedding Model'\n        },\n        embeddings: {\n          anyOf: [            {\n              type: 'array',\n              items: {\n                type: 'number'\n              }\n            },\n            {\n              type: 'array',\n              items: {\n                type: 'array',\n                items: {\n                  type: 'number'\n                }\n              }\n            }\n          ],\n          title: 'Embeddings'\n        },\n        language: {\n          type: 'string',\n          title: 'Language'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        modality: {\n          type: 'string',\n          title: 'Modality'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'title'\n      ]\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['doc_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { doc_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.docs.get(doc_id, body)));
};

export default { metadata, tool, handler };
