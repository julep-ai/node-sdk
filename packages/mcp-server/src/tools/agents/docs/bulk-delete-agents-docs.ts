// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.docs',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/agents/{agent_id}/docs',
  operationId: 'bulk_delete_agent_docs_agents__agent_id__docs_delete',
};

export const tool: Tool = {
  name: 'bulk_delete_agents_docs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBulk delete documents owned by an agent based on metadata filter\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ListResponse[ResourceDeletedResponse]',\n  properties: {\n    items: {\n      type: 'array',\n      title: 'Items',\n      items: {\n        type: 'object',\n        title: 'ResourceDeletedResponse',\n        properties: {\n          id: {\n            type: 'string',\n            title: 'Id'\n          },\n          deleted_at: {\n            type: 'string',\n            title: 'Deleted At',\n            format: 'date-time'\n          },\n          jobs: {\n            type: 'array',\n            title: 'Jobs',\n            items: {\n              type: 'string'\n            }\n          }\n        },\n        required: [          'id',\n          'deleted_at'\n        ]\n      }\n    }\n  },\n  required: [    'items'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      delete_all: {
        type: 'boolean',
        title: 'Delete All',
      },
      metadata_filter: {
        type: 'object',
        title: 'Metadata Filter',
        additionalProperties: true,
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['agent_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.agents.docs.bulkDelete(agent_id, body)),
  );
};

export default { metadata, tool, handler };
