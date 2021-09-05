class ContextMenu {
  constructor( x = 0, y = 0, buttons = ["Действие"] ){
    this.context = document.createElement("div");
    let context = this.context;

    this.promise = new Promise( res => this.promiseResolve = res );

    context.classList.add("context-menu");
    buttons.forEach(button => {
      let element = document.createElement("div");
      element.textContent = button;
      context.append(element);
    });

    context.style.left = `${x}px`;
    context.style.top  = `${y}px`;

    document.body.append(context);
    document.body.addEventListener("click", e => this.clicked(e), {once: true});
  }

  clicked(e){
    let target = e.target;
    this.context.remove();

    let item = null;

    if (target.parentElement === this.context){
      item = target.textContent;
    }

    this.promiseResolve( item );
  }

  async awaitClick(){
    return this.promise;
  }
}
