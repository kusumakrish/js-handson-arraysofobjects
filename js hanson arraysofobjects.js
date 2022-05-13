console.log("Working...");

//"Question 1 : We are interested in retrieving only the name of the students and all the names should be in caps.

let studentRecords = [ {name: 'John', id: 123, marks : 98 },
                       {name: 'Baba', id: 101, marks : 23 },
                       {name: 'yaga', id: 200, marks : 45 },
                       {name: 'Wick', id: 115, marks : 75 } ];


let result = studentRecords.map(x => x.name.toUpperCase());
console.log(result);
//"Question 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

// [{name: 'John', id: 123, marks : 98 },{name: 'Wick', id: 115, marks : 75 }]"
let result1 = studentRecords.filter(x => x.marks>50);
console.log(result1);
//Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.
let result2 = studentRecords.filter(x => x.marks>50 && x.id > 120);
console.log(result2);
//Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.
let result3 = studentRecords.reduce((x,y) => x+y.marks , 0 );
console.log(result3);
//Question 5: This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.
let result5 = studentRecords.filter(x => x.marks>50).map(x => x.name);
console.log(result5);
// Question 6: This time we are required to print the sum of marks of the students with id > 120.
let result6 = studentRecords.filter(x => x.id > 120).reduce((x,y) => x+y.marks, 0);
console.log(result6);
//Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.
let result7 = studentRecords.map (function(mark){
    if(mark.marks < 50){
        mark.marks +=15
    };
    return mark;
}).filter(mark => mark.marks > 50).reduce((acc,cur) => acc+cur.marks,0);
console.log(result7);
//Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 
let arrayobject = [];


function Student(Name,cls,rollno){
     this.Name = Name;
     this.cls = cls;
     this.rollno = rollno;
}

let student1 = new Student("Kusuma"," one","1");
let student2 = new Student("Krishna","two","2");
let student3 = new Student("ABC","three","3");
let student4 = new Student("DEF","four","4");
let student5 = new Student("GHI"," five","5");
let student6 = new Student("JKL","six","6");


arrayobject.push(student1);
arrayobject.push(student2);
arrayobject.push(student3);
arrayobject.push(student4);
arrayobject.push(student5);
arrayobject.push(student6);


console.log(arrayobject);

