let input =prompt("What would you like to do");
const todos=['collect eggs','clean your room'];
while(input!=='quit' && input!=="q"){
    if(input==="list"){
        console.log('**********');
        for(let i=0;i<todos.length;i++)
        {
            console.log(`${i}:${todos[i]}`);
        }
        console.log('**********');
    }
    else if(input==="new")
    {
        const newTodo=prompt("Enter the new todo:");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    }
    else if(input==="delete")
    {
        const index=parseInt(prompt("Enter the index to delete:"));
        if(!Number.isNaN(index)){
            const deleted=todos.splice(index,1);
            console.log(`${deleted} is deleted`);
        }else{
            console.log("Unknown index");
        }
    }
    input=prompt("What would you like to do");
}
console.log("Ok you quit");
