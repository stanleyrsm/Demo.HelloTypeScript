/**
 * HelloTypeScript.Greeter
 */
export class Greeter {
    constructor(public message: string) {

    }
    greet(): string {
        return "Hello " + this.message;
    }
}
