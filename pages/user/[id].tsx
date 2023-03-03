import { useRouter } from 'next/router';
import React from 'react';

const User = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>User Info</h1>
      <div>
        <h3>User name: {id}</h3>
      </div>
    </>
  );
};

export default User;
