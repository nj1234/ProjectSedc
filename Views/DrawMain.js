const main=document.getElementsByTagName('main')[0];

class DrawMain{
    constructor(){
       
    }
    DrawLates(data) {  
       
        clearMain();
        main.appendChild( DrawSection("News",data));
    }
    DrawEvents(data){
        clearMain();
        main.appendChild( DrawSection("Events",data));
        
    }
    DrawAdds(){
        main.innerHTML=`some msg from test`;
    }
    HomePage(data){
        console.log(data[0]);
        
        clearMain();
        main.appendChild( DrawSection("News",data[0]));
        main.appendChild( DrawSection("Events",data[1]));
    }
    
}

export default DrawMain;

//test functions
function DrawSection(title,data){
    console.log("draw section");
    let div=document.createElement('div');
    let h2=document.createElement('h2');
    h2.innerHTML=title;
    div.appendChild(h2);
    if(title =="News"){
        
        div.appendChild(drawCards(data,true));
       
    }else{
        div.appendChild(drawCards(data,false));
        
    }
    
   return div;
}

function clearMain(){
    main.innerHTML=``;
}

function drawCards(data,t=false){
    let div=document.createElement('div');
    div.setAttribute('class','container');
    for(let i=0;i<data.length;i++){
       
       div.innerHTML+=CreateCard(data[i],t);
       console.log(div);
    }
    return div;
}

function CreateCard(data,t){
    
    if(t){
        //news card
    return `<div class="card">
                     <div>
                      <a target="_blank" href="${data.URL}">
                        <img src="${data.image}" alt="..." />
                       </a>
                     </div>
                     <h2>${data.title}</h2>
                     <p>${data.Description}</p>
                     <h3>${data.Date}</h3>
                     <a target="_blank" href="${data.URL}">read more</a>
                     <div>
                      <div>
                        <button onclick="Like(${data.newsId})">Like </button>
                        <span id="like${data.newsId}">${data.thumbsUp}</span>
                       </div>
                       <div>
                        <button onclick="DisLike(${data.newsId})">DisLike </button>
                        <span id="dislike${data.newsId}">${data.thumbsDown}</span>
                       </div>
                     </div>        
            </div> `;
    }
    
    //event card
    return `<div class="card">
                  <div>
                      <img  src="${data.image}" alt="image is not found" />
                  <div>
                  <h2>${data.title}</h2>
                  <p>${data.Description}</p>
                  <h3>${data.Date}</h3>
                  <a target="_blank" href="${data.URL}">read more</a>
            </div> `; 
};

