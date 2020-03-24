
export class User {
    constructor(private name: string) {}
}

export class Vote {
    constructor(private from: User, private content: number) {}
}

export class VoteMessage extends Vote{
    constructor(from: User, content: number) {
        super(from, content);
    }
}