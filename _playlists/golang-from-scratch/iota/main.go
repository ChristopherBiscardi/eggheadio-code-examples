package main

import "fmt"

const (
	bacon int = 100 + iota
	pepperoni
	cheese
	chicken
)

func main() {
	fmt.Printf("bacon %v\n", bacon)
	fmt.Printf("pepperoni %v\n", pepperoni)
	fmt.Printf("cheese %v\n", cheese)
	fmt.Printf("chicken %v\n", chicken)
}
