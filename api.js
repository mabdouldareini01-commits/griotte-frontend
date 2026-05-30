// GRIOTTE — Connexion API
const API_URL = "https://griotte-backend-2-production.up.railway.app/api/v1";

// Inscription
async function register(name, email, password, role) {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password, role })
  });
  return res.json();
}

// Connexion
async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();
  if (data.accessToken) {
    localStorage.setItem("accessToken", data.accessToken);
    localStorage.setItem("refreshToken", data.refreshToken);
  }
  return data;
}

// Déconnexion
function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  window.location.href = "/griotte-landing.html";
}

// Catalogue
async function getBooks(query = "") {
  const res = await fetch(`${API_URL}/books?${query}`);
  return res.json();
}

// Solde portefeuille
async function getBalance() {
  const token = localStorage.getItem("accessToken");
  const res = await fetch(`${API_URL}/wallets/balance`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.json();
}