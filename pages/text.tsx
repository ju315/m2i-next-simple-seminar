import React from 'react';
import faker from 'faker';

const Text = () => {
  return (
    <div>
      <h1>Here is Text Page</h1>
      <p>{faker.lorem.paragraphs()}</p>
      <p>{faker.lorem.paragraphs()}</p>
      <p>{faker.lorem.paragraphs()}</p>
      <p>{faker.lorem.paragraphs()}</p>
      <p>{faker.lorem.paragraphs()}</p>
      <p>{faker.lorem.paragraphs()}</p>
    </div>
  );
};

export default Text;
