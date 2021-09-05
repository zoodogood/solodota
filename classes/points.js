class PointsClass {
  constructor( app ){
    this.points = [ HelloPointClass, WhitePointClass, PudgePointClass, NigmaPointClass, DDOSPointClass ];
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
    this.app.pointSetions[1].classList.add("handled");
  }
}


class PudgePointClass {
  constructor(app){
    this.app = app;
  }

  handle(){
    this.app.contextMenu = ["Призвать Пуджа", "БЛЕКХОЛ, БРАТИШЬ\nБЛЕКХОЛ"];
    this.app.invertScroll = true;
  }
}


class NigmaPointClass {
  constructor(app){
    this.app = app;
  }

  handle(){

  }
}


class DDOSPointClass {
  constructor(app){
    this.app = app;
  }

  async handle(){
    await delay(350);
    this.app.pointSetions[ 4 ].classList.add("handled");
    await delay(1400);

    for (let i = 0; i < 5; i++){
      Alert.create(`${"d".repeat( random(1, 20) )}-${"d".repeat( random(1, 20) )}-${"o".repeat( random(1, 20) )}-${"s".repeat( random(1, 20) )}`, "warning", "Полезная информация:");
      await delay(1200);
    }

    await delay(3000);
    Alert.create(`Дудос успешно отражен.`, "success", "Вас Приветсвует Ваш антивирус, какой бы вы там не использовали, даже если он — Ваша микроволновка");
  }
}
