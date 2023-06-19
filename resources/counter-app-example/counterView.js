class CounterView {
  constructor(model) {
    this.model = model;

    const incrementButtonEl = document.querySelector('#increment-btn');
    
    incrementButtonEl.addEventListener('click', () => {
      // Increment on the model, then refresh the view
      this.model.increment();
      this.display();
    });

    const decrementButtonEl = document.querySelector('#decrement-btn');
    
    this.decrementButtonClickHandler = () => {
      // Decrement on the model, then refresh the view
      this.model.decrement();
      this.display();
    };
    decrementButtonEl.addEventListener('click', this.decrementButtonClickHandler);
  }

  display() {
    document.querySelector('#counter').textContent = this.model.getCounter();
  }
}

module.exports = CounterView;