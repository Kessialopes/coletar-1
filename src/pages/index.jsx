import React from 'react';

import {
  Header,
  ImageLogo,
  Navegation,
  Wellcome,
  Containerbtn,
  Navegationbtn,
} from '../styled/home';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  const goToLoginPage = () => {
    router.push('/Login');
  };

  const goToSubscriptionPage = () => {
    router.push('/Subscription');
  };
  return (
    <div>
      <Header>
        <ImageLogo src="/public/vercel.svg"></ImageLogo>
        <Navegation onClick={goToLoginPage}>Login</Navegation>
      </Header>
      <hr />
      <Wellcome>
        <h1>Bem vindo(a), à Coletar Lagos!</h1>
      </Wellcome>
      <Containerbtn>
        <Navegationbtn onClick={goToSubscriptionPage}>
          Inscreva-se
        </Navegationbtn>
      </Containerbtn>
    </div>
  );
}
