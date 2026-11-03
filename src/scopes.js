export const scopes = ['orders:read', 'orders:write', 'catalog:write']

export const roles = {
  support: ['orders:read'],
  admin: scopes,
}

export const routes = {
  'GET /scopes': () => scopes,
}
