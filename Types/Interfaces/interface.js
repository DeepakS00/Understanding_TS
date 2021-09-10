function myTodo(todo) {
    console.log(`${todo.title}:- ${todo.detail}`);
}
let todo1 = {
    title: 'Deepak',
    detail: ' Complete the tasks.'
};
let todo2 = {
    title: 'Meeting',
    detail: 'Core team meeting for sponsorship.',
    time: '9 am',
    duration: '1 hour',
};
myTodo(todo1);
myTodo(todo2);
function getFullName(person) {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    }
    return `${person.firstName} ${person.lastName}`;
}
let worker;
worker = {
    ssn: '171-28-0926',
    firstName: 'Donald',
    lastName: 'Trump'
};
