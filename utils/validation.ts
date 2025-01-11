export function validateEmail(email: string) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email) || "Correo electrónico no válido";
}

export const validateAmount = (amount: string): boolean => {
  return /^\d*\.?\d*$/.test(amount);
};

export const validateName = (value: string) => {
  const re = /^[A-Za-z\sáéíóúÁÉÍÓÚÑñ]*$/;
  return (
    re.test(value) ||
    "El nombre no debe contener números o caracteres especiales"
  );

  // if (re.test(value)) {
  //   return `El nombre no debe contener números`;
  // }
};
export const validateLastName = (value: string) => {
  const re = /^[A-Za-z\sáéíóúÁÉÍÓÚÑñ]*$/;
  return (
    re.test(value) ||
    "El apellido no debe contener números o caracteres especiales"
  );
};

export const validatePassword = (value: string) => {
  if (!/(?=.*[a-z])(?=.*[A-Z])/.test(value)) {
    return "La contraseña debe incluir al menos una letra mayúscula y una letra minúscula";
  }
  if (!/(?=.*\d)|(?=.*[@$!%*#?&´``])/.test(value)) {
    return "La contraseña debe incluir al menos una letra y un número o caracteres especiales";
  }
  return true;
};
