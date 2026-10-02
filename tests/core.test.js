import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateInvestment } from '../src/hooks/investment.js';
import { readSession, saveSession, savePreference } from '../src/hooks/storage.js';

test('calculator applies the modeled costs and handles corrupt input', () => {
    const result = calculateInvestment(1, 340, 78);
    assert.equal(result.occupiedNights, 285); assert.equal(result.grossRevenue, 96900);
    assert.equal(result.netIncome, 73644); assert.equal(result.netYield, '25.8');
    assert.ok(Number.isFinite(calculateInvestment(999, NaN, -100).netIncome));
});
test('drafts survive reload and malformed stored values recover safely', () => {
    const data = new Map();
    globalThis.sessionStorage = { getItem: k => data.get(k) ?? null, setItem: (k, v) => data.set(k, v) };
    globalThis.document = { cookie: '' }; globalThis.location = { protocol: 'https:' };
    assert.equal(saveSession('draft', { name: 'Ada', email: 'ada@example.com' }), true);
    assert.deepEqual(readSession('draft', { name: '', email: '' }), { name: 'Ada', email: 'ada@example.com' });
    data.set('lavilla.draft', 'broken'); assert.deepEqual(readSession('draft', { name: '' }), { name: '' });
    data.set('lavilla.zone', '99'); assert.equal(readSession('zone', 0), 0);
    savePreference('collection', 2); assert.match(document.cookie, /SameSite=Lax; Secure/);
    data.delete('lavilla.collection'); assert.equal(readSession('collection', 1), 2);
    globalThis.sessionStorage = { getItem() { throw Error('blocked') }, setItem() { throw Error('blocked') } };
    assert.equal(saveSession('draft', {}), false); assert.equal(readSession('x', 12), 12);
});
