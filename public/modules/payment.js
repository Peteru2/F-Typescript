export class Payment {
    // client: string;
    // details: string;
    // amount: number
    constructor(recipient, details, amount) {
        // this.client = cl,
        // this.details = de,
        // this.amount = am
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    forming() {
        return `${this.recipient} owns ${this.amount} for ${this.details}`;
    }
}
