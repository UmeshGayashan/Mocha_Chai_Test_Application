import { expect } from 'chai';
import Calculator from '../src/calculator'
//First Test Shoot
describe('Test Calculator Class', ()=>{

    // First test case
    it('should return sum',()=>{
        // 3A Pattern used to Write a test case

        // Arrange
        // Create instance for calculator class
        const calc = new Calculator();

        // Act
        const result = calc.add(2,3);

        // Assert
        expect(result).to.equal(5);
    });
});