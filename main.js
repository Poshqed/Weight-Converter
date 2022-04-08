//assign a name to the input
let lbs = document.getElementById('poundInput');


//assign a name to the grab the entire output
let output = document.getElementById('output')


// hide the output
output.style.visibility = 'hidden'


//add an event listener - input
lbs.addEventListener('input', inputValue);


//get the value of input and make output visible when event starts
function inputValue(e) {
    output.style.visibility = 'visible'
    const result = e.target.value;

    // assign a name to other conversions and their parameter for conversion
    let Grams = document.getElementById('gramsId').innerHTML = result / 0.0022046;
    Ounce = document.getElementById('ounceId').innerHTML = result * 16;
    Tonne = document.getElementById('tonneId').innerHTML = result / 2204.62;
}
