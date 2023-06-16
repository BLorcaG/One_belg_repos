function encriptarTexto(texto) {
  let textoEncriptado = "";
  for (let i = 0; i < texto.length; i++) {
    let caracter = texto[i];
    if (caracter === "e") {
      textoEncriptado += "enter";
    } else if (caracter === "i") {
      textoEncriptado += "imes";
    } else if (caracter === "a") {
      textoEncriptado += "ai";
    } else if (caracter === "o") {
      textoEncriptado += "ober";
    } else if (caracter === "u") {
      textoEncriptado += "ufat";
    } else {
      textoEncriptado += caracter;
    }
  }
  return textoEncriptado;
}

function desencriptarTexto(textoEncriptado) {
  let texto = "";
  for (let i = 0; i < textoEncriptado.length; i++) {
    let caracter = textoEncriptado[i];
    if (caracter === "e") {
      texto += "e";
      i += 4;
    } else if (caracter === "i") {
      texto += "i";
      i += 3;
    } else if (caracter === "a") {
      texto += "a";
      i++;
    } else if (caracter === "o") {
      texto += "o";
      i += 3;
    } else if (caracter === "u") {
      texto += "u";
      i += 4;
    } else {
      texto += caracter;
    }
  }
  return texto;
}

function encriptar() {
  const texto = document.getElementById("inputText").value;
  const resultado = encriptarTexto(texto);
  document.getElementById("resultado").textContent = resultado;
}

function desencriptar() {
  const texto = document.getElementById("inputText").value;
  const resultado = desencriptarTexto(texto);
  document.getElementById("resultado").textContent = resultado;
}

document.getElementById("btnEncriptar").addEventListener("click", encriptar);
document.getElementById("btnDesencriptar").addEventListener("click", desencriptar);
