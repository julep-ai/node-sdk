// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
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
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Session\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/session',\n  $defs: {\n    session: {\n      type: 'object',\n      title: 'Session',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        auto_run_tools: {\n          type: 'boolean',\n          title: 'Auto Run Tools'\n        },\n        context_overflow: {\n          type: 'string',\n          title: 'Context Overflow',\n          enum: [            'truncate',\n            'adaptive'\n          ]\n        },\n        forward_tool_calls: {\n          type: 'boolean',\n          title: 'Forward Tool Calls'\n        },\n        kind: {\n          type: 'string',\n          title: 'Kind'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        recall_options: {\n          anyOf: [            {\n              $ref: '#/$defs/vector_doc_search'\n            },\n            {\n              $ref: '#/$defs/text_only_doc_search'\n            },\n            {\n              $ref: '#/$defs/hybrid_doc_search'\n            }\n          ],\n          title: 'Recall Options'\n        },\n        render_templates: {\n          type: 'boolean',\n          title: 'Render Templates'\n        },\n        situation: {\n          type: 'string',\n          title: 'Situation'\n        },\n        summary: {\n          type: 'string',\n          title: 'Summary'\n        },\n        system_template: {\n          type: 'string',\n          title: 'System Template'\n        },\n        token_budget: {\n          type: 'integer',\n          title: 'Token Budget'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'updated_at'\n      ]\n    },\n    vector_doc_search: {\n      type: 'object',\n      title: 'VectorDocSearch',\n      properties: {\n        confidence: {\n          type: 'number',\n          title: 'Confidence'\n        },\n        include_embeddings: {\n          type: 'boolean',\n          title: 'Include Embeddings'\n        },\n        lang: {\n          type: 'string',\n          title: 'Lang'\n        },\n        limit: {\n          type: 'integer',\n          title: 'Limit'\n        },\n        max_query_length: {\n          type: 'integer',\n          title: 'Max Query Length'\n        },\n        metadata_filter: {\n          type: 'object',\n          title: 'Metadata Filter'\n        },\n        mmr_strength: {\n          type: 'number',\n          title: 'Mmr Strength'\n        },\n        mode: {\n          type: 'string',\n          title: 'Mode',\n          enum: [            'vector'\n          ]\n        },\n        num_search_messages: {\n          type: 'integer',\n          title: 'Num Search Messages'\n        }\n      }\n    },\n    text_only_doc_search: {\n      type: 'object',\n      title: 'TextOnlyDocSearch',\n      properties: {\n        include_embeddings: {\n          type: 'boolean',\n          title: 'Include Embeddings'\n        },\n        lang: {\n          type: 'string',\n          title: 'Lang'\n        },\n        limit: {\n          type: 'integer',\n          title: 'Limit'\n        },\n        max_query_length: {\n          type: 'integer',\n          title: 'Max Query Length'\n        },\n        metadata_filter: {\n          type: 'object',\n          title: 'Metadata Filter'\n        },\n        mode: {\n          type: 'string',\n          title: 'Mode',\n          enum: [            'text'\n          ]\n        },\n        num_search_messages: {\n          type: 'integer',\n          title: 'Num Search Messages'\n        },\n        trigram_similarity_threshold: {\n          type: 'number',\n          title: 'Trigram Similarity Threshold'\n        }\n      }\n    },\n    hybrid_doc_search: {\n      type: 'object',\n      title: 'HybridDocSearch',\n      properties: {\n        alpha: {\n          type: 'number',\n          title: 'Alpha'\n        },\n        confidence: {\n          type: 'number',\n          title: 'Confidence'\n        },\n        include_embeddings: {\n          type: 'boolean',\n          title: 'Include Embeddings'\n        },\n        k_multiplier: {\n          type: 'integer',\n          title: 'K Multiplier'\n        },\n        lang: {\n          type: 'string',\n          title: 'Lang'\n        },\n        limit: {\n          type: 'integer',\n          title: 'Limit'\n        },\n        max_query_length: {\n          type: 'integer',\n          title: 'Max Query Length'\n        },\n        metadata_filter: {\n          type: 'object',\n          title: 'Metadata Filter'\n        },\n        mmr_strength: {\n          type: 'number',\n          title: 'Mmr Strength'\n        },\n        mode: {\n          type: 'string',\n          title: 'Mode',\n          enum: [            'hybrid'\n          ]\n        },\n        num_search_messages: {\n          type: 'integer',\n          title: 'Num Search Messages'\n        },\n        trigram_similarity_threshold: {\n          type: 'number',\n          title: 'Trigram Similarity Threshold'\n        }\n      }\n    }\n  }\n}\n```",
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
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
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
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.sessions.create(body)));
};

export default { metadata, tool, handler };
