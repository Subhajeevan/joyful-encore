export function startSnow() {
  const canvas = document.getElementById("snow-canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let flakes = [];

  for (let i = 0; i < 120; i++) {
    flakes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3 + 1,
      d: Math.random() + 1,
    });
  }

  function drawSnow() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(255,255,255,0.8)";
    ctx.beginPath();

    for (let f of flakes) {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
    }

    ctx.fill();
    moveSnow();
  }

  let angle = 0;

  function moveSnow() {
    angle += 0.01;
    for (let f of flakes) {
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 0.5;

      if (f.y > canvas.height) {
        f.y = 0;
        f.x = Math.random() * canvas.width;
      }
    }
  }

  setInterval(drawSnow, 33);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}
