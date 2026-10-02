import { useState, useCallback } from 'react';

const prefix = 'lavilla.';
export function readSession(key, fallback) {
  try {
    let raw = sessionStorage.getItem(prefix + key);
    if (raw === null && typeof fallback !== 'object') {
      const cookie = document.cookie.split('; ').find(item => item.startsWith('lavilla_' + key + '='));
      if (cookie) raw = decodeURIComponent(cookie.slice(cookie.indexOf('=') + 1));
    }
    const value = JSON.parse(raw);
    const ranges = { zone: [0, 3], collection: [0, 2], calculator_villa: [0, 2], daily_rate: [180, 750], occupancy: [55, 92] };
    if (typeof value === 'number' && (!Number.isFinite(value) || (ranges[key] && (value < ranges[key][0] || value > ranges[key][1] || !Number.isInteger(value))))) return fallback;
    if (value === null || typeof value !== typeof fallback) return fallback;
    if (typeof fallback === 'object') {
      if (Array.isArray(fallback)) return Array.isArray(value) ? value : fallback;
      return Object.fromEntries(Object.entries(fallback).map(([k, v]) => [k, typeof value[k] === typeof v ? value[k] : v]));
    }
    return value;
  } catch { return fallback; }
}
export function saveSession(key, value) {
  try { sessionStorage.setItem(prefix + key, JSON.stringify(value)); return true; }
  catch { return false; }
}
// Cookies only hold small, non-personal preferences. Form details stay in this tab.
export function savePreference(key, value) {
  saveSession(key, value);
  try { document.cookie = `lavilla_${key}=${encodeURIComponent(String(value))}; Path=/; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`; } catch { /* Restricted browser. */ }
}
export function useSessionState(key, fallback, preference = false) {
  const [value, setValue] = useState(() => readSession(key, fallback));
  const update = useCallback(next => {
    setValue(previous => {
      const resolved = typeof next === 'function' ? next(previous) : next;
      (preference ? savePreference : saveSession)(key, resolved);
      return resolved;
    });
  }, [key, preference]);
  return [value, update];
}
