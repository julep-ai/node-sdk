// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/{user_id}',
  operationId: 'get_user_details_users__user_id__get',
};

export const tool: Tool = {
  name: 'get_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet User Details\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/user',\n  $defs: {\n    user: {\n      type: 'object',\n      title: 'User',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        about: {\n          type: 'string',\n          title: 'About'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        project: {\n          type: 'string',\n          title: 'Project'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
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
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { user_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.users.get(user_id)));
};

export default { metadata, tool, handler };
