import { app } from './app';
import UserAccount from './data/userAccount';
import Transaction from './data/transaction';

//1- A) O constructor serve para incializar a classe
// e definir variáveis antes de serem realizadas outras operações com a classe

//1- B)
const miguel = new UserAccount('047.593.610-81', 'Miguel Tocchetto', 24, 1200)
console.log(miguel)

// Foi impresso apenas uma vez

//1- C) Criando uma função e passando para ela um método public