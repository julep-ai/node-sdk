// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users/{user_id}/docs',
  operationId: 'create_user_doc_users__user_id__docs_post',
};

export const tool: Tool = {
  name: 'create_users_docs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreates a new document for a user.\n\nParameters:\n    user_id (UUID): The unique identifier of the user associated with the document.\n    data (CreateDocRequest): The data to create the document with.\n    x_developer_id (UUID): The unique identifier of the developer associated with the document.\n\nReturns:\n    Doc: The created document.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/doc',\n  $defs: {\n    doc: {\n      type: 'object',\n      title: 'Doc',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          anyOf: [            {\n              type: 'string'\n            },\n            {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          ],\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        title: {\n          type: 'string',\n          title: 'Title'\n        },\n        embedding_dimensions: {\n          type: 'integer',\n          title: 'Embedding Dimensions'\n        },\n        embedding_model: {\n          type: 'string',\n          title: 'Embedding Model'\n        },\n        embeddings: {\n          anyOf: [            {\n              type: 'array',\n              items: {\n                type: 'number'\n              }\n            },\n            {\n              type: 'array',\n              items: {\n                type: 'array',\n                items: {\n                  type: 'number'\n                }\n              }\n            }\n          ],\n          title: 'Embeddings'\n        },\n        language: {\n          type: 'string',\n          title: 'Language'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata',\n          additionalProperties: true\n        },\n        modality: {\n          type: 'string',\n          title: 'Modality'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'title'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
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
        additionalProperties: true,
      },
      embed_instruction: {
        type: 'string',
        title: 'Embed Instruction',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['user_id', 'content', 'title'],
  },
  annotations: {},
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { user_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.docs.create(user_id, body)));
};

export default { metadata, tool, handler };
