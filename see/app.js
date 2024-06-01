const userData = JSON.parse(localStorage.getItem("user"));

console.log(userData);
document.querySelector('.curse').innerHTML=userData.nameCurse
document.querySelector(".title").innerHTML = userData.name;
document.querySelector(".data").innerHTML = userData.fullname;
document.querySelector(".level").innerHTML = userData.level;
document.querySelector(".stata").innerHTML = userData.stata;
document.querySelector(".city").innerHTML = userData.city;
