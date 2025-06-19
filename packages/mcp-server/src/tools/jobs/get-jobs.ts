// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Get Job Status',
  inputSchema: {
    type: 'object',
    properties: {
      job_id: {
        type: 'string',
        title: 'Job Id',
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { job_id, ...body } = args as any;
  return asTextContentResult(await client.jobs.get(job_id));
};

export default { metadata, tool, handler };
