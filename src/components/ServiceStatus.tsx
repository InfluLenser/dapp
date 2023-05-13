import { ServiceStatusEnum } from '../types';

function ServiceStatus({ status }: { status: ServiceStatusEnum }) {
  let color;
  switch (status) {
    case ServiceStatusEnum.Opened:
      color = 'indigo';
      break;
    case ServiceStatusEnum.Confirmed:
      color = 'green';
      break;
    case ServiceStatusEnum.Finished:
      color = 'gray';
      break;
    case ServiceStatusEnum.Cancelled:
      color = 'red';
      break;
    case ServiceStatusEnum.Uncompleted:
      color = 'red';
      break;
  }

  return (
    <span
      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
        status === ServiceStatusEnum.Finished
          ? 'bg-green-50 text-green-600'
          : 'bg-yellow-50 text-yellow-600'
      }`}>
      {status == ServiceStatusEnum.Finished ? 'Done' : 'Pending'}
    </span>
  );
}

export default ServiceStatus;
