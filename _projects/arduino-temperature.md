---
layout: default
title: Temperature Display
description: Arduino project showing real-time temperature and humidity on a 16x2 LCD.
date: 2018-08-01
tags: [Arduino, IoT, Hardware]
permalink: /work/temperature-display/
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
.proj-arch { background: var(--bg-secondary); border: 1px solid var(--border); border-radius: 12px; padding: 32px; margin: 32px 0; overflow-x: auto; font-family: 'SF Mono', 'Fira Code', monospace; font-size: 12px; line-height: 1.6; color: var(--text-secondary); white-space: pre; }
@media (max-width: 640px) { .proj-gallery { grid-template-columns: 1fr; } }
</style>

<article>

  <div class="proj-header">
    <p class="proj-eyebrow">Project - 2018</p>
    <h1 class="proj-title">Temperature Display</h1>
    <p class="proj-desc">
      A hardware project that reads ambient temperature and humidity from a DHT11 sensor and displays the data on a 16x2 LCD - powered by Arduino.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Arduino</span><span class="tag">IoT</span><span class="tag">Hardware</span></div>
  </div>

  <div class="proj-showcase">
    <img src="/img/tempondis/scr1.jpeg" alt="Arduino temperature display with LCD showing readings">
    <p class="proj-showcase-caption">The assembled circuit - DHT11 sensor feeding live readings to a 16x2 character LCD.</p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Overview</p>
    <h2>Atoms meet bits</h2>
    <p>
      This project bridges the physical and digital worlds. A DHT11 temperature and humidity sensor continuously samples the environment, sending digital readings to an Arduino microcontroller. The Arduino processes this data and renders it on a 16x2 character LCD in real-time - a self-contained weather station on a breadboard.
    </p>
    <p>
      The 16x2 LCD provides a clear, always-on display showing both temperature (in Celsius) and relative humidity percentage. The system updates continuously, reflecting environmental changes as they happen.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Controller</p>
      <p class="proj-spec-value">Arduino</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Sensor</p>
      <p class="proj-spec-value">DHT11</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Display</p>
      <p class="proj-spec-value">16x2 LCD</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Language</p>
      <p class="proj-spec-value">C / Arduino</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Domain</p>
      <p class="proj-spec-value">IoT / Hardware</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Update Rate</p>
      <p class="proj-spec-value">Real-time</p>
    </div>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Architecture</p>
    <h2>Simple, elegant circuit design</h2>
    <div class="proj-arch">
┌──────────┐        ┌─────────────────┐        ┌──────────┐
│  DHT11   │        │     Arduino     │        │ 16x2 LCD │
│  Sensor  │──data──│  Microcontroller│──data──│  Display  │
│          │        │                 │        │          │
│ Temp +   │        │  • Read sensor  │        │ Line 1:  │
│ Humidity │        │  • Format data  │        │  Temp °C │
│          │        │  • Drive LCD    │        │ Line 2:  │
└──────────┘        └─────────────────┘        │  Humid % │
                                               └──────────┘
     VCC ────────── 5V ──────────────────── VCC
     GND ────────── GND ─────────────────── GND</div>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>Reading the physical world</h2>
    <p>
      The DHT11 communicates via a single-wire digital protocol. The Arduino sends a start signal, then reads 40 bits of data: 16 bits for humidity, 16 bits for temperature, and 8 bits for a checksum. The timing of high/low signals encodes binary ones and zeros - a protocol that requires precise microsecond-level timing in the firmware.
    </p>
    <p>
      The LCD is driven via the LiquidCrystal library, using 4-bit parallel mode to minimize pin usage. Custom formatting ensures the readings are clearly labeled and easy to read at a glance from across a room.
    </p>
  </div>

</article>
