class App {
  constructor(){
    this.maxPosition  = 0;
    this.pointsCount  = document.body.clientHeight / window.innerHeight;
    this.pointSetions = [...document.body.children].filter(element => element.nodeName === "SECTION");

    this.points = new PointsClass( this );
  }

  async checkPosition(){
    await delay(50);
    let position = app.getPostion();

    if ( position > app.maxPosition ){
      this.points.run( position );
      app.maxPosition = position;
    }
  }

  getPostion(){
    return Math.ceil( (window.scrollY) / window.innerHeight );
  }
}



const app = new App();



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
  app.checkPosition();
}, {passive: false});


document.body.addEventListener("contextmenu", async e => {
  e.preventDefault();

  if ( !app.contextMenu ){
    return;
  }

  let click = await new ContextMenu( e.pageX, e.pageY, app.contextMenu ).awaitClick();

  if (click === null){
    return;
  }

  if (click === "БЛЕКХОЛ, БРАТИШЬ\nБЛЕКХОЛ"){
    window.scroll({top: 0});
    app.freezeScroll = true;

    for ( let point of app.pointSetions ){
      await delay(150);

      let transform = ["scale(0.2)", "scale(0.5)", "scale(0.7)", "translate(10px, 10px)", "rotate3d(1, 1, 1, 360deg)", "rotate(360deg)"].random();
      point.style.transform = transform;

      await delay(900);
      point.style.transform = "translate(100vw, 0px)";
      await delay(300);
      point.remove();
    }

    Alert.create("<h1>Вселенная была успешно уничтожена</h1>... <i>(трое-точие)</i>", "error", "Произошла ошибка");
    return;
  }

  if (click === "Призвать Пуджа"){
    alert("Не удалось призвать пуджа");

  }
});

window.scroll({top: 0, behavior: "smooth"});
