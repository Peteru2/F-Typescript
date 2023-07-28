export class Invoice {
    // client: string;
    // details: string;
    // amount: number
    constructor(client, details, amount) {
        // this.client = cl,
        // this.details = de,
        // this.amount = am
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    forming() {
        return `${this.client} paid ${this.amount} for ${this.details}`;
    }
}
