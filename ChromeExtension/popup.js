let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener('click', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  console.log();
  // eslint-disable-next-line no-undef
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: relaxButton,
  });
});
 

// The body of this function will be executed as a content script inside the
// current page
function relaxButton() {
  // chrome.storage.sync.get("color", ({ color }) => {
  //   document.body.style.backgroundColor = color;
  // });
  //opens a new window with url assigned to it --self replaces the current window
  

  var myWindow = window.open('', '_self');
  myWindow.document.write('<p>Take a breather.</p>');
  myWindow.document.body.style = `
  color: red;
  height: 500px;
  width: 700px;
  border: 2px solid black;
`;

  const bodyDiv = window.document.createElement('div');
  bodyDiv.style = `
    color: red;
    height: 100px;
    width: 100px;
`;
  window.document.body.appendChild(bodyDiv);
  bodyDiv.innerHTML = 'video here';

  //image testing
  
  
}