export const checkValidData = (email, password) => {
  const isEmailValid = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );

  //   const isNameValid = name === null || /^[A-Za-z\s.'-]{2,}$/.test(name);

  if (!isEmailValid) return "Please enter valid email address";
  if (!isPasswordValid) return "Please enter strong alphanumeric password";
  //   if (!isNameValid) return "Please enter valid name";

  return null;
};
