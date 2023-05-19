class notepad{

  constructor(){
    this.cursor = 0;
    this.input = '';
  }
  
  addText(text){
    if (typeof text === 'number') {
      const character = String.fromCharCode(text);
      this.input = this.input.slice(0, this.cursor) + character + this.input.slice(this.cursor);
      this.cursor++;
    } else {
      throw new Error("only numbers (ASCII codes) are allowed.");
    }
  }

  delete() {
    if (this.cursor > 1) {
      this.input = this.input.slice(0, this.cursor - 1) + this.input.slice(this.cursor);
      this.cursor--;
    }
    
  } 

  moveLeft(){
    if (this.cursor > 0) {
      this.cursor--;
    }
  }
  moveRight(){
    if (this.cursor < this.input.length) {
      this.cursor++;
    }
  }

  enter(){
    if(this.input.length > 0 && this.input.length < 2) {
      console.log(`"Deleted"`);
    } else if (this.input.length === 0){
      console.error(`"Delete Error"`);
    } else {
      console.log('"' + this.input + '"');
    }
    this.input = '';
    this.cursor = 0;
    
  }
}

  const res = new notepad()
    res.addText(72)
    res.addText(101)
    res.addText(108)
    res.addText(112)
    res.addText(115)
    res.moveLeft()
    res.delete()
    res.addText(108)
    res.addText(111)
    res.moveRight()
    res.delete()
    res.enter()
    
    res.delete()
    res.enter()

    res.addText(83)//"S"
    res.addText(32)//"*Space*"
    res.delete()
    res.enter()

    res.addText(83)//S
    res.addText(107)//k
    res.addText(100)//d
    res.moveLeft()
    //Sk|d
    res.addText(105)//i
    res.enter()

    res.addText(83)
    res.addText(107)
    res.addText(101)
    res.moveLeft()
    res.addText(105)
    res.moveRight()
    res.addText(115)
    res.enter()
