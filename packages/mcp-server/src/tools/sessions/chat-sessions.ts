// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'sessions',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/sessions/{session_id}/chat',
  operationId: 'chat_sessions__session_id__chat_post',
};

export const tool: Tool = {
  name: 'chat_sessions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nInitiates a chat session.\n\nRoutes to different implementations based on feature flags:\n- If auto_run_tools_chat feature flag is enabled, uses the new auto-tools implementation\n- Otherwise, uses the legacy implementation\n\nParameters:\n    developer (Developer): The developer associated with the chat session.\n    session_id (UUID): The unique identifier of the chat session.\n    chat_input (ChatInput): The chat input data.\n    background_tasks (BackgroundTasks): The background tasks to run.\n    x_custom_api_key (Optional[str]): The custom API key.\n    mock_response (Optional[str]): Mock response for testing.\n    connection_pool: Connection pool for testing purposes.\n\nReturns:\n    ChatResponse or StreamingResponse: The chat response or streaming response.",
  inputSchema: {
    type: 'object',
    properties: {
      session_id: {
        type: 'string',
        title: 'Session Id',
      },
      messages: {
        type: 'array',
        title: 'Messages',
        items: {
          type: 'object',
          title: 'Message',
          properties: {
            role: {
              type: 'string',
              title: 'Role',
              enum: ['user', 'assistant', 'system', 'tool'],
            },
            content: {
              anyOf: [
                {
                  type: 'string',
                },
                {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
                {
                  type: 'array',
                  items: {
                    anyOf: [
                      {
                        type: 'object',
                        title: 'Content',
                        properties: {
                          text: {
                            type: 'string',
                            title: 'Text',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['text'],
                          },
                        },
                        required: ['text'],
                      },
                      {
                        type: 'object',
                        title: 'ContentModel7',
                        properties: {
                          image_url: {
                            type: 'object',
                            title: 'ImageUrl',
                            description: 'The image URL',
                            properties: {
                              url: {
                                type: 'string',
                                title: 'Url',
                              },
                              detail: {
                                type: 'string',
                                title: 'Detail',
                                enum: ['low', 'high', 'auto'],
                              },
                            },
                            required: ['url'],
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['image_url'],
                          },
                        },
                        required: ['image_url'],
                      },
                      {
                        type: 'object',
                        title: 'ContentModel',
                        description: 'Anthropic image content part',
                        properties: {
                          content: {
                            anyOf: [
                              {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  title: 'ContentItem',
                                  properties: {
                                    text: {
                                      type: 'string',
                                      title: 'Text',
                                    },
                                    type: {
                                      type: 'string',
                                      title: 'Type',
                                      enum: ['text'],
                                    },
                                  },
                                  required: ['text'],
                                },
                              },
                              {
                                type: 'array',
                                items: {
                                  type: 'object',
                                  title: 'ContentItemModel',
                                  properties: {
                                    source: {
                                      type: 'object',
                                      title: 'Source',
                                      properties: {
                                        data: {
                                          type: 'string',
                                          title: 'Data',
                                        },
                                        media_type: {
                                          type: 'string',
                                          title: 'Media Type',
                                        },
                                        type: {
                                          type: 'string',
                                          title: 'Type',
                                          enum: ['base64'],
                                        },
                                      },
                                      required: ['data', 'media_type'],
                                    },
                                    type: {
                                      type: 'string',
                                      title: 'Type',
                                      enum: ['image'],
                                    },
                                  },
                                  required: ['source'],
                                },
                              },
                            ],
                            title: 'Content',
                          },
                          tool_use_id: {
                            type: 'string',
                            title: 'Tool Use Id',
                          },
                          type: {
                            type: 'string',
                            title: 'Type',
                            enum: ['tool_result'],
                          },
                        },
                        required: ['content', 'tool_use_id'],
                      },
                    ],
                    description: 'Anthropic image content part',
                  },
                },
              ],
              title: 'Content',
            },
            continue: {
              type: 'boolean',
              title: 'Continue',
            },
            name: {
              type: 'string',
              title: 'Name',
            },
            tool_call_id: {
              type: 'string',
              title: 'Tool Call Id',
            },
            tool_calls: {
              type: 'array',
              title: 'Tool Calls',
              items: {
                anyOf: [
                  {
                    $ref: '#/$defs/chosen_function_call',
                  },
                  {
                    $ref: '#/$defs/chosen_computer20241022',
                  },
                  {
                    $ref: '#/$defs/chosen_text_editor20241022',
                  },
                  {
                    $ref: '#/$defs/chosen_bash20241022',
                  },
                ],
              },
            },
          },
          required: ['role'],
        },
      },
      connection_pool: {
        type: 'object',
        title: 'Connection Pool',
      },
      agent: {
        type: 'string',
        title: 'Agent',
      },
      auto_run_tools: {
        type: 'boolean',
        title: 'Auto Run Tools',
      },
      frequency_penalty: {
        type: 'number',
        title: 'Frequency Penalty',
      },
      length_penalty: {
        type: 'number',
        title: 'Length Penalty',
      },
      logit_bias: {
        type: 'object',
        title: 'Logit Bias',
      },
      max_tokens: {
        type: 'integer',
        title: 'Max Tokens',
      },
      metadata: {
        type: 'object',
        title: 'Metadata',
      },
      min_p: {
        type: 'number',
        title: 'Min P',
      },
      model: {
        type: 'string',
        title: 'Model',
      },
      presence_penalty: {
        type: 'number',
        title: 'Presence Penalty',
      },
      recall: {
        type: 'boolean',
        title: 'Recall',
      },
      recall_tools: {
        type: 'boolean',
        title: 'Recall Tools',
      },
      repetition_penalty: {
        type: 'number',
        title: 'Repetition Penalty',
      },
      response_format: {
        anyOf: [
          {
            $ref: '#/$defs/simple_completion_response_format',
          },
          {
            $ref: '#/$defs/schema_completion_response_format',
          },
        ],
        title: 'Response Format',
      },
      save: {
        type: 'boolean',
        title: 'Save',
      },
      seed: {
        type: 'integer',
        title: 'Seed',
      },
      stop: {
        type: 'array',
        title: 'Stop',
        items: {
          type: 'string',
        },
      },
      stream: {
        type: 'boolean',
        title: 'Stream',
      },
      temperature: {
        type: 'number',
        title: 'Temperature',
      },
      tool_choice: {
        anyOf: [
          {
            type: 'string',
            enum: ['auto', 'none'],
          },
          {
            $ref: '#/$defs/named_tool_choice',
          },
        ],
        title: 'Tool Choice',
      },
      tools: {
        type: 'array',
        title: 'Tools',
        items: {
          type: 'object',
          title: 'CreateToolRequest',
          description: 'Payload for creating a tool',
          properties: {
            name: {
              type: 'string',
              title: 'Name',
            },
            type: {
              type: 'string',
              title: 'Type',
              enum: [
                'function',
                'integration',
                'system',
                'api_call',
                'computer_20241022',
                'text_editor_20241022',
                'bash_20241022',
              ],
            },
            api_call: {
              type: 'object',
              title: 'ApiCallDef',
              description: 'API call definition',
              properties: {
                method: {
                  type: 'string',
                  title: 'Method',
                  enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'],
                },
                url: {
                  type: 'string',
                  title: 'Url',
                },
                content: {
                  type: 'string',
                  title: 'Content',
                },
                cookies: {
                  type: 'object',
                  title: 'Cookies',
                },
                data: {
                  type: 'object',
                  title: 'Data',
                },
                files: {
                  type: 'object',
                  title: 'Files',
                },
                follow_redirects: {
                  type: 'boolean',
                  title: 'Follow Redirects',
                },
                headers: {
                  type: 'object',
                  title: 'Headers',
                },
                include_response_content: {
                  type: 'boolean',
                  title: 'Include Response Content',
                },
                json: {
                  type: 'object',
                  title: 'Json',
                },
                params: {
                  anyOf: [
                    {
                      type: 'string',
                    },
                    {
                      type: 'object',
                    },
                  ],
                  title: 'Params',
                },
                params_schema: {
                  type: 'object',
                  title: 'ParameterSchema',
                  description: 'JSON Schema for API call parameters',
                  properties: {
                    properties: {
                      type: 'object',
                      title: 'Properties',
                    },
                    additionalProperties: {
                      type: 'boolean',
                      title: 'Additionalproperties',
                    },
                    required: {
                      type: 'array',
                      title: 'Required',
                      items: {
                        type: 'string',
                      },
                    },
                    type: {
                      type: 'string',
                      title: 'Type',
                    },
                  },
                  required: ['properties'],
                },
                schema: {
                  type: 'object',
                  title: 'Schema',
                },
                secrets: {
                  type: 'object',
                  title: 'Secrets',
                },
                timeout: {
                  type: 'integer',
                  title: 'Timeout',
                },
              },
              required: ['method', 'url'],
            },
            bash_20241022: {
              $ref: '#/$defs/bash20241022_def',
            },
            computer_20241022: {
              $ref: '#/$defs/computer20241022_def',
            },
            description: {
              type: 'string',
              title: 'Description',
            },
            function: {
              $ref: '#/$defs/function_def',
            },
            integration: {
              anyOf: [
                {
                  $ref: '#/$defs/dummy_integration_def',
                },
                {
                  $ref: '#/$defs/brave_integration_def',
                },
                {
                  $ref: '#/$defs/email_integration_def',
                },
                {
                  $ref: '#/$defs/spider_integration_def',
                },
                {
                  $ref: '#/$defs/wikipedia_integration_def',
                },
                {
                  $ref: '#/$defs/weather_integration_def',
                },
                {
                  $ref: '#/$defs/mailgun_integration_def',
                },
                {
                  $ref: '#/$defs/browserbase_context_integration_def',
                },
                {
                  $ref: '#/$defs/browserbase_extension_integration_def',
                },
                {
                  $ref: '#/$defs/browserbase_list_sessions_integration_def',
                },
                {
                  $ref: '#/$defs/browserbase_create_session_integration_def',
                },
                {
                  $ref: '#/$defs/browserbase_get_session_integration_def',
                },
                {
                  $ref: '#/$defs/browserbase_complete_session_integration_def',
                },
                {
                  $ref: '#/$defs/browserbase_get_session_live_urls_integration_def',
                },
                {
                  $ref: '#/$defs/remote_browser_integration_def',
                },
                {
                  $ref: '#/$defs/llama_parse_integration_def',
                },
                {
                  $ref: '#/$defs/ffmpeg_integration_def',
                },
                {
                  $ref: '#/$defs/cloudinary_upload_integration_def',
                },
                {
                  $ref: '#/$defs/cloudinary_edit_integration_def',
                },
                {
                  $ref: '#/$defs/arxiv_integration_def',
                },
                {
                  $ref: '#/$defs/unstructured_integration_def',
                },
                {
                  $ref: '#/$defs/algolia_integration_def',
                },
              ],
              title: 'Integration',
              description: 'Brave integration definition',
            },
            system: {
              $ref: '#/$defs/system_def',
            },
            text_editor_20241022: {
              $ref: '#/$defs/text_editor20241022_def',
            },
          },
          required: ['name', 'type'],
        },
      },
      top_p: {
        type: 'number',
        title: 'Top P',
      },
      'X-Custom-Api-Key': {
        type: 'string',
        title: 'X-Custom-Api-Key',
      },
    },
    $defs: {
      chosen_function_call: {
        type: 'object',
        title: 'ChosenFunctionCall',
        properties: {
          function: {
            $ref: '#/$defs/function_call_option',
          },
          id: {
            type: 'string',
            title: 'Id',
          },
          api_call: {
            type: 'object',
            title: 'Api Call',
          },
          bash_20241022: {
            $ref: '#/$defs/chosen_bash20241022',
          },
          computer_20241022: {
            $ref: '#/$defs/chosen_computer20241022',
          },
          integration: {
            type: 'object',
            title: 'Integration',
          },
          system: {
            type: 'object',
            title: 'System',
          },
          text_editor_20241022: {
            $ref: '#/$defs/chosen_text_editor20241022',
          },
          type: {
            type: 'string',
            title: 'Type',
            enum: ['function'],
          },
        },
        required: ['function'],
      },
      function_call_option: {
        type: 'object',
        title: 'FunctionCallOption',
        properties: {
          name: {
            type: 'string',
            title: 'Name',
          },
          arguments: {
            type: 'string',
            title: 'Arguments',
          },
        },
        required: ['name'],
      },
      chosen_bash20241022: {
        type: 'object',
        title: 'ChosenBash20241022',
        properties: {
          command: {
            type: 'string',
            title: 'Command',
          },
          restart: {
            type: 'boolean',
            title: 'Restart',
          },
        },
        required: [],
      },
      chosen_computer20241022: {
        type: 'object',
        title: 'ChosenComputer20241022',
        properties: {
          action: {
            type: 'string',
            title: 'Action',
            enum: [
              'key',
              'type',
              'cursor_position',
              'mouse_move',
              'left_click',
              'right_click',
              'middle_click',
              'double_click',
              'screenshot',
            ],
          },
          coordinate: {
            type: 'array',
            title: 'Coordinate',
            items: {
              type: 'integer',
            },
          },
          text: {
            type: 'string',
            title: 'Text',
          },
        },
        required: ['action'],
      },
      chosen_text_editor20241022: {
        type: 'object',
        title: 'ChosenTextEditor20241022',
        properties: {
          command: {
            type: 'string',
            title: 'Command',
            enum: ['str_replace', 'insert', 'view', 'undo_edit'],
          },
          path: {
            type: 'string',
            title: 'Path',
          },
          file_text: {
            type: 'string',
            title: 'File Text',
          },
          insert_line: {
            type: 'integer',
            title: 'Insert Line',
          },
          new_str: {
            type: 'string',
            title: 'New Str',
          },
          old_str: {
            type: 'string',
            title: 'Old Str',
          },
          view_range: {
            type: 'array',
            title: 'View Range',
            items: {
              type: 'integer',
            },
          },
        },
        required: ['command', 'path'],
      },
      simple_completion_response_format: {
        type: 'object',
        title: 'SimpleCompletionResponseFormat',
        properties: {
          type: {
            type: 'string',
            title: 'Type',
            enum: ['text', 'json_object'],
          },
        },
        required: [],
      },
      schema_completion_response_format: {
        type: 'object',
        title: 'SchemaCompletionResponseFormat',
        properties: {
          json_schema: {
            type: 'object',
            title: 'Json Schema',
          },
          type: {
            type: 'string',
            title: 'Type',
            enum: ['json_schema'],
          },
        },
        required: ['json_schema'],
      },
      named_tool_choice: {
        type: 'object',
        title: 'NamedToolChoice',
        properties: {
          function: {
            $ref: '#/$defs/function_call_option',
          },
        },
        required: [],
      },
      bash20241022_def: {
        type: 'object',
        title: 'Bash20241022Def',
        properties: {
          name: {
            type: 'string',
            title: 'Name',
          },
          type: {
            type: 'string',
            title: 'Type',
            enum: ['bash_20241022'],
          },
        },
        required: [],
      },
      computer20241022_def: {
        type: 'object',
        title: 'Computer20241022Def',
        description: 'Anthropic new tools',
        properties: {
          display_height_px: {
            type: 'integer',
            title: 'Display Height Px',
          },
          display_number: {
            type: 'integer',
            title: 'Display Number',
          },
          display_width_px: {
            type: 'integer',
            title: 'Display Width Px',
          },
          name: {
            type: 'string',
            title: 'Name',
          },
          type: {
            type: 'string',
            title: 'Type',
            enum: ['computer_20241022'],
          },
        },
        required: [],
      },
      function_def: {
        type: 'object',
        title: 'FunctionDef',
        description: 'Function definition',
        properties: {
          description: {
            type: 'object',
            title: 'Description',
          },
          name: {
            type: 'object',
            title: 'Name',
          },
          parameters: {
            type: 'object',
            title: 'Parameters',
          },
        },
        required: [],
      },
      dummy_integration_def: {
        type: 'object',
        title: 'DummyIntegrationDef',
        properties: {
          arguments: {
            type: 'object',
            title: 'Arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['dummy'],
          },
          setup: {
            type: 'object',
            title: 'Setup',
          },
        },
        required: [],
      },
      brave_integration_def: {
        type: 'object',
        title: 'BraveIntegrationDef',
        description: 'Brave integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/brave_search_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['brave'],
          },
          setup: {
            $ref: '#/$defs/brave_search_setup',
          },
        },
        required: [],
      },
      brave_search_arguments: {
        type: 'object',
        title: 'BraveSearchArguments',
        description: 'Arguments for Brave Search',
        properties: {
          query: {
            type: 'string',
            title: 'Query',
          },
        },
        required: ['query'],
      },
      brave_search_setup: {
        type: 'object',
        title: 'BraveSearchSetup',
        description: 'Integration definition for Brave Search',
        properties: {
          brave_api_key: {
            type: 'string',
            title: 'Brave Api Key',
          },
        },
        required: ['brave_api_key'],
      },
      email_integration_def: {
        type: 'object',
        title: 'EmailIntegrationDef',
        description: 'Email integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/email_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['email'],
          },
          setup: {
            $ref: '#/$defs/email_setup',
          },
        },
        required: [],
      },
      email_arguments: {
        type: 'object',
        title: 'EmailArguments',
        description: 'Arguments for Email sending',
        properties: {
          body: {
            type: 'string',
            title: 'Body',
          },
          from: {
            type: 'string',
            title: 'From',
          },
          subject: {
            type: 'string',
            title: 'Subject',
          },
          to: {
            type: 'string',
            title: 'To',
          },
        },
        required: ['body', 'from', 'subject', 'to'],
      },
      email_setup: {
        type: 'object',
        title: 'EmailSetup',
        description: 'Setup parameters for Email integration',
        properties: {
          host: {
            type: 'string',
            title: 'Host',
          },
          password: {
            type: 'string',
            title: 'Password',
          },
          port: {
            type: 'integer',
            title: 'Port',
          },
          user: {
            type: 'string',
            title: 'User',
          },
        },
        required: ['host', 'password', 'port', 'user'],
      },
      spider_integration_def: {
        type: 'object',
        title: 'SpiderIntegrationDef',
        description: 'Spider integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/spider_fetch_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['crawl', 'links', 'screenshot', 'search'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['spider'],
          },
          setup: {
            $ref: '#/$defs/spider_setup',
          },
        },
        required: [],
      },
      spider_fetch_arguments: {
        type: 'object',
        title: 'SpiderFetchArguments',
        description: 'Arguments for Spider integration',
        properties: {
          url: {
            type: 'string',
            title: 'Url',
          },
          content_type: {
            type: 'string',
            title: 'Content Type',
            enum: ['application/json', 'text/csv', 'application/xml', 'application/jsonl'],
          },
          params: {
            type: 'object',
            title: 'Params',
          },
        },
        required: ['url'],
      },
      spider_setup: {
        type: 'object',
        title: 'SpiderSetup',
        description: 'Setup parameters for Spider integration',
        properties: {
          spider_api_key: {
            type: 'string',
            title: 'Spider Api Key',
          },
        },
        required: ['spider_api_key'],
      },
      wikipedia_integration_def: {
        type: 'object',
        title: 'WikipediaIntegrationDef',
        description: 'Wikipedia integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/wikipedia_search_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['wikipedia'],
          },
          setup: {
            type: 'object',
            title: 'Setup',
          },
        },
        required: [],
      },
      wikipedia_search_arguments: {
        type: 'object',
        title: 'WikipediaSearchArguments',
        description: 'Arguments for Wikipedia Search',
        properties: {
          query: {
            type: 'string',
            title: 'Query',
          },
          load_max_docs: {
            type: 'integer',
            title: 'Load Max Docs',
          },
        },
        required: ['query'],
      },
      weather_integration_def: {
        type: 'object',
        title: 'WeatherIntegrationDef',
        description: 'Weather integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/weather_get_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['weather'],
          },
          setup: {
            $ref: '#/$defs/weather_setup',
          },
        },
        required: [],
      },
      weather_get_arguments: {
        type: 'object',
        title: 'WeatherGetArguments',
        description: 'Arguments for Weather',
        properties: {
          location: {
            type: 'string',
            title: 'Location',
          },
        },
        required: ['location'],
      },
      weather_setup: {
        type: 'object',
        title: 'WeatherSetup',
        description: 'Integration definition for Weather',
        properties: {
          openweathermap_api_key: {
            type: 'string',
            title: 'Openweathermap Api Key',
          },
        },
        required: ['openweathermap_api_key'],
      },
      mailgun_integration_def: {
        type: 'object',
        title: 'MailgunIntegrationDef',
        description: 'Mailgun integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/mailgun_send_email_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['send_email'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['mailgun'],
          },
          setup: {
            $ref: '#/$defs/mailgun_setup',
          },
        },
        required: [],
      },
      mailgun_send_email_arguments: {
        type: 'object',
        title: 'MailgunSendEmailArguments',
        description: 'Arguments for mailgun.send_email method',
        properties: {
          body: {
            type: 'string',
            title: 'Body',
          },
          from: {
            type: 'string',
            title: 'From',
          },
          subject: {
            type: 'string',
            title: 'Subject',
          },
          to: {
            type: 'string',
            title: 'To',
          },
          bcc: {
            type: 'string',
            title: 'Bcc',
          },
          cc: {
            type: 'string',
            title: 'Cc',
          },
        },
        required: ['body', 'from', 'subject', 'to'],
      },
      mailgun_setup: {
        type: 'object',
        title: 'MailgunSetup',
        description: 'Setup parameters for Mailgun integration',
        properties: {
          api_key: {
            type: 'string',
            title: 'Api Key',
          },
        },
        required: ['api_key'],
      },
      browserbase_context_integration_def: {
        type: 'object',
        title: 'BrowserbaseContextIntegrationDef',
        description: 'browserbase context provider',
        properties: {
          arguments: {
            $ref: '#/$defs/browserbase_context_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['create_context'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['browserbase'],
          },
          setup: {
            $ref: '#/$defs/browserbase_setup',
          },
        },
        required: [],
      },
      browserbase_context_arguments: {
        type: 'object',
        title: 'BrowserbaseContextArguments',
        properties: {
          projectId: {
            type: 'string',
            title: 'Projectid',
          },
        },
        required: ['projectId'],
      },
      browserbase_setup: {
        type: 'object',
        title: 'BrowserbaseSetup',
        description: 'The setup parameters for the browserbase integration',
        properties: {
          api_key: {
            type: 'string',
            title: 'Api Key',
          },
          project_id: {
            type: 'string',
            title: 'Project Id',
          },
          api_url: {
            type: 'string',
            title: 'Api Url',
          },
          connect_url: {
            type: 'string',
            title: 'Connect Url',
          },
        },
        required: ['api_key', 'project_id'],
      },
      browserbase_extension_integration_def: {
        type: 'object',
        title: 'BrowserbaseExtensionIntegrationDef',
        description: 'browserbase extension provider',
        properties: {
          arguments: {
            $ref: '#/$defs/browserbase_extension_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['install_extension_from_github'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['browserbase'],
          },
          setup: {
            $ref: '#/$defs/browserbase_setup',
          },
        },
        required: [],
      },
      browserbase_extension_arguments: {
        type: 'object',
        title: 'BrowserbaseExtensionArguments',
        properties: {
          repositoryName: {
            type: 'string',
            title: 'Repositoryname',
          },
          ref: {
            type: 'string',
            title: 'Ref',
          },
        },
        required: ['repositoryName'],
      },
      browserbase_list_sessions_integration_def: {
        type: 'object',
        title: 'BrowserbaseListSessionsIntegrationDef',
        description: 'browserbase list sessions integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/browserbase_list_sessions_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['list_sessions'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['browserbase'],
          },
          setup: {
            $ref: '#/$defs/browserbase_setup',
          },
        },
        required: [],
      },
      browserbase_list_sessions_arguments: {
        type: 'object',
        title: 'BrowserbaseListSessionsArguments',
        properties: {
          status: {
            type: 'string',
            title: 'Status',
            enum: ['RUNNING', 'ERROR', 'TIMED_OUT', 'COMPLETED'],
          },
        },
        required: [],
      },
      browserbase_create_session_integration_def: {
        type: 'object',
        title: 'BrowserbaseCreateSessionIntegrationDef',
        description: 'browserbase create session integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/browserbase_create_session_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['create_session'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['browserbase'],
          },
          setup: {
            $ref: '#/$defs/browserbase_setup',
          },
        },
        required: [],
      },
      browserbase_create_session_arguments: {
        type: 'object',
        title: 'BrowserbaseCreateSessionArguments',
        properties: {
          browserSettings: {
            type: 'object',
            title: 'Browsersettings',
          },
          extensionId: {
            type: 'string',
            title: 'Extensionid',
          },
          keepAlive: {
            type: 'boolean',
            title: 'Keepalive',
          },
          projectId: {
            type: 'string',
            title: 'Projectid',
          },
          proxies: {
            anyOf: [
              {
                type: 'boolean',
              },
              {
                type: 'array',
                items: {
                  type: 'object',
                },
              },
            ],
            title: 'Proxies',
          },
          timeout: {
            type: 'integer',
            title: 'Timeout',
          },
        },
        required: [],
      },
      browserbase_get_session_integration_def: {
        type: 'object',
        title: 'BrowserbaseGetSessionIntegrationDef',
        description: 'browserbase get session integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/browserbase_get_session_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['get_session'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['browserbase'],
          },
          setup: {
            $ref: '#/$defs/browserbase_setup',
          },
        },
        required: [],
      },
      browserbase_get_session_arguments: {
        type: 'object',
        title: 'BrowserbaseGetSessionArguments',
        properties: {
          id: {
            type: 'string',
            title: 'Id',
          },
        },
        required: ['id'],
      },
      browserbase_complete_session_integration_def: {
        type: 'object',
        title: 'BrowserbaseCompleteSessionIntegrationDef',
        description: 'browserbase complete session integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/browserbase_complete_session_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['complete_session'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['browserbase'],
          },
          setup: {
            $ref: '#/$defs/browserbase_setup',
          },
        },
        required: [],
      },
      browserbase_complete_session_arguments: {
        type: 'object',
        title: 'BrowserbaseCompleteSessionArguments',
        properties: {
          id: {
            type: 'string',
            title: 'Id',
          },
          status: {
            type: 'string',
            title: 'Status',
            enum: ['REQUEST_RELEASE'],
          },
        },
        required: ['id'],
      },
      browserbase_get_session_live_urls_integration_def: {
        type: 'object',
        title: 'BrowserbaseGetSessionLiveUrlsIntegrationDef',
        description: 'browserbase get session live urls integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/browserbase_get_session_live_urls_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['get_live_urls'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['browserbase'],
          },
          setup: {
            $ref: '#/$defs/browserbase_setup',
          },
        },
        required: [],
      },
      browserbase_get_session_live_urls_arguments: {
        type: 'object',
        title: 'BrowserbaseGetSessionLiveUrlsArguments',
        properties: {
          id: {
            type: 'string',
            title: 'Id',
          },
        },
        required: ['id'],
      },
      remote_browser_integration_def: {
        type: 'object',
        title: 'RemoteBrowserIntegrationDef',
        description: 'The integration definition for the remote browser',
        properties: {
          setup: {
            $ref: '#/$defs/remote_browser_setup',
          },
          arguments: {
            $ref: '#/$defs/remote_browser_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['perform_action'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['remote_browser'],
          },
        },
        required: ['setup'],
      },
      remote_browser_setup: {
        type: 'object',
        title: 'RemoteBrowserSetup',
        description: 'The setup parameters for the remote browser',
        properties: {
          connect_url: {
            type: 'string',
            title: 'Connect Url',
          },
          height: {
            type: 'integer',
            title: 'Height',
          },
          width: {
            type: 'integer',
            title: 'Width',
          },
        },
        required: [],
      },
      remote_browser_arguments: {
        type: 'object',
        title: 'RemoteBrowserArguments',
        description: 'The arguments for the remote browser',
        properties: {
          action: {
            type: 'string',
            title: 'Action',
            enum: [
              'key',
              'type',
              'mouse_move',
              'left_click',
              'left_click_drag',
              'right_click',
              'middle_click',
              'double_click',
              'screenshot',
              'cursor_position',
              'navigate',
              'refresh',
            ],
          },
          connect_url: {
            type: 'string',
            title: 'Connect Url',
          },
          coordinate: {
            type: 'array',
            title: 'Coordinate',
            items: {
              type: 'object',
            },
          },
          text: {
            type: 'string',
            title: 'Text',
          },
        },
        required: ['action'],
      },
      llama_parse_integration_def: {
        type: 'object',
        title: 'LlamaParseIntegrationDef',
        description: 'LlamaParse integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/llama_parse_fetch_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['llama_parse'],
          },
          setup: {
            $ref: '#/$defs/llama_parse_setup',
          },
        },
        required: [],
      },
      llama_parse_fetch_arguments: {
        type: 'object',
        title: 'LlamaParseFetchArguments',
        description: 'Arguments for LlamaParse integration',
        properties: {
          file: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
            title: 'File',
          },
          base64: {
            type: 'boolean',
            title: 'Base64',
          },
          filename: {
            type: 'string',
            title: 'Filename',
          },
          params: {
            type: 'object',
            title: 'Params',
          },
        },
        required: ['file'],
      },
      llama_parse_setup: {
        type: 'object',
        title: 'LlamaParseSetup',
        description: 'Setup parameters for LlamaParse integration',
        properties: {
          llamaparse_api_key: {
            type: 'string',
            title: 'Llamaparse Api Key',
          },
          params: {
            type: 'object',
            title: 'Params',
          },
        },
        required: ['llamaparse_api_key'],
      },
      ffmpeg_integration_def: {
        type: 'object',
        title: 'FfmpegIntegrationDef',
        description: 'Ffmpeg integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/ffmpeg_search_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['ffmpeg'],
          },
          setup: {
            type: 'object',
            title: 'Setup',
          },
        },
        required: [],
      },
      ffmpeg_search_arguments: {
        type: 'object',
        title: 'FfmpegSearchArguments',
        description: 'Arguments for Ffmpeg CMD',
        properties: {
          cmd: {
            type: 'string',
            title: 'Cmd',
          },
          file: {
            anyOf: [
              {
                type: 'string',
              },
              {
                type: 'array',
                items: {
                  type: 'string',
                },
              },
            ],
            title: 'File',
          },
        },
        required: ['cmd'],
      },
      cloudinary_upload_integration_def: {
        type: 'object',
        title: 'CloudinaryUploadIntegrationDef',
        description: 'Cloudinary upload integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/cloudinary_upload_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['media_upload'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['cloudinary'],
          },
          setup: {
            $ref: '#/$defs/cloudinary_setup',
          },
        },
        required: [],
      },
      cloudinary_upload_arguments: {
        type: 'object',
        title: 'CloudinaryUploadArguments',
        description: 'Arguments for Cloudinary media upload',
        properties: {
          file: {
            type: 'string',
            title: 'File',
          },
          public_id: {
            type: 'string',
            title: 'Public Id',
          },
          return_base64: {
            type: 'boolean',
            title: 'Return Base64',
          },
          upload_params: {
            type: 'object',
            title: 'Upload Params',
          },
        },
        required: ['file'],
      },
      cloudinary_setup: {
        type: 'object',
        title: 'CloudinarySetup',
        description: 'Setup parameters for Cloudinary integration',
        properties: {
          cloudinary_api_key: {
            type: 'string',
            title: 'Cloudinary Api Key',
          },
          cloudinary_api_secret: {
            type: 'string',
            title: 'Cloudinary Api Secret',
          },
          cloudinary_cloud_name: {
            type: 'string',
            title: 'Cloudinary Cloud Name',
          },
          params: {
            type: 'object',
            title: 'Params',
          },
        },
        required: ['cloudinary_api_key', 'cloudinary_api_secret', 'cloudinary_cloud_name'],
      },
      cloudinary_edit_integration_def: {
        type: 'object',
        title: 'CloudinaryEditIntegrationDef',
        description: 'Cloudinary edit integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/cloudinary_edit_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
            enum: ['media_edit'],
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['cloudinary'],
          },
          setup: {
            $ref: '#/$defs/cloudinary_setup',
          },
        },
        required: [],
      },
      cloudinary_edit_arguments: {
        type: 'object',
        title: 'CloudinaryEditArguments',
        description: 'Arguments for Cloudinary media edit',
        properties: {
          public_id: {
            type: 'string',
            title: 'Public Id',
          },
          transformation: {
            type: 'array',
            title: 'Transformation',
            items: {
              type: 'object',
            },
          },
          return_base64: {
            type: 'boolean',
            title: 'Return Base64',
          },
        },
        required: ['public_id', 'transformation'],
      },
      arxiv_integration_def: {
        type: 'object',
        title: 'ArxivIntegrationDef',
        description: 'Arxiv integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/arxiv_search_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['arxiv'],
          },
          setup: {
            type: 'object',
            title: 'Setup',
          },
        },
        required: [],
      },
      arxiv_search_arguments: {
        type: 'object',
        title: 'ArxivSearchArguments',
        description: 'Arguments for Arxiv Search',
        properties: {
          query: {
            type: 'string',
            title: 'Query',
          },
          download_pdf: {
            type: 'boolean',
            title: 'Download Pdf',
          },
          id_list: {
            type: 'array',
            title: 'Id List',
            items: {
              type: 'string',
            },
          },
          max_results: {
            type: 'integer',
            title: 'Max Results',
          },
          sort_by: {
            type: 'string',
            title: 'Sort By',
            enum: ['relevance', 'lastUpdatedDate', 'submittedDate'],
          },
          sort_order: {
            type: 'string',
            title: 'Sort Order',
            enum: ['ascending', 'descending'],
          },
        },
        required: ['query'],
      },
      unstructured_integration_def: {
        type: 'object',
        title: 'UnstructuredIntegrationDef',
        description: 'Unstructured integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/unstructured_partition_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['unstructured'],
          },
          setup: {
            $ref: '#/$defs/unstructured_setup',
          },
        },
        required: [],
      },
      unstructured_partition_arguments: {
        type: 'object',
        title: 'UnstructuredPartitionArguments',
        description: 'Arguments for Unstructured partition integration',
        properties: {
          file: {
            type: 'string',
            title: 'File',
          },
          filename: {
            type: 'string',
            title: 'Filename',
          },
          partition_params: {
            type: 'object',
            title: 'Partition Params',
          },
        },
        required: ['file'],
      },
      unstructured_setup: {
        type: 'object',
        title: 'UnstructuredSetup',
        description: 'Setup parameters for Unstructured integration',
        properties: {
          unstructured_api_key: {
            type: 'string',
            title: 'Unstructured Api Key',
          },
          retry_config: {
            type: 'object',
            title: 'Retry Config',
          },
          server: {
            type: 'string',
            title: 'Server',
          },
          server_url: {
            type: 'string',
            title: 'Server Url',
          },
          timeout_ms: {
            type: 'integer',
            title: 'Timeout Ms',
          },
          url_params: {
            type: 'object',
            title: 'Url Params',
          },
        },
        required: ['unstructured_api_key'],
      },
      algolia_integration_def: {
        type: 'object',
        title: 'AlgoliaIntegrationDef',
        description: 'Algolia integration definition',
        properties: {
          arguments: {
            $ref: '#/$defs/algolia_search_arguments',
          },
          method: {
            type: 'string',
            title: 'Method',
          },
          provider: {
            type: 'string',
            title: 'Provider',
            enum: ['algolia'],
          },
          setup: {
            $ref: '#/$defs/algolia_setup',
          },
        },
        required: [],
      },
      algolia_search_arguments: {
        type: 'object',
        title: 'AlgoliaSearchArguments',
        description: 'Arguments for Algolia Search',
        properties: {
          index_name: {
            type: 'string',
            title: 'Index Name',
          },
          query: {
            type: 'string',
            title: 'Query',
          },
          attributes_to_retrieve: {
            type: 'array',
            title: 'Attributes To Retrieve',
            items: {
              type: 'string',
            },
          },
          hits_per_page: {
            type: 'integer',
            title: 'Hits Per Page',
          },
        },
        required: ['index_name', 'query'],
      },
      algolia_setup: {
        type: 'object',
        title: 'AlgoliaSetup',
        description: 'Integration definition for Algolia',
        properties: {
          algolia_api_key: {
            type: 'string',
            title: 'Algolia Api Key',
          },
          algolia_application_id: {
            type: 'string',
            title: 'Algolia Application Id',
          },
        },
        required: ['algolia_api_key', 'algolia_application_id'],
      },
      system_def: {
        type: 'object',
        title: 'SystemDef',
        description: 'System definition',
        properties: {
          operation: {
            type: 'string',
            title: 'Operation',
            enum: [
              'create',
              'update',
              'patch',
              'create_or_update',
              'embed',
              'change_status',
              'search',
              'chat',
              'history',
              'delete',
              'get',
              'list',
            ],
          },
          resource: {
            type: 'string',
            title: 'Resource',
            enum: ['agent', 'user', 'task', 'execution', 'doc', 'session', 'job'],
          },
          arguments: {
            type: 'object',
            title: 'Arguments',
          },
          resource_id: {
            type: 'string',
            title: 'Resource Id',
          },
          subresource: {
            type: 'string',
            title: 'Subresource',
            enum: ['tool', 'doc', 'execution', 'transition'],
          },
        },
        required: ['operation', 'resource'],
      },
      text_editor20241022_def: {
        type: 'object',
        title: 'TextEditor20241022Def',
        properties: {
          name: {
            type: 'string',
            title: 'Name',
          },
          type: {
            type: 'string',
            title: 'Type',
            enum: ['text_editor_20241022'],
          },
        },
        required: [],
      },
    },
  },
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { session_id, ...body } = args as any;
  return asTextContentResult(await client.sessions.chat(session_id, body));
};

export default { metadata, tool, handler };
