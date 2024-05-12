---
title: 1 - Design Principles
description: Design Principles
---

## Design Principles

Godot classes are exported by the `gd` package and can be referred to by 
their standard Godot names, for example `gd.Object` is an 
[Object](https://docs.godotengine.org/en/latest/classes/class_object.html) 
reference. There's no inheritance, so to access the 'super' class, you need 
to call `Super()` on your custom 'Class'. All Godot classes have methods
to cast to the classes they extend for example `AsObject()` or `AsNode2D()`.

Methods have been renamed to follow Go conventions, so instead of
underscores, methods are named as PascalCase. Keep this in mind when
referring to the Godot documentation.

https://docs.godotengine.org/en/latest/index.html