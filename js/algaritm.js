
document.getElementById("minut").innerText = new Date().getMinutes();
document.getElementById("hour").innerText = new Date().getHours();
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
