import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <footer className='bg-green-50 text-slate-800 absolute bottom-0 w-full h-fit '>
        <ul className='flex flex-row justify-evenly m-5'>
          <li>
            <FaTwitter />
          </li>
          <li>
            <FaGithub />
          </li>
          <li>
            <FaEnvelope />
          </li>
        </ul>
        <div className='m-3 text-center'>
          <p>
            <span>&#169;</span>
            2024 All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
