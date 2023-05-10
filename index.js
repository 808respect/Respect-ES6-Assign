
// QUESTION 1
const PI = 3.14;
console.log(PI);
document.write(PI);

// QUESTION 2
var myName = "Respect";
var age =  10 ;

var myInfo = `My name is ${myName} and i am ${age} years old`;
console.log(myInfo);

// QUESTION 3
var addition = (x, y) => console.log(`the sum of x and y is ${x + y}`);

addition(3, 6);
addition(3, 16);
addition(3, -6);

// QUESTION 4
function sum(a, b) {
    console.log(`the sum of a and b = ${a + b}`);
}
sum(100, 33);

// QUESTION 5
var name = "John";
var greeting = console.log(`"Hello, ${name}!"`);

 greeting();


// GIT-COMMANDS-ASSIGNMENT
    
// 1. find  ( find dir -name search_pattern )
// The find command is used to search files  

// 2. mkdir.  ( mkdir <directory-name> )
// The mkdir command stands for Make Directory. It allows one to create a directory (folder) right from the CLI.
//  When one needs a place to store new files, just use this command to add a new directory in the current working 
//  directory, or specify a full path to the location where one wants the new directory to be placed. ( mkdir “path/to/new/directory” )

// 3. cd  ( cd “path/to/directory/” )
// The cd command stands for Change Directory. It allows one to change the directory that one is currently working 
// with in the Terminal in order to execute other commands on a different directory, view the contents of a different
//  directory or open a file in a different directory

// 4. cp.  ( cp “filename” “newfilename” )
// The command is used to copy a file to another directory

// 5. Open  ( open “filename” ) 
//    The command is used to open a file

// 6. Is ( ls “path/to/directory/ )
//   The listing directory command is used after navigating into a directory using the cd command to view the contents (files and directories)     
//   inside of the current directory.

// 7. mv  ( mv “filename” “path/to/new/file/location” )
//   mv stands for move. It performs a file move from one location to another, removing the file from the original location and 
//   putting it into the new location.

// 8. touch  ( touch myfile.txt )
//   The command allows one to create any type of file, but it’s blank. After creating the blank file, one can open it 
//   in a text editor by typing open [filename]. 


//  ASSIGNMENT-3-FUNCTIONS

// QUESTION 1
function multiply (x, y) {

    console.log(x * y);
}
multiply (10, 33);
multiply (3.5, 12);

// QUESTION 2
function calculateGrade(x) {
    
    if (x >= 90) {
        console.log("A");
    }
    else if (x >= 80 | x < 90 & x >= 80 ){

        console.log("B");
    }
    else if (x >= 70 | x < 80 & x >= 70 ){

        console.log("C");
    }
    else if (x >= 60 | x < 70 & x >= 60 ){

    console.log("D");
    }
    else if (x < 60 ){

        console.log("F");
    }    
}
calculateGrade(100);
calculateGrade(85);
calculateGrade(76);
calculateGrade(62);
calculateGrade(2);




