function validarCampo(campo) {
  if (campo.value.trim() !== '') {
    campo.classList.remove('is-invalid');
    campo.classList.add('is-valid');
  } else {
    campo.classList.remove('is-valid');
    campo.classList.add('is-invalid');
  }
}