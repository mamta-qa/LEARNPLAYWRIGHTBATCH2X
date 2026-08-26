const user ={
    firstName :"Mamta",
    lastName:"Dhiman",

    get fullName(){

        return this.firstname +this.lastName

    },

    set fullName (value){
        [this.firstName +this.lastName] =value.split(" ");

    
    }

}

console.log(user.fullName);
user.fullName =" mamta Dhiman"
console.log(user.fullName);


//objects -js {}
//class and objects


