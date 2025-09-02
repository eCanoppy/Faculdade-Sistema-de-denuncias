function save(key, obj){ sessionStorage.setItem(key, JSON.stringify(obj)); }
function load(key){ try { return JSON.parse(sessionStorage.getItem(key)) || {}; } catch(_) { return {}; } }
function upsert(key, patch){ const curr = load(key); save(key, { ...curr, ...patch }); }
