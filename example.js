const quotes = {
    'Ha! Death trap!!': {
        'Test Chamber 75': [
            '[Chapter 9] Wheatley: "Hold on, hold on, hold on... Almost there..."',
            '"Don\'t mind me. Continue escaping."</li>'
        ],}};

const parent = document.getElementById('spam');
var some_value

//1st option
var html_str = '';
for (let line in quotes['Ha! Death trap!!']['Test Chamber 75']) {
    html_str += `<li data-num="${some_value}"` + line + '</li>';
};
parent.innerHTML = html_str;


//2nd option
for (let line in quotes['Ha! Death trap!!']['Test Chamber 75']) {
    parent.appendChild(document.createElement('li'))
    //add inner text
    //add custom data attribute
};