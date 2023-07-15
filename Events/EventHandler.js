class EventsHandler{
    constructor(application){
        window.App=application;
        window.Like=(id)=>{
            let t=`like${id}`;
           
          let span=parseInt(document.getElementById(t).textContent);
         
          document.getElementById(t).innerText=++span;
            window.App.addLike(id);
        }
        window.DisLike=(id)=>{
            let t=`dislike${id}`;
            let span=parseInt(document.getElementById(t).textContent);
            document.getElementById(t).innerText=++span;
              window.App.addDislike(id);
        
        };
    }
}
export default EventsHandler;