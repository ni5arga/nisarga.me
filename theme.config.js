const YEAR = new Date().getFullYear()
const now = new Date();
const HOUR = now.getHours();
const MINUTE = now.getMinutes();
const SECOND = now.getSeconds();

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Nisarga Adhikary
     <a href="https://github.com/ni5arga/nisarga.me/">Source Code</a> 
      <date> ⏰{HOUR}:{MINUTE} 📍New Delhi, India </date> 

      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
