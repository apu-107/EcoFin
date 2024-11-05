

const analyzeButton = document.getElementById('analyze');
analyzeButton.addEventListener('click', async () => {
  const amount = document.getElementById('amount').value;
  const response = await fetch('/analyze', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
  });
  const result = await response.json();
  document.getElementById('results').innerHTML = `Sustainable Investment Recommendation: ${result.recommendation}`;
});


