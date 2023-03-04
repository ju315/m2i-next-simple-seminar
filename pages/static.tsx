import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';

interface PropTypes {
  data: {
    id: number;
    userId: number;
    title: string;
    completed: boolean;
  };
}
const Static: React.FC<PropTypes> = ({ data }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Static Sample Page</h1>
      <br />
      <h2>Todo List</h2>
      <hr />
      <h3>id: {data.id}</h3>
      <h3>userId: {data.userId}</h3>
      <h3>title: {data.title}</h3>
      <h3>completed: {data.completed ? '✅' : '❌'}</h3>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/4');
  const data = await response.json();
  return { props: { data } };
};

export default Static;
