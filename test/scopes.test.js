import test from 'node:test'
import assert from 'node:assert/strict'
import { scopes, roles } from '../src/scopes.js'

test('scopes are unique', () => assert.equal(new Set(scopes).size, scopes.length))
test('roles only grant known scopes', () => {
  for (const granted of Object.values(roles)) for (const s of granted) assert.ok(scopes.includes(s), s)
})
