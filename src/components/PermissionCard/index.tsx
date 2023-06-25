import React from 'react';
import { useMobileDetection } from '../../hooks/useMobileDetection';
import './styles.scss';

type Props = {
  permission: string;
};

const PermissionCard: React.FC<Props> = ({ permission }) => {
  const isMobile = useMobileDetection();

  return <div className={`permissionCard${isMobile ? '--mobile' : ''}`}>{permission}</div>;
};

export default PermissionCard;
