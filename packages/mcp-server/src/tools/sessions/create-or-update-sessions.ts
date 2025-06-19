// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sessions/{session_id}',
  operationId: 'create_or_update_session_sessions__session_id__post',
};

export const tool: Tool = {
  name: 'create_or_update_sessions',
  description: 'Create Or Update Session',
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
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
    $defs: {
      vector_doc_search: {
        type: 'object',
        title: 'VectorDocSearch',
        properties: {
          confidence: {
            type: 'number',
            title: 'Confidence',
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
        required: [],
      },
      text_only_doc_search: {
        type: 'object',
        title: 'TextOnlyDocSearch',
        properties: {
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
        required: [],
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
        required: [],
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.sessions.createOrUpdate(session_id, body));
};

export default { metadata, tool, handler };
