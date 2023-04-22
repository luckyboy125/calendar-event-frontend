import React from 'react';
import { usePopup } from 'hooks/usePopup';
import Popup from 'components/common/popup/Popup';

export const PopupProvider = ({ children }) => {
  const { popupOptions, isOpenPopup } = usePopup();

  return (
    <>
      {isOpenPopup && <Popup {...popupOptions} />}
      {children}
    </>
  );
};
