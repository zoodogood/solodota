class App {
  constructor(){
    this.maxPosition = 0;
    this.pointsCount = document.body.clientHeight / window.innerHeight;

    this.points = new PointsClass( this );
  }

  checkPosition(){
    let position = app.getPostion();
    console.log(position);
    if ( position > app.maxPosition ){
    }

  }

  getPostion(){
    return Math.ceil( (window.scrollY) / window.innerHeight );
  }
}


import { PointsClass } from "classes/points.js";



const app = new App();
// const



document.body.addEventListener("wheel", async e => {
  e.preventDefault();
  let position = app.getPostion();

  if ( app.scrollDelay > Date.now() ){
    return;
  }

  let invert = app.invertScroll ? -1 : 1;
  let freeze = app.freezeScroll ?  0 : 1;

  let delta = Math.sign( e.deltaY ) * invert * freeze * window.innerHeight;

  // Если мы находимся в самом начале или конце страницы, завершить скролл
  if ( position === 0 && delta < 0 ){
    return;
  }

  if ( position === this.pointsCount && delta > 0 ){
    return;
  }


  window.scrollBy({ behavior: "smooth", top: delta });
  app.scrollDelay = Date.now() + 500;
}, {passive: false});


document.body.addEventListener("contextmenu", async e => {
  console.log(e);
  e.preventDefault();
});
