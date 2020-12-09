import { getClue as getClueFromPromise } from 'promise-version.js'


document.addEventListener('DOMContentLoaded', event => {
  promiseButton = document.getElementById('use-promise');
  questionDiv = document.getElementById('question');
  answerDiv = document.getElementById('answer');
  valueDiv = document.getElementById('value');
  categoryTitleDiv = document.getElementById('category-title')
  invalidCountDiv = document.getElementById('invalid-count')

  promiseButton.addEventListener('click', event => {
    getClueFromPromise()
      .then((clueObj) => {
        questionDiv.innerHTML = clueObj.question;
        answerDiv.innerHTML = clueObj.answer;
        valueDiv.innerHTML = clueObj.value;
        categoryTitleDiv.innerHTML = clueObj.category.title
        if ((invalidCountDiv) && invalidCountDiv > 0) {
          invalidCountDiv.innerHTML = 'invalid'
        } else {
          invalidCountDiv.innerHTML = 'valid'
        }
      })
      .catch(error => console.error(error.message))
  })
})