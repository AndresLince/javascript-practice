let harry = "potter";
let lotr = "frodo";
let orwell = "1984";
let lines = [
    harry,
    lotr,
    orwell
]

/*
function buildHTML(tags, lines) {
    return lines.map(function(line) {
        return `${tags[0]}${line}${tags[1]}`;
    });
}

const result = buildHTML`<li>${lines}</li>`;
console.log(result);
document.querySelector('#quotes').innerHTML = result; */
/*
const placeHtml = buildHTML`<li>${lines}</li>`;
placeHtml('#quotes');

function buildHTML(tags, lines) {
    return function(element) {
        const newHtml = lines.map(function(line) {
            return `${tags[0]}${line}${tags[1]}`;
        });
        const finalHtml = newHtml.join('');
        document.querySelector(element).innerHTML = finalHtml;
    }
}*/

function testFunction() {
    return "Hello, from testFunction!";
}

const templateLiteralCallback = `Rob Jim Bill ${() => testFunction()}`;
console.log(templateLiteralCallback);

function taggedCallBack(strings, func) {
    return strings[0] + func();
}

const taggedLiteralCallback = taggedCallBack`Rob Jim Bill ${() => testFunction()}`;
console.log(taggedLiteralCallback);
