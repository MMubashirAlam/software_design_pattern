class TextEditor {
    constructor() {
      this.text = "";
    }
  
    addText(text) {
      this.text += text;
    }
  
    getText() {
      return this.text;
    }
  
    createMemento() {
      return new Memento(this.text);
    }
  
    restoreFromMemento(memento) {
      this.text = memento.getState();
    }
  }
  
  class Memento {
    constructor(state) {
      this.state = state;
    }
  
    getState() {
      return this.state;
    }
  }
  
  class History {
    constructor() {
      this.mementos = [];
    }
  
    addMemento(memento) {
      this.mementos.push(memento);
    }
  
    getMemento(index) {
      return this.mementos[index];
    }
  }
  
  const textEditor = new TextEditor();
  const history = new History();
  
  textEditor.addText("This is the first sentence. ");
  history.addMemento(textEditor.createMemento());
  
  textEditor.addText("This is the second sentence. ");
  history.addMemento(textEditor.createMemento());
  
  textEditor.addText("This is the third sentence. ");
  history.addMemento(textEditor.createMemento());
  
  console.log("Current Text: " + textEditor.getText());
  
  textEditor.restoreFromMemento(history.getMemento(1));
  console.log("After Undo: " + textEditor.getText());
  
