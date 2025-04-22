// assets/js/carousel.js
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all carousels on the page
  document.querySelectorAll('.portfolio-carousel').forEach(carousel => {
    initCarousel(carousel);
  });
  
  function initCarousel(carousel) {
    const track = carousel.querySelector('.carousel-track');
    const slides = carousel.querySelectorAll('.carousel-slide');
    const indicators = carousel.querySelectorAll('.carousel-indicator');
    const prevButton = carousel.querySelector('.carousel-control.prev');
    const nextButton = carousel.querySelector('.carousel-control.next');
    
    let currentIndex = 0;
    const slideCount = slides.length;
    
    // Set up initial position
    updateCarousel();
    
    // Event listeners
    prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + slideCount) % slideCount;
      updateCarousel();
    });
    
    nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    });
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
      });
    });
    
    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;
    
    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carousel.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
      const swipeThreshold = 50;
      if (touchStartX - touchEndX > swipeThreshold) {
        // Swipe left - next slide
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
      } else if (touchEndX - touchStartX > swipeThreshold) {
        // Swipe right - previous slide
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
      }
    }
    
    // Auto-advance slides every 5 seconds
    let autoplayInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateCarousel();
    }, 5000);
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', () => {
      clearInterval(autoplayInterval);
    });
    
    carousel.addEventListener('mouseleave', () => {
      autoplayInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
      }, 5000);
    });
    
    // Update carousel position and active indicator
    function updateCarousel() {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
      
      // Update active indicator
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
          indicator.setAttribute('aria-current', 'true');
        } else {
          indicator.classList.remove('active');
          indicator.removeAttribute('aria-current');
        }
      });
    }
    
    // Keyboard navigation
    carousel.setAttribute('tabindex', '0');
    carousel.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        updateCarousel();
      } else if (e.key === 'ArrowRight') {
        currentIndex = (currentIndex + 1) % slideCount;
        updateCarousel();
      }
    });
  }
});
