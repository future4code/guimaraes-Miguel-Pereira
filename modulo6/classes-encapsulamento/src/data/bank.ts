import UserAccount from "./userAccount";

export default class Bank {
    private numberOfAccounts: number;
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[], numberOfAccounts: number) {
        this.numberOfAccounts = numberOfAccounts;
        this.accounts = accounts;
    }
    getNumberOfAccounts = (): number => {
        return this.numberOfAccounts
    }
    getAccounts = (): UserAccount[] => {
        return this.accounts
    }

    setNumberOfAccounts = (newAccount: UserAccount): number => {
        return this.numberOfAccounts =+ newAccount
    }
  }