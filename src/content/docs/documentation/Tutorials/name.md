---
title: Name Tutorial
description: Name Tutorial
---

Create a new main.go file

`touch main.go`


```go
package main

import (
	"grow.graphics/gd"
	"grow.graphics/gd/gdextension"
)

type HelloName struct {
	gd.Class[HelloName, gd.Node2D]

	Name gd.TextEdit
	Text gd.Label

	Button gd.Button
}


func (h *HelloName) Ready() {
	tmp := h.Temporary // temporary lifetime for new Godot values.
	h.Button.AsObject().Connect(tmp.StringName("pressed"), tmp.Callable(h.OnButtonPressed), 0)
}

func (h *HelloName) OnButtonPressed() {
	tmp := h.Temporary // temporary lifetime for new Godot values.
	h.Text.SetText(tmp.String("Hello " + h.Name.GetText(tmp).String()))
}

func main() {
	godot, ok := gdextension.Link()
	if !ok {
		return
	}
	gd.Register[HelloName](godot)
}
```

Run `go get -u` from the terminal and `go mod tidy`
this should update the module and install it.


After that run `gd` to start the godot project, then save the project in godot.

Change the node to a control node, then add `HelloName` as a child of the control node.

Then run the project inside godot.

![Node Tree](../../../../assets/tutorials/name/HelloName.png)


If all goes well click the button and you should see hello.


![Running Hello](../../../../assets/tutorials/name/runninghello.png)