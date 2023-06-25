import React from 'react';
import { permissionOptions } from '../../consts/consts';
import './styles.scss';

type Props = {
  selectedPermissions: string[];
  handlePermissionsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const PermissionsSelect: React.FC<Props> = ({ selectedPermissions, handlePermissionsChange }) => {
  return (
    <ul className="permissionsOptions">
      {permissionOptions.map((permission, index) => (
        <li key={`${permission}--${index}`}>
          <label>
            <input
              type="checkbox"
              checked={selectedPermissions.includes(permission)}
              onChange={handlePermissionsChange}
              value={permission}
            />
            {permission}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default PermissionsSelect;
