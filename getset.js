const person = {
    firstName: 'Isaac',
    lastName: 'Peleg',
    get fullName() { return `${person.firstName} ${person.lastName}`},
    set fullName(value) {
        const parts = value.split (' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(person);
person.fullName = "John Smith";
console.log(person);