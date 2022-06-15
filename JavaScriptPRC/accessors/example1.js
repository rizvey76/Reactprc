const person={
    fname:"John",
    lname:"Doe",
    language:"English",
    get lang(){
        return this.language;
    },

    set langg(lang){
        this.language=lang;
    }
}

person.language="Hibru";

console.log(person.lang);