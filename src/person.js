
// Without Arrow function
function Person() {
    this.age = 0;
    // Simulation. 2 second is one year!!
    setInterval(function growUp() {
        self.age++;
    }, 2000);
}

var p = new Person();

// Simulation. Ask every half years how old are you!!
setInterval(function () {
    console.log(p.age);
}, 1000); 
