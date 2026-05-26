---
layout: default
title: Apple 1 Emulator
description: A faithful emulator of the 1976 Apple 1 - the machine that started it all.
date: 2026-05-01
tags: [C, Rust, Tauri, 6502, Emulation]
github: https://github.com/axayjha/apple1
permalink: /work/apple1/
---

<style>
.apple1-page {
  max-width: 100%;
}

.apple1-hero {
  text-align: center;
  padding: 40px 0 60px;
}

.apple1-hero-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 20px;
}

.apple1-hero h1 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(40px, 7vw, 64px);
  font-weight: 400;
  font-style: italic;
  letter-spacing: -1px;
  line-height: 1.1;
  margin-bottom: 20px;
}

.apple1-hero-sub {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: var(--text-secondary);
  max-width: 520px;
  margin: 0 auto 32px;
  line-height: 1.6;
}

.apple1-hero-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.apple1-showcase {
  margin: 60px -24px;
  position: relative;
}

.apple1-showcase img {
  width: 100%;
  border-radius: 16px;
  border: 1px solid var(--border);
}

.apple1-showcase-caption {
  text-align: center;
  margin-top: 16px;
  font-family: Georgia, serif;
  font-style: italic;
  font-size: 13px;
  color: var(--text-tertiary);
}

.apple1-section {
  padding: 60px 0;
  border-top: 1px solid var(--border);
}

.apple1-section-label {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 24px;
}

.apple1-section h2 {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(24px, 4vw, 36px);
  font-weight: 400;
  letter-spacing: -0.5px;
  margin-bottom: 20px;
  line-height: 1.3;
}

.apple1-section p {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
}

.apple1-specs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
  margin: 32px 0;
}

.apple1-spec {
  padding: 24px;
  background: var(--bg);
}

.apple1-spec-label {
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-tertiary);
  margin-bottom: 8px;
}

.apple1-spec-value {
  font-family: Georgia, serif;
  font-size: 18px;
  color: var(--text);
}

.apple1-gallery {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 40px 0;
}

.apple1-gallery img {
  width: 100%;
  border-radius: 12px;
  border: 1px solid var(--border);
}

.apple1-pullquote {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: clamp(20px, 3.5vw, 28px);
  font-style: italic;
  color: var(--text-secondary);
  text-align: center;
  padding: 48px 24px;
  line-height: 1.5;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  margin: 60px 0;
}

.apple1-arch {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 32px;
  margin: 32px 0;
  overflow-x: auto;
  font-family: 'SF Mono', 'Fira Code', monospace;
  font-size: 12px;
  line-height: 1.6;
  color: var(--text-secondary);
  white-space: pre;
}

.apple1-features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin: 32px 0;
}

.apple1-feature h3 {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 8px;
}

.apple1-feature p {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
  margin: 0;
}

.apple1-embed {
  margin: 32px -24px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: #111;
}

.apple1-embed iframe {
  width: 100%;
  height: 620px;
  border: none;
  display: block;
}

@media (max-width: 640px) {
  .apple1-embed iframe {
    height: 520px;
  }
}

.apple1-thumb {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--border);
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease;
}

.apple1-thumb img {
  width: 100%;
  border-radius: 0;
  border: none;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.apple1-thumb:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}

.apple1-thumb-caption {
  padding: 12px 16px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  color: var(--text-tertiary);
  background: var(--bg-secondary);
  text-align: center;
}

.apple1-thumb.expanded {
  position: fixed;
  inset: 0;
  z-index: 1000;
  border-radius: 0;
  border: none;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  transform: none;
  box-shadow: none;
}

.apple1-thumb.expanded img {
  max-width: 90vw;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 12px;
}

.apple1-thumb.expanded .apple1-thumb-caption {
  background: transparent;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 16px;
}

@media (max-width: 640px) {
  .apple1-gallery {
    grid-template-columns: 1fr;
  }
  .apple1-features {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .apple1-showcase {
    margin: 40px -12px;
  }
}
</style>

<article class="apple1-page">

  <div class="apple1-hero">
    <p class="apple1-hero-eyebrow">Personal Project - 2026</p>
    <h1>Apple 1 Emulator</h1>
    <p class="apple1-hero-sub">
      A faithful recreation of the 1976 Apple 1 computer - the machine that started Apple. Cycle-accurate 6502 emulation, the original Woz Monitor, Integer BASIC, and an iconic green phosphor CRT display.
    </p>
    <div class="project-tags" style="margin: 24px 0; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">C</span><span class="tag">Rust</span><span class="tag">Tauri</span><span class="tag">6502</span><span class="tag">Emulation</span></div>
    <div class="apple1-hero-links">
      <a href="https://github.com/axayjha/apple1" target="_blank" rel="noopener" class="btn-primary">Source Code &rarr;</a>
      <a href="https://github.com/axayjha/apple1/releases/tag/v1.0.0" target="_blank" rel="noopener" class="btn-secondary">Download .dmg</a>
    </div>
  </div>

  <div class="apple1-section" style="border-top: none; padding-top: 0;">
    <p class="apple1-section-label">Try it</p>
    <h2>Run it in your browser</h2>
    <p>The full emulator running live via WebAssembly. Type commands at the <code>\</code> prompt, or click BASIC to start programming.</p>
  </div>

  <div class="apple1-embed">
    <iframe src="/assets/wasm/index.html" title="Apple 1 Emulator" allowfullscreen></iframe>
  </div>

  <div class="apple1-showcase" style="margin-top: 60px;">
    <img src="/img/apple1_basic.png" alt="Apple 1 Monitor - Desktop App running Integer BASIC">
    <p class="apple1-showcase-caption">The native macOS desktop app with CRT phosphor rendering and bezel styling.</p>
  </div>

  <div class="apple1-section">
    <p class="apple1-section-label">Overview</p>
    <h2>The machine that started a revolution,<br>faithfully rebuilt in code.</h2>
    <p>
      Only ~200 Apple 1 computers were ever built. This emulator recreates the experience of using one - from the blinking cursor of the Woz Monitor to the warmth of a green phosphor CRT - with a native macOS desktop app built on Tauri and a terminal interface for purists.
    </p>
    <p>
      The emulator core is written entirely in C with zero external dependencies. Every one of the 151 official MOS 6502 opcodes is implemented with correct cycle timing. A custom Integer BASIC interpreter provides the same BASIC programming experience users had in 1976.
    </p>
  </div>

  <div class="apple1-specs">
    <div class="apple1-spec">
      <p class="apple1-spec-label">Language</p>
      <p class="apple1-spec-value">C17 + Rust</p>
    </div>
    <div class="apple1-spec">
      <p class="apple1-spec-label">CPU</p>
      <p class="apple1-spec-value">MOS 6502</p>
    </div>
    <div class="apple1-spec">
      <p class="apple1-spec-label">Tests</p>
      <p class="apple1-spec-value">220</p>
    </div>
    <div class="apple1-spec">
      <p class="apple1-spec-label">Dependencies</p>
      <p class="apple1-spec-value">Zero</p>
    </div>
    <div class="apple1-spec">
      <p class="apple1-spec-label">Code</p>
      <p class="apple1-spec-value">~5,000 LoC</p>
    </div>
    <div class="apple1-spec">
      <p class="apple1-spec-label">Platform</p>
      <p class="apple1-spec-value">macOS</p>
    </div>
  </div>

  <div class="apple1-pullquote">
    "All 151 official opcodes. Cycle-accurate timing.<br>Zero external dependencies. 220 automated tests."
  </div>

  <div class="apple1-gallery">
    <div class="apple1-thumb" onclick="this.classList.toggle('expanded')">
      <img src="/img/apple1_programs.png" alt="Programs dropdown with 11 built-in demos">
      <p class="apple1-thumb-caption">Programs menu - 11 built-in demos from Wumpus to Star Trek</p>
    </div>
    <div class="apple1-thumb" onclick="this.classList.toggle('expanded')">
      <img src="/img/apple1_about.png" alt="About dialog with emulator specifications">
      <p class="apple1-thumb-caption">About dialog - MOS 6502 @ 1.022 MHz, 32KB RAM</p>
    </div>
  </div>

  <div class="apple1-showcase" style="margin-top: 40px;">
    <img src="/img/apple1_dmg.png" alt="macOS DMG installer with drag-to-Applications">
    <p class="apple1-showcase-caption">macOS DMG installer - drag to Applications and go.</p>
  </div>

  <div class="apple1-section">
    <p class="apple1-section-label">Architecture</p>
    <h2>Clean separation of concerns</h2>
    <p>
      The emulator is structured as a library core with pluggable frontends. The C core handles CPU emulation, memory mapping, PIA I/O, and ROM management. Display and input are decoupled through callbacks, allowing the same core to drive both a terminal (ncurses) and a native desktop app (Tauri).
    </p>
    <div class="apple1-arch">
┌─────────────────────────────────────────────────────┐
│                   Desktop App (Tauri)                │
│  ┌─────────────┐  ┌───────────────────────────────┐ │
│  │  Rust FFI   │  │  Web Frontend (CRT Canvas)    │ │
│  │  Bridge     │──│  • Phosphor rendering          │ │
│  │             │  │  • Bezel / Apple II aesthetic   │ │
│  └──────┬──────┘  │  • Toolbar controls            │ │
│         │         └───────────────────────────────┘ │
└─────────┼───────────────────────────────────────────┘
          │
┌─────────▼───────────────────────────────────────────┐
│              C Emulator Core (libapple1core)         │
│                                                     │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌──────────┐  │
│  │ 6502   │  │ Memory │  │ PIA    │  │ Display  │  │
│  │ CPU    │──│ Bus    │──│ 6820   │──│ Callback │  │
│  └────────┘  └────────┘  └────────┘  └──────────┘  │
│                                                     │
│  ┌────────┐  ┌────────┐  ┌────────┐  ┌──────────┐  │
│  │Integer │  │ Mini-  │  │ ACI    │  │ Snapshot │  │
│  │ BASIC  │  │Assem.  │  │(Tape)  │  │ Save/Load│  │
│  └────────┘  └────────┘  └────────┘  └──────────┘  │
└─────────────────────────────────────────────────────┘</div>
  </div>

  <div class="apple1-section">
    <p class="apple1-section-label">Features</p>
    <h2>Everything you'd expect -<br>and things you wouldn't.</h2>
    <div class="apple1-features">
      <div class="apple1-feature">
        <h3>Cycle-Accurate CPU</h3>
        <p>All 151 official 6502 opcodes with BCD arithmetic, interrupts, and correct page-crossing penalties.</p>
      </div>
      <div class="apple1-feature">
        <h3>Integer BASIC</h3>
        <p>Variables, arrays, strings, FOR/NEXT, GOSUB, IF/THEN, PEEK/POKE - the same BASIC from 1976.</p>
      </div>
      <div class="apple1-feature">
        <h3>CRT Phosphor Display</h3>
        <p>Green glow, scanlines, vignette, and character fade - just like the Apple Monitor II.</p>
      </div>
      <div class="apple1-feature">
        <h3>Native macOS App</h3>
        <p>Tauri desktop app with a bezel UI, rainbow Apple logo, toolbar, and DMG installer.</p>
      </div>
      <div class="apple1-feature">
        <h3>15 Demo Programs</h3>
        <p>Wumpus, Star Trek, Lunar Lander, Nim, Calendar, Fibonacci, and more - loaded with one click.</p>
      </div>
      <div class="apple1-feature">
        <h3>Mini-Assembler</h3>
        <p>Interactive 6502 assembly with labels and directives, right in the monitor.</p>
      </div>
    </div>
  </div>

  <div class="apple1-showcase">
    <img src="/img/apple1_terminal.png" alt="Terminal emulator boot screen">
    <p class="apple1-showcase-caption">The terminal emulator - 32K RAM, MOS 6502 @ 1.022 MHz. Press any key.</p>
  </div>

  <div class="apple1-section">
    <p class="apple1-section-label">Decisions</p>
    <h2>Key technical choices</h2>
    <p>
      <strong>BASIC as C interpreter, not 6502 code</strong> - Rather than disassemble the original 8KB ROM (legal gray area), a compatible BASIC interpreter was written in C that traps when PC hits $E000. Identical user-facing behavior, fully original code.
    </p>
    <p>
      <strong>Function pointer dispatch</strong> - Each opcode has a function pointer in a 256-entry table. No giant switch statement. Benchmarks faster on modern CPUs due to branch prediction patterns.
    </p>
    <p>
      <strong>PIA display callback</strong> - The PIA triggers a callback on character write to $D012, cleanly separating emulation core from rendering.
    </p>
    <p>
      <strong>Cooperative BASIC execution</strong> - One statement per frame keeps the UI responsive without threading.
    </p>
  </div>

</article>
