class A{
   // get - to define a getter method to get the property value.
    getname(){  // To reference for the current object
        return this.name;
    }
    setname(name){ // set - to define a setter method to set the property value.
        this.name=name;
    }
    getemail_id(){
        return this.email_id
    }
    setemail_id(email_id){
        this.email_id=email_id;
    }
}
let B = new A();
B.setname("PRASANNA KARANTH");
B.setemail_id("prasanna.kerekatte@yahoo.com");
console.log("Name is ", B.getname(),"and", "Email_id is ", B.getemail_id());