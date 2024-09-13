# Shared

Types:

- <code><a href="./src/resources/shared.ts">ResourceCreated</a></code>
- <code><a href="./src/resources/shared.ts">ResourceDeleted</a></code>
- <code><a href="./src/resources/shared.ts">ResourceUpdated</a></code>

# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agent</a></code>

Methods:

- <code title="post /agents">client.agents.<a href="./src/resources/agents/agents.ts">create</a>({ ...params }) -> ResourceCreated</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentsOffsetPagination</code>

## Tools

Types:

- <code><a href="./src/resources/agents/tools.ts">ToolListResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">create</a>(agentId, { ...params }) -> ResourceCreated</code>
- <code title="get /agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">list</a>(agentId, { ...params }) -> ToolListResponsesOffsetPagination</code>

## Docs

Types:

- <code><a href="./src/resources/agents/docs.ts">DocSearchResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/docs">client.agents.docs.<a href="./src/resources/agents/docs.ts">create</a>(agentId, { ...params }) -> ResourceCreated</code>
- <code title="get /agents/{agent_id}/docs">client.agents.docs.<a href="./src/resources/agents/docs.ts">list</a>(agentId, { ...params }) -> DocsOffsetPagination</code>
- <code title="post /agents/{agent_id}/search">client.agents.docs.<a href="./src/resources/agents/docs.ts">search</a>(agentId, { ...params }) -> DocSearchResponse</code>

## Tasks

Methods:

- <code title="post /agents/{agent_id}/tasks">client.agents.tasks.<a href="./src/resources/agents/tasks.ts">create</a>(agentId, { ...params }) -> ResourceCreated</code>
- <code title="get /agents/{agent_id}/tasks">client.agents.tasks.<a href="./src/resources/agents/tasks.ts">list</a>(agentId, { ...params }) -> TasksOffsetPagination</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions.ts">ChatInput</a></code>
- <code><a href="./src/resources/sessions.ts">ChatResponse</a></code>
- <code><a href="./src/resources/sessions.ts">ChatSettings</a></code>
- <code><a href="./src/resources/sessions.ts">Entry</a></code>
- <code><a href="./src/resources/sessions.ts">History</a></code>
- <code><a href="./src/resources/sessions.ts">Message</a></code>
- <code><a href="./src/resources/sessions.ts">Session</a></code>

Methods:

- <code title="post /sessions">client.sessions.<a href="./src/resources/sessions.ts">create</a>({ ...params }) -> ResourceCreated</code>
- <code title="get /sessions">client.sessions.<a href="./src/resources/sessions.ts">list</a>({ ...params }) -> SessionsOffsetPagination</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> ResourceCreated</code>
- <code title="get /users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UsersOffsetPagination</code>

## Docs

Types:

- <code><a href="./src/resources/users/docs.ts">DocSearchResponse</a></code>

Methods:

- <code title="post /users/{user_id}/docs">client.users.docs.<a href="./src/resources/users/docs.ts">create</a>(userId, { ...params }) -> ResourceCreated</code>
- <code title="get /users/{user_id}/docs">client.users.docs.<a href="./src/resources/users/docs.ts">list</a>(userId, { ...params }) -> DocsOffsetPagination</code>
- <code title="post /users/{user_id}/search">client.users.docs.<a href="./src/resources/users/docs.ts">search</a>(userId, { ...params }) -> DocSearchResponse</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">JobStatus</a></code>

# Docs

Types:

- <code><a href="./src/resources/docs.ts">Doc</a></code>
- <code><a href="./src/resources/docs.ts">EmbedQueryResponse</a></code>
- <code><a href="./src/resources/docs.ts">Snippet</a></code>

Methods:

- <code title="post /embed">client.docs.<a href="./src/resources/docs.ts">embed</a>({ ...params }) -> EmbedQueryResponse</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">Task</a></code>
- <code><a href="./src/resources/tasks/tasks.ts">Tool</a></code>

## Executions

Methods:

- <code title="post /tasks/{task_id}/executions">client.tasks.executions.<a href="./src/resources/tasks/executions.ts">create</a>(taskId, { ...params }) -> ResourceCreated</code>
- <code title="get /tasks/{task_id}/executions">client.tasks.executions.<a href="./src/resources/tasks/executions.ts">list</a>(taskId, { ...params }) -> ExecutionsOffsetPagination</code>

# Executions

Types:

- <code><a href="./src/resources/executions/executions.ts">Execution</a></code>
- <code><a href="./src/resources/executions/executions.ts">Transition</a></code>

## Transitions

Types:

- <code><a href="./src/resources/executions/transitions.ts">TransitionStreamResponse</a></code>

Methods:

- <code title="get /executions/{execution_id}/transitions">client.executions.transitions.<a href="./src/resources/executions/transitions.ts">list</a>(executionId, { ...params }) -> TransitionsOffsetPagination</code>
- <code title="get /executions/{execution_id}/transitions.stream">client.executions.transitions.<a href="./src/resources/executions/transitions.ts">stream</a>(executionId, { ...params }) -> unknown</code>
