import React, { FC } from 'react';
import { Alert, AlertProps } from 'react-bootstrap';

const Message: FC<AlertProps> = ({ variant, children }) => {
  return <Alert variant={variant}>{children}</Alert>;
};

export default Message;