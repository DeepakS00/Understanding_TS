interface IMailable {
    send(email: string): boolean
    queue(email: string): boolean
}

interface IFutureMailable extends IMailable {
    later(email: string, after: number): boolean
}

class Mail implements IFutureMailable {
    later(email: string, after: number): boolean {
        console.log(`Send email to ${email} in ${after} secs.`);
        return true;
    }
    send(email: string): boolean {
        console.log(`Sent email to ${email}. `);
        return true;
    }
    queue(email: string): boolean {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}

let mail1 = new Mail();
mail1.later('deepak33@gmail.com', 5);
mail1.send('deepak12@yahoo.com');
mail1.queue('deepak11@outlook.com')


/*
interface A {
    a(): void
}

interface B extends A {
    b(): void
}

interface C {
    c(): void
}

interface D extends B, C {
    d(): void
}
*/
