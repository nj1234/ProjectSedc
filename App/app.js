import View from "../Views/View.js"
import SL from "../Data/saveAndLoad.js"
class App{

    constructor(){
      this.activeState='btn-0';
      this.setButtonsEvents();
      this.view = new View();
      this.loadAndSave = new SL();
    }
    Run(){
      let temp=this.loadAndSave.loadData(this.activeState);
      this.view.Display(this.activeState,temp);
    }
    Likes(id,temp){
      this.loadAndSave.saveData(id,temp);
    }
    setButtonsEvents(){
        const buttons= document.getElementsByTagName('button');
          
            for(let i=0;i<buttons.length;i++)
             {
                      buttons[i].addEventListener('click',()=>{
                      this.activeState=buttons[i].id;
                      let temp=this.loadAndSave.loadData(this.activeState);
                      this.view.Display(this.activeState,temp)
                    });
                    
             }
      }
      
}

export default App;