//DOM
const parentEl = document.querySelector('.parent');
// <div class="parent"> … </div>
const childEl = document.querySelector('.child');
const el = document.querySelector('.child');
// <div id="c1" class="child">사과</div>


// 노드: 요소의 모든 자식 노드를 확인
console.log(parentEl.childNodes);
// NodeList(11) [text, comment, text, div#c1.child, text, div.child, text, div.child, text, comment, text]

// 요소: 요소의 모든 자식 요소를 확인
console.log(parentEl.children);
// HTMLCollection(3) [div#c1.child, div.child, div.child, c1: div#c1.child]



// document.querySelector()
const nthEl = document.querySelector('.child:nth-child(1)');
console.log(nthEl); // <div id="c1" class="child">사과</div>



// document.querySelectorAll()
const nodeList = document.querySelectorAll('.child');
console.log(nodeList); // NodeList(3) [div#c1.child, div.child, div.child]
console.log(nodeList[0], nodeList[1], nodeList[2]);
/* <div id="c1" class="child">사과</div>
	<div class="child">바나나</div>
	<div class="child">체리</div> */

// .forEach() 메소드
nodeList.forEach((el, index) => console.log(index + 1, el));
// 1   <div id="c1" class="child">사과</div>
// 2   <div class="child">바나나</div>
// 3   <div class="child">체리</div>

// Array.from() 메소드
const nodes = Array.from(nodeList);
const names = nodes.map((el) => el.textContent);
console.log(nodes); // (3) [div#c1.child, div.child, div.child]

console.log(names); // (3) ['사과', '바나나', '체리']



// document.getElementById()
const idEl = document.getElementById('c1');
console.log(idEl); // <div id="c1" class="child">사과</div>

const selEl = document.querySelector('#c1');
console.log(selEl); // <div id="c1" class="child">사과</div>



// 노드.parentElement
// const childEl = document.querySelector('.child');
console.log(childEl); // <div id="c1" class="child">사과</div>
console.log(childEl.parentElement);
/* <div class="parent">
		<!-- 주석 1 -->
		<div id="c1" class="child">사과</div>
		<div class="child">바나나</div>
		<div class="child">체리</div>
		<!-- 주석 2 -->
		텍스트 1
		텍스트 2
	</div> */



// 요소.previousElementSibling
// 요소.nextElementSibling
// const childEl = document.querySelector('.child');
console.log(childEl.previousElementSibling); // null
console.log(childEl.nextElementSibling); // <div class="child">바나나</div>



// 요소.children
// 요소.firstElementChild
// 요소.lastElementChild
// const parentEl = document.querySelector('.parent');
console.log(parentEl.children); // HTMLCollection(3) [div#c1.child, div.child, div.child, c1: div#c1.child]
console.log(parentEl.children[parentEl.children.length - 1]); // <div class="child">체리</div>
console.log(parentEl.firstElementChild); // <div id="c1" class="child">사과</div>
console.log(parentEl.lastElementChild); // <div class="child">체리</div>



// document.createElement(태그이름)
// const divEl = document.createElement('div');
// divEl.textContent = 'Hello world!';
// divEl.classList.add('box');
// console.log(divEl); // <div class="box">Hello world!</div>

// const inputEl = document.createElement('input');
// inputEl.Value = 'Hello world!';
// console.log(inputEl); // <input>

// const buttonEl = document.createElement('button');
// buttonEl.textContent = 'Click!';
// console.log(buttonEl); // <button>Click!</button>

// // body 요소의 마지막 자식으로 삽입
// document.body.append(divEl, inputEl, buttonEl);



// 요소.prepend(노드1, 노드2, ...)
// 요소.append(노드1, 노드2, ...)
// 노드.appendChild(노드1)
// // const parentEl = document.querySelector('.parent');
// // const divEl = document.createElement('div');
// divEl.textContent = '새로운 요소!';
// // const inputEl = document.createElement('input');

// const res1 = parentEl.prepend(new Comment(' 새로운 주석! '));
// const res2 = parentEl.append(divEl, '또 다른 텍스트!');
// const res3 = (parentEl.appendChild(inputEl).placeholder = '값을 입력하세요');

// console.log(res1); // undefined
// console.log(res2); // undefined
// console.log(res3); // 값을 입력하세요



// 요소.remove()
// const removeEl = document.querySelector('.child');
// console.log(removeEl); // <div id="c1" class="child">사과</div>
// removeEl.remove();



// 노드.contains(노드)
// 대상노드.contains(주어진노드)
// = 나를 기준으로 이 노드가 자식인지 확인
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

console.log(parentEl.contains(childEl)); // true
console.log(document.body.contains(parentEl)); // true
console.log(document.body.contains(childEl)); // true
console.log(document.body.contains(document.body)); // true
console.log(parentEl.contains(parentEl)); // true
console.log(parentEl.contains(document.body)); // false
console.log(childEl.contains(document.body)); // false



// 노드.textContent
// const el = document.querySelector('.child');
console.log(el.textContent); // 사과

// el.textContent = '오렌지';
// console.log(el.textContent); // 오렌지



// 요소.innerHTML
// Get
// // const parentEl = document.querySelector('.parent');
// console.log(parentEl.innerHTML);
// /*
// 	<!-- 주석 1 -->
// 	<div id="c1" class="child">오렌지</div>
// 	<div class="child">바나나</div>
// 	<div class="child">체리</div>
// 	<!-- 주석 2 -->
// 	텍스트 1
// 	텍스트 2
// 	*/

// // Set
// parentEl.innerHTML = '<div class="child" style="font-size: 100px; color: yellow;">두리안</div>';
// console.log(parentEl.innerHTML);
// // <div class="child" style="font-size: 100px; color: yellow;">두리안</div>



// 요소.dataset

// 1번 예제
// const childEl = document.querySelector('.child');
const str = 'Hello world!';
const num = 123;
const obj = { a: 1, b: 2};

console.log(childEl.dataset); // DOMStringMap {} (하나의 요소(여기서는 .child 요소)에서 dataset은 객체 데이터임)

// 선택한 요소에 "data-" 속성을 추가하는 개념
childEl.dataset.helloWorld = str; // [HTML] data-hello-world="Hello world!"
childEl.dataset.number = num; // [HTML] data-number="123"
childEl.dataset.object = JSON.stringify(obj); // [HTML] data-object="{&quot;a&quot;:1,&quot;b&quot;:2}" (&quot; = ")
// <div id="c1" class="child" data-hello-world="Hello world!" data-number="123" data-object="{&quot;a&quot;:1,&quot;b&quot;:2}">사과</div>

console.log(childEl.dataset); // DOMStringMap {helloWorld: 'Hello world!', number: '123', object: '{"a":1,"b":2}'}

console.log(childEl.dataset.helloWorld); // 'Hello world!'
console.log(childEl.dataset.number); // '123'
console.log(JSON.parse(childEl.dataset.number)); // 123
console.log(childEl.dataset.object); // {"a":1,"b":2}
console.log(JSON.parse(childEl.dataset.object)); // {a: 1, b: 2}

// HTML 문서에서 직접 추가
console.log(childEl.dataset.abc); // 'ABC'
console.log(childEl.dataset); // DOMStringMap {abc: 'ABC', helloWorld: 'Hello world!', number: '123', object: '{"a":1,"b":2}'}

// 2번 예제
const users = [
	{name: 'Neo', age: 22, job: 'Engineer'},
	{name: 'Evan', age: 48, job: 'Designer'},
	{name: 'Lewis', age: 37, job: 'Developer'},
];
const userEls = users.map(user => {
	const divEl = document.createElement('div');
	divEl.classList.add('userInfo');
	divEl.textContent = `${user.name}, ${user.job}, ${user.age}`;
	divEl.dataset.age = user.age;
	return divEl;
	// <div data-age="22">Neo, Engineer, 22</div>
	// <div data-age="48">Evan, Designer, 48</div>
	// <div data-age="37">Lewis, Developer, 37</div>
});

document.querySelector('.parent').append(...userEls);

console.log(document.querySelector('.userInfo:nth-child(6)').dataset.age);
// const userInfos = document.querySelectorAll('.userInfo');
// console.log(userInfos[2].dataset.age);
// 37



// 요소.classList

// const el = document.querySelector('.child');
/* 
el.classList.add('active');
console.log(el.classList.contains('active')); // true

el.classList.remove('active');
console.log(el.classList.contains('active')); // false

el.addEventListener('click', () => {
	el.classList.toggle('active'); // 클릭할때마다 active 클래스가 생겼다가 없어졌다가 함
	console.log(el.classList.contains('active')); // 클릭할때 마다 active 클래스가 생기면 true를 반환하고, 없어지면 false를 반환함
});
 */


// 요소.style

// const el = document.querySelector('.child');
/* 
// 개별 지정
el.style.width = '100px';
el.style.fontSize = '20px';
el.style.backgroundColor = 'green';
el.style.position = 'relative';
el.style.marginBottom = '30px';

// 한번에 지정
Object.assign(el.style, {
	width: '200px',
	fontSize: '30px',
	backgroundColor: 'blue',
	position: 'relative',
	marginBottom: '20px',
});

console.log(el.style); // CSSStyleDeclaration {0: 'width', 1: 'font-size', 2: 'background-color', 3: 'position', 4: 'margin-bottom', accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
console.log(el.style.width); // 200px
console.log(el.style.fontSize); // 30px
console.log(el.style.backgroundColor); // blue
console.log(el.style.position); // relative
console.log(el.style.marginBottom); // 20px

// 이벤트 발생시 스타일 변경하기
el.style.backgroundColor = 'yellow';
el.style.width = '100px';
el.style.transition = '0.5s';

el.addEventListener('click', () => {
	const lengthen = Number.parseInt(el.style.width, 10); // 10진수 정수로 만들어 lengthen 변수에 할당 (100px => 100)
	el.style.width = `${lengthen + 50}px`; // 클릭할때마다 가로 길이를 50px씩 할당하여 늘리겠다는 의미
});
 */



// 요소.getAttribute(속성)
// 요소.setAttribute(속성, 값)
// 요소.hasAttribute(속성)
// 요소.removeAttribute(속성)

// <div id="c1" class="child" title="Apple" data-abc="ABC">
// div 태그 안의 id, class, title, data- 등등의 속성
/* 
// 속성의 값 확인
console.log(el.getAttribute('class')); // child
console.log(el.getAttribute('title')); // null

// 속성과 값 지정(추가)
el.setAttribute('title', 'Apple'); // title="Apple"
el.setAttribute('class', 'hell world'); // class="hell world"

// 속성 유무 확인
console.log(el.hasAttribute('class')); // true
console.log(el.hasAttribute('title')); // true
console.log(el.hasAttribute('value')); // false

// 속성 삭제
el.removeAttribute('class');
el.removeAttribute('title');
el.removeAttribute('data-abc');
 */



// window.innerWidth
// window.innerHeight
//  window.scrollX
//  window.scrollY

console.log(window.innerWidth); // 480 (브라우저 창 크기마다 다르게 나옴)
console.log(window.innerHeight); // 862 (브라우저 창 크기마다 다르게 나옴)

console.log('scroll X :', Number.parseInt(window.scrollX)); // scroll X : 0 (페이지 첫 로드 위치)
console.log('scroll Y :', Number.parseInt(window.scrollY)); // scroll Y : 0 (페이지 첫 로드 위치)

window.addEventListener('scroll', () => {
	// console.log(window.scrollY);
	console.log(Number.parseInt(window.scrollY));
	// 스크롤 할때마다 Y축 값이 정수로 반환되어 콘솔에 출력됨
});



// window.scrollTo() & 요소.scrollTo()
/* 
대상.scrollTo(X좌표, Y좌표) 
대상.scrollTo({ 
	left: X좌표,
	top: Y좌표,
	behavior: 'smooth',
});
*/
/* 
// 2초 뒤에 지정된 좌표로 페이지 스크롤
setTimeout(() => {
	window.scrollTo(50, 300);
	window.scrollTo({
		left: 100,
		top: 200,
		behavior: 'smooth',
	});
}, 2000);

// '사과' child 요소 클릭시 지정한 요소 또는 화면을 지정된 좌표로 스크롤
// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');
childEl.addEventListener('click', () => {
	parentEl.scrollTo({
		left: 0,
		top: 200,
		behavior: 'smooth',
	});
	// window.scrollTo({
	// 	left: 0,
	// 	top: 200,
	// 	behavior: 'smooth',
	// });
});
*/



// 요소.offsetWidth
// 요소.offsetHeight
// 요소.clientWidth
// 요소.clientHeight
// 요소.scrollWidth
// 요소.scrollHeight

// const parentEl = document.querySelector('.parent');
// const childEl = document.querySelector('.child');

// 테두리 선을 "포함"한 요소의 가로, 세로 값
console.log(parentEl.offsetWidth, parentEl.offsetHeight); // 360 260
console.log(childEl.offsetWidth, childEl.offsetHeight); // 300 120

// 테두리 선을 "제외"한 요소의 가로, 세로 값
console.log(parentEl.clientWidth, parentEl.clientHeight); // 340 240
console.log(childEl.clientWidth, childEl.clientHeight); // 280 100

// 테두리 선을 "제외"한 요소의 스크롤 영역에 대한 가로, 세로 값
console.log(parentEl.scrollWidth, parentEl.scrollHeight); // 340 536
console.log(childEl.scrollWidth, childEl.scrollHeight); // 280 100
// parentEl 요소는 세로만 스크롤되어 가로값은 clientWidth 메소드와 동일
// childEl 요소는 스크롤되지 않아 가로, 세로값이 clientWidth 메소드와 동일