import React, { ReactNode, useEffect, useState } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
};

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleOnError = (): void => {
      setHasError(true);
    };

    window.addEventListener('error', handleOnError);

    return () => {
      window.removeEventListener('error', handleOnError);
    };
  }, []);

  if (hasError) {
      return<div>
          <h1>Something went wrong.</h1>
          <a href='/'>Go To Home</a>
    </div>
  }

  return <>{children}</>;
};

export default ErrorBoundary;
