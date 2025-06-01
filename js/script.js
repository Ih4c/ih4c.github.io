// Terminal Elements
const input = document.getElementById('command-input');
const output = document.querySelector('.output');
let commandHistory = [];
let historyIndex = -1;

// Initialize hacking animation
initHackAnimation();

// Terminal Functionality
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const command = input.value.trim();
    if (command) {
      commandHistory.push(command);
      historyIndex = commandHistory.length;
      input.value = '';
      handleCommand(command);
    }
  } else if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (commandHistory.length > 0) {
      if (historyIndex > 0) historyIndex--;
      input.value = commandHistory[historyIndex];
    }
  } else if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (historyIndex < commandHistory.length - 1) {
      historyIndex++;
      input.value = commandHistory[historyIndex];
    } else {
      historyIndex = commandHistory.length;
      input.value = '';
    }
  }
});

// Command Processor
function handleCommand(command) {
  let response = '';
  
  // Clear command
  if (command === 'clear') {
    output.innerHTML = '';
    return;
  }

  // Special commands
  switch (command.toLowerCase()) {
    case 'help':
      response = `<div class="command-help">
                   <p>Available commands:</p>
                   <ul>
                     <li><strong>about</strong> - My cybersecurity background</li>
                     <li><strong>writeups</strong> - CTF solutions</li>
                     <li><strong>contact</strong> - PGP/secure contact</li>
                     <li><strong>start</strong> - Demo hacking sequence</li>
                     <li><strong>clear</strong> - Reset terminal</li>
                   </ul>
                 </div>`;
      break;
      
    case 'start':
      startHackDemo();
      return;
      
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
      response = `<p class="error">Command "${command}" not found. Type <strong>help</strong> for options.</p>`;
  }

  // Display output
  output.innerHTML += `
    <div class="command-line">
      <span class="prompt">user@nate_sec:~$</span> ${command}
    </div>
    ${response}
  `;
  output.scrollTop = output.scrollHeight;
}

// Hacking Animation Functions
function initHackAnimation() {
  const hackText = document.createElement('div');
  hackText.id = 'hack-code';
  document.querySelector('.hack-animation').appendChild(hackText);
}

function startHackDemo() {
  const phrases = [
    "SCANNING PORTS...",
    "FOUND OPEN: 22, 80, 443",
    "EXPLOITING WEAK SSH CREDENTIALS...",
    "ROOT ACCESS OBTAINED",
    "CLEARING LOGS...",
    "SESSION COMPROMISED"
  ];
  
  output.innerHTML += `
    <div class="command-line">
      <span class="prompt">user@nate_sec:~$</span> start
    </div>
    <div class="hack-demo"></div>
  `;
  
  const demoBox = document.querySelector('.hack-demo');
  let i = 0;
  
  function typePhrase() {
    if (i < phrases.length) {
      demoBox.innerHTML += `
        <div class="hack-line">
          <span class="hack-prompt">[!]</span> ${phrases[i]}
        </div>
      `;
      i++;
      output.scrollTop = output.scrollHeight;
      setTimeout(typePhrase, 1500);
    }
  }
  
  typePhrase();
}