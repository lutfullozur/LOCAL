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

export{getData}


async function selectUser(value) {
    try {
      let { data } = await axios.get(`${api}?level=${value}`);
      get(data);
    } catch (error) {}
  }

  async function selectUser1(value) {
    try {
        let {data} = await axios.get(`${api}?stata=${value}`)
        get(data)
    } catch (error) {
        console.error(error);
    }
  }

  export {selectUser,selectUser1}