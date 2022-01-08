/*
* This is the main file 
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2022-1-5
*/

import * as readline from 'readline'
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
        console.log("\nSide B:");
        let sideB = input('');
        console.log("\nSide C:");
        let sideC = input('');

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
    } catch (exeption) {
        console.log('please insert an integer.') 
    }
}
main();
