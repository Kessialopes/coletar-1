import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Header,
  Loginbtn,
  FormLogin,
  ImageLogo,
  Navegation,
} from '../styled/login';
import axios from 'axios';

const baseUrl = '.';

function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const token = window.localStorage.getItem('token');

    if (token !== null) {
      router.push('/');
    }
  }, []);

  const handleEmailUser = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordUser = (e) => {
    setPassword(e.target.value);
  };
  const login = async (e) => {
    e.preventDefault();
    const loginBody = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(`${baseUrl}/login`, loginBody);

      window.localStorage.setItem('token', response.data.token);
      alert('Login efetuado com sucesso');
      router.push('HomePage');
    } catch (err) {
      console.log(err);
      alert('Oops! Algo deu errado, tente novamente.');
    }
  };

  const goToHomePage = () => {
    router.push('/');
  };

  return (
    <>
      <Header>
        <ImageLogo src="/public/vercel.svg"></ImageLogo>
        <Navegation onClick={goToHomePage}>Home</Navegation>
      </Header>
      <hr />
      <FormLogin onSubmit={login}>
        <label>
          Email:{' '}
          <input
            value={email}
            name="email"
            type="email"
            onChange={handleEmailUser}
          />
        </label>
        <label>
          Senha:{' '}
          <input
            value={password}
            name="password"
            type="password"
            onChange={handlePasswordUser}
          />
        </label>
        <Loginbtn>Entrar</Loginbtn>
      </FormLogin>
    </>
  );
}
export default LoginPage;
