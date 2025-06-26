// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
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
    'Searches for documents associated with a specific user.\n\nParameters:\n    x_developer_id (UUID): The unique identifier of the developer associated with the user.\n    search_params (TextOnlyDocSearchRequest | VectorDocSearchRequest | HybridDocSearchRequest): The parameters for the search.\n    user_id (UUID): The unique identifier of the user associated with the documents.\nReturns:\n    DocSearchResponse: The search results.',
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
      },
    ],
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await client.users.docs.search(user_id, body));
};

export default { metadata, tool, handler };
