// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Julep from '@julep/sdk';
import { Response } from 'node-fetch';

const client = new Julep({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sessions', () => {
  test('create', async () => {
    const responsePromise = client.sessions.create({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update', async () => {
    const responsePromise = client.sessions.update('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.sessions.list();
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
    await expect(client.sessions.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Julep.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.list(
        { direction: 'asc', limit: 0, metadata_filter: { foo: 'bar' }, offset: 0, sort_by: 'created_at' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.sessions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.sessions.delete('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('chat: only required params', async () => {
    const responsePromise = client.sessions.chat('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [{ role: 'user' }],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('chat: required and optional params', async () => {
    const response = await client.sessions.chat('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [
        {
          role: 'user',
          content: 'string',
          continue: true,
          name: 'name',
          tool_call_id: 'tool_call_id',
          tool_calls: [
            {
              function: { name: 'name', arguments: 'arguments' },
              api_call: {},
              bash_20241022: { command: 'command', restart: true },
              computer_20241022: { action: 'key', coordinate: [0, 0, 0], text: 'text' },
              integration: {},
              system: {},
              text_editor_20241022: {
                command: 'str_replace',
                path: 'path',
                file_text: 'file_text',
                insert_line: 0,
                new_str: 'new_str',
                old_str: 'old_str',
                view_range: [0, 0, 0],
              },
              type: 'function',
            },
            {
              function: { name: 'name', arguments: 'arguments' },
              api_call: {},
              bash_20241022: { command: 'command', restart: true },
              computer_20241022: { action: 'key', coordinate: [0, 0, 0], text: 'text' },
              integration: {},
              system: {},
              text_editor_20241022: {
                command: 'str_replace',
                path: 'path',
                file_text: 'file_text',
                insert_line: 0,
                new_str: 'new_str',
                old_str: 'old_str',
                view_range: [0, 0, 0],
              },
              type: 'function',
            },
            {
              function: { name: 'name', arguments: 'arguments' },
              api_call: {},
              bash_20241022: { command: 'command', restart: true },
              computer_20241022: { action: 'key', coordinate: [0, 0, 0], text: 'text' },
              integration: {},
              system: {},
              text_editor_20241022: {
                command: 'str_replace',
                path: 'path',
                file_text: 'file_text',
                insert_line: 0,
                new_str: 'new_str',
                old_str: 'old_str',
                view_range: [0, 0, 0],
              },
              type: 'function',
            },
          ],
        },
      ],
      agent: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      frequency_penalty: -2,
      length_penalty: 0,
      logit_bias: { foo: -100 },
      max_tokens: 1,
      min_p: 0,
      model: 'model',
      presence_penalty: -2,
      recall: true,
      repetition_penalty: 0,
      response_format: { type: 'text' },
      save: true,
      seed: -1,
      stop: ['string', 'string', 'string'],
      stream: true,
      temperature: 0,
      tool_choice: 'auto',
      tools: [
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
      ],
      top_p: 0,
      'X-Custom-Api-Key': 'X-Custom-Api-Key',
    });
  });

  test('createOrUpdate', async () => {
    const responsePromise = client.sessions.createOrUpdate('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get', async () => {
    const responsePromise = client.sessions.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.get('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('history', async () => {
    const responsePromise = client.sessions.history('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('history: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sessions.history('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Julep.NotFoundError);
  });

  test('patch', async () => {
    const responsePromise = client.sessions.patch('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
