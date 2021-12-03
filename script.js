const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const palindrome = () => {
  const word = document.querySelector('.input-text').value.trim();

  let len = word.length;

  let first = word.substring(0, Math.floor(len / 2)).toLowerCase();

  let last = word.substring(len - Math.floor(len / 2)).toLowerCase();

  let flip = last.split('').reverse().join('');

  if (first == flip) {
    result.innerHTML = `${word.toUpperCase()} is a Palindrome`;
    result.style.color = 'green';
  } else {
    result.innerHTML = `${word.toUpperCase()} is  not a Palindrome`;
    result.style.color = 'red';
  }
};

btn.addEventListener('click', palindrome);
