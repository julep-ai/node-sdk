// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/agents/{agent_id}/docs',
  operationId: 'create_agent_doc_agents__agent_id__docs_post',
};

export const tool: Tool = {
  name: 'create_agents_docs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Agent Doc\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/doc',\n  $defs: {\n    doc: {\n      type: 'object',\n      title: 'Doc',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          anyOf: [            {\n              type: 'string'\n            },\n            {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          ],\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        title: {\n          type: 'string',\n          title: 'Title'\n        },\n        embedding_dimensions: {\n          type: 'integer',\n          title: 'Embedding Dimensions'\n        },\n        embedding_model: {\n          type: 'string',\n          title: 'Embedding Model'\n        },\n        embeddings: {\n          anyOf: [            {\n              type: 'array',\n              items: {\n                type: 'number'\n              }\n            },\n            {\n              type: 'array',\n              items: {\n                type: 'array',\n                items: {\n                  type: 'number'\n                }\n              }\n            }\n          ],\n          title: 'Embeddings'\n        },\n        language: {\n          type: 'string',\n          title: 'Language'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        modality: {\n          type: 'string',\n          title: 'Modality'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'title'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      content: {
        anyOf: [
          {
            type: 'string',
            title: 'Content',
          },
          {
            type: 'array',
            items: {
              type: 'string',
              title: 'Content',
            },
          },
        ],
        title: 'Content',
      },
      title: {
        type: 'string',
        title: 'Title',
      },
      connection_pool: {
        type: 'object',
        title: 'Connection Pool',
      },
      embed_instruction: {
        type: 'string',
        title: 'Embed Instruction',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['agent_id', 'content', 'title'],
  },
  annotations: {},
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agents.docs.create(agent_id, body)));
};

export default { metadata, tool, handler };
