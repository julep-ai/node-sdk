// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'secrets',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/secrets',
  operationId: 'create_developer_secret_secrets_post',
};

export const tool: Tool = {
  name: 'create_secrets',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate a new secret for a developer.\n\nArgs:\n    developer_id: ID of the developer creating the secret\n    secret: Secret to create\n\nReturns:\n    The created secret\n\nRaises:\n    HTTPException: If a secret with this name already exists (409 Conflict)\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/secret',\n  $defs: {\n    secret: {\n      type: 'object',\n      title: 'Secret',\n      description: 'A secret that can be used in tasks and sessions',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        value: {\n          type: 'string',\n          title: 'Value'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        metadata: {\n          type: 'object',\n          title: 'Metadata'\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'name',\n        'updated_at',\n        'value'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.secrets.create(body)));
};

export default { metadata, tool, handler };
