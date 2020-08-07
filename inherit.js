class Parents{
  constructor(){
    this.fatherName = "bin solaiman"
  }
}

//to inherit parents class into the child class we need to add 'extends Parents' beside Child class and need to add super() property inside the child class
class Child extends Parents{
  constructor(name){
    super();
    this.name = name;
  }
  //we can also write function into the class and this class can access all the properties from this class and also can access the inherited properties
  //to write function do not need to mention function word, just start with function name
  getFullName(){
    return this.name + " " + this.fatherName;
  }
}

const baby = new Child("habib");
const baby2 = new Child("rakib");

console.log(baby, baby2);
console.log(baby.getFullName());
console.log(baby2.getFullName());
