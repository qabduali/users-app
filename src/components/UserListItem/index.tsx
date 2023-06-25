import React, { useState } from 'react';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { IUser } from '../../types/types';
import PermissionCard from '../PermissionCard';
import Tooltip from '../Tooltip';
import Modal from '../Modal';
import PermissionsSelect from '../PermissionsSelect';
import optionsIcon from '../../assets/icons/options-icon.svg';
import './styles.scss';

type Props = {
  user: IUser;
  handleDeleteUser: () => void;
  tooltipOpen: boolean;
  toggleTooltipOpen: () => void;
  changePermission: (permission: string) => void;
};

const UserListItem: React.FC<Props> = ({
  user,
  handleDeleteUser,
  tooltipOpen,
  toggleTooltipOpen,
  changePermission,
}) => {
  const isMobile = useMobileDetection();
  const [permissionsOpen, setPermissionsOpen] = useState<boolean>(false);

  const togglePermissionsOpen = () => {
    setPermissionsOpen((prev) => !prev);
    toggleTooltipOpen();
  };

  const handlePermissionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changePermission(e.target.value);
  };

  return (
    <li className={`userListItem${isMobile ? '--mobile' : ''}`}>
      <img
        className={`userListItem__image${isMobile ? '--mobile' : ''}`}
        src={user.image}
        alt={user.name}
      />
      <div className={`userListItem__info${isMobile ? '--mobile' : ''}`}>
        <div className={`userListItem__name${isMobile ? '--mobile' : ''}`}>
          <p>{user.name}</p>
          <span>{user.email}</span>
        </div>
        <div className={`userListItem__permissions${isMobile ? '--mobile' : ''}`}>
          {user.permissions.map((permission, index) => (
            <PermissionCard key={`${permission}--${index}`} permission={permission} />
          ))}
        </div>
      </div>
      <button
        id={`button--${user.email}`}
        className="userListItem__tooltip--button"
        onClick={toggleTooltipOpen}
      >
        <img src={optionsIcon} alt="options" />
      </button>
      {tooltipOpen && (
        <Tooltip
          open={tooltipOpen}
          handleClose={toggleTooltipOpen}
          targetId={`button--${user.email}`}
        >
          <ul className="userListItem__tooltip">
            <li onClick={togglePermissionsOpen}>Изменить права доступа</li>
            <li onClick={toggleTooltipOpen}>Отправить код повторно</li>
            <li onClick={handleDeleteUser}>Удалить</li>
          </ul>
        </Tooltip>
      )}
      {permissionsOpen && (
        <Modal handleClose={togglePermissionsOpen}>
          <PermissionsSelect
            handlePermissionsChange={handlePermissionsChange}
            selectedPermissions={user.permissions}
          />
        </Modal>
      )}
    </li>
  );
};

export default UserListItem;
