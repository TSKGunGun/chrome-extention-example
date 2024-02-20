import React from 'react';
import { createRoot } from 'react-dom/client';
import Content from './Content';
import { MantineProvider } from '@mantine/core';

chrome.runtime.onMessage.addListener(async function (message, sender, sendResponse) {
  if (message.type === 'SHOW') {
    const selection = window.getSelection();
    if (selection !== undefined && selection !== null && Selection.toString() !== undefined) {
      const oRange = selection.getRangeAt(0);
      const oRect = oRange.getBoundingClientRect();
      if (selection.toString().length === 0) {
        return;
      }

      if (document.getElementsByTagName('my-extension-root').length > 0) {
        document.getElementsByTagName('my-extension-root')[0].remove();
      }

      const container = document.createElement('my-extension-root');
      document.body.after(container);

      createRoot(container).render(
        <React.StrictMode>
          <MantineProvider>
            <Content
              orect={oRect}
              translatedText={message.data.translatedText.toString()}
              originalText={message.data.originalText.toString()}
              targetLang={message.data.lang.toString()}
            />
          </MantineProvider>
        </React.StrictMode>
      );
    }
  }
});
