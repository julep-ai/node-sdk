// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/sessions/{session_id}',
  operationId: 'patch_session_sessions__session_id__patch',
};

export const tool: Tool = {
  name: 'update_sessions',
  description: 'Patch Session',
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
      auto_run_tools: {
        type: 'boolean',
        title: 'Auto Run Tools',
      },
      context_overflow: {
        type: 'string',
        title: 'Context Overflow',
        enum: ['truncate', 'adaptive'],
      },
      forward_tool_calls: {
        type: 'boolean',
        title: 'Forward Tool Calls',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      recall_options: {
        anyOf: [
          {
            type: 'object',
            title: 'VectorDocSearchUpdate',
            properties: {
              confidence: {
                type: 'number',
                title: 'Confidence',
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
              max_query_length: {
                type: 'integer',
                title: 'Max Query Length',
              },
              metadata_filter: {
                type: 'object',
                title: 'Metadata Filter',
              },
              mmr_strength: {
                type: 'number',
                title: 'Mmr Strength',
              },
              mode: {
                type: 'string',
                title: 'Mode',
                enum: ['vector'],
              },
              num_search_messages: {
                type: 'integer',
                title: 'Num Search Messages',
              },
            },
          },
          {
            type: 'object',
            title: 'TextOnlyDocSearchUpdate',
            properties: {
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
              max_query_length: {
                type: 'integer',
                title: 'Max Query Length',
              },
              metadata_filter: {
                type: 'object',
                title: 'Metadata Filter',
              },
              mode: {
                type: 'string',
                title: 'Mode',
                enum: ['text'],
              },
              num_search_messages: {
                type: 'integer',
                title: 'Num Search Messages',
              },
              trigram_similarity_threshold: {
                type: 'number',
                title: 'Trigram Similarity Threshold',
              },
            },
          },
          {
            type: 'object',
            title: 'HybridDocSearchUpdate',
            properties: {
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
              max_query_length: {
                type: 'integer',
                title: 'Max Query Length',
              },
              metadata_filter: {
                type: 'object',
                title: 'Metadata Filter',
              },
              mmr_strength: {
                type: 'number',
                title: 'Mmr Strength',
              },
              mode: {
                type: 'string',
                title: 'Mode',
                enum: ['hybrid'],
              },
              num_search_messages: {
                type: 'integer',
                title: 'Num Search Messages',
              },
              trigram_similarity_threshold: {
                type: 'number',
                title: 'Trigram Similarity Threshold',
              },
            },
          },
        ],
        title: 'Recall Options',
      },
      render_templates: {
        type: 'boolean',
        title: 'Render Templates',
      },
      situation: {
        type: 'string',
        title: 'Situation',
      },
      system_template: {
        type: 'string',
        title: 'System Template',
      },
      token_budget: {
        type: 'integer',
        title: 'Token Budget',
      },
    },
    required: ['session_id'],
  },
  annotations: {},
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.sessions.update(session_id, body));
};

export default { metadata, tool, handler };
