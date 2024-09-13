// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Julep from '@julep/sdk';
import { Response } from 'node-fetch';

const client = new Julep({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tasks', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.tasks.create('agent_id', {
      main: [{ evaluate: { foo: 'string' } }],
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.agents.tasks.create('agent_id', {
      main: [{ evaluate: { foo: 'string' } }],
      name: 'name',
      description: 'description',
      inherit_tools: true,
      input_schema: {},
      metadata: {},
      tools: [
        {
          function: { description: 'description', name: {}, parameters: {} },
          name: 'name',
          api_call: {},
          integration: {},
          system: {},
          type: 'function',
        },
        {
          function: { description: 'description', name: {}, parameters: {} },
          name: 'name',
          api_call: {},
          integration: {},
          system: {},
          type: 'function',
        },
        {
          function: { description: 'description', name: {}, parameters: {} },
          name: 'name',
          api_call: {},
          integration: {},
          system: {},
          type: 'function',
        },
      ],
    });
  });

  test('list', async () => {
    const responsePromise = client.agents.tasks.list('agent_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.agents.tasks.list('agent_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Julep.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.tasks.list(
        'agent_id',
        { direction: 'asc', limit: 0, offset: 0, sort_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('createOrUpdate: only required params', async () => {
    const responsePromise = client.agents.tasks.createOrUpdate('agent_id', 'task_id', {
      main: [{ evaluate: { foo: 'string' } }],
      name: 'name',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createOrUpdate: required and optional params', async () => {
    const response = await client.agents.tasks.createOrUpdate('agent_id', 'task_id', {
      main: [{ evaluate: { foo: 'string' } }],
      name: 'name',
      description: 'description',
      inherit_tools: true,
      input_schema: {},
      metadata: {},
      tools: [
        {
          function: { description: 'description', name: {}, parameters: {} },
          name: 'name',
          api_call: {},
          integration: {},
          system: {},
          type: 'function',
        },
        {
          function: { description: 'description', name: {}, parameters: {} },
          name: 'name',
          api_call: {},
          integration: {},
          system: {},
          type: 'function',
        },
        {
          function: { description: 'description', name: {}, parameters: {} },
          name: 'name',
          api_call: {},
          integration: {},
          system: {},
          type: 'function',
        },
      ],
    });
  });
});
