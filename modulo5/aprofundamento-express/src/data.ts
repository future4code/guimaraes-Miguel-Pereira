type toDotypes = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

export const TasksList: toDotypes[] = [
    {
        userId: 1,
        id: 1,
        title: "Almoçar",
        completed: true
    },
    {
        userId: 1,
        id: 2,
        title: "Lavar a louça",
        completed: true
    },
    {
        userId: 1,
        id: 3,
        title: "Estudar",
        completed: false
    },
    {
        userId: 2,
        id: 1,
        title: "Arrumar a cama",
        completed: true
    },
    {
        userId: 2,
        id: 2,
        title: "Fazer exercícios",
        completed: false
    },
    {
        userId: 2,
        id: 3,
        title: "Fazer a faxina",
        completed: true
    },
    {
        userId: 2,
        id: 4,
        title: "Tomar banho",
        completed: false
    }
]