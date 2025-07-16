// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/agents',
  operationId: 'create_agent_agents_post',
};

export const tool: Tool = {
  name: 'create_agents',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Agent\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/agent',\n  $defs: {\n    agent: {\n      type: 'object',\n      title: 'Agent',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        about: {\n          type: 'string',\n          title: 'About'\n        },\n        canonical_name: {\n          type: 'string',\n          title: 'Canonical Name'\n        },\n        default_settings: {\n          type: 'object',\n          title: 'Default Settings'\n        },\n        default_system_template: {\n          type: 'string',\n          title: 'Default System Template'\n        },\n        instructions: {\n          anyOf: [            {\n              type: 'string'\n            },\n            {\n              type: 'array',\n              items: {\n                type: 'string'\n              }\n            }\n          ],\n          title: 'Instructions'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        model: {\n          type: 'string',\n          title: 'Model'\n        },\n        project: {\n          type: 'string',\n          title: 'Project'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      about: {
        type: 'string',
        title: 'About',
      },
      canonical_name: {
        type: 'string',
        title: 'Canonical Name',
      },
      default_settings: {
        type: 'object',
        title: 'Default Settings',
      },
      default_system_template: {
        type: 'string',
        title: 'Default System Template',
      },
      instructions: {
        anyOf: [
          {
            type: 'string',
          },
          {
            type: 'array',
            items: {
              type: 'string',
            },
          },
        ],
        title: 'Instructions',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      model: {
        type: 'string',
        title: 'Model',
      },
      project: {
        type: 'string',
        title: 'Project',
      },
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.agents.create(body)));
};

export default { metadata, tool, handler };
