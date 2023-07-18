class EventsHandler{
    constructor(application){
        window.App=application;

        window.Likes=(id,temp)=>{
            let t = temp ?`like${id}`:`dislike${id}`;
            let span=parseInt(document.getElementById(t).textContent);
            document.getElementById(t).innerText=++span;
            window.App.Likes(id,temp);
        }
    }
}
export default EventsHandler;