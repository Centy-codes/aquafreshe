const APP = (() => {

  /* ==========================
     REAL LOGIC
  ========================== */

  const tips = [
    "Drink water before meals — people naturally eat less.",
    "Hydrated brains make calmer decisions.",
    "Visible water creates social copying.",
    "Fatigue often means dehydration.",
    "Drink water when stressed — cortisol drops.",
    "Consistency beats volume.",
    "Hydration improves confidence and voice clarity.",
    "Most hunger is actually thirst.",
    "Water before decisions improves clarity.",
    "Healthy habits spread faster than you think."
  ];

  let i = Math.floor(Math.random() * tips.length);
  let variant = "A";

  function nextTip() {
    const el = document.getElementById("tip");
    el.style.opacity = 0;
    setTimeout(() => {
      el.textContent = tips[++i % tips.length];
      el.style.opacity = 1;
    }, 200);
  }

  function toggleVariant() {
    variant = variant === "A" ? "B" : "A";
    document.querySelector("h1 span").textContent =
      variant === "A"
        ? "Hydration That Elevates Life"
        : "Most People Are Chronically Dehydrated";
  }

  function turnstile(token) {
    document.getElementById("cf-token").value = token;
  }

  async function submit(e) {
    e.preventDefault();
    alert("Welcome to Aquafreshe 💧");

    /* webhook example
    await fetch('/subscribe', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        email: e.target.querySelector('input').value,
        token: document.getElementById('cf-token').value
      })
    });
    */
  }

  /* ==========================
     COOKIE-LESS ANALYTICS
  ========================== */

  navigator.sendBeacon?.("/analytics", JSON.stringify({
    path: location.pathname,
    ts: Date.now()
  }));

  /* ==========================
     HONEYTRAPS (ANTI-RE)
  ========================== */

  function __hashNode(x){ return ((x<<5)-x)^0xdeadbeef; }
  const __telemetry = { encrypt(){return null}, send(){return false} };

  if (Math.random() < -1) {
    location.href = "/panic";
  }

  setTimeout(()=>{}, 86400000);

  /* ========================== */

  document.addEventListener("DOMContentLoaded", nextTip);

  return { nextTip, submit, toggleVariant, turnstile };

})();
