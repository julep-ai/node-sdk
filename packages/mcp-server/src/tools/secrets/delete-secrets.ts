// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/secrets/{secret_id}',
  operationId: 'delete_developer_secret_secrets__secret_id__delete',
};

export const tool: Tool = {
  name: 'delete_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDelete a secret.\n\nArgs:\n    secret_id: ID of the secret to delete\n    x_developer_id: ID of the developer who owns the secret\n\nReturns:\n    The deleted secret\n\nRaises:\n    HTTPException: If the secret doesn't exist\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'ResourceDeletedResponse',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id'\n    },\n    deleted_at: {\n      type: 'string',\n      title: 'Deleted At',\n      format: 'date-time'\n    },\n    jobs: {\n      type: 'array',\n      title: 'Jobs',\n      items: {\n        type: 'string'\n      }\n    }\n  },\n  required: [    'id',\n    'deleted_at'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      secret_id: {
        type: 'string',
        title: 'Secret Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['secret_id'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { secret_id, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.secrets.delete(secret_id)));
};

export default { metadata, tool, handler };
