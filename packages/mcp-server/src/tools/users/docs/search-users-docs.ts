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
  httpPath: '/users/{user_id}/search',
  operationId: 'search_user_docs_users__user_id__search_post',
};

export const tool: Tool = {
  name: 'search_users_docs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSearches for documents associated with a specific user.\n\nParameters:\n    x_developer_id (UUID): The unique identifier of the developer associated with the user.\n    search_params (TextOnlyDocSearchRequest | VectorDocSearchRequest | HybridDocSearchRequest): The parameters for the search.\n    user_id (UUID): The unique identifier of the user associated with the documents.\nReturns:\n    DocSearchResponse: The search results.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'DocSearchResponse',\n  properties: {\n    docs: {\n      type: 'array',\n      title: 'Docs',\n      items: {\n        $ref: '#/$defs/doc_reference'\n      }\n    },\n    time: {\n      type: 'number',\n      title: 'Time'\n    }\n  },\n  required: [    'docs',\n    'time'\n  ],\n  $defs: {\n    doc_reference: {\n      type: 'object',\n      title: 'DocReference',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        owner: {\n          $ref: '#/$defs/doc_owner'\n        },\n        snippet: {\n          $ref: '#/$defs/snippet'\n        },\n        distance: {\n          type: 'number',\n          title: 'Distance'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        title: {\n          type: 'string',\n          title: 'Title'\n        }\n      },\n      required: [        'id',\n        'owner',\n        'snippet'\n      ]\n    },\n    doc_owner: {\n      type: 'object',\n      title: 'DocOwner',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        role: {\n          type: 'string',\n          title: 'Role',\n          enum: [            'user',\n            'agent'\n          ]\n        }\n      },\n      required: [        'id',\n        'role'\n      ]\n    },\n    snippet: {\n      type: 'object',\n      title: 'Snippet',\n      properties: {\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        index: {\n          type: 'integer',\n          title: 'Index'\n        },\n        embedding: {\n          type: 'array',\n          title: 'Embedding',\n          items: {\n            type: 'number'\n          }\n        }\n      },\n      required: [        'content',\n        'index'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          user_id: {
            type: 'string',
            title: 'User Id',
          },
          text: {
            type: 'string',
            title: 'Text',
          },
          connection_pool: {
            type: 'object',
            title: 'Connection Pool',
          },
          include_embeddings: {
            type: 'boolean',
            title: 'Include Embeddings',
          },
          lang: {
            type: 'string',
            title: 'Lang',
          },
          limit: {
            type: 'integer',
            title: 'Limit',
          },
          metadata_filter: {
            type: 'object',
            title: 'Metadata Filter',
          },
          trigram_similarity_threshold: {
            type: 'number',
            title: 'Trigram Similarity Threshold',
          },
        },
        required: ['user_id', 'text'],
      },
      {
        type: 'object',
        properties: {
          user_id: {
            type: 'string',
            title: 'User Id',
          },
          vector: {
            type: 'array',
            title: 'Vector',
            items: {
              type: 'number',
            },
          },
          connection_pool: {
            type: 'object',
            title: 'Connection Pool',
          },
          confidence: {
            type: 'number',
            title: 'Confidence',
          },
          include_embeddings: {
            type: 'boolean',
            title: 'Include Embeddings',
          },
          limit: {
            type: 'integer',
            title: 'Limit',
          },
          metadata_filter: {
            type: 'object',
            title: 'Metadata Filter',
          },
          mmr_strength: {
            type: 'number',
            title: 'Mmr Strength',
          },
        },
        required: ['user_id', 'vector'],
      },
      {
        type: 'object',
        properties: {
          user_id: {
            type: 'string',
            title: 'User Id',
          },
          text: {
            type: 'string',
            title: 'Text',
          },
          vector: {
            type: 'array',
            title: 'Vector',
            items: {
              type: 'number',
            },
          },
          connection_pool: {
            type: 'object',
            title: 'Connection Pool',
          },
          alpha: {
            type: 'number',
            title: 'Alpha',
          },
          confidence: {
            type: 'number',
            title: 'Confidence',
          },
          include_embeddings: {
            type: 'boolean',
            title: 'Include Embeddings',
          },
          k_multiplier: {
            type: 'integer',
            title: 'K Multiplier',
          },
          lang: {
            type: 'string',
            title: 'Lang',
          },
          limit: {
            type: 'integer',
            title: 'Limit',
          },
          metadata_filter: {
            type: 'object',
            title: 'Metadata Filter',
          },
          mmr_strength: {
            type: 'number',
            title: 'Mmr Strength',
          },
          trigram_similarity_threshold: {
            type: 'number',
            title: 'Trigram Similarity Threshold',
          },
        },
        required: ['user_id', 'text', 'vector'],
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
  const { user_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.users.docs.search(user_id, body)));
};

export default { metadata, tool, handler };
