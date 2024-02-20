import React from 'react';
import { createRoot } from 'react-dom/client';
import Content from './Content';
import { MantineProvider } from '@mantine/core';

const container = document.createElement('my-extension-root');
document.body.after(container);

createRoot(container).render(
  <React.StrictMode>
    <MantineProvider>
      <Content
        translatedText={'ここに翻訳したテキストが入る'}
        originalText={'ここに翻訳前のテキストが入る'}
        targetLang={'JA'}
      />
    </MantineProvider>
  </React.StrictMode>
);
