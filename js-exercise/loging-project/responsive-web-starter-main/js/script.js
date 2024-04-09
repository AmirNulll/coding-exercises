const btnOne = document.querySelector(".btn");
const inputName = document.querySelector(".Name");
const inputEmail = document.querySelector(".Email");
const title = document.querySelector(".title");
const inputcontainer = document.querySelector(".input-container");
const container = document.querySelector(".container");
const name = document.getElementById("name");
const email = document.getElementById("email");

const input = ` <div class="input-div" id="name">
<p>Name</p>
<input class="Name" type="text" placeholder="enter your name" />
</div>
<div class="input-div" id="email">
<p>Email</p>
<input
  class="Email"
  type="text"
  placeholder="AmirNull@gmail.com"
/>
</div>`;
container.innerHTML = input;
btnOne.addEventListener("click", () => {

  container.innerHTML=''
  title.innerHTML = "Which topic you are interesting ?";
  

  container.innerHTML=` <label >
  <input type="checkbox">
  <span>software developer</span>
</label>
<label >
  <input type="checkbox">
  <span>user experiense</span>
</label>
<label >
  <input type="checkbox">
  <span> graphic designer</span>
</label>`;
});
