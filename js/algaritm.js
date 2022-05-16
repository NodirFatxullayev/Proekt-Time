
// let x = 0;
// setInterval(displayHello, 2000);

// function displayHello() {
//     ++x;
//     const para = document.createElement("div");
//     para.innerText = "This is a paragraph" + `${x}`;
//     para.classList.add("box");
//     document.body.appendChild(para);
//     setInterval(function(){ para.remove()}, 2800);
// }

setInterval(secund, 1000);

function secund() {
    const secund = document.createElement("div");
    secund.innerText = new Date().getSeconds();
    document.getElementById("secund").appendChild(secund);
    setInterval(function(){secund.remove()}, 1500);

    
    if(new Date().getSeconds() < 1) {
        const minut = document.createElement("div");
        minut.innerText = new Date().getMinutes();
        document.getElementById("minut").appendChild(minut);
    }
    if(new Date().getMinutes() < 1) {
        const hour = document.createElement("div");
        hour.innerText = new Date().getHours();
        document.getElementById("hour").appendChild(hour);
    }
}
