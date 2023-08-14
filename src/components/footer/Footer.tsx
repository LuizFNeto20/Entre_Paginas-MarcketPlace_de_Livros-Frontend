import './Footer.scss'
import { FaInstagram, FaTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <>
      <div className="footer">
        <p className='footer__text'>Atendimento: (61) 99999-9999 - entrepaginas_Suporte@gmail.com</p>
        <p className='footer__text'>Segue nas redes sociais: <FaInstagram/> <FaTwitter/></p>
      </div>

      <footer className="footer">
        <p className='footer__text2'>EntrePaginas.com.br Serviços na Internet Ltda - CNPJ 62.451.012/0001-90</p>
        <p className='footer__text2'>R. Eng. Roberto Mange, 1087 - Amambai, Campo Grande - MS, CEP: 79005-420</p>
      </footer>
    </>
  )
}