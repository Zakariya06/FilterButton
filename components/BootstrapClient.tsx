'use client';

import { useEffect } from 'react';

const BootstrapClient = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('bootstrap/dist/js/bootstrap.bundle.min.js' as any)
        .then(() => console.log('Bootstrap loaded'))
        .catch((err) => console.error('Bootstrap failed to load:', err));
    }
  }, []);

  return null;
};

export default BootstrapClient;
