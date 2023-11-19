const form = document.querySelector('form');
const input = document.querySelector('input');

const result = document.getElementById('result');

let id =0;
if (window.localStorage.getItem('id')) {
  id = window.localStorage.getItem('id')
  for (i=1; i <= id; i++) {
    var value = localStorage.getItem(i);
    document.getElementById("result").insertAdjacentHTML("beforeend", 
    `<div>
      <span id='${i}'> ${value} </span>
    </div>`);
    console.log(value);
    }
  }

form.addEventListener('submit', (e) => {
  id++;
  window.localStorage.id = id;
  e.preventDefault();
  task = input.value;
  input.value = null;
  document.getElementById("result").insertAdjacentHTML("beforeend", 
  `<div>
    <span id='${id}'> ${task} </span>
  </div>`);
  window.localStorage.setItem(id , task)
});

document.addEventListener('click' ,(e)=> {
  if (e.target.id) {
    let ide = e.target.id
    ide = document.getElementById(e.target.id);
    console.log(ide);
    
  }
})


