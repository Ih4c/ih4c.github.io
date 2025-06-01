const input = document.getElementById('command-input');
const output = document.querySelector('.output');

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    input.value = '';
    handleCommand(command);
  }
});

function handleCommand(command) {
  let response = '';
  switch (command.toLowerCase()) {
    case 'help':
      response = `<p>Available commands:</p>
                 <ul>
                   <li><strong>about</strong> - Who am I?</li>
                   <li><strong>writeups</strong> - View THM/HTB writeups</li>
                   <li><strong>contact</strong> - How to reach me</li>
                 </ul>`;
      break;
    case 'about':
      window.location.href = 'about.html';
      return;
    case 'writeups':
      window.location.href = 'writeups.html';
      return;
    case 'contact':
      window.location.href = 'contact.html';
      return;
    default:
      response = `<p>Command not found. Type "help" for options.</p>`;
  }
  output.innerHTML += `<p>user@ih4c:~$ ${command}</p>${response}`;
}