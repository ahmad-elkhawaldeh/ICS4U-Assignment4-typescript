/*
* This program is a main file.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-25
*/

import { Triangle } from "./TriangleClassFile";

// main function
function main() {
    try {
        // created a variable input, that helps in
        // reading user input
        const input = require('prompt-sync')();

        // asking user to input values for sideA,
        // sideB and sideC
        console.log("Side A:");
        let sideA = input('');

        //checking if value entered in sideA is not a number
        if(isNaN(sideA))
        {
            //throwing type error
            throw new TypeError();
        }

        console.log("\nSide B:");
        let sideB = input('');

        //checking if value entered in sideB is not a number
        if(isNaN(sideB))
        {
            //throwing type error
            throw new TypeError();
        }
        console.log("\nSide C:");
        let sideC = input('');

        //checking if value entered in sideC is not a number
        if(isNaN(sideC))
        {
            //throwing type error
            throw new TypeError();
        }

        // created object of class Triangle and calling different member
        // functions
        let t1 = new Triangle(Number(sideA), Number(sideB), Number(sideC));
        // calling GetArea()
        console.log("The area is: ", t1.GetArea());
        // calling GetAngleA()
        console.log("Angle A is: ", t1.GetAngleA());
        // calling GetAngleB()
        console.log("Angle B is: ", t1.GetAngleB());
        // calling GetAngleC()
        console.log("Angle C is: ", t1.GetAngleC());
        // calling GetName()
        console.log("The name is: ", t1.GetName());
        // calling GetPerimeter()
        console.log("The perimeter is: ", t1.GetPerimeter());
    }
    catch (exeption) {
        console.log('ERROR:invalid input.')
    }
}
main();
