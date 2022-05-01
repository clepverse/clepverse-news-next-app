import { signIn, signOut, useSession } from 'next-auth/react';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import styles from './styles.module.scss';

export default function SignInButton() {
  function handleSignIn() {
    signIn('github');
  }

  function handleSignOut() {
    signOut();
  }

  const { data: session } = useSession();

  return session ? (
    <button
      onClick={handleSignOut}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#04D361" />
      {session.user?.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button
      onClick={handleSignIn}
      type="button"
      className={styles.signInButton}
    >
      <FaGithub color="#EBA417" />
      Sign In with Github
    </button>
  );
}
