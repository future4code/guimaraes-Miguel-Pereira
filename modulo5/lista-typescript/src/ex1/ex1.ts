function person(name: string, data: string): string {
    const splitData = data.split("/");
    const day = splitData[0];
    const month = splitData[1];
    const year = splitData[2];
     
    return(`Hello, my name is ${name} and i was born in ${day} / ${month} / ${year}.`)
    
    
    }

console.log(person("Miguel", "30/08/1998"))
