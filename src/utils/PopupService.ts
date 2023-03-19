import React from 'react';
import { GlobalPopupConfirmRef } from '../components/GlobalPopupConfirm';
class PopupService {
  static instance: React.MutableRefObject<GlobalPopupConfirmRef>;
}

export default PopupService;
