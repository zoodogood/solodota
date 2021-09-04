class App {
  constructor(){
    this.maxScroll = 0;
  }
}


const app = new App();


document.body.addEventListener("wheel", e => {
  e.preventDefault();

  if ( app.scrollDelay > Date.now() ){
    return;
  }

  let invert = app.invertScroll ? -1 : 1;
  let freeze = app.freezeScroll ?  0 : 1;

  let delta = Math.sign( e.deltaY ) * invert * freeze * window.innerHeight;
  window.scrollBy({ behavior: "smooth", top: delta });

  app.scrollDelay = Date.now() + 480;
}, {passive: false});
