'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { redirect } from 'next/navigation';

import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth/next';
// {
//     required: true,
//     onUnauthenticated: () => {
//       redirect('/signIn?callbackUrl=/register')
//     }
//   }
const SignIn = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div className="mt-[100px]">
        Signed in as {session?.user?.name} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }

  return (
    <div className="mt-[100px]">
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  );
};

export default SignIn;
