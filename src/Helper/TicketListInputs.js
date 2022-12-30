export const inputs = [
  {
    id: 1,
    name: 'starttime',
    type: 'time',
    placeholder: 'starttime',
    errorMessage: `Please specify starttime!`,
    // label: 'Start Time',
    pattern: '^[A-Za-z0-9]{3,16}$',
    required: true,
  },
  {
    id: 2,
    name: 'endtime',
    type: 'time',
    placeholder: 'endtime',
    errorMessage: `It should be a valid endtime!`,
    // label: 'End Time',
    required: true,
  },
  {
    id: 3,
    name: 'task',
    type: 'text',
    placeholder: 'Task Description',
    errorMessage: `It should be a valid Task Description!`,
    // label: 'Task Description',
    required: true,
  },
];

export const ticketListHeader = [
  {
    label: 'Start Time',
  },
  {
    label: 'End Time',
  },
  {
    label: 'Minutes',
  },
  {
    label: 'Task Description',
  },
];
