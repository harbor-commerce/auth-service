import * as domain from './scopes.js'

export const routes = {
  'GET /health': () => ({ ok: true, service: 'auth-service' }),
  ...domain.routes,
}
