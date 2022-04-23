class Pet{
	constructor(name,age){
		console.log("In pet construcutor");
		this.name=name;
		this.age=age;
	}
	eat(){
		return `${this.name} is eating!!`;
	}
}
class Cats extends Pet{ 
	constructor(name,age,livesLeft){
		console.log("In cat constructor");
		super(name,age);
		this.livesLeft=livesLeft;
	}
	meow(){
		return 'MEOWWW';
	}
}

class Dog extends Pet{
	bark(){
		return 'BOWWWWWW';
	}
	eat(){
		return `${this.name} scrafs his food!!!`; //overrides the that of the base class.
	}
}

