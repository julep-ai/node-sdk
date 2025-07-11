// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'executions.status',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/executions/{execution_id}/status.stream',
  operationId: 'stream_execution_status_executions__execution_id__status_stream_get',
};

export const tool: Tool = {
  name: 'stream_executions_status',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSSE endpoint that streams the status of a given execution_id by polling the\nlatest_executions view.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {}\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      execution_id: {
        type: 'string',
        title: 'Execution Id',
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
  const { execution_id, ...body } = args as any;
  const response = await client.executions.status.stream(execution_id).asResponse();
  return asTextContentResult(await response.text());
};

export default { metadata, tool, handler };
