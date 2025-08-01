// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'files',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/files',
  operationId: 'list_files_files_get',
};

export const tool: Tool = {
  name: 'list_files',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nList Files\n\n# Response Schema\n```json\n{\n  type: 'array',\n  title: 'Response List Files Files Get',\n  items: {\n    $ref: '#/$defs/file'\n  },\n  $defs: {\n    file: {\n      type: 'object',\n      title: 'File',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        content: {\n          type: 'string',\n          title: 'Content'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        hash: {\n          type: 'string',\n          title: 'Hash'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        size: {\n          type: 'integer',\n          title: 'Size'\n        },\n        description: {\n          type: 'string',\n          title: 'Description'\n        },\n        mime_type: {\n          type: 'string',\n          title: 'Mime Type'\n        },\n        project: {\n          type: 'string',\n          title: 'Project'\n        }\n      },\n      required: [        'id',\n        'content',\n        'created_at',\n        'hash',\n        'name',\n        'size'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
  const { jq_filter } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.files.list()));
};

export default { metadata, tool, handler };
