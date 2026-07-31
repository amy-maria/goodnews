import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const now = new Date();

  return (
    <footer className='bg-dark text-muted mt-auto'>
      <ul className='flex flex-row justify-evenly m-3'>
        <li>
          <a
            href='https://x.com/amymrowell'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Twitter link'>
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/amy-maria/goodnews'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github link'>
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href='mailto:amymrowell@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Email'>
            <FaEnvelope />
          </a>
        </li>
      </ul>
      <div className='m-4 text-center'>
        <p>
          <span>&copy;</span>
          {now.getFullYear()} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
