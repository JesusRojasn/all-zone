import React from 'react';

function Footer() {
  return (
    <footer className='footer'>

      <div className='texto-footer'>
      <p className='text-footer'>Trabaja con nosotros</p>
      <p className='text-footer'>Terminos y condiciones</p>
      <p className='text-footer'>Preguntas frecuentes</p>
      <p className='text-footer'>Ayuda</p>
      </div>

      <div>
        <p>Siguenos en Redes Sociales</p>
        <center>
       <img className='logosRRSS' src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-3-1.png" alt="logo" />
       <img className='logosRRSS' src="https://static.vecteezy.com/system/resources/previews/017/743/717/non_2x/instagram-icon-logo-free-png.png" alt="logo" />
       <img className='logosRRSS' src="https://elektroservice.cl/wp-content/uploads/2017/10/whatsapp-official-logo-png-download.png" alt="logo" />
       </center>
       </div>
    </footer>
  );
}

export default Footer;