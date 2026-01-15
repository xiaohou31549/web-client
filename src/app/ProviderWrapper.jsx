'use client';
import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';

import Loader from '@/components/Loader';
import ThemeProvider from '@/components/ThemeProvider';
import { ConfigProvider } from '@/contexts/ConfigContext';

export default function ProviderWrapper({ children }) {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(false);
  }, []);

  return (
    <ConfigProvider>
      <ThemeProvider>
        <main>{loader ? <Loader /> : children}</main>
      </ThemeProvider>
    </ConfigProvider>
  );
}

ProviderWrapper.propTypes = { children: PropTypes.any };
