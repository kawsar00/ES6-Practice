class Student{
  constructor(sId, sName){
    this.id = sId;
    this.name = sName;
    this.school = "Kolimullah High School" //this will be same property for all new class
  }
}

const student1 = new Student(2021, "shuvo");
const student2 = new Student(2071, "Mahi");
const student3 = new Student(2071, "Rakib");

console.log(student1, student2, student3); //way 1
console.log(student1.id, student2.name, student3.school); //way 2