import { format } from 'date-fns';

export const getFormattedTime = () => {
  const now = new Date();
  return format(now, 'hh:mm a');
}

