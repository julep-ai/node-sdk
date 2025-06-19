// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
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
  description: 'Create Project',
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
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await client.projects.create(body));
};

export default { metadata, tool, handler };
