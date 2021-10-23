// @flow
import * as React from 'react';
import Card from 'component/common/card';
import Page from 'component/page';
import ChannelSelector from 'component/channelSelector';
import Spinner from 'component/spinner';
import SettingsRow from 'component/settingsRow';
import { FormField } from 'component/common/form';

const DEBOUNCE_REFRESH_MS = 1000;

// ****************************************************************************
// ****************************************************************************

type Props = {
  activeChannelClaim: ChannelClaim,
  settingsByChannelId: { [string]: PerChannelSettings },
  fetchCreatorSettings: (channelId: string) => void,
  chat_overlay: boolean,
};

export default function SettingsOverlayPage(props: Props) {
  const { activeChannelClaim, settingsByChannelId, fetchCreatorSettings, chat_overlay = true } = props;

  const [lastUpdated] = React.useState(1);

  // **************************************************************************
  // **************************************************************************

  // Re-sync list on first idle time; mainly to correct any invalid settings.
  /*React.useEffect(() => {
    if (lastUpdated && activeChannelClaim) {
      const timer = setTimeout(() => {
        fetchCreatorSettings(activeChannelClaim.claim_id);
      }, DEBOUNCE_REFRESH_MS);
      return () => clearTimeout(timer);
    }
  }, [lastUpdated, activeChannelClaim, fetchCreatorSettings]);*/

  // **************************************************************************
  // **************************************************************************

  /*const isBusy =
    !activeChannelClaim || !settingsByChannelId || settingsByChannelId[activeChannelClaim.claim_id] === undefined;
  const isDisabled =
    activeChannelClaim && settingsByChannelId && settingsByChannelId[activeChannelClaim.claim_id] === null;*/

  return (
    <Page
      noFooter
      noSideNavigation
      backout={{ title: __('Overlay settings and instructions ........................................ Page is not functioning correctly due to Account functions disabled‎‎‎‎‎‎‎‎‎‎‎‎'), backLabel: __('Back') }}
      className="card-stack"
    >
      <div className="card-stack">
        <ChannelSelector hideAnon />
        <Card
          body={
            <>
              <SettingsRow title={__('Chat Overlay')}>
                <FormField name="chat-overlay" type="checkbox" checked={chat_overlay} />
              </SettingsRow>
            </>
          }
        />
      </div>
    </Page>
  );
}