import { API, graphqlOperation, GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import type { GraphQLResult } from '@aws-amplify/api'

export function gql <
  QueryType extends object,
  QueryVariableType = {}
> (
  query: string,
  variables?: QueryVariableType,
  authMode?: GRAPHQL_AUTH_MODE,
  additionalHeaders?: Record<string, string>
) {
  return API.graphql({
    ...graphqlOperation(query, variables),
    authMode
  }, additionalHeaders) as Promise<GraphQLResult<QueryType>>
}

export function strip <Model> (model: Model | null | undefined) {
  return model ?? undefined
}

export {
  GRAPHQL_AUTH_MODE
}
