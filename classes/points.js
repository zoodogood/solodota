class PointsClass {
  constructor( app ){
    this.points = [ HelloPointClass, WhitePointClass, PudgePointClass, NigmaPointClass ];
  }

  run( index = 0 ){
    let Point = this.points[ index ];
    new Point(app).handle();
  }
}


class HelloPointClass {
  constructor(app){
    this.app = app;
  }

  handle(){

  }
}

class WhitePointClass {
  constructor(app){
    this.app = app;
  }

  async handle(){
    await delay(350);
    this.app.pointSetions[0].classList.add("handled");
  }
}


class PudgePointClass {
  constructor(app){
    this.app = app;
  }

  handle(){
    this.app.contextMenu = ["Призвать пуджа", "БЛЕКХОЛ, БРАТИШЬ\nБЛЕКХОЛ"];
    this.app.invertScroll = true;
  }
}


class NigmaPointClass {
  constructor(app){
    this.app = app;
  }

  handle(){
    this.app.contextMenu = ["Призвать пуджа", "БЛЕКХОЛ, БРАТИШЬ\nБЛЕКХОЛ"];
    this.app.invertScroll = true;
  }
}
