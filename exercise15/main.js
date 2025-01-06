




const people = [{name:" Ali", id:" BA221", age: 25, birthDate:" 1/1/200"},
                {name:" Asad", id:" CA201", age: 20, birthDate:" 19/3/2005"},
                {name:" Haliimo", id:" MA210", age: 19, birthDate:" 23/6/2008"} 
                
]
                

console.log("\n Properties and values of each person:");
for(const person of people){
    for (const key in person){
        console.log(key + ":" + person[key]);
        

    }
    console.log(".....");
    
}
