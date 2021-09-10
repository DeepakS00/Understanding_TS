class Mail {
    later(email, after) {
        console.log(`Send email to ${email} in ${after} secs.`);
        return true;
    }
    send(email) {
        console.log(`Sent email to ${email}. `);
        return true;
    }
    queue(email) {
        console.log(`Queue an email to ${email}.`);
        return true;
    }
}
let mail1 = new Mail();
mail1.later('deepak33@gmail.com', 5);
mail1.send('deepak12@yahoo.com');
mail1.queue('deepak11@outlook.com');
