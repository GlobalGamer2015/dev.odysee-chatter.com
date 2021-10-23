// @flow
import React from 'react';
import Page from 'component/page';
import 'scss/component/_overlay.scss';
import Chat from './chat';
import fetch from 'node-fetch';

type Props = {
  chat_overlay: boolean,
};

export default function OverlayPage(props: Props) {
  const { chat_overlay = true } = props;

  // Get channel claim id from URL.
  const claim_id = window.location.pathname.split('/')[4];

  // Remove App due to it stops overlay from working correctly. - Also not needed and saves performance.
  if (document.getElementById('app')) {
    document.getElementById('app').remove();
  }

  // Create the DIV's that are in Overlay page which then uses _overlay.scss
  let overlay = document.createElement('div');
  overlay.className = 'overlay-wrapper';
  overlay.innerHTML = '<div id="overlay" class="overlay"></div>';
  document.body.appendChild(overlay);

  React.useEffect(() => {
    if (chat_overlay) {
      Chat.startChat(claim_id, fetch);
    }
  }, [chat_overlay, claim_id]);

  return (
    <Page
      authPage="false"
      filePage="true"
      fullWidthPage="true"
      noHeader="true"
      noFooter="true"
      noSideNavigation="true"
      isMarkdown="false"
    >
      {chat_overlay}
    </Page>
  );
}