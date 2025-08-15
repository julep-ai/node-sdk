// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sessions',
  operationId: 'create_session_sessions_post',
};

export const tool: Tool = {
  name: 'create_sessions',
  description: 'Create Session',
  inputSchema: {
    type: 'object',
    properties: {
      agent: {
        type: 'string',
        title: 'Agent',
      },
      agents: {
        type: 'array',
        title: 'Agents',
        items: {
          type: 'string',
        },
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
        additionalProperties: true,
      },
      recall_options: {
        anyOf: [
          {
            $ref: '#/$defs/vector_doc_search',
          },
          {
            $ref: '#/$defs/text_only_doc_search',
          },
          {
            $ref: '#/$defs/hybrid_doc_search',
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
      user: {
        type: 'string',
        title: 'User',
      },
      users: {
        type: 'array',
        title: 'Users',
        items: {
          type: 'string',
        },
      },
    },
    required: [],
    $defs: {
      vector_doc_search: {
        type: 'object',
        title: 'VectorDocSearch',
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
            additionalProperties: true,
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
      text_only_doc_search: {
        type: 'object',
        title: 'TextOnlyDocSearch',
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
            additionalProperties: true,
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
      hybrid_doc_search: {
        type: 'object',
        title: 'HybridDocSearch',
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
            additionalProperties: true,
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
    },
  },
  annotations: {},
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.sessions.create(body));
};

export default { metadata, tool, handler };
