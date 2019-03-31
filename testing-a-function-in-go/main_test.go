package main

import "testing"

func Test8(t *testing.T) {
	if(timesTwo(8) != 16) {
		t.Error(`timesTwo(8) is not 16`)
	}
}