document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    
    if (isOpen) {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.innerHTML = '<img src="images/icon-hamburger.svg" alt="Menu" class="h-6 w-6">';
    } else {
      mobileMenu.classList.remove('hidden');
      mobileMenuBtn.innerHTML = '<img src="images/icon-close.svg" alt="Close" class="h-6 w-6">';
    }
  });

  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.innerHTML = '<img src="images/icon-hamburger.svg" alt="Menu" class="h-6 w-6">';
    }
  });
});
