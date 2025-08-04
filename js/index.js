// 
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  const navbar = document.getElementById('navbar');

  if(window.scrollY > 10) {
    header.classList.add('backdrop-blur-md');
    navbar.classList.remove('bg-green-50');
  }
  else {
    header.classList.remove('backdrop-blur-md');
    navbar.classList.add('bg-green-50');
  }
})


document.getElementById('button-donate-1').addEventListener('click', function() {
  isValidAmount('donate-input-1', 'my_modal_1', 'noakhali-donated-amount');
  const noakhaliDonate = parseFloat(document.getElementById('donate-input-1').value);
  const historyItem = document.createElement('div');
  historyItem.className = "border border-gray-300 rounded-lg p-8 mb-5";
  historyItem.innerHTML = `
  <p class="text-xl font-bold mb-4">${noakhaliDonate.toFixed(2)} Taka is Donated for ${document.getElementById('noakhali-title').innerText}</p>
  <p class="text-sm font-light">Date: ${new Date().toString()}</p>
  `
  document.getElementById('history').appendChild(historyItem);

});

document.getElementById('button-donate-2').addEventListener('click', function() {
  isValidAmount('donate-input-2', 'my_modal_2', 'feni-donated-amount');
  const feniDonate = parseFloat(document.getElementById('donate-input-2').value);
  const historyItem = document.createElement('div');
  historyItem.className = "border border-gray-300 rounded-lg p-8 mb-5";
  historyItem.innerHTML = `
  <p class="text-xl font-bold mb-4">${feniDonate.toFixed(2)} Taka is Donated for ${document.getElementById('feni-title').innerText}</p>
  <p class="text-sm font-light">Date: ${new Date().toString()}</p>
  `
  document.getElementById('history').appendChild(historyItem);
});

document.getElementById('button-donate-3').addEventListener('click', function() {
  isValidAmount('donate-input-3', 'my_modal_3', 'quota-donated-amount');
  const quotaDonate = parseFloat(document.getElementById('donate-input-3').value);
  const historyItem = document.createElement('div');
  historyItem.className = "border border-gray-300 rounded-lg p-8 mb-5";
  historyItem.innerHTML = `
  <p class="text-xl font-bold mb-4">${quotaDonate.toFixed(2)} Taka is Donated for ${document.getElementById('quota-title').innerText}</p>
  <p class="text-sm font-light">Date: ${new Date().toString()}</p>
  `
  document.getElementById('history').appendChild(historyItem);
})

// history tab functionality
document.getElementById('history-tab').addEventListener('click', function() {
  document.getElementById('history-tab').classList.add('bg-[#B4F461]', 'font-semibold');
  document.getElementById('history-tab').classList.remove('bg-gray-100', 'text-gray-500', 'font-medium');

  document.getElementById('donation-tab').classList.remove('bg-[#B4F461]', 'font-semibold');
  document.getElementById('donation-tab').classList.add('bg-gray-100', 'text-gray-500', 'font-medium');

  document.getElementById('history').classList.remove('hidden');
  document.getElementById('main').classList.add('hidden');
  document.getElementById('footer').classList.add('hidden');
})

// donation tab functionality
document.getElementById('donation-tab').addEventListener('click', function() {
  document.getElementById('donation-tab').classList.add('bg-[#B4F461]', 'font-semibold');
  document.getElementById('donation-tab').classList.remove('bg-gray-100', 'text-gray-500', 'font-medium');

  document.getElementById('history-tab').classList.remove('bg-[#B4F461]', 'font-semibold');
  document.getElementById('history-tab').classList.add('bg-gray-100', 'text-gray-500', 'font-medium');

  document.getElementById('history').classList.add('hidden');
  document.getElementById('main').classList.remove('hidden');
  document.getElementById('footer').classList.remove('hidden');
})