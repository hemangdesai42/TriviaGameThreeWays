import { getClue as getClueFromPromise } from './promise-version.js'
import { getClue as getClueFromAsyncFunction} from './async-await-version.js'
import { getClue as getClueFromCallback} from './callback-version.js'
document.addEventListener('DOMContentLoaded', event => {

  const promiseButton = document.getElementById('use-promise');
  const questionDiv = document.getElementById('question');
  const answerDiv = document.getElementById('answer');
  const valueDiv = document.getElementById('value');
  const categoryTitleDiv = document.getElementById('category-title');
  const invalidCountDiv = document.getElementById('invalid-count');
 

  function defineHTMLFromClue(clue) {
    questionDiv.innerHTML = clue.question;
    answerDiv.innerHTML = clue.answer;
    valueDiv.innerHTML = clue.value;
    categoryTitleDiv.innerHTML = clue.category.title
    if ((invalidCountDiv) && invalidCountDiv > 0) {
      invalidCountDiv.innerHTML = 'invalid'
    } else {
      invalidCountDiv.innerHTML = 'valid'
    }
  }

  promiseButton.addEventListener('click', event => {
    getClueFromPromise()
      .then(clue => defineHTMLFromClue(clue))
      .catch(error => console.error(error.message))
  });

  const asyncBtn = document.getElementById('use-async-await') 
 
  asyncBtn.addEventListener('click', async () => {
        try {
          const clue = await getClueFromAsyncFunction();
          defineHTMLFromClue(clue);
          } catch (e) {
            console.error(e.message);
        }
    });

  const callbackBtn = document.getElementById('use-callback');

  callbackBtn.addEventListener("click", () => {
      getClueFromCallback((err, clue) => {
        if (err !== null) return console.error(err);
        defineHTMLFromClue(clue);
      });
    });



})

