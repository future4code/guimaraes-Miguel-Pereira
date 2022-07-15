import Transaction from "./transaction";

export default class UserAccount {
   private cpf: string;
   private name: string;
   private age: number;
   private balance: number = 0;
   private transactions: Transaction[] = [];
 
   constructor(
      cpf: string,
      name: string,
      age: number,
      balance: number
   ) {
      console.log("Chamando o construtor da classe UserAccount")
      this.cpf = cpf;
      this.name = name;
      this.age = age;
      this.balance = balance;
   }
 //Getters
   public userName = (): string => {
      return this.name
   }
   public userCpf = (): string =>{
      return this.cpf
   }
   public userAge = (): number => {
      return this.age
   }
   public userBalance = (): number => {
      return this.balance
   }
   public userTransactions = (): Transaction[] => {
      return this.transactions
   }
   //Setter
   public addTransactions = ( newTransaction: Transaction): any => {
      return this.transactions.push(newTransaction)
   }
 }