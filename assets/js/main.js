document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu
  var toggle = document.querySelector('.nav-toggle');
  var mobileMenu = document.querySelector('.mobile-menu');

  if (toggle) {
    toggle.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      toggle.classList.toggle('active');
    });
  }

  document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('open');
      toggle.classList.remove('active');
    });
  });

  // Lightbox with navigation
  var lightbox = document.getElementById('lightbox');
  if (lightbox) {
    var galleryItems = Array.from(document.querySelectorAll('.gallery-item'));
    var currentIndex = 0;
    var lightboxImg = lightbox.querySelector('img');
    var counter = lightbox.querySelector('.lightbox-counter');

    function openLightbox(index) {
      currentIndex = index;
      var img = galleryItems[index].querySelector('img');
      lightboxImg.src = img.dataset.full || img.src;
      if (counter) counter.textContent = (index + 1) + ' / ' + galleryItems.length;
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    }

    function navigate(direction) {
      currentIndex = (currentIndex + direction + galleryItems.length) % galleryItems.length;
      var img = galleryItems[currentIndex].querySelector('img');
      lightboxImg.style.opacity = '0';
      lightboxImg.style.transform = 'scale(0.95) translateX(' + (direction * 20) + 'px)';
      setTimeout(function() {
        lightboxImg.src = img.dataset.full || img.src;
        if (counter) counter.textContent = (currentIndex + 1) + ' / ' + galleryItems.length;
        lightboxImg.style.transform = 'scale(0.95) translateX(' + (direction * -20) + 'px)';
        setTimeout(function() {
          lightboxImg.style.opacity = '1';
          lightboxImg.style.transform = 'scale(1) translateX(0)';
        }, 30);
      }, 150);
    }

    galleryItems.forEach(function(item, index) {
      item.addEventListener('click', function() {
        openLightbox(index);
      });
    });

    lightbox.querySelector('.lightbox-close').addEventListener('click', function(e) {
      e.stopPropagation();
      closeLightbox();
    });

    lightbox.querySelector('.lightbox-prev').addEventListener('click', function(e) {
      e.stopPropagation();
      navigate(-1);
    });

    lightbox.querySelector('.lightbox-next').addEventListener('click', function(e) {
      e.stopPropagation();
      navigate(1);
    });

    lightbox.addEventListener('click', function(e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function(e) {
      if (!lightbox.classList.contains('open')) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigate(-1);
      if (e.key === 'ArrowRight') navigate(1);
    });

    // Touch swipe
    var touchStartX = 0;
    var touchEndX = 0;

    lightbox.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightbox.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      var diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        navigate(diff > 0 ? 1 : -1);
      }
    }, { passive: true });
  }

  // Staggered reveal on scroll
  var revealElements = document.querySelectorAll('.skill-card, .project-card, .project-item, .gallery-item, .video-card, .post-item, .book-item');

  revealElements.forEach(function(el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(function(el) {
    observer.observe(el);
  });

  // Hero parallax on scroll
  var hero = document.querySelector('.hero');
  if (hero) {
    var heroContent = hero.querySelector('.hero-content');
    var ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          var scrolled = window.pageYOffset;
          var rate = scrolled * 0.3;
          if (heroContent && scrolled < 600) {
            heroContent.style.transform = 'translateY(' + rate + 'px)';
            heroContent.style.opacity = 1 - (scrolled / 600);
          }
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // Page load animation
  document.body.classList.add('loaded');

  // Magnetic hover on buttons
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var rect = btn.getBoundingClientRect();
      var x = e.clientX - rect.left - rect.width / 2;
      var y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = 'translate(' + x * 0.15 + 'px, ' + y * 0.15 + 'px)';
    });

    btn.addEventListener('mouseleave', function() {
      btn.style.transform = '';
    });
  });

  // Smooth nav background on scroll
  var nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 20) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }
});
