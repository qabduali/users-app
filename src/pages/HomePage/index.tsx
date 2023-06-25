import React, { useState } from 'react';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import { useDebounceSearch } from '../../hooks/useDebounceSearch';
import { USERS } from '../../consts/consts';
import { IUser } from '../../types/types';
import { Search, Button, UserListItem, Input, Modal, PermissionsSelect } from '../../components';
import MobileSidebar from '../../layouts/MobileSidebar';
import burgerMenuIcon from '../../assets/icons/burger-menu-icon.svg';
import './styles.scss';

const HomePage = () => {
  const isMobile = useMobileDetection();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [users, setUsers] = useState<IUser[]>(USERS);
  const [tooltipOpen, setTooltipOpen] = useState<Record<string, boolean>>({ a: false });
  const debouncedSearchQuery = useDebounceSearch(searchQuery, 500);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newUser, setNewUser] = useState<IUser>({
    name: '',
    email: '',
    permissions: [],
    image: '',
  });
  const [permissionsModalOpen, setPermissionsModalOpen] = useState<boolean>(false);

  const toggleTooltipOpen = (email: string) => () => {
    setTooltipOpen((prevState) => ({ [email]: !prevState[email] }));
  };

  const handleSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleDeleteUser = (email: string) => () => {
    setUsers((prev) => prev.filter((user) => user.email !== email));
  };

  const toggleSidebarOpen = () => {
    setSidebarOpen((prev) => !prev);
  };

  const toggleModalOpen = () => {
    setModalOpen((prev) => !prev);
    setNewUser({
      name: '',
      email: '',
      permissions: [],
      image: '',
    });
  };

  const changePermission = (user: IUser) => (permission: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((prevUser) => {
        if (prevUser.email === user.email) {
          const permissionIndex = prevUser.permissions.indexOf(permission);
          if (permissionIndex !== -1) {
            prevUser.permissions.splice(permissionIndex, 1);
          } else {
            prevUser.permissions.push(permission);
          }
        }
        return prevUser;
      })
    );
  };

  const handleChangeNewUserEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prev) => ({ ...prev, email: e.target.value }));
  };

  const handlePermissionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewUser((prevUser) => {
      const { value, checked } = e.target;
      if (checked) {
        if (!prevUser.permissions.includes(value)) {
          return {
            ...prevUser,
            permissions: [...prevUser.permissions, value],
          };
        }
      } else {
        if (prevUser.permissions.includes(value)) {
          return {
            ...prevUser,
            permissions: prevUser.permissions.filter((permission) => permission !== value),
          };
        }
      }
      return prevUser;
    });
  };

  const togglePermissionsOpen = () => {
    setPermissionsModalOpen((prev) => !prev);
  };

  const addNewUser = (user: IUser) => {
    setUsers((prev) => [...prev, user]);
  };

  const handleAddUserClick = () => {
    addNewUser(newUser);
    setNewUser({
      name: '',
      email: '',
      permissions: [],
      image: '',
    });
    setPermissionsModalOpen(false);
    setModalOpen(false);
  };

  return (
    <div className={`homePage__wrapper${isMobile ? '--mobile' : ''}`}>
      <div className={`homePage__header${isMobile ? '--mobile' : ''}`}>
        <p className={`homePage__title${isMobile ? '--mobile' : ''}`}>
          {isMobile && <img src={burgerMenuIcon} alt="menu" onClick={toggleSidebarOpen} />}
          Команда
        </p>
        <div className={`homePage__header__right${isMobile ? '--mobile' : ''}`}>
          <Search
            placeholder="Поиск по Email"
            value={searchQuery}
            onChange={handleSearchQueryChange}
          />
          <Button variant="green" onClick={toggleModalOpen}>
            <p>Добавить пользователя</p>
          </Button>
        </div>
      </div>
      <ul className={`homePage__users${isMobile ? '--mobile' : ''}`}>
        {users
          .filter((user) => user.email.includes(debouncedSearchQuery || ''))
          .map((user, index) => (
            <UserListItem
              key={`${user.email}--${index}`}
              user={user}
              handleDeleteUser={handleDeleteUser(user.email)}
              tooltipOpen={!!tooltipOpen[user.email]}
              toggleTooltipOpen={toggleTooltipOpen(user.email)}
              changePermission={changePermission(user)}
            />
          ))}
      </ul>
      <MobileSidebar open={sidebarOpen} toggleOpen={toggleSidebarOpen} />
      {modalOpen && (
        <Modal handleClose={toggleModalOpen}>
          <div className="invitation__wrapper">
            <p>Отправьте приглашение</p>
            <Input
              placeholder="Введите Email"
              value={newUser.email}
              onChange={handleChangeNewUserEmail}
              type="email"
            />
            <div className="invitation__permissions" onClick={togglePermissionsOpen}>
              Выберите права доступа
            </div>
            <Button variant={'green--lg'} onClick={handleAddUserClick}>
              Отправить приглашение
            </Button>
          </div>
        </Modal>
      )}
      {permissionsModalOpen && (
        <Modal handleClose={togglePermissionsOpen}>
          <PermissionsSelect
            handlePermissionsChange={handlePermissionsChange}
            selectedPermissions={newUser.permissions}
          />
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
