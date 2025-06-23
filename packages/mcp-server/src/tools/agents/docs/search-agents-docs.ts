// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/agents/{agent_id}/search',
  operationId: 'search_agent_docs_agents__agent_id__search_post',
};

export const tool: Tool = {
  name: 'search_agents_docs',
  description:
    'Searches for documents associated with a specific agent.\n\nParameters:\n    x_developer_id (UUID): The unique identifier of the developer associated with the agent.\n    search_params (TextOnlyDocSearchRequest | VectorDocSearchRequest | HybridDocSearchRequest): The parameters for the search.\n    agent_id (UUID): The unique identifier of the agent associated with the documents.\n\nReturns:\n    DocSearchResponse: The search results.',
  inputSchema: {
    type: 'object',
    anyOf: [
      {
        type: 'object',
        properties: {
          agent_id: {
            type: 'string',
            title: 'Agent Id',
          },
          text: {
            type: 'string',
            title: 'Text',
          },
          connection_pool: {
            type: 'object',
            title: 'Connection Pool',
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
          agent_id: {
            type: 'string',
            title: 'Agent Id',
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
          agent_id: {
            type: 'string',
            title: 'Agent Id',
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
  const { agent_id, ...body } = args as any;
  return asTextContentResult(await client.agents.docs.search(agent_id, body));
};

export default { metadata, tool, handler };
