---
title: Hello World Example
description: Hello World Example
---

### Hello World Example


Installing the module

```sh
go install grow.graphics/gd/cmd/gd@master
```

Create a new go project

```sh
go mod init main
```

Create a new main.go file

```go
package main

import (
    "fmt"
    "grow.graphics/gd"
    "grow.graphics/gd/gdextension"
)

type HelloWorld struct {
    gd.Class[HelloWorld, gd.Node2D]
}

// Ready implements the Godot Node2D _ready interface (virtual function).
func (h *HelloWorld) Ready() {
    fmt.Println("Hello World from Go!")
}

func main() {
    godot, ok := gdextension.Link()
    if !ok {
        return
    }
    gd.Register[HelloWorld](godot)
}
```

Use `go get -u` to make sure the project and all the dependencies are up to date.

```sh
go get -u
```

run the project

```sh 
gd
```

With godot editor running add the `HelloWorld` Node to the the node in the current scene and save the project and close it.

![Find hello world in the create node menu using the scene tree](../../../../assets/tutorials/helloworld/helloworld.png)

Add it to the scene tree.

![Node tree](../../../../assets/tutorials/helloworld/helloworld2.png)

Save the project in Godot Editor. 

In godot run the project or by running `gd run` in your terminal.

You may need to close and open the godot editor using `gd` if it cannot map the assets in the project.

If all is well check the editor and you should see the message `Hello World from Go!` in the console of your code editor.