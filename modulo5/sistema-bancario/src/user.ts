import { ModuleResolutionKind } from "typescript"

type UserInfos = {
    id: number
    name: string,
    cpf: number,
    birth: string,
    balance: number,
}
type ExtractInfos = {
    value: number,
    data: string,
    description: string
}

export let Users: UserInfos[] = [
    {
        id: Math.round(Math.random() * (51 - 1) + 1),
        name: "Miguel Tocchetto",
        cpf: 43221323456,
        birth: "30/08/1998",
        balance: 1500.00,
        // extract: [
        //     {
        //     value: 15.00,
        //     data: "05/06/2022",
        //     description: "Zé Delivery"
        //     }
        // ]
    },
    {
        id: Math.round(Math.random() * (51 - 1) + 1),
        name: "Gabriele Bueno",
        cpf: 29524359340,
        birth: "08/03/2000",
        balance: 1500.00,
    //     extract: [
    //         {
    //         value: 12.00,
    //         data: "03/04/2022",
    //         description: "Ifood"
    //         }
    //     ]
    }
]