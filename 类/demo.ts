class Greeter{
	greeting:string
	constructor(message : string){
		this.greeting = message
	}
	greeter() :string {
	    return "Hello, " + this.greeting;
	}
}
let greeter = new Greeter("world");
greeter.greeter()

export {};