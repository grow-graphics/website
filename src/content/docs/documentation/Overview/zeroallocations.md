---
title: 6 - Zero Allocations
description: Zero Allocations
---

### Zero Allocations
Benchmarking shows method calls from Go -> Godot do not allocate in practice. 

Allocations are currently unavoidable for GDScript -> Go calls (but not 
for class virtual method overrides such as `Ready` or `Process`, which 
should be allocation free).

We've got some ideas to reduce allocations for GDScript -> Go calls, when
arguments fit entirely within registers. TBA.