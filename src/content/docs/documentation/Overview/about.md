---
title: About
description: About
---

## What is Grow Graphics?

I think it's a bit of an evolution from the branding/terminology of [seed](https://github.com/qlova/seed), a project I worked on in the past for building PWA 'apps' in Go. I'm not a big fan of Go modules having 'Go' in their name, ie. the thing they are based on with a 'go' prefix or suffix. I think it's important that projects develop their own independent identity. 

I think the plant metaphors there are meant to convey 'a more organic holistic yet incremental development and design practice'.

It's not enough for Go + Godot to just wrap Godot and call it a day, the project needs to be a synthesis in my opinion, with a holistic design that considers both Go & Godot together in order to be useful. You cannot expect Go developers to understand a whole bunch of technical things about Godot just so they can build a graphical application. In the same fashion, Godot developers primarily using GDScript, should be able to approach this project and it should be possible for them to write something for their Godot project in Go (without worrying too much about how to interact with Godot in a memory safe way).

I understand `grow.graphics/gd` is not there yet, but the vision is certainly to be more approachable. Having a documentation website for this will go a long way! 

So that's some context, I think there could be room for supporting/encouraging/developing more Go-oriented graphics modules within the grow.graphics umbrella, touching some lower level areas in a more approachable way, like OpenGL for example (which I am familiar with working in with Go), maybe even OpenXR and/or Vulkan. I wanted to target Godot in particular, as it is the most complete Open-Source solution out there, that has good cross-platform support and all the bells and whistles you need for almost any purpose.

I think Go is a very clean language, with excellent readability, not as complicated from a 'language features' point-of-view like Java/C#/C++/Rust, there's just a bit of a gap when it comes to graphics and I see grow.graphics/gd as one piece of the puzzle to close this gap. A lot of folks say the garbage collector is a problem but it didn't stop Java and C# from seeing use for this purpose and I don't think it should be a reason not to pursue graphical applications with Go (the mainstream compiler has quite an efficient implementation of GC).

I know there are other projects out there for 2D graphics like Ebiten, UI/UX projects like Gio, Fyne, there isn't a whole lot for 3D (although shoutout to G3N here for their efforts) so building on top of Godot makes a lot of sense, as it has a very large growing ecosystem and excellent support for 3D including animations and modern rendering features.


Grow Graphics GD Maintainer,
[Splizard](https://github.com/Splizard)