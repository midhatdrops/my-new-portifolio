import React from 'react';
import { Footer } from '../../Components/footer';
import { Navbar } from '../../Components/navbar';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';

export const About = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <img
            className="col-12 img-fluid rounded-circle  mt-4 "
            style={{ width: '300px', height: '300px' }}
            src="https://avatars.githubusercontent.com/u/67974118?v=4"
            alt="Profile"
          />
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div
            className="col-12 fs-3 mt-5 text-center "
            style={{
              fontFamily: 'Oswald',
              letterSpacing: '1rem',
              fontWeight: 200,
              lineHeight: '110%',
            }}
          >
            <strong>Bruno Rezende Novais</strong>
          </div>
        </div>
        <div className="row d-flex align-items-center justify-content-center mt-5 mb-5">
          <p
            className="fs-6 text-break text-center"
            style={{ lineHeight: '120%' }}
          >
            23 anos / São Paulo - SP / Solteiro / Dev FullStack <br />
            <br />
            Inicialmente uma criança curiosa com o mundo da computação, comecei
            a aprender programação em cursinhos da região por cerca de meses.
            Porém, por medo de "não me sentir suficiente" acabei não dando
            sequência aos estudos. Segui então para o estudo nas áreas das
            ciências da saúde, após concluir o Ensino Médio e ingressar na
            faculdade, fiquei descontente com o curso e voltei ao cursinho onde
            permaneci estudando por algum tempo. Em 2020 tive que retomar meus
            estudos em programação e me reencontrei, percebendo minha timidez e
            ignorância quando mais novo. Agora, estudo para aprender novas
            tecnológicas, implementá-las e busco novas oportunidades de trabalho
            para aprender mais sobre a área de desenvolvimento. <br />
            <br />
            <FontAwesomeIcon icon={faGamepad} size="2x" className="me-4" />
            RPG Lover
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
