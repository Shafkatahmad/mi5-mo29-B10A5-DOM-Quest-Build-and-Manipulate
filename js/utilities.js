function isValidAmount(input, modal, donateAmount) {
  const inputAmount = document.getElementById(input).value;
  const amount = parseFloat(inputAmount);

  if(isNaN(amount) || amount <= 0) {
    alert('Invalid Donation Amount');
    return;
  }
  
  const balanceElement = document.getElementById('current-balance');
  const currentBalance = parseFloat(balanceElement.innerText);

  if(amount > currentBalance) {
    alert('Insufficient Balance');
    return;
  }
  
  const newBalance = currentBalance - amount;
  balanceElement.innerText = newBalance.toFixed(2);

  const donateElement = document.getElementById(donateAmount);
  const previousDonated = parseFloat(donateElement.innerText);
  const newDonated = previousDonated + amount;
  donateElement.innerText = newDonated.toFixed(2);

  const modalId = document.getElementById(modal);
  modalId.showModal();


  // else {
  //   const modalId = document.getElementById(modal);
  //   const currentBalance = document.getElementById('current-balance');
  //   const newBalance = currentBalance - donateAmount;
  //   currentBalance.innerText = newBalance.toFixed(2);
  //   const donateTotal = amount + donateAmount;
  //   document.getElementById('noakhali-donated-amount').innerText = donateTotal.toFixed(2);
  //   modalId.showModal();
  // }
}

// making the isValidAmount function global for reusable code
window.isValidAmount = isValidAmount;