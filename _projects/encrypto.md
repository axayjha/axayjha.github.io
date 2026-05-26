---
layout: default
title: Encrypto
description: Python encryption tool using a modified Vigenere cipher with GUI.
date: 2014-09-20
tags: [Python, Cryptography, GUI]
permalink: /work/encrypto/
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
    <p class="proj-eyebrow">Project - 2014</p>
    <h1 class="proj-title">Encrypto</h1>
    <p class="proj-desc">
      A Python encryption tool that transforms plaintext into ciphertext using a modified Vigenere algorithm - with a tkinter GUI for easy interaction.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Python</span><span class="tag">Cryptography</span><span class="tag">GUI</span></div>
  </div>

  <div class="proj-showcase">
    <img src="/img/encrypto/scr1.png" alt="Encrypto GUI showing encryption interface">
    <p class="proj-showcase-caption">The Encrypto interface - enter your message, provide a key, and encrypt.</p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Overview</p>
    <h2>Classical cryptography<br>with a modern interface</h2>
    <p>
      Encrypto implements a modified version of the Vigenere cipher - one of history's most famous polyalphabetic substitution ciphers. Rather than a simple character shift like Caesar's cipher, the Vigenere uses a keyword to vary the substitution at each position, making frequency analysis significantly harder.
    </p>
    <p>
      The modification extends the classical algorithm to handle a broader character set and adds additional transformation steps. A tkinter GUI wraps the algorithm, providing text fields for input, key entry, and output display - making encryption and decryption accessible without touching the command line.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Language</p>
      <p class="proj-spec-value">Python</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Algorithm</p>
      <p class="proj-spec-value">Vigenere</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">GUI</p>
      <p class="proj-spec-value">tkinter</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Type</p>
      <p class="proj-spec-value">Polyalphabetic</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Operations</p>
      <p class="proj-spec-value">Encrypt + Decrypt</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Year</p>
      <p class="proj-spec-value">2014</p>
    </div>
  </div>

  <div class="proj-gallery">
    <img src="/img/encrypto/scr1.png" alt="Encrypto encryption view">
    <img src="/img/encrypto/scr2.png" alt="Encrypto decryption view">
  </div>
  <p style="text-align: center; font-family: Georgia, serif; font-style: italic; font-size: 13px; color: var(--text-tertiary); margin-top: -20px;">Encryption (left) and decryption (right) - symmetric key operations.</p>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>The Vigenere cipher, extended</h2>
    <p>
      The classical Vigenere cipher works by shifting each plaintext character by the corresponding character in a repeating keyword. If the keyword is "KEY" and the plaintext is "HELLO", H is shifted by K(10), E by E(4), L by Y(24), and so on. This creates a polyalphabetic cipher where the same plaintext letter can map to different ciphertext letters depending on its position.
    </p>
    <p>
      Encrypto's modification extends this concept beyond the 26-letter alphabet, handles mixed case, and applies additional transformations that make the output more resistant to casual analysis. The symmetric nature means the same key encrypts and decrypts - enter the ciphertext with the original key to recover the plaintext.
    </p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Context</p>
    <h2>An early exploration of algorithms</h2>
    <p>
      Built in 2014, Encrypto represents an early exploration of algorithm implementation and GUI programming. The Vigenere cipher provides a perfect learning exercise - simple enough to implement cleanly, complex enough to require careful thought about character mapping, key cycling, and edge cases.
    </p>
  </div>

</article>
