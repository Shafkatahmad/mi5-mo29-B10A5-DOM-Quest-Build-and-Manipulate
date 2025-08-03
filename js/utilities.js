function isValidAmount(input, modal) {
  const inputAmount = document.getElementById(input).value;
  const amount = parseFloat(inputAmount);

  if(isNaN(amount) || amount <= 0) {
    alert('Invalid Donation Amount');
    return;
  }
  else {
    const modalId = document.getElementById(modal);
    modalId.showModal();
  }
}