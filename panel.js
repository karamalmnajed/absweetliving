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
      <p class="service-panel-subtitle">Engineered for elegance, built to last</p>
    </div>
  </div>

  <div class="service-panel-body">
    <section class="service-panel-section">
      <h3>Overview</h3>
      <p>Our flooring collection represents the finest selection of engineered wood, SPC, and parquet solutions available in the UAE. Each material is carefully sourced for its exceptional durability, aesthetic appeal, and ability to withstand the region's unique climate conditions.</p>
    </section>

    <section class="service-panel-section">
      <h3>Benefits</h3>
      <ul class="service-panel-list">
        <li>Exceptional durability with scratch and water resistance</li>
        <li>Temperature stability for year-round comfort</li>
        <li>Low maintenance requirements for busy lifestyles</li>
        <li>Enhanced property value through premium materials</li>
        <li>Eco-friendly options with sustainable sourcing</li>
      </ul>
    </section>

    <section class="service-panel-section">
      <h3>Materials</h3>
      <div class="service-panel-grid">
        <div class="service-panel-card">
          <h4>Engineered Wood</h4>
          <p>Multi-layer construction with real hardwood veneer, offering the beauty of solid wood with enhanced stability.</p>
        </div>
        <div class="service-panel-card">
          <h4>SPC Flooring</h4>
          <p>Stone plastic composite with waterproof core, perfect for high-traffic areas and moisture-prone spaces.</p>
        </div>
        <div class="service-panel-card">
          <h4>Parquet</h4>
          <p>Classic geometric patterns that create timeless sophistication, available in various wood species and finishes.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Gallery</h3>
      <div class="service-panel-gallery">
        <div class="service-panel-gallery-item">
          <img src="cimages/floor.webp" alt="Oak engineered wood flooring in living room" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cimages/card1.webp" alt="SPC flooring in modern kitchen" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cimages/card2.webp" alt="Herringbone parquet in luxury bedroom" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cimages/hero.webp" alt="Wide plank flooring in open plan space" loading="lazy">
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Applications</h3>
      <p>Our flooring solutions are designed for diverse environments including luxury residences, boutique hotels, retail spaces, offices, and hospitality venues. Each installation is tailored to the specific requirements of the space and usage patterns.</p>
    </section>

    <section class="service-panel-section">
      <h3>Process</h3>
      <div class="service-panel-steps">
        <div class="service-panel-step">
          <span class="service-panel-step-number">01</span>
          <h4>Consultation</h4>
          <p>Site assessment and material selection based on your vision and practical requirements.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">02</span>
          <h4>Preparation</h4>
          <p>Subfloor evaluation, moisture testing, and surface preparation for optimal adhesion.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">03</span>
          <h4>Installation</h4>
          <p>Precision installation by certified craftsmen using industry-leading techniques.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">04</span>
          <h4>Finishing</h4>
          <p>Final inspection, cleaning, and care instructions for lasting beauty.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>FAQ</h3>
      <div class="service-panel-faq">
        <div class="service-panel-faq-item">
          <h4>What is the typical installation timeline?</h4>
          <p>Most residential projects are completed within 3-5 days, depending on the area size and preparation requirements.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>Do you offer warranty on flooring?</h4>
          <p>Yes, all our flooring comes with a comprehensive 5-year warranty covering manufacturing defects and installation issues.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>Can flooring be installed over existing tiles?</h4>
          <p>In many cases, yes. We conduct a thorough assessment to determine if your existing surface is suitable for overlay installation.</p>
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
      <p class="service-panel-subtitle">Reimagine every surface with precision craftsmanship</p>
    </div>
  </div>

  <div class="service-panel-body">
    <section class="service-panel-section">
      <h3>Overview</h3>
      <p>Interior wrapping offers a revolutionary approach to surface transformation, allowing you to completely redesign walls, doors, wardrobes, cabinetry, and architectural elements without demolition. Our premium vinyl and film solutions deliver stunning results with minimal disruption.</p>
    </section>

    <section class="service-panel-section">
      <h3>Benefits</h3>
      <ul class="service-panel-list">
        <li>Complete transformation without construction or demolition</li>
        <li>Cost-effective alternative to replacement materials</li>
        <li>Extensive design options with textures and finishes</li>
        <li>Durable and long-lasting with proper care</li>
        <li>Quick installation with minimal downtime</li>
      </ul>
    </section>

    <section class="service-panel-section">
      <h3>Materials</h3>
      <div class="service-panel-grid">
        <div class="service-panel-card">
          <h4>Wood Grain Finishes</h4>
          <p>Realistic wood textures from oak to walnut, perfect for achieving natural warmth without solid timber costs.</p>
        </div>
        <div class="service-panel-card">
          <h4>Matte & Gloss</h4>
          <p>Sleek solid colors in contemporary palettes, ideal for modern minimalist aesthetics.</p>
        </div>
        <div class="service-panel-card">
          <h4>Textured Films</h4>
          <p>Leather, fabric, and stone effects that add tactile sophistication to any surface.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Gallery</h3>
      <div class="service-panel-gallery">
        <div class="service-panel-gallery-item">
          <img src="cimages/card1.webp" alt="Wrapped wardrobe doors in modern bedroom" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cimages/card2.webp" alt="Kitchen cabinet wrapping transformation" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cimages/floor.webp" alt="Door wrapping with wood grain finish" loading="lazy">
        </div>
        <div class="service-panel-gallery-item">
          <img src="cimages/hero.webp" alt="Wall wrapping in luxury living space" loading="lazy">
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>Applications</h3>
      <p>Our wrapping services transform doors, wardrobes, kitchen cabinets, bathroom vanities, wall panels, columns, architraves, and furniture pieces. Perfect for renovations, refresh projects, and new construction seeking cost-effective premium finishes.</p>
    </section>

    <section class="service-panel-section">
      <h3>Process</h3>
      <div class="service-panel-steps">
        <div class="service-panel-step">
          <span class="service-panel-step-number">01</span>
          <h4>Design Selection</h4>
          <p>Choose from our extensive sample collection or custom colors to match your vision perfectly.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">02</span>
          <h4>Surface Preparation</h4>
          <p>Cleaning and priming surfaces to ensure optimal adhesion and flawless finish.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">03</span>
          <h4>Precision Application</h4>
          <p>Expert installation with heat-forming techniques for seamless edges and corners.</p>
        </div>
        <div class="service-panel-step">
          <span class="service-panel-step-number">04</span>
          <h4>Quality Assurance</h4>
          <p>Final inspection and finishing touches for a professional, lasting result.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-section">
      <h3>FAQ</h3>
      <div class="service-panel-faq">
        <div class="service-panel-faq-item">
          <h4>How long does wrapped material last?</h4>
          <p>With proper care, our premium wraps can last 7-10 years, maintaining their appearance and durability.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>Can wrapped surfaces be cleaned normally?</h4>
          <p>Absolutely. Our wraps are water-resistant and can be cleaned with mild soap and water, just like traditional surfaces.</p>
        </div>
        <div class="service-panel-faq-item">
          <h4>Is wrapping suitable for high-traffic areas?</h4>
          <p>Yes, we use commercial-grade films specifically designed for high-traffic environments with enhanced durability.</p>
        </div>
      </div>
    </section>

    <section class="service-panel-cta">
      <h3>Transform Your Interior Today</h3>
      <p>Contact us for a free consultation and discover how wrapping can revolutionize your space.</p>
      <a href="https://wa.me/971526442979" class="btn btn-primary" target="_blank" rel="noopener">Get Started</a>
    </section>
  </div>
</div>`;

  // State
  let panelLoaded = false;
  let currentService = null;
  let triggerButton = null;

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

    // Insert content directly
    panelRoot.innerHTML = panelContent;
    initializePanelElements();
    attachPanelEventListeners();
    panelLoaded = true;
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

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      loadPanel();
      attachTriggerHandlers();
    });
  } else {
    loadPanel();
    attachTriggerHandlers();
  }

})();
