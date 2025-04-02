document.addEventListener('DOMContentLoaded', () => {
  const encryptedElem = document.getElementById('encrypted');
  // Зашифрованная фраза "Cogito, ergo sum" с использованием шифра Цезаря со сдвигом +3
  const encryptedText = 'Frjlwr, hujr vxp';
  encryptedElem.textContent = encryptedText;
});

function decryptText() {
  const encryptedElem = document.getElementById('encrypted');
  const encryptedText = encryptedElem.textContent;
  const shift = 3;
  let decryptedText = '';

  for (let i = 0; i < encryptedText.length; i++) {
    const char = encryptedText[i];
    let code = encryptedText.charCodeAt(i);

    // Расшифровка для латинских заглавных букв
    if (code >= 65 && code <= 90) {
      code = ((code - 65 - shift + 26) % 26) + 65;
      decryptedText += String.fromCharCode(code);
    }
    // Расшифровка для латинских строчных букв
    else if (code >= 97 && code <= 122) {
      code = ((code - 97 - shift + 26) % 26) + 97;
      decryptedText += String.fromCharCode(code);
    }
    // Символы без изменений
    else {
      decryptedText += char;
    }
  }

  // Ожидаемый правильный результат
  const correctPhrase = "Cogito, ergo sum";

  // Обновляем содержимое элемента и устанавливаем нужный класс
  encryptedElem.textContent = decryptedText;
  if (decryptedText === correctPhrase) {
    encryptedElem.classList.remove('incorrect');
    encryptedElem.classList.add('correct');
  } else {
    encryptedElem.classList.remove('correct');
    encryptedElem.classList.add('incorrect');
  }
}
