const noEncrypted = document.getElementById('no-encrypted');
const encrypted = document.getElementById('encrypted');

function encrypt() {
  noEncrypted.classList.remove('no-encrypted-active');
  encrypted.classList.add('encrypted-active')
}

function decrypt() {
    noEncrypted.classList.remove('no-encrypted-active');
    encrypted.classList.add('encrypted-active')
}
