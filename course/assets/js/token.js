// course/assets/js/token.js
function getToken() {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  return token && token.trim().length >= 6 ? token.trim() : null;
}

function requireTokenOrBlock() {
  const token = getToken();
  if (!token) {
    document.documentElement.classList.add("no-token");
    document.body.innerHTML = `
      <main class="container">
        <h1>Pääsy estetty</h1>
        <p>Tämä koulutus vaatii henkilökohtaisen linkin (token).</p>
        <p>Jos olet osallistuja, tarkista sähköpostistasi saamasi linkki.</p>
      </main>
    `;
    return null;
  }
  return token;
}
