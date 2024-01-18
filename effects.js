function navigateTo(page) {
  const content = document.getElementById('content');
  switch (page) {
    case 'home':
      content.innerHTML = '<div class="page-content home">Phone home ET!</div>';
      break;
    case 'messages':
      content.innerHTML = '<div class="page-content messages">Send messages to your bestie!</div>';
      break;
    case 'friends':
      content.innerHTML = '<div class="page-content friends">View your friends!</div>';
      break;
    default:
      break;
  }
}

// Initial load to Home page
navigateTo('home');
function navigateTo(page) {
  const content = document.getElementById('content');
  switch (page) {
    case 'home':
      content.innerHTML = '<div class="page-content home">ET has landed!<br>🛸👽🛸</div>';
      break;
    case 'messages':
      content.innerHTML = '<div class="page-content messages">Send a transmission! <br>👾🔫</div>';
      break;
    case 'friends':
      content.innerHTML = '<div class="page-content friends">See your fellow earth beings!<br>🤖</div>';
      break;
    default:
      break;
  }
}

// Initial load to Home page
navigateTo('home');
