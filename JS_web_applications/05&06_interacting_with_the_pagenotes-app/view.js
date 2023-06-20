class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }
  addParagraph() {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = 'I was created dynamically by JavaScript';
    this.mainContainerEl.append(newParagraph)
  }

  clearParagraph() {
    const allParagraphs = document.querySelectorAll("p");
    allParagraphs.forEach((paragraph) => {
      paragraph.remove();
    });
  }
}

module.exports = View;