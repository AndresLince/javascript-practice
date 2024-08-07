let harry = "potter";
let lotr = "frodo";
let orwell = "1984";
let lines = [
    harry,
    lotr,
    orwell
]

function buildHTML(tags, lines) {
    return lines.map(function(line) {
        return `${tags[0]}${line}${tags[1]}`;
    });
}

const result = buildHTML`<li>${lines}</li>`;
console.log(result);
document.querySelector('#quotes').innerHTML = result;
