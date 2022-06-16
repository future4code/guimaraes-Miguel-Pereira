type UserInfos = {
    id: number
    name: string,
    cpf: number | string,
    birth: string,
    balance: number,
    bankStatement: [{
        value: number,
        date: string,
        description: string
    }]
}

export let Users: UserInfos[] = [
    {
        id: Math.round(Math.random() * (51 - 1) + 1),
        name: "Miguel Tocchetto",
        cpf: 43221323456,
        birth: "30/08/1998",
        balance: 0,
        bankStatement: [{
            value: 0,
            date: "",
            description: ""
        }]
    },
    {
        id: Math.round(Math.random() * (51 - 1) + 1),
        name: "Gabriele Bueno",
        cpf: 29524359340,
        birth: "08/03/2000",
        balance: 1500.00,
        bankStatement: [{
            value: 0,
            date: "",
            description: ""
    }]
    }
]