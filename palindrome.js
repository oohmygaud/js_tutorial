// Adds `reverse` to all strings.
String.prototype.reverse = function() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
  this.content = content;

// Returns content processed for palindrome testing.
  this.processed = function processed() {
    return this.content.toLowerCase();
  }

// Returns true if the phrase is a palindrome, false otherwise.
  this.palindrome = function palindrome() {
    return this.processed() === this.processed().reverse();
  }

}


class PhraseTwo {
  constructor(content) {
    this.content = content;
  }

  processed() {
    return this.content.toLowerCase();
  }
  palindrome() {
    return this.processed() === this.processed().reverse();
  }

  info() {
    return `Phrase: ${this.content}, processed: ${this.processed()}, palindrome: ${this.palindrome()}`
  }

}

class ForeignPhrase extends PhraseTwo {
  constructor(content, foreign) {
    super(content);
    this.foreign = foreign;
  }

  processed() {
    return this.foreign.toLowerCase();
  }

}

const car = new PhraseTwo("RACEcar");
console.log(car.info());

const spanish = new ForeignPhrase("recognize", "reconocer");
console.log(spanish.info());
