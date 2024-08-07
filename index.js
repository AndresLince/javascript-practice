let harry = "potter";
let lotr = "frodo";
let orwell = "1984";
let lines = [
    harry,
    lotr,
    orwell
]

function buildHTML(strings, expr) {
    console.log(strings);
    console.log(expr);
}

const result = buildHTML`<li>${lines}</li>`;