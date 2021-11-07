import "./Footer.scss";

const Footer = (props: any) => {
  return (
    <div className='Footer'>
      <footer>
        <div className='footer-container-1'>
          <div className='column'>Author: Alexis Valdez</div>
          <div className='column'>GeeksHubs Agile final practice</div>
          <div className='column'>
            <a
              href='https://github.com/oscarval/2021-02-btc-agile-sw-online-proyecto'
              target='_blank'
              rel='noreferrer'>
              Github
            </a>
          </div>
        </div>
        <div className='footer-container-2'>
          Iconos diseñados por &nbsp;
          <a href='https://www.flaticon.es/autores/turkkub' title='turkkub'>
            turkkub
          </a>
          &nbsp; from &nbsp;
          <a href='https://www.flaticon.es/' title='Flaticon'>
            www.flaticon.es
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
