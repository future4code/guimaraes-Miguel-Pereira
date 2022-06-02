enum sector{
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro"

}

type Collaborators= {
    name: string,
    wage :number,
    sector: sector,
    inPerson: boolean
}

const collaborator:Collaborators[] =
[   
        { name: "Marcos", wage: 2500, sector: sector.MARKETING, inPerson: true },
        { name: "Maria" , wage: 1500, sector: sector.VENDAS, inPerson: false},
        { name: "Salete" , wage: 2200, sector: sector.FINANCEIRO, inPerson: true},
        { name: "João" , wage: 2800, sector: sector.MARKETING, inPerson: false},
        { name: "Josué" , wage: 5500, sector: sector.FINANCEIRO, inPerson: true},
        { name: "Natalia" , wage: 4700, sector: sector.VENDAS, inPerson: true},
        { name: "Paola" , wage: 3500, sector: sector.MARKETING, inPerson: true }   
]

function verifyMarketingInPerson(collaborator: Collaborators[]):Collaborators[] {

    return collaborator.filter(
      (collaborators) => {
          if(collaborators.sector === sector.MARKETING && collaborators.inPerson === true){
              return collaborator
                }
            }
        )
    }

    console.log(verifyMarketingInPerson(collaborator))


