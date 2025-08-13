// ==== app.js ====

// --- Global state ---
let provider;
let selectedAccount = null;

// --- Optional: create Web3Modal instance here (v1 example) ---
const providerOptions = {
  /* configure walletconnect, etc. */
};
const web3Modal = new Web3Modal({
  cacheProvider: false, // optional
  providerOptions
});

// --- Account change handler ---
function handleAccountsChanged(accounts) {
  if (!accounts || accounts.length === 0) {
    selectedAccount = null;
    console.log('No accounts connected');
    updateUIForDisconnect();
    return;
  }

  selectedAccount = accounts[0];
  console.log('Account:', selectedAccount);
  updateUIForAccount(selectedAccount);
}

// --- Chain/network change handler ---
function handleChainChanged(chainId) {
  console.log('Chain changed to', chainId);
  // Simplest: reload the page
  window.location.reload();
}

// --- Disconnect handler ---
function handleDisconnect(error) {
  console.log('Disconnected', error);
  selectedAccount = null;
  updateUIForDisconnect();
}

// --- UI update stubs ---
function updateUIForAccount(account) {
  // Example: show the address in a DOM element
  const el = document.getElementById('accountDisplay');
  if (el) el.textContent = account;
}

function updateUIForDisconnect() {
  const el = document.getElementById('accountDisplay');
  if (el) el.textContent = 'Not connected';
}

// --- Connect wallet ---
async function onConnect() {
  try {
    provider = await web3Modal.connect();

    // Listen for events
    provider.on('accountsChanged', handleAccountsChanged);
    provider.on('chainChanged', handleChainChanged);
    provider.on('disconnect', handleDisconnect);

    // Request accounts now
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    handleAccountsChanged(accounts);
  } catch (err) {
    console.error('Connect error', err);
  }
}

// --- Bind buttons/CTAs ---
function bindCTAActions() {
  // All elements with data-action="connect_wallet"
  document.querySelectorAll('[data-action="connect_wallet"]').forEach(el => {
    el.addEventListener('click', e => {
      e.preventDefault();
      onConnect();
    });
  });

  // A direct ID example
  const widgetBtn = document.getElementById('connectBtn');
  if (widgetBtn) {
    widgetBtn.addEventListener('click', e => {
      e.preventDefault();
      onConnect();
    });
  }
}

// Run after DOM is ready
document.addEventListener('DOMContentLoaded', bindCTAActions);

// Expose for inline onclick if needed
window.onConnect = onConnect;
