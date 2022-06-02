type infoClients = {
    client: string,
    totalBalance: number,
    debits: number[]
}

let clients: infoClients[] = [
	{ client: "João", totalBalance: 1000, debits: [100, 200, 300] },
	{ client: "Paula", totalBalance: 7500, debits: [200, 1040] },
	{ client: "Pedro", totalBalance: 10000, debits: [5140, 6100, 100, 2000] },
	{ client: "Luciano", totalBalance: 100, debits: [100, 200, 1700] },
	{ client: "Artur", totalBalance: 1800, debits: [200, 300] },
	{ client: "Soter", totalBalance: 1200, debits: [] }
];

function NegativeClients(clients: infoClients[]): infoClients[] {
        clients.forEach((client) => { 
        const finalDebits = client.debits.reduce((a , b) => a + b, 0);
        client.totalBalance -= finalDebits;
        client.debits = []
    })
    const negativeCostumers = clients.filter((client) => client.totalBalance < 0);

    return negativeCostumers;   
 
};

console.log(NegativeClients(clients));
