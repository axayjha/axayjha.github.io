---
layout: default
title: VidyutSathi
description: Platform for reporting power outages - built at Smart India Hackathon 2019.
date: 2019-04-04
tags: [Android, USSD, Hackathon]
permalink: /work/vidyutsathi/
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
    <p class="proj-eyebrow">Project - 2019</p>
    <h1 class="proj-title">VidyutSathi</h1>
    <p class="proj-desc">
      A dual-channel platform for reporting power outages - Android app for smartphones, USSD codes for feature phones. Built at Smart India Hackathon 2019.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Android</span><span class="tag">USSD</span><span class="tag">Hackathon</span></div>
  </div>

  <div class="proj-showcase">
    <img src="/img/vidyutsathi/scr1.png" alt="VidyutSathi Android app main screen">
    <p class="proj-showcase-caption">The VidyutSathi Android app - report outages with location data in seconds.</p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Overview</p>
    <h2>Bringing power outage reporting<br>to every citizen</h2>
    <p>
      Power outages in India often go unreported because consumers lack an easy way to notify their electricity corporation. VidyutSathi solves this with a dual-channel approach: an Android application for smartphone users and a USSD code program for feature phone users in rural areas.
    </p>
    <p>
      When a consumer reports an outage, the data - including location, timestamp, and area details - is stored in a centralized database. Electricity corporations and the Ministry of Power can then access this data through an analytical dashboard, identifying patterns, prioritizing repairs, and tracking resolution times.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Platform</p>
      <p class="proj-spec-value">Android</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Secondary</p>
      <p class="proj-spec-value">USSD</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Backend</p>
      <p class="proj-spec-value">Centralized DB</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Event</p>
      <p class="proj-spec-value">SIH 2019</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Dashboard</p>
      <p class="proj-spec-value">Analytics</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Reach</p>
      <p class="proj-spec-value">All Phones</p>
    </div>
  </div>

  <div class="proj-gallery">
    <img src="/img/vidyutsathi/scr2.png" alt="VidyutSathi outage reporting flow">
    <img src="/img/vidyutsathi/scr3.png" alt="VidyutSathi dashboard view">
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>Two interfaces, one data pipeline</h2>
    <p>
      The Android app uses GPS to automatically capture the user's location when reporting an outage, reducing friction to a single tap. For feature phone users, a USSD menu-driven interface (like *123#) guides them through reporting with just their keypad - no internet connection required.
    </p>
    <p>
      Both channels feed into the same centralized data store. The analytics dashboard provides electricity corporations with real-time heatmaps of outage clusters, historical trend analysis, and response time metrics - turning crowd-sourced reports into actionable intelligence for grid maintenance.
    </p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Context</p>
    <h2>Built at India's largest hackathon</h2>
    <p>
      Smart India Hackathon 2019 is a nationwide competition where student teams solve real problems posed by government ministries and industry. VidyutSathi was built in response to a challenge from the power sector - designing the system, building both interfaces, and presenting a working demo within the hackathon timeline.
    </p>
  </div>

</article>
