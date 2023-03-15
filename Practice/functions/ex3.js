//JavaScript is a dynamic type scripting language,
//so a function parameter can have value of any data type.

function Message(firstName, lastName) {
    console.log("Hello " + firstName + " " + lastName);
}

Message("John", "Bohn");
Message("Bill", "Gates");
Message(10.8, 2);