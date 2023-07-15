import DrawMain from "./DrawMain.js";


class View {
    constructor(){
      this.main=new DrawMain();
      
      
    };
    Display(activeState,data){

        switch(activeState){
            case 'btn-0':{
                 this.main.HomePage(data);
                 break;
            }
            case 'btn-1':{
                  this.main.DrawLates(data);
                 
                   break;
            }
            case 'btn-2':{
                this.main.DrawEvents(data);
                 break;
            }
        
        }
     }

}
export default View;
