var UserResponse;
(function (UserResponse) {
    UserResponse[UserResponse["No"] = 0] = "No";
    UserResponse[UserResponse["yes"] = 4] = "yes";
    UserResponse["repeat"] = "yes";
})(UserResponse || (UserResponse = {}));
function respond(recipient, message) {
    console.log(recipient, message);
}
respond("Princess Caroline", 45);
var Rankings;
(function (Rankings) {
    Rankings[Rankings["deepak"] = 3] = "deepak";
    Rankings[Rankings["rupam"] = 4] = "rupam";
    Rankings[Rankings["shubham"] = 4] = "shubham";
    Rankings[Rankings["mohit"] = 5] = "mohit";
    Rankings[Rankings["naveen"] = 5] = "naveen";
    Rankings[Rankings["hrishabh"] = 6] = "hrishabh";
})(Rankings || (Rankings = {}));
;
console.log(Rankings[5]);
console.log(Rankings[4]);
console.log(Rankings[1]);
console.log(Rankings['hrishabh']);
console.log(Rankings['deepak']);
console.log(Rankings);
var Loc;
(function (Loc) {
    Loc["deepak"] = "Anuppur";
    Loc["shubham"] = "Khargon";
    Loc["shivam"] = "Khargon";
    Loc["mohit"] = "Ahemdabad";
})(Loc || (Loc = {}));
console.log(Loc);
var FileAccess;
(function (FileAccess) {
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 2] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 6] = "ReadWrite";
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
console.log(FileAccess);
