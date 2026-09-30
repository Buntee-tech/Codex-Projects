const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

if (ctx) {
  ctx.fillStyle = '#2a2a2a';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Just to verify it's working
  ctx.fillStyle = 'white';
  ctx.font = '24px sans-serif';
  ctx.fillText('Canvas Ready', 320, 300);
}

console.log('Territory Wars client initialized.');
