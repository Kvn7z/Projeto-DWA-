function carregarCards() {
  return JSON.parse(localStorage.getItem('cards') || '[]');
}

function salvarCards(cards) {
  localStorage.setItem('cards', JSON.stringify(cards));
}
