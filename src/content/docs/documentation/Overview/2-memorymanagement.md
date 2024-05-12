---
title: 2 - Memory Mangement
description: Memory Management
---

## Semi-Automatic Memory Management

Godot types are preferred over Go types, in order to keep allocations optional. 
All values are tied to a [gd.Context] type, which is either:

    (a) a function argument and any values associated with it will be freed
        when the function returns.
    (b) builtin to the class you are extending, and any values associated 
        with it will be freed when the class is destroyed by Godot.

This module aims to offer memory safety for race-free extensions, if you discover
a way to unintentionally do something unsafe (like double free, use-after-free or
a segfault), using methods on types exported by the root `gd` package please open 
an issue. 