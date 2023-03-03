import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import faker from 'faker';

const User = () => {
  const router = useRouter();
  const { id } = router.query;

  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');

  useEffect(() => {
    if (id) {
      setLastName(faker.name.lastName());
      setJob(faker.name.jobTitle());
    }
  }, [id]);

  return (
    <>
      <h1>User Info</h1>
      <div>
        <h3>User FirstName: {id}</h3>
        <h3>User LastName: {lastName}</h3>
        <h3>User Job: {job}</h3>
      </div>
    </>
  );
};

export default User;
