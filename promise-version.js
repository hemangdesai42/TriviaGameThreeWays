export function getClue() {
  return fetch("https://jservice.xyz/api/random-clue")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw Error(response.status)
      }
    })
}

getClue().then(response => console.log(response));
