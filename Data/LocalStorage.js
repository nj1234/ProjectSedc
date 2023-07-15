
class LS{

    constructor(){

    }
    addObj(obj,name){
      
        let temp=JSON.stringify(obj);

        try{
            localStorage.setItem(name,temp);
            console.log("added");
        }catch{
           console.log("Full local storage memory");
        }

    }
    getObj(name){
      
       return JSON.parse(localStorage.getItem(name));
    }

}

export default LS;