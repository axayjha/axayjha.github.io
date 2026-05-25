---
layout: default
title: PixelView
description: Scientific digital image processing tool with popular ML and IP algorithms.
date: 2018-03-30
tags: [Python, Image Processing, ML]
permalink: /work/pixelview/
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
    <p class="proj-eyebrow">Project &mdash; 2018</p>
    <h1 class="proj-title">PixelView</h1>
    <p class="proj-desc">
      A scientific image processing tool with popular ML and computer vision algorithms &mdash; load an image, apply transformations, see results instantly.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Python</span><span class="tag">Image Processing</span><span class="tag">ML</span></div>
  </div>

  <div class="proj-showcase">
    <img src="/img/pixelview/Mac%20OS%20Screenshot%201%20low.png" alt="PixelView running on macOS">
    <p class="proj-showcase-caption">PixelView on macOS &mdash; applying image processing algorithms with a visual interface.</p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Overview</p>
    <h2>Image processing algorithms<br>made accessible</h2>
    <p>
      PixelView is a desktop application that brings scientific image processing algorithms out of textbooks and into a usable tool. Load any image, select an algorithm from the menu, and see the result immediately &mdash; no coding required, no command-line arguments to remember.
    </p>
    <p>
      The tool includes implementations of classic image processing operations (edge detection, thresholding, histogram equalization) alongside machine learning algorithms for classification and segmentation. It serves as both a practical tool and a learning aid for understanding how these algorithms transform pixel data.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Language</p>
      <p class="proj-spec-value">Python</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Domain</p>
      <p class="proj-spec-value">Computer Vision</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">GUI</p>
      <p class="proj-spec-value">Desktop</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Algorithms</p>
      <p class="proj-spec-value">ML + IP</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Platforms</p>
      <p class="proj-spec-value">macOS + Linux</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Processing</p>
      <p class="proj-spec-value">Real-time</p>
    </div>
  </div>

  <div class="proj-gallery">
    <img src="/img/pixelview/Mac%20OS%20Screenshot%201%20low.png" alt="PixelView on macOS">
    <img src="/img/pixelview/Linux%20Screenshot%201%20low.png" alt="PixelView on Linux">
  </div>
  <p style="text-align: center; font-family: Georgia, serif; font-style: italic; font-size: 13px; color: var(--text-tertiary); margin-top: -20px;">Cross-platform &mdash; running natively on macOS (left) and Linux (right).</p>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>From pixels to understanding</h2>
    <p>
      Built in Python, PixelView leverages NumPy for efficient array operations on image data, with algorithm implementations that operate directly on pixel matrices. The GUI provides immediate visual feedback &mdash; select an algorithm, adjust parameters, and watch the output image update.
    </p>
    <p>
      The tool runs cross-platform on macOS and Linux, adapting its interface to each platform's windowing system. Algorithms are modular &mdash; each is a self-contained function that takes an image array and returns a transformed array, making it straightforward to add new operations.
    </p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Algorithms</p>
    <h2>A toolkit of classic techniques</h2>
    <p>
      Edge detection (Sobel, Canny), morphological operations (erosion, dilation), color space transformations, histogram analysis, thresholding methods, and spatial filtering. On the ML side: k-means clustering for segmentation, principal component analysis for dimensionality reduction, and classification algorithms for pattern recognition in image data.
    </p>
  </div>

</article>
