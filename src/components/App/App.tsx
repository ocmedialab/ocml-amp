import React, { FC } from 'react';
import UserManual from '../UserManual/UserManual';
import Amp from '../Amp/Amp';
import AppWrap from './App.styles';

const App: FC = () => {
  return (
    <AppWrap>
      <Amp />
      <UserManual />
    </AppWrap>
  );
};

export default App;
