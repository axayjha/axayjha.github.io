---
layout: default
title: Retail Bank
description: Single page banking app with role-based features and real-time interest updates.
date: 2019-03-15
tags: [Angular, Spring Boot, MySQL]
permalink: /work/retail-bank/
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
    <p class="proj-eyebrow">Project &mdash; 2019</p>
    <h1 class="proj-title">Retail Bank</h1>
    <p class="proj-desc">
      A single-page banking application with role-based access, real-time interest calculations, and a modern Angular frontend backed by Spring Boot.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Angular</span><span class="tag">Spring Boot</span><span class="tag">MySQL</span></div>
  </div>

  <div class="proj-showcase">
    <img src="/img/retailbank/scr1.png" alt="Retail Bank dashboard">
    <p class="proj-showcase-caption">The banking dashboard &mdash; account overview with real-time balance and interest data.</p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Overview</p>
    <h2>Banking features in a<br>single-page experience</h2>
    <p>
      Retail Bank is a web-based banking application that provides core financial operations through a clean, responsive single-page interface. Different user roles &mdash; customers, tellers, and administrators &mdash; see different capabilities, enforced both in the UI and at the API level.
    </p>
    <p>
      Customers can view balances, transfer funds, and track transaction history. Administrators manage accounts, set interest rates, and monitor system activity. Interest calculations update in real-time, reflecting rate changes immediately across all affected accounts.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Frontend</p>
      <p class="proj-spec-value">Angular</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Backend</p>
      <p class="proj-spec-value">Spring Boot</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Database</p>
      <p class="proj-spec-value">MySQL</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Auth</p>
      <p class="proj-spec-value">Role-based</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Type</p>
      <p class="proj-spec-value">SPA</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">API</p>
      <p class="proj-spec-value">RESTful</p>
    </div>
  </div>

  <div class="proj-gallery">
    <img src="/img/retailbank/scr2.png" alt="Retail Bank transaction view">
    <img src="/img/retailbank/scr3.png" alt="Retail Bank admin panel">
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>Three-tier architecture</h2>
    <p>
      The Angular frontend handles routing, form validation, and state management client-side, communicating with the Spring Boot backend through RESTful endpoints. Spring Security provides authentication and role-based authorization, ensuring users can only access operations appropriate to their role.
    </p>
    <p>
      The MySQL database stores account data, transaction logs, and user credentials. Spring Data JPA handles object-relational mapping, while transaction management ensures that financial operations are atomic &mdash; a transfer either completes fully or rolls back entirely.
    </p>
    <p>
      Real-time interest updates are computed server-side whenever rates change, with the results pushed to connected clients. The SPA architecture means these updates appear instantly without page reloads, creating a responsive banking experience.
    </p>
  </div>

</article>
