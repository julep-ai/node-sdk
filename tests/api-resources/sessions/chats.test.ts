// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Julep from 'julep';
import { Response } from 'node-fetch';

const client = new Julep({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource chats', () => {
  test('create: only required params', async () => {
    const responsePromise = client.sessions.chats.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [{ content: 'string', role: 'user' }],
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
    const response = await client.sessions.chats.create('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      messages: [{ content: 'string', role: 'user', continue: true, name: 'name' }],
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
      top_p: 0,
    });
  });
});
