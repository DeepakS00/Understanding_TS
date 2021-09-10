//Enumerations
enum UserResponse {
    No = 0,
    yes = 4,
    repeat = 'yes', 
}
   
function respond(recipient: string, message: UserResponse): void {
    console.log(recipient, message)
}
   
respond("Princess Caroline", 45);


enum Rankings {
    'deepak'=3,
    rupam,
    'shubham' = 4, 
    mohit, 'naveen' = 5, hrishabh
};

console.log(Rankings[5]);
console.log(Rankings[4]);
console.log(Rankings[1]);
console.log(Rankings['hrishabh']);
console.log(Rankings['deepak']);
console.log(Rankings);


enum Loc { 
    'deepak' = 'Anuppur',
    shubham = 'Khargon',
    shivam = 'Khargon',
    mohit = 'Ahemdabad',
}
console.log(Loc);

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length,
}

console.log(FileAccess);
