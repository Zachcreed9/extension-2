document.body.innerHTML = `
  <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh;font-size:2rem;font-family:sans-serif;text-align:center;color:#333;">
    <p>Auto-Focus: Ce site est bloqué pour vous aider à rester concentré 💪</p>
    <button style="margin-top:1rem;padding:0.5rem 1rem;font-size:1rem;color:#fff;background-color:#007BFF;border:none;border-radius:5px;cursor:pointer;" onclick="window.history.back()">Retour</button>
  </div>
`;
document.body.style.backgroundColor = "#f2f2f2";
