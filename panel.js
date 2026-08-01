/* ==========================================================================
   SERVICE PANEL — Unified Implementation
   Content + Behavior in single file for clean architecture
   Works on both file:// and HTTP/HTTPS protocols
   ========================================================================== */

(function() {
  'use strict';

  // Panel Content Template
  const panelContent = `<!-- Flooring Service Panel -->
<div class="service-panel-content" data-service="flooring" role="document" aria-label="Flooring Services">
  <button class="service-panel-close" aria-label="Close panel">
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>

  <div class="service-panel-hero">
    <img src="cimages/floor.webp" alt="Premium flooring installation showcase" loading="lazy">
    <div class="service-panel-hero-overlay">
      <h2 class="service-panel-title">Flooring Options</h2>
      <p class="service-panel-subtitle">Timeless Flooring, Crafted for Modern Living</p>
    </div>
  </div>

  <div class="service-panel-body">
    <section class="service-panel-section">
      <h3>Overview</h3>
      <p>The right flooring defines the character of a space. Our carefully selected SPC collections combine authentic wood aesthetics with exceptional durability, delivering a refined finish designed for everyday living and the demands of the UAE climate.</p>
      <p>Available in straight plank and herringbone formats, every floor is chosen for its lasting performance, aesthetic appeal, and timeless appeal.</p>
    </section>

    <section class="service-panel-section">
      <h3>Flooring Benefits</h3>
      <div class="service-panel-grid">
        <div class="service-panel-card">
          <h4>Excellent Value</h4>
          <p>Enhances the appearance and instant value of your property without the cost of extensive renovations.</p>
        </div>
        <div class="service-panel-card">
          <h4>Lasting Durability</h4>
          <p>Engineered to resist everyday wear, scratches, and heavy foot traffic.</p>
        </div>
        <div class="service-panel-card">
          <h4>Easy Maintenance</h4>
          <p>Simple to clean with minimal upkeep required.</p>
        </div>
        <div class="service-panel-card">
          <h4>Authentic Wood Look</h4>
          <p>Natural textures and realistic finishes that elevate modern interiors.</p>
        </div>
        <div class="service-panel-card">
          <h4>Healthier Living</h4>
          <p>Anti-bacterial and termite-resistant properties support a cleaner indoor environment.</p>
        </div>
        <div class="service-panel-card">
          <h4>Underfloor Heating Compatible</h4>
          <p>Designed to work with underfloor heating systems where required.</p>
        </div>
        <div class="service-panel-card">
          <h4>Water Resistant</h4>
          <p>Suitable for kitchens, bathrooms, and other spaces exposed to everyday moisture.</p>
        </div>
        <div class="service-panel-card">
          <h4>Heat Resistant</h4>
          <p>Maintains its shape and appearance in the UAE's demanding climate.</p>
        </div>
        <div class="service-panel-card">
          <h4>Slip Resistant</h4>
          <p>Textured surfaces provide improved grip for confident everyday use.</p>
        </div>
      </div>
    </section>


    <section class="service-panel-section">
      <h3>Gallery</h3>
      <div class="service-panel-gallery">
        <div class="service-panel-gallery-item">
          <img src="cpanel-images/herringbone-brown.webp" alt="Herringbone brown flooring pattern" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cpanel-images/herringbone-white.webp" alt="Herringbone white flooring pattern" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cpanel-images/straight-dark-gray.webp" alt="Straight dark gray flooring" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cpanel-images/straight-white.webp" alt="Straight white flooring" loading="lazy">
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Applications</h3>
      <div class="service-panel-grid">
        <div class="service-panel-card">
          <h4>Residential Homes</h4>
        </div>
        <div class="service-panel-card">
          <h4>Hotels</h4>
        </div>
        <div class="service-panel-card">
          <h4>Retail Spaces</h4>
        </div>
        <div class="service-panel-card">
          <h4>Offices</h4>
        </div>
        <div class="service-panel-card">
          <h4>Restaurants</h4>
        </div>
        <div class="service-panel-card">
          <h4>Commercial Interiors</h4>
        </div>
      </div>
      <h4 class="service-panel-signature-text">Engineered for seamless integration into any interior.</h4>
    </section>

    <section class="service-panel-section">
      <h3>Process</h3>
      <div class="service-panel-steps">
        <div class="service-panel-step">
          <span class="service-panel-step-number">01</span>
          <h4>Inquiry & Free Site Visit</h4>
          <p>Tell us about your project. We'll visit your space, assess the area, discuss your needs, and take accurate measurements.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">02</span>
          <h4>Selection & Consultation</h4>
          <p>Explore flooring options with our experts. We'll help you compare materials, colors, finishes, and designs to find the right fit for your space and budget.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">03</span>
          <h4>Quotation & Installation</h4>
          <p>Receive a clear, detailed quotation with no surprises. Once approved, our experienced installers complete the project with precision and care.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">04</span>
          <h4>Aftercare & Warranty</h4>
          <p>Enjoy lasting peace of mind with workmanship warranty, product support, and responsive after-installation assistance whenever you need it.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>FAQ</h3>
      <div class="service-panel-faq">
        <div class="service-panel-faq-item">
          <h4>What is the typical installation timeline?</h4>
          <p>Most residential projects are completed within a day, depending on the area size and preparation requirements.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>What does the warranty cover?</h4>
          <p>Our 5-year warranty covers manufacturing defects in the flooring material and any installation or workmanship issues carried out by our team under normal use. If an eligible defect is identified, we will repair or replace the affected flooring free of charge. The warranty does not cover normal wear and tear, accidental damage, misuse, improper maintenance, flooding, structural movement, or work performed by third parties.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>How do you handle installation over damaged surfaces?</h4>
          <p>Before installation, we thoroughly assess the existing surface and recommend/execute any necessary preparation, which may include repairs, leveling, or surface treatment where required. By ensuring the subfloor is stable, smooth, and properly prepared, we deliver a high-quality installation built for long-term performance.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-cta">
      <h3>Ready to Transform Your Space?</h3>
      <p>Schedule a consultation with our flooring specialists to explore the perfect solution for your project.</p>
      <a href="https://wa.me/971526442979" class="btn btn-primary" target="_blank" rel="noopener">Get Started</a>
    </section>
  </div>
</div>

<!-- Interior Wrapping Service Panel -->
<div class="service-panel-content" data-service="wrapping" role="document" aria-label="Interior Wrapping Services">
  <button class="service-panel-close" aria-label="Close panel">
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M8 8L24 24M24 8L8 24" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </button>

  <div class="service-panel-hero">
    <img src="cimages/card1.webp" alt="Interior wrapping transformation showcase" loading="lazy">
    <div class="service-panel-hero-overlay">
      <h2 class="service-panel-title">Interior Wrapping</h2>
      <p class="service-panel-subtitle">Crafted for beautiful surfaces, built to last</p>
    </div>
  </div>

  <div class="service-panel-body">
    <section class="service-panel-section">
      <h3>Overview</h3>
      <p>Our interior wrapping collection represents a carefully selected range of premium architectural films for walls, doors, wardrobes, cabinetry, furniture, countertops, and interior features. Each finish is chosen for its durability, refined appearance, and ability to renew existing surfaces</p>
    </section>

    <section class="service-panel-section">
      <h3>Benefits</h3>
      <div class="service-panel-grid">
        <div class="service-panel-card">
          <h4>Excellent Value</h4>
          <p>Enhances the appearance and instant value of your property without the cost of extensive renovations.</p>
        </div>
        <div class="service-panel-card">
          <h4>Exceptional Durability</h4>
          <p>Scratch and stain resistance for lasting beauty.</p>
        </div>
        <div class="service-panel-card">
          <h4>Easy Maintenance</h4>
          <p>Simple to clean with minimal upkeep required.</p>
        </div>
        <div class="service-panel-card">
          <h4>Authentic Premium Finishes</h4>
          <p>Natural textures and realistic finishes that elevate modern interiors.</p>
        </div>
        <div class="service-panel-card">
          <h4>Extensive Selection</h4>
          <p>Wide range of colours, textures, and finishes.</p>
        </div>
        <div class="service-panel-card">
          <h4>Healthier Living</h4>
          <p>Anti-bacterial and termite-resistant properties support a cleaner indoor environment.</p>
        </div>
        <div class="service-panel-card">
          <h4>Water Resistant</h4>
          <p>Suitable for kitchens, bathrooms, and other spaces exposed to everyday moisture.</p>
        </div>
        <div class="service-panel-card">
          <h4>Heat Resistant</h4>
          <p>Maintains its shape and appearance in the UAE's demanding climate.</p>
        </div>
        <div class="service-panel-card">
          <h4>Slip Resistant</h4>
          <p>Textured surfaces provide improved grip for confident everyday use.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Materials</h3>
      <div class="service-panel-grid">
        <div class="service-panel-card">
          <h4>Wood Finishes</h4>
          <p>Natural wood grains from light oak to rich walnut, offering the warmth and character of timber with outstanding consistency and durability.</p>
        </div>
        <div class="service-panel-card">
          <h4>Solid Colours</h4>
          <p>Smooth matte and painted finishes in a carefully curated palette, suited to contemporary, classic, and minimalist interiors.</p>
        </div>
        <div class="service-panel-card">
          <h4>Specialty Finishes</h4>
          <p>Stone, marble, concrete, leather, fabric, and metallic textures that add depth, character, and visual interest to any space.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Gallery</h3>
      <div class="service-panel-gallery">
        <div class="service-panel-gallery-item">
          <img src="cpanel-images2/1.webp" alt="Interior wrapping design showcase" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cpanel-images2/2.webp" alt="Interior wrapping design showcase" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cpanel-images2/3.webp" alt="Interior wrapping design showcase" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cpanel-images2/4.webp" alt="Interior wrapping design showcase" loading="lazy">
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Applications</h3>
      <div class="service-panel-grid">
        <div class="service-panel-card">
          <h4>Residential Homes</h4>
        </div>
        <div class="service-panel-card">
          <h4>Hotels</h4>
        </div>
        <div class="service-panel-card">
          <h4>Retail Spaces</h4>
        </div>
        <div class="service-panel-card">
          <h4>Offices</h4>
        </div>
        <div class="service-panel-card">
          <h4>Restaurants</h4>
        </div>
        <div class="service-panel-card">
          <h4>Commercial Interiors</h4>
        </div>
      </div>
      <h4 class="service-panel-signature-text">Engineered for seamless integration into any interior.</h4>
    </section>

    <section class="service-panel-section">
      <h3>Process</h3>
      <div class="service-panel-steps">
        <div class="service-panel-step">
          <span class="service-panel-step-number">01</span>
          <h4>Inquiry & Free Site Visit</h4>
          <p>Tell us about your project. We'll visit your space, assess the area, discuss your needs, and take accurate measurements.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">02</span>
          <h4>Selection & Consultation</h4>
          <p>Explore flooring options with our experts. We'll help you compare materials, colors, finishes, and designs to find the right fit for your space and budget.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">03</span>
          <h4>Quotation & Installation</h4>
          <p>Receive a clear, detailed quotation with no surprises. Once approved, our experienced installers complete the project with precision and care.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">04</span>
          <h4>Aftercare & Warranty</h4>
          <p>Enjoy lasting peace of mind with workmanship warranty, product support, and responsive after-installation assistance whenever you need it.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>FAQ</h3>
      <div class="service-panel-faq">
        <div class="service-panel-faq-item">
          <h4>What is the typical installation timeline?</h4>
          <p>Most wrapping projects are completed within a day, depending on the surface area and any preparation requirements.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>What does the warranty cover?</h4>
          <p>Our 5-year warranty covers manufacturing defects in the wrapping material, along with any installation or workmanship issues carried out by our team under normal use. If an eligible defect is identified, we will repair or replace the affected wrap at no additional cost. The warranty does not cover normal wear and tear, accidental damage, misuse, improper maintenance, water damage, structural movement, or work performed by third parties.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>How do you handle installation over damaged surfaces?</h4>
          <p>Before installation, we thoroughly assess the existing surface and carry out any necessary preparation, which may include repairs, leveling, cleaning, or surface treatment where required. By ensuring the surface is stable, smooth, and properly prepared, we deliver a high-quality wrap designed for long-lasting performance.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-cta">
      <h3>Ready to Transform Your Space?</h3>
      <p>Schedule a consultation with our specialists to explore the ideal finish for your project.</p>
      <a href="https://wa.me/971526442979" class="btn btn-primary" target="_blank" rel="noopener">Get Started</a>
    </section>
  </div>
</div>`;

  // State
  let panelLoaded = false;
  let currentService = null;
  let triggerButton = null;
  let lazyLoadInitiated = false;

  // DOM Elements (cached after load)
  let panelRoot = null;
  let panelOverlay = null;
  let panelContainer = null;
  let panelContents = null;
  let closeButtons = null;

  // Load panel content once on page load
  function loadPanel() {
    if (panelLoaded) return;

    panelRoot = document.getElementById('service-panel-root');
    if (!panelRoot) {
      console.error('Service panel root element not found');
      return;
    }

    // Show loading indicator if panel is being opened
    if (currentService) {
      panelRoot.innerHTML = '<div class="service-panel-loading" aria-live="polite">Loading...</div>';
    }

    // Insert content directly
    panelRoot.innerHTML = panelContent;
    initializePanelElements();
    attachPanelEventListeners();
    panelLoaded = true;
  }

  // Lazy load panel when offer section is near viewport
  function initLazyLoad() {
    if (lazyLoadInitiated) return;
    lazyLoadInitiated = true;

    const offerSection = document.querySelector('.offer');
    if (!offerSection) {
      // Fallback: load after a delay if section not found
      setTimeout(loadPanel, 2000);
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          loadPanel();
          observer.disconnect();
        }
      });
    }, {
      rootMargin: '200px 0px', // Start loading 200px before section enters viewport
      threshold: 0.01
    });

    observer.observe(offerSection);

    // Fallback: load after 3 seconds if user hasn't scrolled to section
    setTimeout(() => {
      if (!panelLoaded) {
        loadPanel();
        observer.disconnect();
      }
    }, 3000);
  }

  // Cache panel DOM elements after loading
  function initializePanelElements() {
    panelOverlay = document.createElement('div');
    panelOverlay.className = 'service-panel-overlay';
    panelRoot.appendChild(panelOverlay);

    panelContainer = document.createElement('div');
    panelContainer.className = 'service-panel';
    panelContainer.setAttribute('role', 'dialog');
    panelContainer.setAttribute('aria-modal', 'true');
    panelContainer.setAttribute('aria-hidden', 'true');
    panelContainer.innerHTML = '<div class="service-panel-inner"></div>';
    panelRoot.appendChild(panelContainer);

    const panelInner = panelContainer.querySelector('.service-panel-inner');
    panelContents = panelRoot.querySelectorAll('.service-panel-content');
    panelContents.forEach(content => {
      panelInner.appendChild(content);
    });

    closeButtons = panelRoot.querySelectorAll('.service-panel-close');
  }

  // Attach panel event listeners
  function attachPanelEventListeners() {
    closeButtons.forEach(button => {
      button.addEventListener('click', closePanel);
    });

    panelOverlay.addEventListener('click', closePanel);
    document.addEventListener('keydown', handleEscapeKey);
  }

  // Handle ESC key
  function handleEscapeKey(e) {
    if (e.key === 'Escape' && currentService) {
      closePanel();
    }
  }

  // Open panel for specific service
  function openPanel(serviceName, button) {
    if (!panelLoaded) {
      loadPanel();
      setTimeout(() => openPanel(serviceName, button), 100);
      return;
    }

    triggerButton = button;
    currentService = serviceName;

    panelContents.forEach(content => {
      if (content.getAttribute('data-service') === serviceName) {
        content.classList.add('is-active');
      } else {
        content.classList.remove('is-active');
      }
    });

    panelOverlay.classList.add('is-open');
    panelContainer.classList.add('is-open');
    panelContainer.setAttribute('aria-hidden', 'false');
    document.body.classList.add('service-panel-open');

    setTimeout(() => {
      const firstFocusable = getFirstFocusableElement(panelContainer);
      if (firstFocusable) {
        firstFocusable.focus();
      }
    }, 50);

    document.body.style.overflow = 'hidden';
  }

  // Close panel
  function closePanel() {
    if (!currentService) return;

    panelOverlay.classList.remove('is-open');
    panelContainer.classList.remove('is-open');
    panelContainer.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('service-panel-open');
    document.body.style.overflow = '';

    if (triggerButton) {
      setTimeout(() => {
        triggerButton.focus();
      }, 50);
    }

    currentService = null;
    triggerButton = null;
  }

  // Get first focusable element in container
  function getFirstFocusableElement(container) {
    const focusableSelectors = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];

    const focusableElements = container.querySelectorAll(focusableSelectors.join(','));
    return focusableElements[0] || null;
  }

  // Attach trigger button handlers
  function attachTriggerHandlers() {
    const flooringTrigger = document.querySelector('.offer-half-left .btn-primary');
    if (flooringTrigger) {
      flooringTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openPanel('flooring', flooringTrigger);
      });
    }

    const wrappingTrigger = document.querySelector('.offer-half-right .btn-primary');
    if (wrappingTrigger) {
      wrappingTrigger.addEventListener('click', (e) => {
        e.preventDefault();
        openPanel('wrapping', wrappingTrigger);
      });
    }
  }

  // Initialize on DOM ready - use lazy loading strategy
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      attachTriggerHandlers();
      initLazyLoad();
    });
  } else {
    attachTriggerHandlers();
    initLazyLoad();
  }

})();
