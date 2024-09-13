# Agents

Types:

- <code><a href="./src/resources/agents/agents.ts">Agent</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentCreateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentUpdateResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentListResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentDeleteResponse</a></code>
- <code><a href="./src/resources/agents/agents.ts">AgentSearchResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">create</a>(agentId, { ...params }) -> AgentCreateResponse</code>
- <code title="get /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">retrieve</a>(agentId) -> Agent</code>
- <code title="put /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">update</a>(agentId, { ...params }) -> AgentUpdateResponse</code>
- <code title="get /agents">client.agents.<a href="./src/resources/agents/agents.ts">list</a>({ ...params }) -> AgentListResponse</code>
- <code title="delete /agents/{agent_id}">client.agents.<a href="./src/resources/agents/agents.ts">delete</a>(agentId) -> AgentDeleteResponse</code>
- <code title="post /agents/{agent_id}/search">client.agents.<a href="./src/resources/agents/agents.ts">search</a>(agentId, { ...params }) -> AgentSearchResponse</code>

## Tools

Types:

- <code><a href="./src/resources/agents/tools.ts">ToolCreateResponse</a></code>
- <code><a href="./src/resources/agents/tools.ts">ToolUpdateResponse</a></code>
- <code><a href="./src/resources/agents/tools.ts">ToolListResponse</a></code>
- <code><a href="./src/resources/agents/tools.ts">ToolDeleteResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">create</a>(agentId, { ...params }) -> ToolCreateResponse</code>
- <code title="put /agents/{agent_id}/tools/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">update</a>(agentId, toolId, { ...params }) -> ToolUpdateResponse</code>
- <code title="get /agents/{agent_id}/tools">client.agents.tools.<a href="./src/resources/agents/tools.ts">list</a>(agentId, { ...params }) -> ToolListResponse</code>
- <code title="delete /agents/{agent_id}/tools/{tool_id}">client.agents.tools.<a href="./src/resources/agents/tools.ts">delete</a>(agentId, toolId) -> ToolDeleteResponse</code>

## Docs

Types:

- <code><a href="./src/resources/agents/docs.ts">DocCreateResponse</a></code>
- <code><a href="./src/resources/agents/docs.ts">DocListResponse</a></code>
- <code><a href="./src/resources/agents/docs.ts">DocDeleteResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/docs">client.agents.docs.<a href="./src/resources/agents/docs.ts">create</a>(agentId, { ...params }) -> DocCreateResponse</code>
- <code title="get /agents/{agent_id}/docs">client.agents.docs.<a href="./src/resources/agents/docs.ts">list</a>(agentId, { ...params }) -> DocListResponse</code>
- <code title="delete /agents/{agent_id}/docs/{doc_id}">client.agents.docs.<a href="./src/resources/agents/docs.ts">delete</a>(agentId, docId) -> DocDeleteResponse</code>

## Tasks

Types:

- <code><a href="./src/resources/agents/tasks.ts">TaskCreateResponse</a></code>
- <code><a href="./src/resources/agents/tasks.ts">TaskListResponse</a></code>

Methods:

- <code title="post /agents/{agent_id}/tasks">client.agents.tasks.<a href="./src/resources/agents/tasks.ts">create</a>(agentId, { ...params }) -> TaskCreateResponse</code>
- <code title="get /agents/{agent_id}/tasks">client.agents.tasks.<a href="./src/resources/agents/tasks.ts">list</a>(agentId, { ...params }) -> TaskListResponse</code>

# Sessions

Types:

- <code><a href="./src/resources/sessions/sessions.ts">History</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">Session</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionCreateResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionUpdateResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionListResponse</a></code>
- <code><a href="./src/resources/sessions/sessions.ts">SessionDeleteResponse</a></code>

Methods:

- <code title="post /sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">create</a>({ ...params }) -> SessionCreateResponse</code>
- <code title="get /sessions/{session_id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">retrieve</a>(sessionId) -> Session</code>
- <code title="put /sessions/{session_id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">update</a>(sessionId, { ...params }) -> SessionUpdateResponse</code>
- <code title="get /sessions">client.sessions.<a href="./src/resources/sessions/sessions.ts">list</a>({ ...params }) -> SessionListResponse</code>
- <code title="delete /sessions/{session_id}">client.sessions.<a href="./src/resources/sessions/sessions.ts">delete</a>(sessionId) -> SessionDeleteResponse</code>
- <code title="get /sessions/{session_id}/history">client.sessions.<a href="./src/resources/sessions/sessions.ts">history</a>(sessionId) -> History</code>

## Chats

Types:

- <code><a href="./src/resources/sessions/chats.ts">ChatCreateResponse</a></code>

Methods:

- <code title="post /sessions/{session_id}/chat">client.sessions.chats.<a href="./src/resources/sessions/chats.ts">create</a>(sessionId, { ...params }) -> ChatCreateResponse</code>

# Users

Types:

- <code><a href="./src/resources/users/users.ts">User</a></code>
- <code><a href="./src/resources/users/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/users/users.ts">UserSearchResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /users/{user_id}">client.users.<a href="./src/resources/users/users.ts">retrieve</a>(userId) -> User</code>
- <code title="put /users/{user_id}">client.users.<a href="./src/resources/users/users.ts">update</a>(userId, { ...params }) -> UserUpdateResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /users/{user_id}">client.users.<a href="./src/resources/users/users.ts">delete</a>(userId) -> UserDeleteResponse</code>
- <code title="post /users/{user_id}/search">client.users.<a href="./src/resources/users/users.ts">search</a>(userId, { ...params }) -> UserSearchResponse</code>

## Docs

Types:

- <code><a href="./src/resources/users/docs.ts">DocCreateResponse</a></code>
- <code><a href="./src/resources/users/docs.ts">DocListResponse</a></code>
- <code><a href="./src/resources/users/docs.ts">DocDeleteResponse</a></code>

Methods:

- <code title="post /users/{user_id}/docs">client.users.docs.<a href="./src/resources/users/docs.ts">create</a>(userId, { ...params }) -> DocCreateResponse</code>
- <code title="get /users/{user_id}/docs">client.users.docs.<a href="./src/resources/users/docs.ts">list</a>(userId, { ...params }) -> DocListResponse</code>
- <code title="delete /users/{user_id}/docs/{doc_id}">client.users.docs.<a href="./src/resources/users/docs.ts">delete</a>(userId, docId) -> DocDeleteResponse</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">JobStatus</a></code>

Methods:

- <code title="get /jobs/{job_id}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(jobId) -> JobStatus</code>

# Docs

Types:

- <code><a href="./src/resources/docs.ts">Doc</a></code>
- <code><a href="./src/resources/docs.ts">EmbedQueryResponse</a></code>

Methods:

- <code title="post /embed">client.docs.<a href="./src/resources/docs.ts">create</a>({ ...params }) -> EmbedQueryResponse</code>
- <code title="get /docs/{doc_id}">client.docs.<a href="./src/resources/docs.ts">retrieve</a>(docId) -> Doc</code>

# Tasks

Types:

- <code><a href="./src/resources/tasks/tasks.ts">Task</a></code>

Methods:

- <code title="get /tasks/{task_id}">client.tasks.<a href="./src/resources/tasks/tasks.ts">retrieve</a>(taskId) -> Task</code>

## Executions

Types:

- <code><a href="./src/resources/tasks/executions.ts">ExecutionCreateResponse</a></code>
- <code><a href="./src/resources/tasks/executions.ts">ExecutionUpdateResponse</a></code>
- <code><a href="./src/resources/tasks/executions.ts">ExecutionListResponse</a></code>

Methods:

- <code title="post /tasks/{task_id}/executions">client.tasks.executions.<a href="./src/resources/tasks/executions.ts">create</a>(taskId, { ...params }) -> ExecutionCreateResponse</code>
- <code title="patch /tasks/{task_id}/executions/{execution_id}">client.tasks.executions.<a href="./src/resources/tasks/executions.ts">update</a>(taskId, executionId, { ...params }) -> ExecutionUpdateResponse</code>
- <code title="get /tasks/{task_id}/executions">client.tasks.executions.<a href="./src/resources/tasks/executions.ts">list</a>(taskId, { ...params }) -> ExecutionListResponse</code>

# Executions

Types:

- <code><a href="./src/resources/executions/executions.ts">Execution</a></code>
- <code><a href="./src/resources/executions/executions.ts">ExecutionUpdateResponse</a></code>

Methods:

- <code title="get /executions/{execution_id}">client.executions.<a href="./src/resources/executions/executions.ts">retrieve</a>(executionId) -> Execution</code>
- <code title="put /executions/{execution_id}">client.executions.<a href="./src/resources/executions/executions.ts">update</a>(executionId, { ...params }) -> unknown</code>

## Transitions

Types:

- <code><a href="./src/resources/executions/transitions.ts">TransitionListResponse</a></code>
- <code><a href="./src/resources/executions/transitions.ts">TransitionListStreamResponse</a></code>

Methods:

- <code title="get /executions/{execution_id}/transitions">client.executions.transitions.<a href="./src/resources/executions/transitions.ts">list</a>(executionId, { ...params }) -> TransitionListResponse</code>
- <code title="get /executions/{execution_id}/transitions.stream">client.executions.transitions.<a href="./src/resources/executions/transitions.ts">listStream</a>(executionId, { ...params }) -> unknown</code>
