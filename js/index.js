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

// document.getElementById('button-donate-1').addEventListener('click', function() {
//   isValidAmount('donate-input-1', 'my_modal_1');
// });

// History
const historyItem = document.createElement('div');
historyItem.className = "border border-gray-300 rounded-lg p-8 mb-5";
historyItem.innerHTML = `
  <p></p>
`