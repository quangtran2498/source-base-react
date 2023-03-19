import React , {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalPopupConfirm from './components/GlobalPopupConfirm/index';
import PopupService from './utils/PopupService';
import { TestPopupGlobal } from './utils';
import { GlobalPopupConfirmRef } from './components/GlobalPopupConfirm/index';
function App() {
  PopupService.instance = useRef<GlobalPopupConfirmRef | any>(null);
  return (
    <div className="App">
      <div className="" onClick={TestPopupGlobal}>test popup</div>
      <GlobalPopupConfirm ref={PopupService.instance} />
    </div>
  );
}

export default App;
