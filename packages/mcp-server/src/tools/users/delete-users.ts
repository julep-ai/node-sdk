// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/users/{user_id}',
  operationId: 'delete_user_users__user_id__delete',
};

export const tool: Tool = {
  name: 'delete_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete User\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ResourceDeletedResponse',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id'\n    },\n    deleted_at: {\n      type: 'string',\n      title: 'Deleted At',\n      format: 'date-time'\n    },\n    jobs: {\n      type: 'array',\n      title: 'Jobs',\n      items: {\n        type: 'string'\n      }\n    }\n  },\n  required: [    'id',\n    'deleted_at'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      user_id: {
        type: 'string',
        title: 'User Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['user_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.users.delete(user_id)));
};

export default { metadata, tool, handler };
