/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const View = require('./view');

describe('Page view', () => {
  it('displays 2 paragraphs', () => {
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new View();

    expect(document.querySelectorAll('p').length).toBe(2);
  });

  it('adds a new paragraph', () =>{
    //arrange
    document.body.innerHTML = fs.readFileSync('./index.html');
    const view = new View();

    //act
    view.addParagraph();
    
    //assert
    expect(document.querySelectorAll('p').length).toBe(3);

  });

  it("clears all paragraphs in the document", () => {
    // Arrange
    document.body.innerHTML = fs.readFileSync("./index.html");
    const view = new View();
    // Act
    view.clearParagraph();
    // Assert
    expect(document.querySelectorAll("p").length).toBe(0);
  });
  
});