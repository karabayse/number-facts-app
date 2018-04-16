let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactFetch);

// XHR Function
// function getFactAjax() {
//   console.log('in getFactAjax');
//   // Set number being input to a value
//   let number = numberInput.value;
//   console.log(number);
//
//   // Make request to API
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET', 'http://numbersapi.com/'+number);
//
//   xhr.onload = function() {
//     if(this.status == 200 && number != '') {
//       console.log(this.responseText);
//       // Fact initially set to 'none' via CSS
//       fact.style.display = 'block';
//       // Display number fact info
//       factText.innerText = this.responseText;
//     }
//   };
//   xhr.send();
// }

// FetchAPI Function
function getFactFetch() {
  console.log('in getFactFetch');
  let number = numberInput.value;

  fetch('http://numbersapi.com/'+number)
    // Fetch returns a promise
    .then(response => response.text())
    .then(data => {
      console.log(data);
      if(number != '') {
        fact.style.display = 'block';
        factText.innerText = data;
      }
    })
    .catch(err => console.log(err));
}
