"use strict"

/*
    Bangkok Travel Website - JS for quiz check and review form (About Me page)
    Author: Iana Amineva
    Date: 07.18.2025
    Filename: quiz_script.js
*/

function checkQuiz() {
    var score = 0;

    var q1 = document.querySelector('input[name="q1"]:checked');
    var q2 = document.querySelector('input[name="q2"]:checked');

    if (q1 && q1.value === "b") score++;
    if (q2 && q2.value === "b") score++;

    document.getElementById("quiz-result").textContent = "You got " + score + " out of 2 correct.";
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('review-form');
    const rating = document.getElementById('rating');
    const reviewMessage = document.getElementById('review-message');

    form.addEventListener('submit', function(event) {
    event.preventDefault();

    const ratingValue = rating.value;
    const comment = document.getElementById('comment').value.trim();

    if (!comment) {
      reviewMessage.textContent = "Please leave a comment before submitting.";
      return;
    }

    reviewMessage.textContent = "Thank you for your feedback! Your rating: " + ratingValue;
    form.reset();
    rating.value = 5;
  });
});