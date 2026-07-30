'use client';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import {
  getExcludedWords,
  addExcludedWords,
  removeExcludedWords,
} from '../lib/excludedWordsApi';
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

export default function Profile() {
  const { data: session, status } = useSession(); //reads whatever session state is being tracked, conditioner render of loading,unauthenticated and authenticated
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [excludedWords, setExcludedWords] = useState<string[]>([]); //holds actual list of words stored in memory
  const [inputValue, setInputValue] = useState(''); //holds text from input until stored
  const [duplicateWarning, setDuplicateWarning] = useState(false);

  useEffect(() => {
    if (status !== 'authenticated') return;
    const loadExcludedWords = async () => {
      const words = await getExcludedWords();
      setExcludedWords(words);
    };
    loadExcludedWords();

    //setExcludedWords(getExcludedWords());
    //runs once when component mounts
  }, [status]); //effect reruns whenever status changes

  const handleAdd = async () => {
    //handle spaces and no words added
    const trimmed = inputValue.trim();
    if (trimmed === '') return;

    const isDuplicate = excludedWords.some(
      (word) => word.toLowerCase() === trimmed.toLowerCase(),
    );

    if (isDuplicate) {
      setDuplicateWarning(true);
      return;
    }
    try {
      const updatedWords = await addExcludedWords(trimmed);
      setExcludedWords(updatedWords);
      setInputValue('');
    } catch (error) {
      setDuplicateWarning(true);
    }
  };
  const handleAcknowledgeWarning = () => {
    setDuplicateWarning(false);
    setInputValue('');
  };
  const handleRemove = async (word: string) => {
    const updatedWords = await removeExcludedWords(word);
    setExcludedWords(updatedWords);
  };

  return (
    <div>
      {/*wrap as cards*/}
      <h1>My profile!</h1>
      {status === 'loading' && <p>Loading...</p>}

      {status === 'unauthenticated' && (
        <div>
          {authMode === 'login' ? <LoginForm /> : <SignupForm />}
          <p>
            {authMode === 'login' ? (
              <>
                Don&apos;t have an account?{' '}
                <button onClick={() => setAuthMode('signup')}>Sign Up</button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={() => setAuthMode('login')}>Log In</button>
              </>
            )}
          </p>
        </div>
      )}

      {status === 'authenticated' && (
        <div>
          <div className='rounded-full bg-blue-600 text-white w-12 h-12 flex items-center justify-center text-xl mb-2'>
            {session.user?.email?.[0].toUpperCase()}
          </div>
          <p>{session.user?.email}</p>
          <button onClick={() => signOut()}>Log Out</button>
        </div>
      )}

      {/*wrap as cards*/}
      <h3>Excluded Words</h3>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='blue-700' onClick={handleAdd}>
        Add
      </button>

      {duplicateWarning && (
        <div>
          <p className='text-red-600'>Duplicate word</p>
          <button onClick={handleAcknowledgeWarning}>OK</button>
        </div>
      )}
      <div>
        {excludedWords.map((word) => (
          <div
            key={word}
            className='relative inline-block text-black pr-5 pl-2 py-1 mr-2 mb-2 border rounded-full'>
            {word}
            <button
              className='absolute top-0 right-1 text-xs'
              onClick={() => handleRemove(word)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
