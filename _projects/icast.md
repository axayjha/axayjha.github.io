---
layout: default
title: iCast
description: A simple podcast player for macOS with Apple Silicon support.
date: 2020-08-30
tags: [macOS, Swift, Podcasts]
permalink: /work/icast/
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
    <h1 class="proj-title">iCast</h1>
    <p class="proj-desc">
      A native macOS podcast player built for Apple Silicon &mdash; subscribe via RSS, manage your library, and listen with a minimal, focused interface.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">macOS</span><span class="tag">Swift</span><span class="tag">Podcasts</span></div>
  </div>

  <div class="proj-showcase">
    <img src="/img/icast.png" alt="iCast podcast player on macOS">
    <p class="proj-showcase-caption">iCast running on macOS &mdash; a clean, native podcast experience.</p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Overview</p>
    <h2>Podcasts without the clutter</h2>
    <p>
      iCast is a lightweight podcast player designed specifically for macOS. In a world of bloated, cross-platform Electron apps, iCast takes a different approach: a native Swift application that feels at home on your Mac and runs natively on Apple Silicon.
    </p>
    <p>
      Add podcasts via their RSS feed URL, browse episodes, and play them instantly. Your subscriptions persist between sessions, and you can remove shows you no longer follow. The first alpha release focuses on doing the basics well &mdash; subscribe, browse, play.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Language</p>
      <p class="proj-spec-value">Swift</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Platform</p>
      <p class="proj-spec-value">macOS</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Architecture</p>
      <p class="proj-spec-value">Apple Silicon</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Framework</p>
      <p class="proj-spec-value">AppKit</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Feed Format</p>
      <p class="proj-spec-value">RSS / XML</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Status</p>
      <p class="proj-spec-value">Alpha</p>
    </div>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>Native performance, native feel</h2>
    <p>
      Built with Swift and AppKit, iCast parses RSS feeds to extract episode metadata, handles audio playback through AVFoundation, and persists subscription data locally. The app is compiled as a Universal Binary, running natively on both Intel and Apple Silicon Macs without Rosetta translation.
    </p>
    <p>
      The interface follows macOS design conventions &mdash; sidebar navigation, proper window management, and system-native controls. No web views, no JavaScript runtime, just compiled Swift code talking directly to macOS frameworks.
    </p>
  </div>

</article>
