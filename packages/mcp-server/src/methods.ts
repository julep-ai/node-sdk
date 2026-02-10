import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.agents.create',
    fullyQualifiedName: 'agents.create',
    httpMethod: 'post',
    httpPath: '/agents',
  },
  {
    clientCallName: 'client.agents.update',
    fullyQualifiedName: 'agents.update',
    httpMethod: 'patch',
    httpPath: '/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.list',
    fullyQualifiedName: 'agents.list',
    httpMethod: 'get',
    httpPath: '/agents',
  },
  {
    clientCallName: 'client.agents.delete',
    fullyQualifiedName: 'agents.delete',
    httpMethod: 'delete',
    httpPath: '/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.createOrUpdate',
    fullyQualifiedName: 'agents.createOrUpdate',
    httpMethod: 'post',
    httpPath: '/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.get',
    fullyQualifiedName: 'agents.get',
    httpMethod: 'get',
    httpPath: '/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.listModels',
    fullyQualifiedName: 'agents.listModels',
    httpMethod: 'get',
    httpPath: '/agents/models',
  },
  {
    clientCallName: 'client.agents.reset',
    fullyQualifiedName: 'agents.reset',
    httpMethod: 'put',
    httpPath: '/agents/{agent_id}',
  },
  {
    clientCallName: 'client.agents.tools.create',
    fullyQualifiedName: 'agents.tools.create',
    httpMethod: 'post',
    httpPath: '/agents/{agent_id}/tools',
  },
  {
    clientCallName: 'client.agents.tools.update',
    fullyQualifiedName: 'agents.tools.update',
    httpMethod: 'patch',
    httpPath: '/agents/{agent_id}/tools/{tool_id}',
  },
  {
    clientCallName: 'client.agents.tools.list',
    fullyQualifiedName: 'agents.tools.list',
    httpMethod: 'get',
    httpPath: '/agents/{agent_id}/tools',
  },
  {
    clientCallName: 'client.agents.tools.delete',
    fullyQualifiedName: 'agents.tools.delete',
    httpMethod: 'delete',
    httpPath: '/agents/{agent_id}/tools/{tool_id}',
  },
  {
    clientCallName: 'client.agents.tools.reset',
    fullyQualifiedName: 'agents.tools.reset',
    httpMethod: 'put',
    httpPath: '/agents/{agent_id}/tools/{tool_id}',
  },
  {
    clientCallName: 'client.agents.docs.create',
    fullyQualifiedName: 'agents.docs.create',
    httpMethod: 'post',
    httpPath: '/agents/{agent_id}/docs',
  },
  {
    clientCallName: 'client.agents.docs.list',
    fullyQualifiedName: 'agents.docs.list',
    httpMethod: 'get',
    httpPath: '/agents/{agent_id}/docs',
  },
  {
    clientCallName: 'client.agents.docs.delete',
    fullyQualifiedName: 'agents.docs.delete',
    httpMethod: 'delete',
    httpPath: '/agents/{agent_id}/docs/{doc_id}',
  },
  {
    clientCallName: 'client.agents.docs.bulkDelete',
    fullyQualifiedName: 'agents.docs.bulkDelete',
    httpMethod: 'delete',
    httpPath: '/agents/{agent_id}/docs',
  },
  {
    clientCallName: 'client.agents.docs.search',
    fullyQualifiedName: 'agents.docs.search',
    httpMethod: 'post',
    httpPath: '/agents/{agent_id}/search',
  },
  {
    clientCallName: 'client.files.create',
    fullyQualifiedName: 'files.create',
    httpMethod: 'post',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.list',
    fullyQualifiedName: 'files.list',
    httpMethod: 'get',
    httpPath: '/files',
  },
  {
    clientCallName: 'client.files.delete',
    fullyQualifiedName: 'files.delete',
    httpMethod: 'delete',
    httpPath: '/files/{file_id}',
  },
  {
    clientCallName: 'client.files.get',
    fullyQualifiedName: 'files.get',
    httpMethod: 'get',
    httpPath: '/files/{file_id}',
  },
  {
    clientCallName: 'client.sessions.create',
    fullyQualifiedName: 'sessions.create',
    httpMethod: 'post',
    httpPath: '/sessions',
  },
  {
    clientCallName: 'client.sessions.update',
    fullyQualifiedName: 'sessions.update',
    httpMethod: 'patch',
    httpPath: '/sessions/{session_id}',
  },
  {
    clientCallName: 'client.sessions.list',
    fullyQualifiedName: 'sessions.list',
    httpMethod: 'get',
    httpPath: '/sessions',
  },
  {
    clientCallName: 'client.sessions.delete',
    fullyQualifiedName: 'sessions.delete',
    httpMethod: 'delete',
    httpPath: '/sessions/{session_id}',
  },
  {
    clientCallName: 'client.sessions.chat',
    fullyQualifiedName: 'sessions.chat',
    httpMethod: 'post',
    httpPath: '/sessions/{session_id}/chat',
  },
  {
    clientCallName: 'client.sessions.createOrUpdate',
    fullyQualifiedName: 'sessions.createOrUpdate',
    httpMethod: 'post',
    httpPath: '/sessions/{session_id}',
  },
  {
    clientCallName: 'client.sessions.get',
    fullyQualifiedName: 'sessions.get',
    httpMethod: 'get',
    httpPath: '/sessions/{session_id}',
  },
  {
    clientCallName: 'client.sessions.history',
    fullyQualifiedName: 'sessions.history',
    httpMethod: 'get',
    httpPath: '/sessions/{session_id}/history',
  },
  {
    clientCallName: 'client.sessions.render',
    fullyQualifiedName: 'sessions.render',
    httpMethod: 'post',
    httpPath: '/sessions/{session_id}/render',
  },
  {
    clientCallName: 'client.sessions.reset',
    fullyQualifiedName: 'sessions.reset',
    httpMethod: 'put',
    httpPath: '/sessions/{session_id}',
  },
  {
    clientCallName: 'client.users.create',
    fullyQualifiedName: 'users.create',
    httpMethod: 'post',
    httpPath: '/users',
  },
  {
    clientCallName: 'client.users.update',
    fullyQualifiedName: 'users.update',
    httpMethod: 'patch',
    httpPath: '/users/{user_id}',
  },
  {
    clientCallName: 'client.users.list',
    fullyQualifiedName: 'users.list',
    httpMethod: 'get',
    httpPath: '/users',
  },
  {
    clientCallName: 'client.users.delete',
    fullyQualifiedName: 'users.delete',
    httpMethod: 'delete',
    httpPath: '/users/{user_id}',
  },
  {
    clientCallName: 'client.users.createOrUpdate',
    fullyQualifiedName: 'users.createOrUpdate',
    httpMethod: 'post',
    httpPath: '/users/{user_id}',
  },
  {
    clientCallName: 'client.users.get',
    fullyQualifiedName: 'users.get',
    httpMethod: 'get',
    httpPath: '/users/{user_id}',
  },
  {
    clientCallName: 'client.users.reset',
    fullyQualifiedName: 'users.reset',
    httpMethod: 'put',
    httpPath: '/users/{user_id}',
  },
  {
    clientCallName: 'client.users.docs.create',
    fullyQualifiedName: 'users.docs.create',
    httpMethod: 'post',
    httpPath: '/users/{user_id}/docs',
  },
  {
    clientCallName: 'client.users.docs.list',
    fullyQualifiedName: 'users.docs.list',
    httpMethod: 'get',
    httpPath: '/users/{user_id}/docs',
  },
  {
    clientCallName: 'client.users.docs.delete',
    fullyQualifiedName: 'users.docs.delete',
    httpMethod: 'delete',
    httpPath: '/users/{user_id}/docs/{doc_id}',
  },
  {
    clientCallName: 'client.users.docs.bulkDelete',
    fullyQualifiedName: 'users.docs.bulkDelete',
    httpMethod: 'delete',
    httpPath: '/users/{user_id}/docs',
  },
  {
    clientCallName: 'client.users.docs.search',
    fullyQualifiedName: 'users.docs.search',
    httpMethod: 'post',
    httpPath: '/users/{user_id}/search',
  },
  {
    clientCallName: 'client.jobs.get',
    fullyQualifiedName: 'jobs.get',
    httpMethod: 'get',
    httpPath: '/jobs/{job_id}',
  },
  {
    clientCallName: 'client.docs.embed',
    fullyQualifiedName: 'docs.embed',
    httpMethod: 'post',
    httpPath: '/embed',
  },
  {
    clientCallName: 'client.docs.get',
    fullyQualifiedName: 'docs.get',
    httpMethod: 'get',
    httpPath: '/docs/{doc_id}',
  },
  {
    clientCallName: 'client.tasks.create',
    fullyQualifiedName: 'tasks.create',
    httpMethod: 'post',
    httpPath: '/agents/{agent_id}/tasks',
  },
  {
    clientCallName: 'client.tasks.list',
    fullyQualifiedName: 'tasks.list',
    httpMethod: 'get',
    httpPath: '/agents/{agent_id}/tasks',
  },
  {
    clientCallName: 'client.tasks.createOrUpdate',
    fullyQualifiedName: 'tasks.createOrUpdate',
    httpMethod: 'post',
    httpPath: '/agents/{agent_id}/tasks/{task_id}',
  },
  {
    clientCallName: 'client.tasks.get',
    fullyQualifiedName: 'tasks.get',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}',
  },
  {
    clientCallName: 'client.executions.create',
    fullyQualifiedName: 'executions.create',
    httpMethod: 'post',
    httpPath: '/tasks/{task_id}/executions',
  },
  {
    clientCallName: 'client.executions.list',
    fullyQualifiedName: 'executions.list',
    httpMethod: 'get',
    httpPath: '/tasks/{task_id}/executions',
  },
  {
    clientCallName: 'client.executions.changeStatus',
    fullyQualifiedName: 'executions.changeStatus',
    httpMethod: 'put',
    httpPath: '/executions/{execution_id}',
  },
  {
    clientCallName: 'client.executions.get',
    fullyQualifiedName: 'executions.get',
    httpMethod: 'get',
    httpPath: '/executions/{execution_id}',
  },
  {
    clientCallName: 'client.executions.transitions.retrieve',
    fullyQualifiedName: 'executions.transitions.retrieve',
    httpMethod: 'get',
    httpPath: '/executions/{execution_id}/transitions/{transition_id}',
  },
  {
    clientCallName: 'client.executions.transitions.list',
    fullyQualifiedName: 'executions.transitions.list',
    httpMethod: 'get',
    httpPath: '/executions/{execution_id}/transitions',
  },
  {
    clientCallName: 'client.executions.transitions.stream',
    fullyQualifiedName: 'executions.transitions.stream',
    httpMethod: 'get',
    httpPath: '/executions/{execution_id}/transitions.stream',
  },
  {
    clientCallName: 'client.executions.status.get',
    fullyQualifiedName: 'executions.status.get',
    httpMethod: 'get',
    httpPath: '/executions/{execution_id}',
  },
  {
    clientCallName: 'client.executions.status.stream',
    fullyQualifiedName: 'executions.status.stream',
    httpMethod: 'get',
    httpPath: '/executions/{execution_id}/status.stream',
  },
  {
    clientCallName: 'client.secrets.create',
    fullyQualifiedName: 'secrets.create',
    httpMethod: 'post',
    httpPath: '/secrets',
  },
  {
    clientCallName: 'client.secrets.update',
    fullyQualifiedName: 'secrets.update',
    httpMethod: 'put',
    httpPath: '/secrets/{secret_id}',
  },
  {
    clientCallName: 'client.secrets.list',
    fullyQualifiedName: 'secrets.list',
    httpMethod: 'get',
    httpPath: '/secrets',
  },
  {
    clientCallName: 'client.secrets.delete',
    fullyQualifiedName: 'secrets.delete',
    httpMethod: 'delete',
    httpPath: '/secrets/{secret_id}',
  },
  {
    clientCallName: 'client.projects.create',
    fullyQualifiedName: 'projects.create',
    httpMethod: 'post',
    httpPath: '/projects',
  },
  {
    clientCallName: 'client.projects.list',
    fullyQualifiedName: 'projects.list',
    httpMethod: 'get',
    httpPath: '/projects',
  },
  {
    clientCallName: 'client.healthz.check',
    fullyQualifiedName: 'healthz.check',
    httpMethod: 'get',
    httpPath: '/healthz',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
