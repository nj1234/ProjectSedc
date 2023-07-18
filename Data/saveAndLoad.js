import { News , events} from "../Data/dataBase.js";
import LocalStor from "../Data/LocalStorage.js"


class LoadAndSave{
    constructor(){
        this.local=new LocalStor();   
        this.likes=[];
        this.news=[];
        this.events=[];
        this.initData();
        
    }
    initData(){
        this.news=News;
        this.events=events;
        for(let i=0;i<this.news.length;i++)
        {
            this.likes.push({id:i,thumbsUp:0,thumbsDown:0});
        }
    }
    initLocalStorage(){
       let temp= this.local.getObj('Likes');
       if(temp){ this.likes = temp;}
    }
    mergeNewsAndLikes(){
        this.initLocalStorage();
        let temp=[];
        for(let i=0;i<this.news.length;i++){
             temp.push(this.news[i]);
            temp[i].thumbsUp = this.likes[i].thumbsUp;
            temp[i].thumbsDown=this.likes[i].thumbsDown;
  
         }   
         return temp;
    }
    loadData(state){
       
     switch(state){
        case "btn-0":{
           
             let numOfItems=3;
             let tempData=[],tempEvents=[];
             let temp=this.mergeNewsAndLikes();
             for(let i=0;i<numOfItems;i++)
             {
                tempData.push(temp[i]);
                tempEvents.push(events[i]);
             }
             
            return [tempData,tempEvents];
            
        }
        case "btn-1":{
           return this.mergeNewsAndLikes();
        }
        case "btn-2":{
            return this.events;
        }

       };  
    }
    saveData(id,like=true){
      
       if(like){
            for(let i=0;i<this.likes.length;i++)
            {
                if(this.likes[i].id==id){
                    this.likes[i].thumbsUp++;                  
                }
            }      
        } else {
             for(let i=0;i<this.likes.length;i++)
             {
                 if(this.likes[i].id==id){
                     this.likes[i].thumbsDown++;
                 }
             }
           }
        this.local.addObj(this.likes,"Likes");
    }
};

export default LoadAndSave;