class CounterModel {
  constructor() {
    console.log("Here is the message");
    this.counter = 0;
  }

  getCounter() {
    return this.counter;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

}

module.exports = CounterModel;
