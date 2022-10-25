// go to google.com and paste this in the console

const fakeSearch = (
  event,
) => {
  // when enter is pressed load the fake search
  if (event.key === 'Enter') {
    window.open("https://www.google.com/search?q=epic+fail");
  }
}

// search for the input with a selection (inspect > copy > copy selection)
let selection = document.getSelection('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');

// proceed if valid
if (selection !== null) {

  // get the actual html element from the selection
  actualElement = selection.focusNode;

  // proceed if valid
  if (actualElement !== null) {

    // make a clone of that element (it will have none of the eventlisteners)
    let newinput = actualElement.cloneNode(true);

    // replace the original element with the clone
    actualElement.replaceWith(newinput);

    // add a keypress eventlistener to the new input
    newinput.addEventListener('keypress', fakeSearch);
  }
}

// hide the evidence
console.clear();

