import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const error = useRouteError();
  return (
    <div>
    <h1>Oops...Error Occured</h1>
    <h2>Please try again...</h2>
    <h3>{error.status} : {error.statusText}</h3>
    </div>
  )
}

export default Error;