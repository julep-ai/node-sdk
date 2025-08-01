// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'projects',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/projects',
  operationId: 'create_project_projects_post',
};

export const tool: Tool = {
  name: 'create_projects',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCreate Project\n\n# Response Schema\n```json\n{\n  type: 'object',\n  title: 'Project',\n  description: 'Project model',\n  properties: {\n    id: {\n      type: 'string',\n      title: 'Id'\n    },\n    created_at: {\n      type: 'string',\n      title: 'Created At',\n      format: 'date-time'\n    },\n    name: {\n      type: 'string',\n      title: 'Name'\n    },\n    updated_at: {\n      type: 'string',\n      title: 'Updated At',\n      format: 'date-time'\n    },\n    canonical_name: {\n      type: 'string',\n      title: 'Canonical Name'\n    },\n    metadata: {\n      type: 'object',\n      title: 'Metadata'\n    }\n  },\n  required: [    'id',\n    'created_at',\n    'name',\n    'updated_at'\n  ]\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
      },
      canonical_name: {
        type: 'string',
        title: 'Canonical Name',
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
    required: ['name'],
  },
  annotations: {},
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.projects.create(body)));
};

export default { metadata, tool, handler };
