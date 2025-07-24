// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/secrets',
  operationId: 'list_developer_secrets_secrets_get',
};

export const tool: Tool = {
  name: 'list_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList all secrets for a developer.\n\nArgs:\n    x_developer_id: ID of the developer whose secrets to list\n    limit: Maximum number of secrets to return\n    offset: Number of secrets to skip\n\nReturns:\n    List of secrets\n\n# Response Schema\n```json\n{\n  type: 'array',\n  title: 'Response List Developer Secrets Secrets Get',\n  items: {\n    $ref: '#/$defs/secret'\n  },\n  $defs: {\n    secret: {\n      type: 'object',\n      title: 'Secret',\n      description: 'A secret that can be used in tasks and sessions',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        value: {\n          type: 'string',\n          title: 'Value'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'updated_at',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      limit: {
        type: 'integer',
        title: 'Limit',
      },
      offset: {
        type: 'integer',
        title: 'Offset',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.secrets.list(body)));
};

export default { metadata, tool, handler };
