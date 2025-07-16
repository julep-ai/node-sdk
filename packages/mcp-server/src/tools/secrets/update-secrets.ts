// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/secrets/{secret_id}',
  operationId: 'update_developer_secret_secrets__secret_id__put',
};

export const tool: Tool = {
  name: 'update_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nUpdate a developer secret.\n\nArgs:\n    developer_id: ID of the developer who owns the secret\n    secret_id: ID of the secret to update\n    data: New secret data\n\nReturns:\n    The updated secret\n\nRaises:\n    HTTPException: If the secret doesn't exist or doesn't belong to the developer\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/secret',\n  $defs: {\n    secret: {\n      type: 'object',\n      title: 'Secret',\n      description: 'A secret that can be used in tasks and sessions',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        value: {\n          type: 'string',\n          title: 'Value'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'updated_at',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      secret_id: {
        type: 'string',
        title: 'Secret Id',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      value: {
        type: 'string',
        title: 'Value',
      },
      description: {
        type: 'string',
        title: 'Description',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
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
  const { secret_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.secrets.update(secret_id, body)));
};

export default { metadata, tool, handler };
