import { selectUser,getData } from "./api.js";

let tbody=document.querySelector('tbody');

function get(arr)
{
    tbody.innerHTML = ''

    arr.forEach(el => {
    let tr=document.createElement('tr')

    let tdName=document.createElement('td')
    tdName.innerHTML=el.nameCurse

    let tdLevel=document.createElement('td')
    tdLevel.innerHTML=el.level

    let tdStata=document.createElement('td')
    tdStata.innerHTML=el.stata

  

    let tdCity=document.createElement('td')
    tdCity.innerHTML=el.city

    let tdPhone=document.createElement('td')
    let btnPhone=document.createElement('button')
    btnPhone.innerHTML=el.name
    btnPhone.classList.add('btnphone')

    let tdUser=document.createElement('td')
    tdUser.innerHTML=el.fullname

    let tdAction=document.createElement('td')
    let btnEdit=document.createElement('button')
    btnEdit.innerHTML='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 423.278 423.278" style="enable-background:new 0 0 423.278 423.278;" xml:space="preserve"><g><g><path style="fill:none;" d="M186.95,343.077l-39.367,11.362h146.668c6.629,0,12,5.373,12,12c0,6.627-5.371,12-12,12H66.541 c-0.643,0-1.268-0.065-1.883-0.163c-0.643,0.105-1.287,0.163-1.928,0.163c-2.998,0-5.932-1.124-8.184-3.222 c-3.086-2.877-4.435-7.163-3.553-11.288l27.934-130.598c0.484-2.264,1.613-4.339,3.25-5.976L228.255,81.277H26.412v318.001 h318.001v-211.55L192.108,340.033C190.673,341.467,188.899,342.514,186.95,343.077z"></path><polygon style="fill:none;" points="163.321,324.917 97.879,259.474 78.654,349.352 "></polygon><path style="fill:none;" d="M327.089,24c-4.922,0-8.928,1.6-12.604,5.035c-0.145,0.137-0.293,0.268-0.443,0.395l-8.666,8.666 l77.363,77.362l8.471-8.47c0.041-0.042,0.084-0.082,0.125-0.123l0.086-0.085c0.123-0.145,0.25-0.288,0.381-0.428 c16.182-17.318-11.684-47.783-20.609-56.707C354.897,33.346,338.821,24,327.089,24z"></path><path style="fill:#73D0F4;" d="M107.91,235.564l77.362,77.362l180.496-180.498l-77.363-77.363L107.91,235.564z M309.38,111.454 c4.686,4.686,4.686,12.284,0,16.97L182.606,255.197c-2.344,2.342-5.414,3.514-8.486,3.514c-3.07,0-6.141-1.171-8.484-3.514 c-4.686-4.687-4.686-12.285,0-16.971l126.773-126.772C297.095,106.768,304.694,106.768,309.38,111.454z"></path><path style="fill:#3D6889;" d="M165.636,255.197c2.344,2.343,5.414,3.514,8.484,3.514c3.072,0,6.142-1.172,8.486-3.514 L309.38,128.424c4.686-4.687,4.686-12.285,0-16.97c-4.685-4.686-12.285-4.686-16.971,0L165.636,238.226 C160.95,242.913,160.95,250.51,165.636,255.197z"></path><path style="fill:#3D6889;" d="M417.848,76.476c-4.635-13.872-14.898-29.019-29.686-43.803C373.259,17.768,350.565,0,327.089,0 c-10.531,0-20.234,3.703-28.135,10.721c-0.412,0.316-0.805,0.661-1.176,1.032l-45.525,45.524H14.412c-6.627,0-12,5.373-12,12 v342.001c0,6.627,5.373,12,12,12h342.001c6.627,0,12-5.373,12-12V166.123c0-0.748-0.078-1.476-0.209-2.186l39.853-39.854 c0.08-0.079,0.16-0.157,0.238-0.237c0.002-0.001,0.004-0.003,0.006-0.005l0.781-0.782c0.369-0.369,0.707-0.754,1.017-1.157 C421.012,109.661,423.694,93.979,417.848,76.476z M163.321,324.917l-84.667,24.436l19.225-89.878L163.321,324.917z M185.272,312.926l-77.362-77.362L288.405,55.066l77.363,77.363L185.272,312.926z M344.413,399.278H26.412V81.277h201.843 L82.178,227.355c-1.637,1.637-2.766,3.712-3.25,5.976L50.994,363.928c-0.883,4.125,0.467,8.411,3.553,11.288 c2.252,2.098,5.186,3.222,8.184,3.222c0.641,0,231.52,0,231.52,0c6.629,0,12-5.373,12-12c0-6.627-5.371-12-12-12H147.583 l39.367-11.362c1.949-0.563,3.723-1.61,5.158-3.044l152.305-152.305V399.278z M391.802,106.351 c-0.131,0.14-0.258,0.283-0.381,0.428l-0.086,0.085c-0.041,0.041-0.084,0.082-0.125,0.123l-8.471,8.47l-77.363-77.362l8.666-8.666 c0.15-0.127,0.299-0.258,0.443-0.395C318.161,25.6,322.167,24,327.089,24c11.732,0,27.809,9.346,44.103,25.644 C380.118,58.568,407.983,89.033,391.802,106.351z"></path></g></g></svg>'
    btnEdit.style.width='35px'
    btnEdit.style.height='35px'
    btnEdit.style.backgroundColor='white'
    btnEdit.style.border='none'

        tdPhone.append(btnPhone)
    tdAction.append(btnEdit)
    tr.append(tdName,tdLevel,tdStata,tdCity,tdPhone,tdUser,tdAction)
    tbody.append(tr)

    });


}


let search=document.querySelector('.search')
search.oninput = () => {
    if (search.value != "") {
        selectUser(search.value);
    } else {
        getData();
    }
};

export{get}