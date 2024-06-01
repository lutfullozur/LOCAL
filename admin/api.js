import { get } from "./dom.js";

let api='https://664ca55035bbda1098814b13.mockapi.io/todo/todo'

async function getData()
{
    try{
        let {data} = await axios.get(api)
        get(data)
    }
    catch(error){
        console.log(error);
    }
}

async function selectUser(name) {
    try {
        let { data } = await axios.get(`${api}?name=${name}`);
        get(data);
    } catch (error) {
        console.error(error);
    }
}


export{getData,selectUser}