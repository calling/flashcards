"use strict";
const data = [
  {
    question: "size of double in bytes",
    answer: "8 bytes"
  },
  {
    question: "another question",
    answer: "another answer"
  },
  {
    question: "third question",
    answer: "third answer"
  }
];

var app = new Vue({
  el: "#app",
  data: {
    showAnswer: false,
    cards: data,
    cardIndex: getRandomInt(data.length)
  },
  methods: {
    toggleAnswer: function() {
      this.showAnswer = !this.showAnswer;
    },
    next: function() {
      const newIndex = this.cardIndex + 1;
      this.showAnswer = false;
      this.cardIndex = newIndex > data.length - 1 ? 0 : newIndex;
    },
    previous: function() {
      const newIndex = this.cardIndex - 1;
      this.showAnswer = false;
      this.cardIndex = newIndex < 0 ? data.length - 1 : newIndex;
    }
  }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
