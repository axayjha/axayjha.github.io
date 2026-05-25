---
layout: default
title: Covid-19 Tracker
description: Cross-platform Flutter app showing state-wise covid reports for India.
date: 2020-05-30
tags: [Flutter, Dart, Mobile]
permalink: /work/covid-tracker/
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
    <p class="proj-eyebrow">Project &mdash; 2020</p>
    <h1 class="proj-title">Covid-19 Tracker</h1>
    <p class="proj-desc">
      A cross-platform mobile app delivering state-wise Covid-19 statistics for India &mdash; built from scratch in just six hours.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Flutter</span><span class="tag">Dart</span><span class="tag">Mobile</span></div>
  </div>

  <div class="proj-section" style="border-top: none; padding-top: 0;">
    <p class="proj-section-label">Overview</p>
    <h2>Real-time pandemic data,<br>built in a single sitting</h2>
    <p>
      When India's Covid-19 numbers were climbing rapidly in 2020, accessible state-level data was hard to come by in a clean, mobile-friendly format. This app was built in six hours from scratch to fill that gap &mdash; pulling live data from public APIs and presenting it in a clear, scannable interface organized by state.
    </p>
    <p>
      The app shows confirmed cases, recoveries, and casualties for each Indian state, with national totals at a glance. Built with Flutter, it runs natively on both Android and iOS from a single codebase, ensuring broad accessibility during a time when people needed information fast.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Framework</p>
      <p class="proj-spec-value">Flutter</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Language</p>
      <p class="proj-spec-value">Dart</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Platforms</p>
      <p class="proj-spec-value">Android + iOS</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Build Time</p>
      <p class="proj-spec-value">6 Hours</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Data</p>
      <p class="proj-spec-value">Live API</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Coverage</p>
      <p class="proj-spec-value">All States</p>
    </div>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>Flutter for rapid cross-platform delivery</h2>
    <p>
      Flutter's widget-based architecture made it possible to go from zero to a polished, functional app in six hours. The app fetches data from public Covid-19 APIs, parses JSON responses, and renders state-wise statistics in a scrollable list with color-coded severity indicators.
    </p>
    <p>
      Dart's async/await pattern handles API calls cleanly, with proper error states for network failures. The UI updates reactively when fresh data arrives, and a pull-to-refresh gesture lets users manually request the latest numbers.
    </p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Context</p>
    <h2>Built for a moment that mattered</h2>
    <p>
      This project was a response to a real need during the early months of the pandemic in India. The six-hour constraint wasn't artificial &mdash; it was about getting useful information into people's hands as quickly as possible. Sometimes the best software is the software that ships fast when people need it most.
    </p>
  </div>

</article>
