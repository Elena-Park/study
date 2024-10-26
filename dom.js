// document.querySelector()
const el = document.querySelector('.child:nth-child(1)');
console.log(el);

// document.querySelectorAll()
const nodeList = document.querySelectorAll('.child');
console.log(nodeList);
console.log(nodeList[0], nodeList[1], nodeList[2]);

nodeList.forEach((el, index) => console.log(index + 1, el));

const nodes = Array.from(nodeList);
const names = nodes.map((el) => el.textContent);
console.log(nodes);

console.log(names);
