---
layout: default
title: Shopcart
description: A Flipkart/Amazon clone — an e-commerce platform built with scalable microservices architecture.
date: 2021-07-01
tags: [Microservices, E-commerce, Full-stack]
permalink: /work/shopcart/
---

<style>
.proj-header { text-align: center; padding: 40px 0 48px; border-bottom: 1px solid var(--border); margin-bottom: 40px; }
.proj-eyebrow { font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 16px; }
.proj-title { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(32px, 5vw, 48px); font-weight: 400; font-style: italic; letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 16px; }
.proj-desc { font-family: Georgia, 'Times New Roman', serif; font-size: 16px; color: var(--text-secondary); max-width: 520px; margin: 0 auto; line-height: 1.7; }
.proj-section { padding: 40px 0; border-top: 1px solid var(--border); }
.proj-section-label { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 20px; }
.proj-section h2 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(22px, 3.5vw, 32px); font-weight: 400; letter-spacing: -0.3px; margin-bottom: 16px; line-height: 1.3; }
.proj-section p { font-family: Georgia, 'Times New Roman', serif; font-size: 16px; color: var(--text-secondary); line-height: 1.8; margin-bottom: 16px; }
.proj-showcase { margin: 40px 0; }
.proj-showcase img { width: 100%; border-radius: 12px; border: 1px solid var(--border); }
.proj-showcase-caption { text-align: center; margin-top: 12px; font-family: Georgia, serif; font-style: italic; font-size: 13px; color: var(--text-tertiary); }
.proj-gallery { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin: 32px 0; }
.proj-gallery img { width: 100%; border-radius: 12px; border: 1px solid var(--border); }
.proj-specs { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: 12px; overflow: hidden; margin: 32px 0; }
.proj-spec { padding: 20px; background: var(--bg); }
.proj-spec-label { font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 6px; }
.proj-spec-value { font-family: 'Playfair Display', Georgia, serif; font-size: 16px; color: var(--text); }
@media (max-width: 640px) { .proj-gallery { grid-template-columns: 1fr; } }
</style>

<article>

  <div class="proj-header">
    <p class="proj-eyebrow">Project &mdash; 2021</p>
    <h1 class="proj-title">Shopcart</h1>
    <p class="proj-desc">
      A full-featured e-commerce platform built on scalable microservices &mdash; product browsing, cart management, checkout, and order tracking.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Microservices</span><span class="tag">E-commerce</span><span class="tag">Full-stack</span></div>
  </div>

  <div class="proj-section" style="border-top: none; padding-top: 0;">
    <p class="proj-section-label">Overview</p>
    <h2>E-commerce done right,<br>from the architecture up</h2>
    <p>
      Shopcart is a production-grade e-commerce platform inspired by Flipkart and Amazon. Rather than building a monolith, it embraces a microservices architecture where each domain &mdash; products, cart, orders, users &mdash; is an independent service that can be developed, deployed, and scaled individually.
    </p>
    <p>
      The platform covers the complete shopping experience: browsing product catalogs, managing a shopping cart, processing checkout with payment integration, and tracking orders from placement to delivery. Each service communicates through well-defined APIs, making the system robust and maintainable.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Architecture</p>
      <p class="proj-spec-value">Microservices</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Type</p>
      <p class="proj-spec-value">Full-stack</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Domain</p>
      <p class="proj-spec-value">E-commerce</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Services</p>
      <p class="proj-spec-value">Independent</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Communication</p>
      <p class="proj-spec-value">REST APIs</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Security</p>
      <p class="proj-spec-value">Auth + RBAC</p>
    </div>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>Microservices that scale independently</h2>
    <p>
      Each microservice owns its data store and exposes a RESTful API. The product service handles catalog management and search. The cart service manages user sessions and item quantities. The order service orchestrates the checkout flow, coordinating between inventory, payment, and fulfillment.
    </p>
    <p>
      Service discovery, load balancing, and API gateway patterns ensure that the system remains responsive under load. Authentication and authorization are handled at the gateway level, providing consistent security across all services without duplicating logic.
    </p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Features</p>
    <h2>The complete shopping journey</h2>
    <p>
      Product browsing with search and filtering. A persistent shopping cart that survives sessions. Secure checkout with payment processing. Order tracking from confirmation to delivery. User accounts with order history and saved addresses.
    </p>
    <p>
      On the operational side: each service can be deployed independently, scaled horizontally based on demand, and monitored individually. A failure in one service doesn't bring down the entire platform &mdash; graceful degradation is built into the architecture.
    </p>
  </div>

</article>
