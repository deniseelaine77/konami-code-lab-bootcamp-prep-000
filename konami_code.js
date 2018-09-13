const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  // your code here
  document.body.addEventListener('keydown', function(event){
    let index = 0;
      const key = event.key;
      if (key === codes[index]){
        key.push(event.key)
        index++;
        if (index === codes.length) {
          alert("Hurray!");
          index = 0;
        }
      }else {
        index = 0;
    } 
})
}
