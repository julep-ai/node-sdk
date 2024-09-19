// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Julep from '@julep/sdk';
import { Response } from 'node-fetch';

const client = new Julep({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource docs', () => {
  test('embed: only required params', async () => {
    const responsePromise = client.docs.embed({ text: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('embed: required and optional params', async () => {
    const response = await client.docs.embed({ text: 'string' });
  });

  test('get', async () => {
    const responsePromise = client.docs.get('doc_id');
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
    await expect(client.docs.get('doc_id', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Julep.NotFoundError,
    );
  });
});
