class DrawingTool {
    constructor(drawingImplementor) {
      this.drawingImplementor = drawingImplementor;
    }
  
    draw() {
      this.drawingImplementor.draw();
    }
  }
  
  class DrawingImplementor {
    draw() {
      console.log("Drawing something");
    }
  }
  
  class Pen extends DrawingImplementor {
    draw() {
      console.log("Drawing with a pen");
    }
  }
  
  class Brush extends DrawingImplementor {
    draw() {
      console.log("Drawing with a brush");
    }
  }
  
  const penTool = new DrawingTool(new Pen());
  const brushTool = new DrawingTool(new Brush());
  
  penTool.draw();   
  brushTool.draw(); 