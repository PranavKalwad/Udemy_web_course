const myMath={
    PI:3.14159,
    square(num){
        return num*num;
    },
    cube(num)
    {
        return num**3;
    }
}

const cat={
    name:'Blue steele',
    color:'grey',
    breed:'scottish fold',
    meow(){
        console.log("This is :",this);
        console.log(`${this.name} says ${this.color}`);
    }
}

const meow2=cat.meow;