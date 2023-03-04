import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import faker from 'faker';
import { GetStaticPaths, GetStaticProps } from 'next';

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

  if (router.isFallback) {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Loading</h1>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>User Info</h1>
      <br />
      <div>
        <h3>User FirstName: {id}</h3>
        <h3>User LastName: {lastName}</h3>
        <h3>User Job: {job}</h3>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  console.log('> > > get static paths < < <');
  const name = faker.name.firstName();
  console.log(name);
  return {
    paths: [{ params: { id: name } }],
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  console.log('> > > get static props < < <');
  const firstName = faker.name.firstName();
  console.log(firstName);
  return { props: { id: firstName } };
};

export default User;
