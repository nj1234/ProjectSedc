
import App from './App/app.js';
import EventsHandler from './Events/EventHandler.js';


const Application = new App;

window.App=Application;
const evn=new EventsHandler(Application);
window.App.Run();
