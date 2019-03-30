package main

import "fmt"

func timesTwo(n int) (int, int) {
	return n, n * 2
}

func main() {
	n, nn := timesTwo(4)
	fmt.Println(n, nn)
}
