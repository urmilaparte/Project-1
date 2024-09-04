

const body = document.body
body.style.display = "flex";
body.style.justifyContent = "center";

const div = document.createElement("div")
div.style.backgroundColor = 'black'
div.style.backgroundSize = "cover";
div.style.height = "700px";
div.style.width = "500px";
div.style.borderRadius = "12px";
div.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
div.style.overflow = "hidden";


body.appendChild(div)

const h1 = document.createElement("h1");
h1.innerText = "Chit - Chat";
h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.color = "yellow";
h1.style.backgroundColor = "blue";
h1.style.fontSize = "20px";
h1.style.fontFamily = "cursive";
h1.style.fontWeight = "bold";
h1.style.padding = "15px"
div.appendChild(h1)


const div1 = document.createElement("div");
div1.style.padding = "14px";
div1.style.color = "dark black";
div1.style.fontFamily = "Roboto";
div1.style.fontSize = "15px";
div1.style.flexDirection = "column";
div1.style.gap = "10px";
div1.style.height = "100%";
div.appendChild(div1)

const p1 = document.createElement("p");
p1.textContent = "Hello,how are you?";
p1.classList = "text-sent";
p1.style.backgroundColor = "yellow";
p1.style.padding = "12px";
p1.style.borderTopLeftRadius = "12px";
p1.style.borderTopRightRadius = "12px";
p1.style.borderBottomLeftRadius = "12px";
p1.style.textAlign = "right";
div1.appendChild(p1);



const p2 = document.createElement("p");
p2.textContent = "Hi bunny, I am good. How are you?";
p2.classList = "text-rec";
p2.style.backgroundColor = "green";
p2.style.padding = "12px";
p2.style.borderTopLeftRadius = "12px";
p2.style.borderTopRightRadius = "12px";
p2.style.borderBottomRightRadius = "12px";
p2.style.textAlign = "left";
div1.appendChild(p2);


const p3 = document.createElement("p");
p3.textContent = "I'am fine.I am learning HTML and CSS";
p3.classList = "text-sent";
p3.style.backgroundColor = "yellow";
p3.style.padding = "12px";
p3.style.borderTopLeftRadius = "12px";
p3.style.borderTopRightRadius = "12px";
p3.style.borderBottomLeftRadius = "12px";
p3.style.textAlign = "right";
div1.appendChild(p3);



const p4 = document.createElement("p");
p4.textContent = "HTML and CSS?";
p4.classList = "text-rec";
p4.style.backgroundColor = "green";
p4.style.padding = "12px";
p4.style.borderTopLeftRadius = "12px";
p4.style.borderTopRightRadius = "12px";
p4.style.borderBottomRightRadius = "12px";
p4.style.textAlign = "left";
div1.appendChild(p4)



const p5 = document.createElement("p");
p5.textContent = "Yes , by doing projects parellelly , i am learning it.";
p5.classList = "text-sent";
p5.style.backgroundColor = "yellow";
p5.style.padding = "12px";
p5.style.borderTopLeftRadius = "12px";
p5.style.borderTopRightRadius = "12px";
p5.style.borderBottomLeftRadius = "12px";
p5.style.textAlign = "right";
div1.appendChild(p5);


const p6 = document.createElement("p");
p6.textContent = "Awesome , can you tell how are learning it";
p6.classList = "text-rec";
p6.style.backgroundColor = "green";
p6.style.padding = "12px";
p6.style.borderTopLeftRadius = "12px";
p6.style.borderTopRightRadius = "12px";
p6.style.borderBottomRightRadius = "12px";
p6.style.textAlign = "left";
div1.appendChild(p6)


const p7 = document.createElement("p");
p7.textContent = "Can i call you?";
p7.classList = "text-sent";
p7.style.backgroundColor = "yellow";
p7.style.padding = "12px";
p7.style.borderTopLeftRadius = "12px";
p7.style.borderTopRightRadius = "12px";
p7.style.borderBottomLeftRadius = "12px";
p7.style.textAlign = "right";
div1.appendChild(p7);



const p8 = document.createElement('p8');
p8.textContent = 'No I am busy';
p8.classList = 'text-rec';
p8.style.backgroundColor = 'green';
p8.style.padding = '12px';
p8.style.borderTopLeftRadius = '12px';
p8.style.borderTopRightRadius= '12px';
p8.style.borderBottomRightRadius = '12px';
p8.style.textAlign = "left";

div1.appendChild(p8)


