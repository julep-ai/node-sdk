// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Julep from '@julep/sdk';
import { Response } from 'node-fetch';

const client = new Julep({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tools', () => {
  test('create: only required params', async () => {
    const responsePromise = client.agents.tools.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'name',
      type: 'function',
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
    const response = await client.agents.tools.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      name: 'name',
      type: 'function',
      api_call: {
        method: 'GET',
        url: 'https://example.com',
        content: 'content',
        cookies: { foo: 'string' },
        data: {},
        files: {},
        follow_redirects: true,
        headers: { foo: 'string' },
        json: {},
        params: 'string',
        schema: {},
        timeout: 0,
      },
      bash_20241022: { name: 'name', type: 'bash_20241022' },
      computer_20241022: {
        display_height_px: 400,
        display_number: 1,
        display_width_px: 600,
        name: 'name',
        type: 'computer_20241022',
      },
      description: 'description',
      function: { description: {}, name: {}, parameters: {} },
      integration: { arguments: {}, method: 'method', provider: 'dummy', setup: {} },
      system: {
        operation: 'create',
        resource: 'agent',
        arguments: {},
        resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        subresource: 'tool',
      },
      text_editor_20241022: { name: 'name', type: 'text_editor_20241022' },
    });
  });

  test('update', async () => {
    const responsePromise = client.agents.tools.update(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {},
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.agents.tools.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
    await expect(
      client.agents.tools.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.tools.list(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { direction: 'asc', limit: 0, offset: 0, sort_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.agents.tools.delete(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.agents.tools.delete(
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('reset: only required params', async () => {
    const responsePromise = client.agents.tools.reset(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      { name: 'name', type: 'function' },
    );
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('reset: required and optional params', async () => {
    const response = await client.agents.tools.reset(
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      {
        name: 'name',
        type: 'function',
        api_call: {
          method: 'GET',
          url: 'https://example.com',
          content: 'content',
          cookies: { foo: 'string' },
          data: {},
          files: {},
          follow_redirects: true,
          headers: { foo: 'string' },
          json: {},
          params: 'string',
          schema: {},
          timeout: 0,
        },
        bash_20241022: { name: 'name', type: 'bash_20241022' },
        computer_20241022: {
          display_height_px: 400,
          display_number: 1,
          display_width_px: 600,
          name: 'name',
          type: 'computer_20241022',
        },
        description: 'description',
        function: { description: {}, name: {}, parameters: {} },
        integration: { arguments: {}, method: 'method', provider: 'dummy', setup: {} },
        system: {
          operation: 'create',
          resource: 'agent',
          arguments: {},
          resource_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          subresource: 'tool',
        },
        text_editor_20241022: { name: 'name', type: 'text_editor_20241022' },
      },
    );
  });
});
