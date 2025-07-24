// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from '@julep/sdk-mcp/filtering';
import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'jobs',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/jobs/{job_id}',
  operationId: 'get_job_status_jobs__job_id__get',
};

export const tool: Tool = {
  name: 'get_jobs',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nGet Job Status\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/job_status',\n  $defs: {\n    job_status: {\n      type: 'object',\n      title: 'JobStatus',\n      properties: {\n        id: {\n          type: 'string',\n          title: 'Id'\n        },\n        created_at: {\n          type: 'string',\n          title: 'Created At',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          title: 'Updated At',\n          format: 'date-time'\n        },\n        has_progress: {\n          type: 'boolean',\n          title: 'Has Progress'\n        },\n        name: {\n          type: 'string',\n          title: 'Name'\n        },\n        progress: {\n          type: 'number',\n          title: 'Progress'\n        },\n        reason: {\n          type: 'string',\n          title: 'Reason'\n        },\n        state: {\n          type: 'string',\n          title: 'State',\n          enum: [            'pending',\n            'in_progress',\n            'retrying',\n            'succeeded',\n            'aborted',\n            'failed',\n            'unknown'\n          ]\n        }\n      },\n      required: [        'id',\n        'created_at',\n        'updated_at'\n      ]\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
        title: 'Job Id',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['job_id'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.jobs.get(job_id)));
};

export default { metadata, tool, handler };
