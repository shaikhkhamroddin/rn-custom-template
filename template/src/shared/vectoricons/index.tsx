import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import IoniIcon from 'react-native-vector-icons/Ionicons';
const iconColor = '#FFFFFF';
const iconSize = 28;
export const WarningIcon = ({color = iconColor, size = iconSize}) => (
  <Icon name={'warning'} size={size} color={color} />
);

export const CheckCircleOutlinedIcon = ({
  color = iconColor,
  size = iconSize,
}) => <Icon name={'checkcircleo'} size={size} color={color} />;

export const DeleteIcon = ({color = iconColor, size = iconSize}) => (
  <Icon name={'delete'} size={size} color={color} />
);

export const CallIcon = ({color = iconColor, size = iconSize}) => (
  <IoniIcon name={'call'} size={size} color={color} />
);

export const PersonIcon = ({color = iconColor, size = iconSize}) => (
  <IoniIcon name={'person'} size={size} color={color} />
);
