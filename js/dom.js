import { selectUser,selectUser1 } from "./api.js";


let containerItem=document.querySelector('.containerItem')

function get(arr)
{
containerItem.innerHTML=''

    arr.forEach(el => {
        
    let item=document.createElement('div');
    item.classList.add('item');

    let header=document.createElement('div');
    header.classList.add('header');

    let leftHeader=document.createElement('div');
    leftHeader.classList.add('leftHeader');

    let nameCurse=document.createElement('p');
    nameCurse.classList.add('nameCurse');
    nameCurse.textContent=el.nameCurse;

    let levelCurse=document.createElement('p');
    levelCurse.classList.add('level');
    levelCurse.innerHTML=el.level

    let btnMore=document.createElement('button');
    btnMore.classList.add('btnMore');
    btnMore.innerHTML='SEE MORE'
    btnMore.onclick=()=>{
        window.location.href = "./see.html";
        localStorage.setItem('user',JSON.stringify(el))
       }

    let rightHeader=document.createElement('div');
    rightHeader.classList.add('rightHeader');

    let btnStata=document.createElement('button');
    btnStata.classList.add('btnStata');
    btnStata.innerHTML=el.stata

    let city=document.createElement('p');
    city.classList.add('city');
    city.innerHTML=el.city;

    leftHeader.append(nameCurse,levelCurse,btnMore)
    rightHeader.append(btnStata,city)
    header.append(leftHeader,rightHeader)
    item.append(header)
    containerItem.append(item)

    
    });

}


let select = document.querySelector(".select")

select.onclick = () =>{
    selectUser(select.value)
}

let select1 = document.querySelector(".select1")

select1.onclick = () =>{
    selectUser1(select1.value)
}

export {get}

