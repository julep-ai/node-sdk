# Julep Node MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Direct invocation

You can run the MCP Server directly via `npx`:

```sh
export JULEP_API_KEY="My API Key"
export JULEP_ENVIRONMENT="production"
npx -y @julep/sdk-mcp@latest
```

### Via MCP Client

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "julep_sdk_api": {
      "command": "npx",
      "args": ["-y", "@julep/sdk-mcp", "--client=claude", "--tools=dynamic"],
      "env": {
        "JULEP_API_KEY": "My API Key",
        "JULEP_ENVIRONMENT": "production"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Running remotely

Launching the client with `--transport=http` launches the server as a remote server using Streamable HTTP transport. The `--port` setting can choose the port it will run on, and the `--socket` setting allows it to run on a Unix socket.

Authorization can be provided via the `Authorization` header using the Bearer scheme.

Additionally, authorization can be provided via the following headers:
| Header | Equivalent client option | Security scheme |
| ----------------- | ------------------------ | --------------- |
| `x-julep-api-key` | `apiKey` | APIKeyHeader |

A configuration JSON for this server might look like this, assuming the server is hosted at `http://localhost:3000`:

```json
{
  "mcpServers": {
    "julep_sdk_api": {
      "url": "http://localhost:3000",
      "headers": {
        "Authorization": "Bearer <auth value>"
      }
    }
  }
}
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "@julep/sdk-mcp/server";

// import a specific tool
import createAgents from "@julep/sdk-mcp/tools/agents/create-agents";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [createAgents, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `agents`:

- `create_agents` (`write`): Create Agent
- `update_agents` (`write`): Patch Agent
- `list_agents` (`read`): List Agents
- `delete_agents` (`write`): Delete Agent
- `create_or_update_agents` (`write`): Create Or Update Agent
- `get_agents` (`read`): Get Agent Details
- `list_models_agents` (`read`): List all available models that can be used with agents.

  Returns:
  ListModelsResponse: A list of available models

- `reset_agents` (`write`): Update Agent

### Resource `agents.tools`:

- `create_agents_tools` (`write`): Create Agent Tool
- `update_agents_tools` (`write`): Patch Agent Tool
- `list_agents_tools` (`read`): List Agent Tools
- `delete_agents_tools` (`write`): Delete Agent Tool
- `reset_agents_tools` (`write`): Update Agent Tool

### Resource `agents.docs`:

- `create_agents_docs` (`write`): Create Agent Doc
- `list_agents_docs` (`read`): List Agent Docs
- `delete_agents_docs` (`write`): Delete Agent Doc
- `bulk_delete_agents_docs` (`write`): Bulk delete documents owned by an agent based on metadata filter
- `search_agents_docs` (`write`): Searches for documents associated with a specific agent.

  Parameters:
  x_developer_id (UUID): The unique identifier of the developer associated with the agent.
  search_params (TextOnlyDocSearchRequest | VectorDocSearchRequest | HybridDocSearchRequest): The parameters for the search.
  agent_id (UUID): The umnique identifier of the agent associated with the documents.
  Returns:
  DocSearchResponse: The search results.

### Resource `files`:

- `create_files` (`write`): Create File
- `list_files` (`read`): List Files
- `delete_files` (`write`): Delete File
- `get_files` (`read`): Get File

### Resource `sessions`:

- `create_sessions` (`write`): Create Session
- `update_sessions` (`write`): Patch Session
- `list_sessions` (`read`): List Sessions
- `delete_sessions` (`write`): Delete Session
- `chat_sessions` (`write`): Initiates a chat session.

  Routes to different implementations based on feature flags:

  - If auto_run_tools_chat feature flag is enabled, uses the new auto-tools implementation
  - Otherwise, uses the legacy implementation

  Parameters:
  developer (Developer): The developer associated with the chat session.
  session_id (UUID): The unique identifier of the chat session.
  chat_input (ChatInput): The chat input data.
  background_tasks (BackgroundTasks): The background tasks to run.
  x_custom_api_key (Optional[str]): The custom API key.
  mock_response (Optional[str]): Mock response for testing.
  connection_pool: Connection pool for testing purposes.

  Returns:
  ChatResponse or StreamingResponse: The chat response or streaming response.

- `create_or_update_sessions` (`write`): Create Or Update Session
- `get_sessions` (`read`): Get Session
- `history_sessions` (`read`): Get Session History
- `render_sessions` (`write`): Renders a chat input.

  Routes to different implementations based on feature flags:

  - If auto_run_tools_chat feature flag is enabled, uses the new auto-tools implementation
  - Otherwise, uses the legacy implementation

  Parameters:
  developer (Developer): The developer associated with the chat session.
  session_id (UUID): The unique identifier of the chat session.
  chat_input (ChatInput): The chat input data.

  Returns:
  RenderResponse: The rendered chat input.

- `reset_sessions` (`write`): Update Session

### Resource `users`:

- `create_users` (`write`): Create User
- `update_users` (`write`): Patch User
- `list_users` (`read`): List Users
- `delete_users` (`write`): Delete User
- `create_or_update_users` (`write`): Create Or Update User
- `get_users` (`read`): Get User Details
- `reset_users` (`write`): Update User

### Resource `users.docs`:

- `create_users_docs` (`write`): Creates a new document for a user.

  Parameters:
  user_id (UUID): The unique identifier of the user associated with the document.
  data (CreateDocRequest): The data to create the document with.
  x_developer_id (UUID): The unique identifier of the developer associated with the document.

  Returns:
  Doc: The created document.

- `list_users_docs` (`read`): List User Docs
- `delete_users_docs` (`write`): Delete User Doc
- `bulk_delete_users_docs` (`write`): Bulk delete documents owned by a user based on metadata filter
- `search_users_docs` (`write`): Searches for documents associated with a specific user.

  Parameters:
  x_developer_id (UUID): The unique identifier of the developer associated with the user.
  search_params (TextOnlyDocSearchRequest | VectorDocSearchRequest | HybridDocSearchRequest): The parameters for the search.
  user_id (UUID): The unique identifier of the user associated with the documents.
  Returns:
  DocSearchResponse: The search results.

### Resource `jobs`:

- `get_jobs` (`read`): Get Job Status

### Resource `docs`:

- `embed_docs` (`write`): Embed
- `get_docs` (`read`): Get Doc

### Resource `tasks`:

- `create_tasks` (`write`): Create Task
- `list_tasks` (`read`): List Tasks
- `create_or_update_tasks` (`write`): Create Or Update Task
- `get_tasks` (`read`): Get Task Details

### Resource `executions`:

- `create_executions` (`write`): Create Task Execution
- `list_executions` (`read`): List Task Executions
- `change_status_executions` (`write`): Update Execution
- `get_executions` (`read`): Get Execution Details

### Resource `executions.transitions`:

- `retrieve_executions_transitions` (`read`): Get Execution Transition
- `list_executions_transitions` (`read`): List Execution Transitions
- `stream_executions_transitions` (`read`): Stream Transitions Events

### Resource `executions.status`:

- `get_executions_status` (`read`): Get Execution Details
- `stream_executions_status` (`read`): SSE endpoint that streams the status of a given execution_id by polling the
  latest_executions view.

### Resource `secrets`:

- `create_secrets` (`write`): Create a new secret for a developer.

  Args:
  developer_id: ID of the developer creating the secret
  secret: Secret to create

  Returns:
  The created secret

  Raises:
  HTTPException: If a secret with this name already exists (409 Conflict)

- `update_secrets` (`write`): Update a developer secret.

  Args:
  developer_id: ID of the developer who owns the secret
  secret_id: ID of the secret to update
  data: New secret data

  Returns:
  The updated secret

  Raises:
  HTTPException: If the secret doesn't exist or doesn't belong to the developer

- `list_secrets` (`read`): List all secrets for a developer.

  Args:
  x_developer_id: ID of the developer whose secrets to list
  limit: Maximum number of secrets to return
  offset: Number of secrets to skip

  Returns:
  List of secrets

- `delete_secrets` (`write`): Delete a secret.

  Args:
  secret_id: ID of the secret to delete
  x_developer_id: ID of the developer who owns the secret

  Returns:
  The deleted secret

  Raises:
  HTTPException: If the secret doesn't exist

### Resource `projects`:

- `create_projects` (`write`): Create Project
- `list_projects` (`read`): List Projects

### Resource `healthz`:

- `check_healthz` (`read`): Check Health
