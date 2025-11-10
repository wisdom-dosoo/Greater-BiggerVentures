// Site interactions for GREATER & BIGGER VENTURES
(() => {
  // Assumptions:
  // - The shop's official website URL (used for QR code) is set here. If you have a different URL, update shopUrl.
  // const shopUrl = 'https://greaterandbiggerventures.com';
  const momoNumber = '0541159150';

  const copyBtn = document.getElementById('copyMomoBtn');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');
  // const qrLink = document.getElementById('qrLink');

  let toastTimer = null;

  function showToast(message) {
    if (!toast || !toastMessage) return; // Guard against missing elements
    
    // Set the message
    toastMessage.textContent = message;
    
    // Show the toast
    toast.classList.add('show');
    
    // Clear any existing timer
    if (toastTimer) {
      clearTimeout(toastTimer);
    }
    
    // Set new timer to hide toast after 3 seconds
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
      toastTimer = null;
    }, 3000);
  }

  async function copyMoMo() {
    try {
      await navigator.clipboard.writeText(momoNumber);
      showToast(`MoMo Number: ${momoNumber} has been copied to clipboard!`);
    } catch (err) {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = momoNumber;
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
        showToast(`MoMo Number: ${momoNumber} has been copied to clipboard!`);
      } catch (e) {
        showToast('Unable to copy. Please copy manually.');
      }
      textarea.remove();
    }
  }

  // Bind copy button
  if (copyBtn) {
    copyBtn.addEventListener('click', (e) => {
      e.preventDefault();
      copyMoMo();
    });
  }



  // For accessibility: allow focusing toast close with keyboard in future improvements

  // FAQ accordion behavior
  function initFaqs() {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        btn.setAttribute('aria-expanded', String(!expanded));
        const answer = btn.nextElementSibling;
        if (!answer) return;
        if (expanded) {
          answer.classList.add('hidden');
        } else {
          answer.classList.remove('hidden');
        }
      });
    });
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqs);
  } else {
    initFaqs();
  }

})();
