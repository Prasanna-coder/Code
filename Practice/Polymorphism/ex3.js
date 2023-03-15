class A {
	area(x, y) {
		console.log(x * y);
	}
}
class B extends A {
	area(a, b) {
		super.area(a, b);
		console.log('Class B')
	}
}
var ob = new B();
var output = ob.area(100, 200);