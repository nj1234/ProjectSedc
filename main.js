
import App from './App/app.js';
import EventsHandler from './Events/EventHandler.js';

const Application = new App;
const evn=new EventsHandler(Application);
window.App.Run();
