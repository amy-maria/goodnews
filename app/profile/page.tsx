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
import Button from '../components/Button';

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
    <div className='m-4'>
      {/*wrap as cards*/}
      {status === 'loading' && <p>Loading...</p>}

      {status === 'unauthenticated' && (
        <div>
          {authMode === 'login' ? <LoginForm /> : <SignupForm />}
          <p>
            {authMode === 'login' ? (
              <>
                <p className='m-4'>
                  Don't have a registered account?
                  <Button
                    className='ml-4'
                    onClick={() => setAuthMode('signup')}>
                    Sign Up
                  </Button>
                </p>
              </>
            ) : (
              <p>
                Already have an account?{' '}
                <Button onClick={() => setAuthMode('login')}>Log In</Button>
              </p>
            )}
          </p>
        </div>
      )}

      {status === 'authenticated' && (
        <div>
          <div className='rounded-full bg- bg-accent text-muted w-16 h-16 flex items-center justify-center text-xl m-4'>
            {session.user?.email?.[0].toUpperCase()}
          </div>
          <p className='m-4'>{session.user?.email}</p>
          <Button className='ml-4' onClick={() => signOut()}>
            Log Out
          </Button>
        </div>
      )}

      {/*wrap as cards*/}
      <div className='m-4 border-2 border-dark-elevated rounded-lg p-4 bg-light text-ink'>
        <h3 className='font-bold text-lg mb-2'>Excluded Words</h3>
        <div className='mb-2'>
          <input
            type='text'
            value={inputValue}
            className='mr-4 border-2 rounded px-2 py-1'
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button onClick={handleAdd}>Add</Button>
        </div>

        {duplicateWarning && (
          <div className='mb-2'>
            <p className='text-red-600'>
              Word could not be added. Duplicate word or user is not logged in.
            </p>
            <Button onClick={handleAcknowledgeWarning}>OK</Button>
          </div>
        )}

        <p className='mb-4'>
          To remove a word or phrase from the excluded list, click on the X in
          the upper right hand corner.{' '}
        </p>

        <div>
          {excludedWords.map((word) => (
            <div
              key={word}
              className='relative inline-block text-black pr-5 pl-3 py-1 mr-2 mb-2 border-2 bg-amber-300 rounded-s-full'>
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
    </div>
  );
};
   
