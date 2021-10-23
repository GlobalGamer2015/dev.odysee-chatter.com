import { connect } from 'react-redux';
import SettingsOverlayPage from './view';
import { doFetchCreatorSettings } from 'redux/actions/comments';
import { selectActiveChannelClaim } from 'redux/selectors/app';
import { selectSettingsByChannelId } from 'redux/selectors/comments';

const select = (state) => ({
  activeChannelClaim: selectActiveChannelClaim(state),
  settingsByChannelId: selectSettingsByChannelId(state),
});

const perform = (dispatch) => ({
  fetchCreatorSettings: (channelClaimId) => dispatch(doFetchCreatorSettings(channelClaimId)),
});

export default connect(select, perform)(SettingsOverlayPage);