// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, asTextContentResult } from '@julep/sdk-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Julep from '@julep/sdk';

export const metadata: Metadata = {
  resource: 'agents.tools',
  operation: 'write',
  tags: [],
  httpMethod: 'patch',
  httpPath: '/agents/{agent_id}/tools/{tool_id}',
  operationId: 'patch_agent_tool_agents__agent_id__tools__tool_id__patch',
};

export const tool: Tool = {
  name: 'update_agents_tools',
  description: 'Patch Agent Tool',
  inputSchema: {
    type: 'object',
    properties: {
      agent_id: {
        type: 'string',
        title: 'Agent Id',
      },
      tool_id: {
        type: 'string',
        title: 'Tool Id',
      },
      api_call: {
        type: 'object',
        title: 'ApiCallDefUpdate',
        description: 'API call definition',
        properties: {
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
          method: {
            type: 'string',
            title: 'Method',
            enum: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'HEAD', 'OPTIONS', 'CONNECT', 'TRACE'],
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
            title: 'ParameterSchemaUpdate',
            description: 'JSON Schema for API call parameters',
            properties: {
              additionalProperties: {
                type: 'boolean',
                title: 'Additionalproperties',
              },
              properties: {
                type: 'object',
                title: 'Properties',
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
          url: {
            type: 'string',
            title: 'Url',
          },
        },
      },
      bash_20241022: {
        type: 'object',
        title: 'Bash20241022DefUpdate',
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
      },
      computer_20241022: {
        type: 'object',
        title: 'Computer20241022DefUpdate',
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
            type: 'object',
            title: 'DummyIntegrationDefUpdate',
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
          },
          {
            type: 'object',
            title: 'BraveIntegrationDefUpdate',
            description: 'Brave integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'BraveSearchArgumentsUpdate',
                description: 'Arguments for Brave Search',
                properties: {
                  query: {
                    type: 'string',
                    title: 'Query',
                  },
                },
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
                type: 'object',
                title: 'BraveSearchSetupUpdate',
                description: 'Integration definition for Brave Search',
                properties: {
                  brave_api_key: {
                    type: 'string',
                    title: 'Brave Api Key',
                  },
                },
              },
            },
          },
          {
            type: 'object',
            title: 'EmailIntegrationDefUpdate',
            description: 'Email integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'EmailArgumentsUpdate',
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
                type: 'object',
                title: 'EmailSetupUpdate',
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
              },
            },
          },
          {
            type: 'object',
            title: 'SpiderIntegrationDefUpdate',
            description: 'Spider integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'SpiderFetchArgumentsUpdate',
                description: 'Arguments for Spider integration',
                properties: {
                  content_type: {
                    type: 'string',
                    title: 'Content Type',
                    enum: ['application/json', 'text/csv', 'application/xml', 'application/jsonl'],
                  },
                  params: {
                    type: 'object',
                    title: 'Params',
                  },
                  url: {
                    type: 'string',
                    title: 'Url',
                  },
                },
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
                type: 'object',
                title: 'SpiderSetupUpdate',
                description: 'Setup parameters for Spider integration',
                properties: {
                  spider_api_key: {
                    type: 'string',
                    title: 'Spider Api Key',
                  },
                },
              },
            },
          },
          {
            type: 'object',
            title: 'WikipediaIntegrationDefUpdate',
            description: 'Wikipedia integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'WikipediaSearchArgumentsUpdate',
                description: 'Arguments for Wikipedia Search',
                properties: {
                  load_max_docs: {
                    type: 'integer',
                    title: 'Load Max Docs',
                  },
                  query: {
                    type: 'string',
                    title: 'Query',
                  },
                },
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
          },
          {
            type: 'object',
            title: 'WeatherIntegrationDefUpdate',
            description: 'Weather integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'WeatherGetArgumentsUpdate',
                description: 'Arguments for Weather',
                properties: {
                  location: {
                    type: 'string',
                    title: 'Location',
                  },
                },
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
                type: 'object',
                title: 'WeatherSetupUpdate',
                description: 'Integration definition for Weather',
                properties: {
                  openweathermap_api_key: {
                    type: 'string',
                    title: 'Openweathermap Api Key',
                  },
                },
              },
            },
          },
          {
            type: 'object',
            title: 'MailgunIntegrationDefUpdate',
            description: 'Mailgun integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'MailgunSendEmailArgumentsUpdate',
                description: 'Arguments for mailgun.send_email method',
                properties: {
                  bcc: {
                    type: 'string',
                    title: 'Bcc',
                  },
                  body: {
                    type: 'string',
                    title: 'Body',
                  },
                  cc: {
                    type: 'string',
                    title: 'Cc',
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
                type: 'object',
                title: 'MailgunSetupUpdate',
                description: 'Setup parameters for Mailgun integration',
                properties: {
                  api_key: {
                    type: 'string',
                    title: 'Api Key',
                  },
                },
              },
            },
          },
          {
            type: 'object',
            title: 'BrowserbaseContextIntegrationDefUpdate',
            description: 'browserbase context provider',
            properties: {
              arguments: {
                type: 'object',
                title: 'BrowserbaseContextArgumentsUpdate',
                properties: {
                  projectId: {
                    type: 'string',
                    title: 'Projectid',
                  },
                },
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
                $ref: '#/$defs/browserbase_setup_update',
              },
            },
          },
          {
            type: 'object',
            title: 'BrowserbaseExtensionIntegrationDefUpdate',
            description: 'browserbase extension provider',
            properties: {
              arguments: {
                type: 'object',
                title: 'BrowserbaseExtensionArgumentsUpdate',
                properties: {
                  ref: {
                    type: 'string',
                    title: 'Ref',
                  },
                  repositoryName: {
                    type: 'string',
                    title: 'Repositoryname',
                  },
                },
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
                $ref: '#/$defs/browserbase_setup_update',
              },
            },
          },
          {
            type: 'object',
            title: 'BrowserbaseListSessionsIntegrationDefUpdate',
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
                $ref: '#/$defs/browserbase_setup_update',
              },
            },
          },
          {
            type: 'object',
            title: 'BrowserbaseCreateSessionIntegrationDefUpdate',
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
                $ref: '#/$defs/browserbase_setup_update',
              },
            },
          },
          {
            type: 'object',
            title: 'BrowserbaseGetSessionIntegrationDefUpdate',
            description: 'browserbase get session integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'BrowserbaseGetSessionArgumentsUpdate',
                properties: {
                  id: {
                    type: 'string',
                    title: 'Id',
                  },
                },
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
                $ref: '#/$defs/browserbase_setup_update',
              },
            },
          },
          {
            type: 'object',
            title: 'BrowserbaseCompleteSessionIntegrationDefUpdate',
            description: 'browserbase complete session integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'BrowserbaseCompleteSessionArgumentsUpdate',
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
                $ref: '#/$defs/browserbase_setup_update',
              },
            },
          },
          {
            type: 'object',
            title: 'BrowserbaseGetSessionLiveUrlsIntegrationDefUpdate',
            description: 'browserbase get session live urls integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'BrowserbaseGetSessionLiveUrlsArgumentsUpdate',
                properties: {
                  id: {
                    type: 'string',
                    title: 'Id',
                  },
                },
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
                $ref: '#/$defs/browserbase_setup_update',
              },
            },
          },
          {
            type: 'object',
            title: 'RemoteBrowserIntegrationDefUpdate',
            description: 'The integration definition for the remote browser',
            properties: {
              arguments: {
                type: 'object',
                title: 'RemoteBrowserArgumentsUpdate',
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
              setup: {
                $ref: '#/$defs/remote_browser_setup',
              },
            },
          },
          {
            type: 'object',
            title: 'LlamaParseIntegrationDefUpdate',
            description: 'LlamaParse integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'LlamaParseFetchArgumentsUpdate',
                description: 'Arguments for LlamaParse integration',
                properties: {
                  base64: {
                    type: 'boolean',
                    title: 'Base64',
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
                  filename: {
                    type: 'string',
                    title: 'Filename',
                  },
                  params: {
                    type: 'object',
                    title: 'Params',
                  },
                },
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
                type: 'object',
                title: 'LlamaParseSetupUpdate',
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
              },
            },
          },
          {
            type: 'object',
            title: 'FfmpegIntegrationDefUpdate',
            description: 'Ffmpeg integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'FfmpegSearchArgumentsUpdate',
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
          },
          {
            type: 'object',
            title: 'CloudinaryUploadIntegrationDefUpdate',
            description: 'Cloudinary upload integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'CloudinaryUploadArgumentsUpdate',
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
                type: 'object',
                title: 'CloudinarySetupUpdate',
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
              },
            },
          },
          {
            type: 'object',
            title: 'CloudinaryEditIntegrationDefUpdate',
            description: 'Cloudinary edit integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'CloudinaryEditArgumentsUpdate',
                description: 'Arguments for Cloudinary media edit',
                properties: {
                  public_id: {
                    type: 'string',
                    title: 'Public Id',
                  },
                  return_base64: {
                    type: 'boolean',
                    title: 'Return Base64',
                  },
                  transformation: {
                    type: 'array',
                    title: 'Transformation',
                    items: {
                      type: 'object',
                    },
                  },
                },
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
                type: 'object',
                title: 'CloudinarySetupUpdate',
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
              },
            },
          },
          {
            type: 'object',
            title: 'ArxivIntegrationDefUpdate',
            description: 'Arxiv integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'ArxivSearchArgumentsUpdate',
                description: 'Arguments for Arxiv Search',
                properties: {
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
                  query: {
                    type: 'string',
                    title: 'Query',
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
          },
          {
            type: 'object',
            title: 'UnstructuredIntegrationDefUpdate',
            description: 'Unstructured integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'UnstructuredPartitionArgumentsUpdate',
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
                type: 'object',
                title: 'UnstructuredSetupUpdate',
                description: 'Setup parameters for Unstructured integration',
                properties: {
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
                  unstructured_api_key: {
                    type: 'string',
                    title: 'Unstructured Api Key',
                  },
                  url_params: {
                    type: 'object',
                    title: 'Url Params',
                  },
                },
              },
            },
          },
          {
            type: 'object',
            title: 'AlgoliaIntegrationDefUpdate',
            description: 'Algolia integration definition',
            properties: {
              arguments: {
                type: 'object',
                title: 'AlgoliaSearchArgumentsUpdate',
                description: 'Arguments for Algolia Search',
                properties: {
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
                  index_name: {
                    type: 'string',
                    title: 'Index Name',
                  },
                  query: {
                    type: 'string',
                    title: 'Query',
                  },
                },
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
                type: 'object',
                title: 'AlgoliaSetupUpdate',
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
              },
            },
          },
        ],
        title: 'Integration',
        description: 'Brave integration definition',
      },
      name: {
        type: 'string',
        title: 'Name',
      },
      system: {
        type: 'object',
        title: 'SystemDefUpdate',
        description: 'System definition',
        properties: {
          arguments: {
            type: 'object',
            title: 'Arguments',
          },
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
      },
      text_editor_20241022: {
        type: 'object',
        title: 'TextEditor20241022DefUpdate',
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
    },
    required: ['agent_id', 'tool_id'],
    $defs: {
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
      },
      browserbase_setup_update: {
        type: 'object',
        title: 'BrowserbaseSetupUpdate',
        description: 'The setup parameters for the browserbase integration',
        properties: {
          api_key: {
            type: 'string',
            title: 'Api Key',
          },
          api_url: {
            type: 'string',
            title: 'Api Url',
          },
          connect_url: {
            type: 'string',
            title: 'Connect Url',
          },
          project_id: {
            type: 'string',
            title: 'Project Id',
          },
        },
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
      },
    },
  },
  annotations: {},
};

export const handler = async (client: Julep, args: Record<string, unknown> | undefined) => {
  const { agent_id, tool_id, ...body } = args as any;
  return asTextContentResult(await client.agents.tools.update(agent_id, tool_id, body));
};

export default { metadata, tool, handler };
