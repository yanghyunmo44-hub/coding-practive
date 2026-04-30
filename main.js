const form = document.getElementById('password-checker-form');
const passwordInput = document.getElementById('password-input');
const resultContainer = document.getElementById('result-container');
const themeToggle = document.getElementById('theme-toggle');

// --- Disqus Configuration ---
var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = window.location.pathname;
};

function loadDisqus() {
    var d = document, s = d.createElement('script');
    s.src = 'https://coding-practive.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
}

// --- Theme Logic ---
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
  document.body.classList.add('light-mode');
}

// Initial Disqus Load
loadDisqus();

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const theme = document.body.classList.contains('light-mode') ? 'light' : 'dark';
  localStorage.setItem('theme', theme);
  
  // Reset Disqus for theme change if it exists
  if (typeof DISQUS !== 'undefined') {
    DISQUS.reset({
      reload: true,
      config: function () {
        this.page.url = window.location.href;
        this.page.identifier = window.location.pathname;
      }
    });
  }
});

// --- Password Check Logic ---
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const password = passwordInput.value;
  if (!password) {
    return;
  }

  resultContainer.innerHTML = '';
  resultContainer.className = '';

  try {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-1', data);
    
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    
    const hashPrefix = hashHex.substring(0, 5);
    const hashSuffix = hashHex.substring(5).toUpperCase();

    const response = await fetch(`https://api.pwnedpasswords.com/range/${hashPrefix}`);
    if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
    }
    const text = await response.text();
    
    const lines = text.split('\n');
    let pwnedCount = 0;
    let found = false;

    for (const line of lines) {
        const [suffix, count] = line.split(':');
        if (suffix === hashSuffix) {
            found = true;
            pwnedCount = parseInt(count, 10);
            break;
        }
    }

    if (found) {
        resultContainer.className = 'result-pwned';
        resultContainer.textContent = `이런! 이 비밀번호는 ${pwnedCount.toLocaleString()}개의 데이터 유출 사고에서 발견되었습니다. 사용하지 않는 것이 좋습니다.`;
    } else {
        resultContainer.className = 'result-safe';
        resultContainer.textContent = '좋은 소식입니다! 이 비밀번호는 유출된 비밀번호 목록에서 발견되지 않았습니다.';
    }

  } catch (error) {
    console.error('Error checking password:', error);
    resultContainer.className = 'result-pwned';
    resultContainer.textContent = '비밀번호를 확인하는 중에 오류가 발생했습니다. 다시 시도해 주세요.';
  }
});
