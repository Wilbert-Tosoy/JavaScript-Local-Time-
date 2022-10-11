setInterval(() => {
    const DT = new Date();

    document.getElementById("lt").innerHTML = DT.toLocaleTimeString();
}, 100);