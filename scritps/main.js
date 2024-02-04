//Buttons
const buttonCriptografar = document.querySelector('button:nth-child(1)');
const buttonDescriptografar = document.querySelector('button:nth-child(2)');
const buttonCopiar = document.querySelector('.views-section-true button');

//Texts
const textArea = document.querySelector('textarea');
const spanSectionTrue = document.querySelector('.views-section-true span');

//Sections
const section = document.querySelector('.views-section');
const sectionTrue = document.querySelector('.views-section-true');

buttonCriptografar.addEventListener('click', () => {
  if (!(textArea.value === '')) {
    if (sectionTrue.classList.contains('hide')) {
      toggleSection();
    }

    spanSectionTrue.textContent = criptografar(textArea.value);
  } else if (textArea.value === '') {
    toggleSection();
  }
});

buttonDescriptografar.addEventListener('click', () => {
  if (!(textArea.value === '')) {
    if (sectionTrue.classList.contains('hide')) {
      toggleSection();
    }

    spanSectionTrue.textContent = descriptografar(textArea.value);
  }
});

buttonCopiar.addEventListener('click', () => {
  navigator.clipboard.writeText(spanSectionTrue.textContent);
  alert('Copiado');
});

function toggleSection() {
  section.classList.toggle('hide');
  sectionTrue.classList.toggle('hide');
}

function criptografar(texto) {
  const substituicoes = {
    e: 'enter',
    i: 'imes',
    a: 'ai',
    o: 'ober',
    u: 'ufat',
  };

  const caracteres = texto.split('');

  const textoCriptografado = caracteres.map((caractere) => {
    if (substituicoes.hasOwnProperty(caractere)) {
      return substituicoes[caractere];
    } else {
      return caractere;
    }
  });

  return textoCriptografado.join('');
}

function descriptografar(textoCriptografado) {
  const substituicoes = {
    enter: 'e',
    imes: 'i',
    ai: 'a',
    ober: 'o',
    ufat: 'u',
  };

  const palavrasCriptografadas = textoCriptografado.split(' ');

  const textoDescriptografado = palavrasCriptografadas.map((palavra) => {
    const letrasCriptografadas = palavra.match(/[^ ]+/g); // Ignora espaços
    const letrasDescriptografadas = letrasCriptografadas.map(
      (letraCriptografada) => {
        if (substituicoes.hasOwnProperty(letraCriptografada)) {
          return substituicoes[letraCriptografada];
        } else {
          return letraCriptografada;
        }
      },
    );
    return letrasDescriptografadas.join('');
  });

  return textoDescriptografado.join(' ');
}
