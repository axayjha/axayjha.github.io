---
layout: default
title: ToDo HandsOff
description: A cross-platform iOS and macOS task manager with seamless device handoff.
date: 2020-06-01
tags: [iOS, macOS, Swift, HandsOff]
permalink: /work/todo-handsoff/
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
    <p class="proj-eyebrow">Project - 2020</p>
    <h1 class="proj-title">ToDo HandsOff</h1>
    <p class="proj-desc">
      A task manager that moves with you - start on your iPhone, pick up exactly where you left off on your Mac.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">iOS</span><span class="tag">macOS</span><span class="tag">Swift</span><span class="tag">HandsOff</span></div>
  </div>

  <div class="proj-section" style="border-top: none; padding-top: 0;">
    <p class="proj-section-label">Overview</p>
    <h2>Your tasks follow you<br>across devices</h2>
    <p>
      ToDo HandsOff is a cross-platform task management app for iOS and macOS that leverages Apple's Handoff technology to create a seamless multi-device experience. Add a task on your iPhone during your commute, then pick it up on your Mac when you sit down at your desk - no manual syncing, no cloud accounts, just continuity.
    </p>
    <p>
      Beyond device handoff, the app provides task prioritization, letting you organize your responsibilities by urgency and importance. The interface adapts naturally to each platform while maintaining the same underlying data model and workflow.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Language</p>
      <p class="proj-spec-value">Swift</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Platforms</p>
      <p class="proj-spec-value">iOS + macOS</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Framework</p>
      <p class="proj-spec-value">SwiftUI</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Key Feature</p>
      <p class="proj-spec-value">Handoff</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Sync</p>
      <p class="proj-spec-value">Peer-to-peer</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Storage</p>
      <p class="proj-spec-value">Local + iCloud</p>
    </div>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>Built on Apple's continuity stack</h2>
    <p>
      The app uses NSUserActivity to advertise the current task context to nearby devices. When you switch from iPhone to Mac (or vice versa), the receiving device picks up the activity and restores the exact state - which task you were viewing, what you were editing, where you were in the app.
    </p>
    <p>
      Both the iOS and macOS targets share a common Swift package for data models and business logic. The UI layer is platform-specific, following each platform's design language - tab bars and navigation stacks on iOS, sidebar and split views on macOS.
    </p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Features</p>
    <h2>Simple but complete</h2>
    <p>
      Create tasks with titles, descriptions, and priority levels. Organize by urgency to focus on what matters most. Mark tasks complete and watch your progress grow. The Handoff feature means your workflow is never interrupted by a device change - your context travels with you automatically.
    </p>
  </div>

</article>
