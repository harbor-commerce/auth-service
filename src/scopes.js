export const scopes = ['orders:read', 'orders:write', 'catalog:write', 'refunds:export']

export const roles = {
  support: ['orders:read'],
  finance: ['refunds:export'],
  admin: scopes,
}

export const routes = {
  'GET /scopes': () => scopes,
}
