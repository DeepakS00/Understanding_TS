interface ITodo { 
    title: string;
    detail: string;
}

function myTodo(todo: ITodo): void {
    console.log(`${todo.title}:- ${todo.detail}`);
}

let todo1 = {
    title: 'Deepak', 
    detail: ' Complete the tasks.',
};

let todo2 = {
    title: 'Meeting',
    detail: 'Core team meeting for sponsorship.',
    time: '9 am',
    duration: '1 hour',
};

myTodo(todo1);
myTodo(todo2); // Both are valid since todo2 is also having same title and detail properties.


// Optional parameters

interface IPerson {
    firstName: string;
    middleName?: string;
    lastName: string;
}

function getFullName(person: IPerson) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}


// ReadOnly properties

interface IWorker {
    readonly ssn: string;
    firstName: string;
    lastName: string;    
}

let worker: IWorker;
worker = {
    ssn: '171-28-0926',
    firstName: 'Donald',
    lastName: 'Trump'
};

console.log(worker);
// person.ssn = '171-28-0000'; -->this reassignment will throw an error