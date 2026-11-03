import test from 'node:test'
import assert from 'node:assert/strict'
import { roles } from '../src/scopes.js'

test('finance can export refunds', () => assert.ok(roles.finance.includes('refunds:export')))
test('finance can read the orders it refunds', () => assert.ok(roles.finance.includes('orders:read')))
