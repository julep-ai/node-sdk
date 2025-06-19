// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import create_agents from './agents/create-agents';
import update_agents from './agents/update-agents';
import list_agents from './agents/list-agents';
import delete_agents from './agents/delete-agents';
import create_or_update_agents from './agents/create-or-update-agents';
import get_agents from './agents/get-agents';
import list_models_agents from './agents/list-models-agents';
import reset_agents from './agents/reset-agents';
import create_agents_tools from './agents/tools/create-agents-tools';
import update_agents_tools from './agents/tools/update-agents-tools';
import list_agents_tools from './agents/tools/list-agents-tools';
import delete_agents_tools from './agents/tools/delete-agents-tools';
import reset_agents_tools from './agents/tools/reset-agents-tools';
import create_agents_docs from './agents/docs/create-agents-docs';
import list_agents_docs from './agents/docs/list-agents-docs';
import delete_agents_docs from './agents/docs/delete-agents-docs';
import bulk_delete_agents_docs from './agents/docs/bulk-delete-agents-docs';
import search_agents_docs from './agents/docs/search-agents-docs';
import create_files from './files/create-files';
import list_files from './files/list-files';
import delete_files from './files/delete-files';
import get_files from './files/get-files';
import create_sessions from './sessions/create-sessions';
import update_sessions from './sessions/update-sessions';
import list_sessions from './sessions/list-sessions';
import delete_sessions from './sessions/delete-sessions';
import chat_sessions from './sessions/chat-sessions';
import create_or_update_sessions from './sessions/create-or-update-sessions';
import get_sessions from './sessions/get-sessions';
import history_sessions from './sessions/history-sessions';
import render_sessions from './sessions/render-sessions';
import reset_sessions from './sessions/reset-sessions';
import create_users from './users/create-users';
import update_users from './users/update-users';
import list_users from './users/list-users';
import delete_users from './users/delete-users';
import create_or_update_users from './users/create-or-update-users';
import get_users from './users/get-users';
import reset_users from './users/reset-users';
import create_users_docs from './users/docs/create-users-docs';
import list_users_docs from './users/docs/list-users-docs';
import delete_users_docs from './users/docs/delete-users-docs';
import bulk_delete_users_docs from './users/docs/bulk-delete-users-docs';
import search_users_docs from './users/docs/search-users-docs';
import get_jobs from './jobs/get-jobs';
import embed_docs from './docs/embed-docs';
import get_docs from './docs/get-docs';
import create_tasks from './tasks/create-tasks';
import list_tasks from './tasks/list-tasks';
import create_or_update_tasks from './tasks/create-or-update-tasks';
import get_tasks from './tasks/get-tasks';
import create_executions from './executions/create-executions';
import list_executions from './executions/list-executions';
import change_status_executions from './executions/change-status-executions';
import get_executions from './executions/get-executions';
import retrieve_executions_transitions from './executions/transitions/retrieve-executions-transitions';
import list_executions_transitions from './executions/transitions/list-executions-transitions';
import stream_executions_transitions from './executions/transitions/stream-executions-transitions';
import get_executions_status from './executions/status/get-executions-status';
import stream_executions_status from './executions/status/stream-executions-status';
import create_secrets from './secrets/create-secrets';
import update_secrets from './secrets/update-secrets';
import list_secrets from './secrets/list-secrets';
import delete_secrets from './secrets/delete-secrets';
import create_projects from './projects/create-projects';
import list_projects from './projects/list-projects';
import check_healthz from './healthz/check-healthz';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(create_agents);
addEndpoint(update_agents);
addEndpoint(list_agents);
addEndpoint(delete_agents);
addEndpoint(create_or_update_agents);
addEndpoint(get_agents);
addEndpoint(list_models_agents);
addEndpoint(reset_agents);
addEndpoint(create_agents_tools);
addEndpoint(update_agents_tools);
addEndpoint(list_agents_tools);
addEndpoint(delete_agents_tools);
addEndpoint(reset_agents_tools);
addEndpoint(create_agents_docs);
addEndpoint(list_agents_docs);
addEndpoint(delete_agents_docs);
addEndpoint(bulk_delete_agents_docs);
addEndpoint(search_agents_docs);
addEndpoint(create_files);
addEndpoint(list_files);
addEndpoint(delete_files);
addEndpoint(get_files);
addEndpoint(create_sessions);
addEndpoint(update_sessions);
addEndpoint(list_sessions);
addEndpoint(delete_sessions);
addEndpoint(chat_sessions);
addEndpoint(create_or_update_sessions);
addEndpoint(get_sessions);
addEndpoint(history_sessions);
addEndpoint(render_sessions);
addEndpoint(reset_sessions);
addEndpoint(create_users);
addEndpoint(update_users);
addEndpoint(list_users);
addEndpoint(delete_users);
addEndpoint(create_or_update_users);
addEndpoint(get_users);
addEndpoint(reset_users);
addEndpoint(create_users_docs);
addEndpoint(list_users_docs);
addEndpoint(delete_users_docs);
addEndpoint(bulk_delete_users_docs);
addEndpoint(search_users_docs);
addEndpoint(get_jobs);
addEndpoint(embed_docs);
addEndpoint(get_docs);
addEndpoint(create_tasks);
addEndpoint(list_tasks);
addEndpoint(create_or_update_tasks);
addEndpoint(get_tasks);
addEndpoint(create_executions);
addEndpoint(list_executions);
addEndpoint(change_status_executions);
addEndpoint(get_executions);
addEndpoint(retrieve_executions_transitions);
addEndpoint(list_executions_transitions);
addEndpoint(stream_executions_transitions);
addEndpoint(get_executions_status);
addEndpoint(stream_executions_status);
addEndpoint(create_secrets);
addEndpoint(update_secrets);
addEndpoint(list_secrets);
addEndpoint(delete_secrets);
addEndpoint(create_projects);
addEndpoint(list_projects);
addEndpoint(check_healthz);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
