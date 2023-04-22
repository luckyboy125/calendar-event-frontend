import React from 'react';
import { shmoment } from 'utils/date';
import { getMapEventValues } from '../helpers';
import { IModalCreateEventOptions } from 'store/modals/types';
import ModalFormEvent from '../modal-form-event/ModalFormEvent';
import { useActions, useModal } from 'hooks/index';

const ModalCreateEvent = ({
  selectedDate,
  type = 'event',
}: IModalCreateEventOptions) => {
  const { createEvent } = useActions();
  const { closeModalCreate } = useModal();
  const endDate = shmoment(selectedDate).add('hours', 1).result();

  const defaultEventValues = getMapEventValues({
    title: '',
    description: '',
    startDate: selectedDate,
    endDate,
    type,
  });

  return (
    <ModalFormEvent
      textSendButton='Create'
      textSendingBtn='Creating'
      defaultEventValues={defaultEventValues}
      closeModal={closeModalCreate}
      handlerSubmit={createEvent}
    />
  );
};

export default ModalCreateEvent;
