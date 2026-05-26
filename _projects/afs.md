---
layout: default
title: AFS File System
description: A trivial file system simulation emulating Unix FS with disk block operations.
date: 2019-03-30
tags: [Systems, C, File Systems]
permalink: /work/afs/
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
    <p class="proj-eyebrow">Project - 2019</p>
    <h1 class="proj-title">AFS File System</h1>
    <p class="proj-desc">
      A Unix file system simulation in C - directories, files, and disk block allocation on a virtual disk.
    </p>
    <div class="project-tags" style="margin-top: 16px; justify-content: center; display: flex; flex-wrap: wrap; gap: 6px;"><span class="tag">Systems</span><span class="tag">C</span><span class="tag">File Systems</span></div>
  </div>

  <div class="proj-showcase">
    <img src="/img/afs/scr1.png" alt="AFS file system terminal output">
    <p class="proj-showcase-caption">AFS in action - creating directories and files on a simulated disk.</p>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Overview</p>
    <h2>Understanding file systems<br>by building one from scratch</h2>
    <p>
      AFS is a trivial file system implementation that emulates the core concepts of Unix file systems. It operates on a simulated disk composed of fixed-size blocks, implementing directory trees, file creation, and block allocation - the fundamental operations that underpin every modern operating system.
    </p>
    <p>
      The project strips away the complexity of real kernel-level file systems to expose the essential algorithms: how directories map names to inodes, how inodes track block pointers, and how free space is managed across a block device.
    </p>
  </div>

  <div class="proj-specs">
    <div class="proj-spec">
      <p class="proj-spec-label">Language</p>
      <p class="proj-spec-value">C</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Domain</p>
      <p class="proj-spec-value">Systems</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Model</p>
      <p class="proj-spec-value">Unix FS</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Storage</p>
      <p class="proj-spec-value">Block Device</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Structure</p>
      <p class="proj-spec-value">Inodes</p>
    </div>
    <div class="proj-spec">
      <p class="proj-spec-label">Interface</p>
      <p class="proj-spec-value">CLI</p>
    </div>
  </div>

  <div class="proj-gallery">
    <img src="/img/afs/scr1.png" alt="AFS directory operations">
    <img src="/img/afs/scr2.png" alt="AFS block allocation display">
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Architecture</p>
    <h2>Layers of abstraction</h2>
    <div class="proj-arch">
┌─────────────────────────────────────┐
│         User Commands (CLI)         │
│   mkdir, touch, ls, cat, rm, cd     │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│        Directory Layer              │
│   Name resolution, path traversal   │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│         Inode Layer                 │
│   File metadata, block pointers     │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│      Block Allocation Layer         │
│   Free list, block read/write       │
└──────────────────┬──────────────────┘
                   │
┌──────────────────▼──────────────────┐
│     Simulated Disk (memory/file)    │
│   Fixed-size blocks on virtual disk │
└─────────────────────────────────────┘</div>
  </div>

  <div class="proj-section">
    <p class="proj-section-label">Technical</p>
    <h2>The mechanics of a file system</h2>
    <p>
      The simulated disk is divided into fixed-size blocks. A superblock tracks file system metadata. Inodes store file attributes and block pointers. Directories are special files that map names to inode numbers. Free space tracking uses a bitmap or free list to allocate and reclaim blocks.
    </p>
    <p>
      Operations like <code>mkdir</code>, <code>touch</code>, and <code>ls</code> traverse this structure just like their real Unix counterparts - resolving paths component by component, reading directory entries, and following inode pointers to data blocks.
    </p>
  </div>

</article>
