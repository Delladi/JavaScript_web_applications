/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const MessageView = require('./messageView');

describe('MessageView', () => {
  it('clicks the button', () => {
    //arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    //act
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    //assert
    expect(document.querySelector('#message')).not.toBeNull();
  });

  it('Hides the message', () => {
    //arrange
    document.body.innerHTML = fs.readFileSync('./index.html');

    const view = new MessageView();
    //act: show then hide the message
    const buttonEl = document.querySelector('#show-message-button');
    buttonEl.click();
    const hideButtonEl = document.querySelector('#hide-message-button');
    hideButtonEl.click();
    //assert: that the msg element is not on the page
    expect(document.querySelector('#message')).toBeNull();
  });
});