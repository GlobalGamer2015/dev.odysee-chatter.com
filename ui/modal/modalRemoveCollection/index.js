import { connect } from 'react-redux';
import {
  makeSelectClaimIsMine,
  makeSelectIsAbandoningClaimForUri,
  makeSelectClaimForClaimId,
} from 'redux/selectors/claims';
import { doCollectionDelete } from 'redux/actions/collections';
import { makeSelectNameForCollectionId } from 'redux/selectors/collections';
import { doHideModal } from 'redux/actions/app';
import ModalRemoveCollection from './view';

const select = (state, props) => {
  const claim = makeSelectClaimForClaimId(props.collectionId)(state);
  const uri = (claim && (claim.canonical_url || claim.permanent_url)) || null;
  return {
    claim,
    uri,
    claimIsMine: makeSelectClaimIsMine(uri)(state),
    isAbandoning: makeSelectIsAbandoningClaimForUri(uri)(state),
    collectionName: makeSelectNameForCollectionId(props.collectionId)(state),
  };
};

const perform = (dispatch) => ({
  closeModal: () => dispatch(doHideModal()),
  collectionDelete: (id) => dispatch(doCollectionDelete(id)),
});

export default connect(select, perform)(ModalRemoveCollection);
