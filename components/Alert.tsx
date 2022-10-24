import { ExclamationTriangleIcon } from '@heroicons/react/20/solid';

export default function Alert ({ message }: { message: string }) {
  return (
    <div className="p-4 text-left rounded-md bg-yellow-50">
      <div className="flex">
        <div className="flex-shrink-0">
          <ExclamationTriangleIcon className="w-5 h-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">{message}</h3>
        </div>
      </div>
    </div>
  );
}
