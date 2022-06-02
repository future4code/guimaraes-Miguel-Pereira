type People ={
    name: string
    email: string
    role: string
}


const user: People[] = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function userAdmin(user: People[]) :People[] {
 return user.filter(
     (element) => {
    if(element.role === "admin"){
        return user
    }
})}

console.log(userAdmin(user))