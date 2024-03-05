import React, { useState } from 'react';


const Validation = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = (email) => {
    // Простая проверка на соответствие формату email
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      setEmailError('Некорректный формат email');
    } else {
      setEmailError('');
    }

    return isValid;
  };

  const validatePassword = (password) => {
    // Проверка, что пароль содержит минимум 8 символов
    const isValid = password.length >= 8;

    if (!isValid) {
      setPasswordError('Пароль должен содержать не менее 8 символов');
    } else {
      setPasswordError('');
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Проверка валидности email и пароля перед отправкой
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    if (isEmailValid && isPasswordValid) {
      // Здесь можете выполнить отправку данных
      console.log('Данные отправлены:', { email, password });
    } else {
      console.log('Данные не валидны. Пожалуйста, исправьте ошибки.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => validateEmail(email)}
        />
        {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onBlur={() => validatePassword(password)}
        />
        {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}
      </div>
      <div>
        <button type="submit">Отправить</button>
      </div>
    </form>
  );
};

export default Validation;
