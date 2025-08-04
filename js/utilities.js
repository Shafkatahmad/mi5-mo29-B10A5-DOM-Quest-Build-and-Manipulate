function isValidAmount(input, modal, donateAmount, title) {
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

  const titleElement = document.getElementById(title).innerText

  const historyItem = document.createElement('div');
  historyItem.className = "border border-gray-300 rounded-lg p-8 mb-5";
  historyItem.innerHTML = `
  <p class="text-xl font-bold mb-4">${amount.toFixed(2)} Taka is Donated for ${titleElement}</p>
  <p class="text-sm font-light">Date: ${new Date().toString()}</p>
  `
  document.getElementById('history').appendChild(historyItem);
}

// making the isValidAmount function global for reusable code
window.isValidAmount = isValidAmount;