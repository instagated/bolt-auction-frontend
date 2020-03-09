import React from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { signout } from '../modules/auth';
import { getItems } from '../modules/item';

const HeaderContainer = ({ user, signout, getItems }) => {
  return <Header user={user} signout={signout} />;
};

export default React.memo(
  connect(
    ({ auth }) => ({
      user: auth.user,
    }),
    {
      signout,
    },
  )(HeaderContainer),
);
