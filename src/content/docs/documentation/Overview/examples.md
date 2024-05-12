---
title: 7 - Examples
description: Examples
---
## Examples

Run `make` in the example/src directory or manually build a C-shared library:

```sh
cd example/src
make # go build -o ./bin/example.so -buildmode=c-shared
```

**NOTE:** the first time you build a project, it will take a little while to compile.
After this, subsequent builds will be quite a bit faster!

Now open the example project in Godot from a terminal and you will be able to 
see Go printing things to the console.

There is also a [pong](https://github.com/grow-graphics/eg/blob/master/2d/pong/pong.go)
example in the [examples](https://github.com/grow-graphics/eg) repo.