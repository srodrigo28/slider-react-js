import React from 'react';
import Slide from './Slide';
import './App.css'

function App() {
  return (
    <div className="container" data-aos="fade-up" data-aos-delay="500">
      
      <header data-aos="fade-right" data-aos-delay="500">
        <div className='logo'>
          <img src='Logo.png' alt='' />
        </div>
        <ul>
          <li> Camisetas </li>
          <li> Calças </li>
          <li> Bermudas </li>
          <li> Calçados </li>
          <li> Acessórios </li>
        </ul>
        <button>Contato</button>
      </header>
      
      <Slide />

      <div className='home'>
        <div className='home-left'>

          <h3 data-aos="fade-left" data-aos-delay="500">Calvin Klein</h3>

          <div data-aos-delay="500" className='home-row'>
            <h3 data-aos="fade-down">Calvin Klein</h3>
            <h3 data-aos="fade-up">Swimwear</h3>
          </div>

          <h3 data-aos="fade-up" data-aos-delay="500" className='sub-titulo'>Uma marca que <br /> já diz tudo</h3>

          <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank">
            <button data-aos="fade-right" data-aos-delay="500" className='home-button'>
          
              <span>Contato</span>
            </button>
          </a>
        </div>

        <div className='home-right'>

          <div data-aos="fade-up" data-aos-delay="500" className='right-item-l'>
            <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank">
              <div className="right-square">
                <img src="modelos/mazza-12.jpg" alt="não carregou" />
              </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank">
              <div className="right-rectangle">
                <img src="modelos/mazza-12.jpg" alt="não carregou" />
              </div>
            </a>
          </div>

          <div data-aos="fade-down" data-aos-delay="500" className='right-item-2'>
            <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank">
              <div className="right-square">
                <img src="modelos/mazza-36.jpg" alt="não carregou" />
              </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank">
              <div className="right-rectangle">
                <img src="modelos/mazza-36.jpg" alt="não carregou" />
              </div>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="500" className='right-item-3'>
            <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank">
              <div className="right-square">
                <img src="modelos/mazza-10.jpg" alt="não carregou" />
              </div>
            </a>

            <a href="https://api.whatsapp.com/send?phone=5562982350030&text=Quero%20fazer%20um%20agendamento%20hoje!" target="_blank">

              <div className="right-rectangle">
                <img src="modelos/mazza-10.jpg" alt="não carregou" />
              </div>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;