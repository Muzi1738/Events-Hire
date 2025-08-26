// Price Calculator Function
function calculatePrice() {
  const itemPrice = parseInt(document.getElementById('itemSelect').value);
  const days = parseInt(document.getElementById('days').value);
  const totalPrice = itemPrice * days;
  
  document.getElementById('priceOutput').innerText = `Estimated Price: $${totalPrice}`;
}

// Request a Quote Form Submission
document.getElementById('quoteForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Quote request submitted! We will get back to you soon.');
});
