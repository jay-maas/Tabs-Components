class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector(".dropdown-button");
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector(".dropdown-content");
    // Add a click handler to the button reference and call the toggleContent method.
    this.body = document.querySelector("body");
    
    this.toggleContent = this.toggleContent.bind(this);
    this.button.addEventListener('click', this.toggleContent)
    this.body.addEventListener('click', ()=>{
      if (this.content.style.top ===0+"px") {
        toggleContent();
      }
    })
  }
  toggleContent() {
    //This function houses my animations and uses an if statement to activate the corresponding animation
    if (this.content.style.top === -110+"px") {
      TweenMax.to(this.content, 1, {top:60});
    } else {
      TweenMax.to(this.content, 1, {top:-110});
    }
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));



