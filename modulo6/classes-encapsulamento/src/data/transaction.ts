export default class Transaction {
    private description: string;
    private value: number;
    private date: string;

    constructor(description: string, value: number, date: string) {
      (this.description = description),
      (this.value = value),
      (this.date = date);
    }
    //Getters
    public transDescription = (): string => {
      return this.description
    }
    public transValue = (): number => {
      return this.value
    }
    public transDate = (): string => {
      return this.date
    }
  }