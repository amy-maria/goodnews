import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <div>
      <footer className='bg-slate-200 text-slate-800 absolute bottom-0 w-full h-fit '>
        <ul className='flex flex-row justify-evenly m-5'>
          <li>
            {/*add link*/}
            <FaTwitter />
          </li>
          <li>
            {/*add link*/}
            <FaGithub />
          </li>
          <li>
            {/*add email*/}
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
