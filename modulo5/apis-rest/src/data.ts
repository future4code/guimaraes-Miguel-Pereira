export enum USER_TYPES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}

type userInfos = {
    id: number,
    name: string,
    email: string,
    type: USER_TYPES,
    age: number
}

export let Users: userInfos[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: USER_TYPES.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: USER_TYPES.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: USER_TYPES.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: USER_TYPES.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: USER_TYPES.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: USER_TYPES.ADMIN,
        age: 60
    }
]