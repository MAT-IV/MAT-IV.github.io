---
layout: default
title: Ledger
permalink: /ledger/
---

<div class="main-content ledger-page">

  <div class="page-header">
    <div class="page-header-left">
      <a href="{{ '/' | relative_url }}" class="ledger-home-link" aria-label="Back home">&larr; Home</a>
    </div>
    <h1 class="page-header-title">Ledger</h1>
    <div class="page-header-right"></div>
  </div>

  <!-- ===== Passcode gate ===== -->
  <div id="ledger-gate" class="ledger-gate">
    <div class="ledger-gate-card">
      <h2>This page is private</h2>
      <p>Enter the passcode to continue.</p>
      <input type="password" id="ledger-pass" placeholder="Passcode" autocomplete="off">
      <button id="ledger-unlock-btn" class="resume-download">Unlock</button>
      <p id="ledger-gate-error" class="ledger-gate-error"></p>
    </div>
  </div>

  <!-- ===== App (hidden until unlocked) ===== -->
  <div id="ledger-app" class="ledger-app" style="display:none;"></div>

</div>

<style>
  /* ---- Gate ---- */
  .ledger-gate { display: flex; justify-content: center; margin-top: 3rem; }
  .ledger-gate-card {
    background: rgba(0,0,0,0.65);
    border-radius: 14px;
    padding: 2rem 2.2rem;
    text-align: center;
    max-width: 340px;
    width: 100%;
    box-shadow: 0 10px 24px rgba(0,0,0,0.7);
  }
  .ledger-gate-card h2 { margin: 0 0 0.4rem; }
  .ledger-gate-card p { opacity: 0.8; font-size: 0.9rem; margin-bottom: 1.2rem; }
  .ledger-gate-card input {
    width: 100%;
    padding: 0.6rem 0.8rem;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.4);
    background: rgba(255,255,255,0.06);
    color: #fff;
    text-align: center;
    margin-bottom: 1rem;
    box-sizing: border-box;
  }
  .ledger-gate-card input:focus { outline: none; border-color: #fff; }
  .ledger-gate-error { color: #ff8a8a; font-size: 0.85rem; min-height: 1.2em; margin: 0.8rem 0 0; }
  .ledger-home-link { color: #fff; text-decoration: none; opacity: 0.8; }
  .ledger-home-link:hover { opacity: 1; }
  @keyframes ledgerShake {
    10%, 90% { transform: translateX(-1px); }
    20%, 80% { transform: translateX(2px); }
    30%, 50%, 70% { transform: translateX(-4px); }
    40%, 60% { transform: translateX(4px); }
  }
  .ledger-shake { animation: ledgerShake 0.4s; }

  /* ---- App shell (matches site's dark card language) ---- */
  .ledger-app { font-family: "Helvetica Neue", Arial, sans-serif; }
  .ledger-app .l-section {
    background: rgba(0,0,0,0.65);
    border-radius: 12px;
    padding: 1.1rem 1.3rem;
    margin-bottom: 1.2rem;
    box-shadow: 0 10px 24px rgba(0,0,0,0.7);
  }
  .ledger-app .l-section-title {
    font-size: 0.75rem; text-transform: uppercase; letter-spacing: 1px;
    opacity: 0.7; margin-bottom: 0.9rem; display: flex; justify-content: space-between; align-items: center;
  }
  .ledger-app .l-totals { display: flex; gap: 0.9rem; margin-bottom: 1.2rem; flex-wrap: wrap; }
  .ledger-app .l-total-card {
    flex: 1; min-width: 140px; background: rgba(0,0,0,0.65); border-radius: 10px;
    padding: 0.9rem 1rem; box-shadow: 0 8px 18px rgba(0,0,0,0.7);
  }
  .ledger-app .l-total-card .l-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.6px; opacity: 0.65; }
  .ledger-app .l-total-card .l-amount { font-size: 1.4rem; margin-top: 0.3rem; font-weight: 600; }
  .ledger-app .l-total-card.gold { box-shadow: 0 0 14px rgba(255,215,120,0.25); }
  .ledger-app .l-total-card.gold .l-amount { color: #f2d27a; }
  .ledger-app .l-total-card.a .l-amount { color: #6fd8c2; }
  .ledger-app .l-total-card.b .l-amount { color: #f0996a; }

  .ledger-app .l-month-nav { display: flex; align-items: center; gap: 0.6rem; }
  .ledger-app .l-month-nav button {
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.4); color: #fff;
    width: 28px; height: 28px; border-radius: 50%; cursor: pointer;
  }
  .ledger-app .l-month-nav button:hover { background: rgba(255,255,255,0.18); }
  .ledger-app .l-month-nav .l-month-label { font-size: 0.85rem; min-width: 120px; text-align: center; opacity: 0.9; }

  .ledger-app .l-form { display: grid; grid-template-columns: 120px 100px 1fr 150px 1fr auto; gap: 0.6rem; align-items: end; }
  .ledger-app .l-field label { display: block; font-size: 0.65rem; text-transform: uppercase; letter-spacing: 0.5px; opacity: 0.6; margin-bottom: 0.25rem; }
  .ledger-app input, .ledger-app select {
    width: 100%; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.3); color: #fff;
    padding: 0.5rem 0.6rem; border-radius: 8px; font-size: 0.85rem; box-sizing: border-box;
  }
  .ledger-app input:focus, .ledger-app select:focus { outline: none; border-color: #fff; }
  .ledger-app .l-payer-toggle { display: flex; border: 1px solid rgba(255,255,255,0.3); border-radius: 8px; overflow: hidden; }
  .ledger-app .l-payer-toggle button {
    flex: 1; background: transparent; border: none; color: rgba(255,255,255,0.6); padding: 0.5rem 0.3rem; cursor: pointer; font-size: 0.75rem;
  }
  .ledger-app .l-payer-toggle button.active.a { background: #6fd8c2; color: #04231b; font-weight: 600; }
  .ledger-app .l-payer-toggle button.active.b { background: #f0996a; color: #2a1206; font-weight: 600; }
  .ledger-app .l-add-btn {
    background: #fff; color: #000; border: none; border-radius: 999px;
    padding: 0.55rem 1.1rem; font-weight: 600; cursor: pointer; font-size: 0.85rem; white-space: nowrap;
    transition: box-shadow 0.2s, transform 0.2s;
  }
  .ledger-app .l-add-btn:hover { box-shadow: 0 0 10px rgba(255,255,255,0.6); transform: translateY(-1px); }

  .ledger-app .l-cat-manage { display: flex; gap: 0.5rem; margin-top: 1rem; align-items: center; flex-wrap: wrap; }
  .ledger-app .l-cat-pill {
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.25); border-radius: 999px;
    padding: 0.25rem 0.7rem; font-size: 0.7rem; opacity: 0.85; display: flex; gap: 0.4rem; align-items: center;
  }
  .ledger-app .l-cat-pill button { background: none; border: none; color: #ff8a8a; cursor: pointer; font-size: 0.75rem; padding: 0; }
  .ledger-app .l-add-cat { display: flex; gap: 0.4rem; }
  .ledger-app .l-add-cat input { width: 130px; }
  .ledger-app .l-small-btn {
    background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.4); color: #fff;
    padding: 0.45rem 0.8rem; border-radius: 999px; cursor: pointer; font-size: 0.75rem;
  }
  .ledger-app .l-small-btn:hover { background: rgba(255,255,255,0.18); }
  .ledger-app .l-note { font-size: 0.7rem; opacity: 0.55; margin-top: 0.5rem; }
  .ledger-app .l-names-row { display: flex; gap: 0.6rem; margin-top: 0.6rem; flex-wrap: wrap; }
  .ledger-app .l-names-row input { max-width: 160px; }

  .ledger-app .l-bar-row { display: grid; grid-template-columns: 130px 1fr 80px; align-items: center; gap: 0.6rem; margin-bottom: 0.6rem; font-size: 0.85rem; }
  .ledger-app .l-bar-track { position: relative; height: 8px; background: rgba(255,255,255,0.08); border-radius: 4px; overflow: hidden; }
  .ledger-app .l-bar-fill { position: absolute; left: 0; top: 0; bottom: 0; background: linear-gradient(90deg, #f2d27a, #f0996a); border-radius: 4px; }
  .ledger-app .l-bar-amt { text-align: right; opacity: 0.75; }

  .ledger-app .l-filters select { width: auto; padding: 0.3rem 0.6rem; font-size: 0.75rem; border-radius: 999px; }
  .ledger-app .l-txn { display: grid; grid-template-columns: 55px 100px 1fr 90px 80px 24px; gap: 0.6rem; align-items: center; padding: 0.55rem 0; border-bottom: 1px dashed rgba(255,255,255,0.15); font-size: 0.85rem; }
  .ledger-app .l-txn:last-child { border-bottom: none; }
  .ledger-app .l-txn .l-date { opacity: 0.6; font-size: 0.75rem; }
  .ledger-app .l-txn .l-cat { opacity: 0.6; font-size: 0.75rem; }
  .ledger-app .l-txn .l-payer { font-size: 0.68rem; text-transform: uppercase; letter-spacing: 0.4px; font-weight: 600; }
  .ledger-app .l-txn .l-payer.a { color: #6fd8c2; }
  .ledger-app .l-txn .l-payer.b { color: #f0996a; }
  .ledger-app .l-txn .l-amt { text-align: right; }
  .ledger-app .l-txn .l-del { background: none; border: none; color: rgba(255,255,255,0.4); cursor: pointer; font-size: 0.9rem; }
  .ledger-app .l-txn .l-del:hover { color: #ff8a8a; }
  .ledger-app .l-empty { opacity: 0.55; font-size: 0.85rem; text-align: center; padding: 1.2rem 0; }
  .ledger-app .l-sync-note { font-size: 0.7rem; opacity: 0.5; text-align: right; margin-top: -0.4rem; margin-bottom: 0.6rem; }

  @media (max-width: 720px) {
    .ledger-app .l-form { grid-template-columns: 1fr 1fr; }
    .ledger-app .l-form .l-add-btn { grid-column: span 2; }
    .ledger-app .l-txn { grid-template-columns: 1fr 1fr; grid-template-areas: "date amt" "desc desc" "cat payer" "del del"; row-gap: 0.25rem; }
    .ledger-app .l-txn .l-date { grid-area: date; } .ledger-app .l-txn .l-amt { grid-area: amt; text-align:right; }
    .ledger-app .l-txn .l-desc { grid-area: desc; } .ledger-app .l-txn .l-cat { grid-area: cat; }
    .ledger-app .l-txn .l-payer { grid-area: payer; text-align:right; } .ledger-app .l-txn .l-del { grid-area: del; justify-self:end; }
  }
</style>

<script>
(function(){
  // ===== CONFIG: fill these in after creating your free jsonbin.io bin =====
  var JSONBIN_BIN_ID = "YOUR_BIN_ID_HERE";
  var JSONBIN_API_KEY = "YOUR_JSONBIN_KEY_HERE";
  // ===========================================================================

  var PASSCODE_HASH = "b56ce3d097ea517d19efbae8326de0f81bfb41d056b17b93dc493b401f223391";

  async function sha256Hex(text){
    var enc = new TextEncoder().encode(text);
    var buf = await crypto.subtle.digest('SHA-256', enc);
    return Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,'0')).join('');
  }

  var gate = document.getElementById('ledger-gate');
  var appRoot = document.getElementById('ledger-app');
  var passInput = document.getElementById('ledger-pass');
  var unlockBtn = document.getElementById('ledger-unlock-btn');
  var errEl = document.getElementById('ledger-gate-error');

  async function tryUnlock(){
    var val = passInput.value;
    var hash = await sha256Hex(val);
    if (hash === PASSCODE_HASH){
      sessionStorage.setItem('ledger_unlocked', 'true');
      showApp();
    } else {
      errEl.textContent = "That's not it — try again.";
      gate.querySelector('.ledger-gate-card').classList.remove('ledger-shake');
      void gate.offsetWidth;
      gate.querySelector('.ledger-gate-card').classList.add('ledger-shake');
      passInput.value = '';
      passInput.focus();
    }
  }
  unlockBtn.addEventListener('click', tryUnlock);
  passInput.addEventListener('keydown', function(e){ if (e.key === 'Enter') tryUnlock(); });

  function showApp(){
    gate.style.display = 'none';
    appRoot.style.display = 'block';
    initLedgerApp();
  }

  if (sessionStorage.getItem('ledger_unlocked') === 'true'){
    showApp();
  } else {
    passInput.focus();
  }

  // ===================== Ledger app =====================
  function initLedgerApp(){
    var DEFAULT_CATEGORIES = ["Groceries","Eating Out","Housing","Utilities","Transport","Fun","Health","Other"];
    var root = appRoot;
    var state = {
      expenses: [],
      categories: DEFAULT_CATEGORIES.slice(),
      names: { a: "Partner A", b: "Partner B" },
      loaded: false,
      saving: false,
      monthOffset: 0,
      filterCat: "All",
      payerChoice: "a"
    };

    var configured = JSONBIN_BIN_ID !== "YOUR_BIN_ID_HERE" && JSONBIN_API_KEY !== "YOUR_JSONBIN_KEY_HERE";
    var API_URL = "https://api.jsonbin.io/v3/b/" + JSONBIN_BIN_ID;

    function monthKey(offset){
      var d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset);
      return { y: d.getFullYear(), m: d.getMonth() };
    }
    function monthLabel(offset){
      var d = new Date(); d.setDate(1); d.setMonth(d.getMonth() + offset);
      return d.toLocaleString('en-US', { month: 'long', year: 'numeric' });
    }
    function fmt(n){ return '$' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
    function todayStr(){ return new Date().toISOString().slice(0,10); }
    function escapeHtml(s){ return String(s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }

    async function loadAll(){
      if (!configured){ state.loaded = true; render(); return; }
      try {
        var res = await fetch(API_URL + "?meta=false", { headers: { "X-Master-Key": JSONBIN_API_KEY } });
        if (res.ok){
          var data = await res.json();
          if (data.expenses) state.expenses = data.expenses;
          if (data.categories) state.categories = data.categories;
          if (data.names) state.names = data.names;
        }
      } catch(e) { console.error('load error', e); }
      state.loaded = true;
      render();
    }

    async function saveAll(){
      if (!configured) return;
      state.saving = true;
      try {
        await fetch(API_URL, {
          method: "PUT",
          headers: { "Content-Type": "application/json", "X-Master-Key": JSONBIN_API_KEY },
          body: JSON.stringify({ expenses: state.expenses, categories: state.categories, names: state.names })
        });
      } catch(e) { console.error('save failed', e); }
      state.saving = false;
      renderSyncNote();
    }

    function renderSyncNote(){
      var el = root.querySelector('.l-sync-note');
      if (!el) return;
      el.textContent = configured ? (state.saving ? 'Syncing…' : 'Synced') : 'Not connected — add your jsonbin.io keys to sync between devices';
    }

    function expensesForMonth(offset){
      var k = monthKey(offset);
      return state.expenses.filter(function(e){
        var d = new Date(e.date + 'T00:00:00');
        return d.getFullYear() === k.y && d.getMonth() === k.m;
      });
    }

    function render(){
      if (!state.loaded){ root.innerHTML = '<p class="l-empty">Loading ledger…</p>'; return; }

      var monthExpenses = expensesForMonth(state.monthOffset).slice().sort(function(a,b){ return b.date.localeCompare(a.date); });
      var total = monthExpenses.reduce(function(s,e){ return s+Number(e.amount); }, 0);
      var totalA = monthExpenses.filter(function(e){ return e.payer==='a'; }).reduce(function(s,e){ return s+Number(e.amount); }, 0);
      var totalB = monthExpenses.filter(function(e){ return e.payer==='b'; }).reduce(function(s,e){ return s+Number(e.amount); }, 0);

      var byCat = {};
      monthExpenses.forEach(function(e){ byCat[e.category] = (byCat[e.category]||0) + Number(e.amount); });
      var maxCat = Math.max(1, Math.max.apply(null, Object.values(byCat).length ? Object.values(byCat) : [0]));
      var catEntries = Object.entries(byCat).sort(function(a,b){ return b[1]-a[1]; });
      var catRows = catEntries.map(function(pair){
        return '<div class="l-bar-row"><div>'+escapeHtml(pair[0])+'</div>' +
          '<div class="l-bar-track"><div class="l-bar-fill" style="width:'+(pair[1]/maxCat*100).toFixed(1)+'%"></div></div>' +
          '<div class="l-bar-amt">'+fmt(pair[1])+'</div></div>';
      }).join('') || '<p class="l-empty">No expenses logged yet this month.</p>';

      var filtered = state.filterCat === 'All' ? monthExpenses : monthExpenses.filter(function(e){ return e.category===state.filterCat; });
      var txnRows = filtered.map(function(e){
        return '<div class="l-txn">' +
          '<div class="l-date">'+e.date.slice(5)+'</div>' +
          '<div class="l-cat">'+escapeHtml(e.category)+'</div>' +
          '<div class="l-desc">'+escapeHtml(e.description || '—')+'</div>' +
          '<div class="l-payer '+e.payer+'">'+escapeHtml(state.names[e.payer])+'</div>' +
          '<div class="l-amt">'+fmt(e.amount)+'</div>' +
          '<button class="l-del" data-del="'+e.id+'" title="Delete">&#10005;</button></div>';
      }).join('') || '<p class="l-empty">No transactions'+(state.filterCat!=='All' ? ' in this category' : '')+' yet.</p>';

      var catOptions = state.categories.map(function(c){ return '<option value="'+escapeHtml(c)+'">'+escapeHtml(c)+'</option>'; }).join('');
      var filterOptions = ['All'].concat(state.categories).map(function(c){ return '<option value="'+escapeHtml(c)+'" '+(state.filterCat===c?'selected':'')+'>'+escapeHtml(c)+'</option>'; }).join('');
      var catPills = state.categories.map(function(c){ return '<span class="l-cat-pill">'+escapeHtml(c)+' <button data-delcat="'+escapeHtml(c)+'">&#10005;</button></span>'; }).join('');

      root.innerHTML =
        '<div class="l-sync-note"></div>' +
        '<div class="l-totals">' +
          '<div class="l-total-card gold"><div class="l-label">Total spent</div><div class="l-amount">'+fmt(total)+'</div></div>' +
          '<div class="l-total-card a"><div class="l-label">'+escapeHtml(state.names.a)+'</div><div class="l-amount">'+fmt(totalA)+'</div></div>' +
          '<div class="l-total-card b"><div class="l-label">'+escapeHtml(state.names.b)+'</div><div class="l-amount">'+fmt(totalB)+'</div></div>' +
        '</div>' +

        '<div class="l-section">' +
          '<div class="l-section-title"><span>'+monthLabel(state.monthOffset)+'</span>' +
            '<div class="l-month-nav"><button id="prevM">&larr;</button>' +
            (state.monthOffset<0 ? '<button id="nextM">&rarr;</button>' : '<button disabled style="opacity:.3;cursor:default">&rarr;</button>') +
            '</div></div>' +

          '<div class="l-form">' +
            '<div class="l-field"><label>Date</label><input type="date" id="f-date" value="'+todayStr()+'"></div>' +
            '<div class="l-field"><label>Amount</label><input type="number" id="f-amount" step="0.01" min="0" placeholder="0.00"></div>' +
            '<div class="l-field"><label>Category</label><select id="f-cat">'+catOptions+'</select></div>' +
            '<div class="l-field"><label>Paid by</label><div class="l-payer-toggle">' +
              '<button type="button" data-payer="a" class="'+(state.payerChoice==='a'?'active a':'')+'">'+escapeHtml(state.names.a)+'</button>' +
              '<button type="button" data-payer="b" class="'+(state.payerChoice==='b'?'active b':'')+'">'+escapeHtml(state.names.b)+'</button>' +
            '</div></div>' +
            '<div class="l-field"><label>Description</label><input type="text" id="f-desc" placeholder="e.g. HEB run"></div>' +
            '<button class="l-add-btn" id="addBtn">Add</button>' +
          '</div>' +

          '<div class="l-cat-manage">' + catPills +
            '<div class="l-add-cat"><input type="text" id="newCat" placeholder="New category">' +
            '<button class="l-small-btn" id="addCatBtn">Add category</button></div>' +
          '</div>' +
          '<div class="l-note">Editing account names below updates them everywhere.</div>' +
          '<div class="l-names-row">' +
            '<input type="text" id="nameA" value="'+escapeHtml(state.names.a)+'" placeholder="Partner A name">' +
            '<input type="text" id="nameB" value="'+escapeHtml(state.names.b)+'" placeholder="Partner B name">' +
            '<button class="l-small-btn" id="saveNamesBtn">Save names</button>' +
          '</div>' +
        '</div>' +

        '<div class="l-section"><div class="l-section-title">By category</div>' + catRows + '</div>' +

        '<div class="l-section"><div class="l-section-title"><span>Transactions</span>' +
          '<div class="l-filters"><select id="filterCat">'+filterOptions+'</select></div></div>' +
          txnRows +
        '</div>';

      renderSyncNote();

      root.querySelector('#prevM').onclick = function(){ state.monthOffset--; render(); };
      var nextBtn = root.querySelector('#nextM');
      if (nextBtn) nextBtn.onclick = function(){ state.monthOffset++; render(); };

      Array.prototype.forEach.call(root.querySelectorAll('[data-payer]'), function(btn){
        btn.onclick = function(){ state.payerChoice = btn.getAttribute('data-payer'); render(); };
      });

      root.querySelector('#addBtn').onclick = function(){
        var date = root.querySelector('#f-date').value || todayStr();
        var amount = parseFloat(root.querySelector('#f-amount').value);
        var category = root.querySelector('#f-cat').value;
        var description = root.querySelector('#f-desc').value.trim();
        if (!amount || amount <= 0){ root.querySelector('#f-amount').focus(); return; }
        var entry = { id: Date.now().toString(36)+Math.random().toString(36).slice(2,6), date: date, amount: amount, category: category, description: description, payer: state.payerChoice };
        state.expenses.push(entry);
        render();
        saveAll();
      };

      Array.prototype.forEach.call(root.querySelectorAll('[data-del]'), function(btn){
        btn.onclick = function(){
          var id = btn.getAttribute('data-del');
          state.expenses = state.expenses.filter(function(e){ return e.id !== id; });
          render();
          saveAll();
        };
      });

      root.querySelector('#addCatBtn').onclick = function(){
        var input = root.querySelector('#newCat');
        var val = input.value.trim();
        if (!val || state.categories.indexOf(val) !== -1) return;
        state.categories.push(val);
        render();
        saveAll();
      };

      Array.prototype.forEach.call(root.querySelectorAll('[data-delcat]'), function(btn){
        btn.onclick = function(){
          var cat = btn.getAttribute('data-delcat');
          state.categories = state.categories.filter(function(c){ return c !== cat; });
          if (state.filterCat === cat) state.filterCat = 'All';
          render();
          saveAll();
        };
      });

      root.querySelector('#filterCat').onchange = function(e){ state.filterCat = e.target.value; render(); };

      root.querySelector('#saveNamesBtn').onclick = function(){
        var a = root.querySelector('#nameA').value.trim() || 'Partner A';
        var b = root.querySelector('#nameB').value.trim() || 'Partner B';
        state.names = { a: a, b: b };
        render();
        saveAll();
      };
    }

    loadAll();
  }
})();
</script>
