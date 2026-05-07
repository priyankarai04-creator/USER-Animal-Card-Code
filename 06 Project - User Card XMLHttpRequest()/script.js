const divEle = document.querySelector('.card-container');

function getUserData(id) {
  const request = new XMLHttpRequest();
console.log(request);

  request.open('GET',`https://dummyjson.com/users/${id}`);
  request.send();   

  request.addEventListener('load', function () {
if(request.status === 404)return;

const data = JSON.parse(this.responseText);
console.log(data);
displayUser(data,'beforeend');
  const request2 = new XMLHttpRequest();

  request2.open('GET',`https://dummyjson.com/users/${id-1}`);
  request2.send(); 

    request.addEventListener('load', function () {
    //console.log(typeof request.responseText);
//console.log(JSON.parse(this.responseText));
if(request2.status === 404)return;
const data = JSON.parse(this.responseText);
console.log(data);
displayUser(data,'afterbegin','other');
    });

  });
}

function displayUser(data,pos){
  const card = `<div class="user-card">
      <img src=${data.image} alt="Profile Image" />
      <h3>${data.firstName}</h3>
      <h3>${data.lastName}</h3>
      <p class="email">${data.email}</p>
      <button class="btn">View Profile</button>
      </div>`;

      divEle.insertAdjacentHTML(pos,card);

}



getUserData(2);
