import { WithChildren } from '@/types';
import { CgSpinner } from 'react-icons/cg';

interface LoadingWidgetProps extends WithChildren {
  message: string;
}

const Widget = ({ message }: LoadingWidgetProps) => {
  return (
    <section
      id="loading-widget"
      className="flex flex-col items-center justify-center h-screen"
    >
      <CgSpinner className="animate-spin text-2xl mb-2" />
      <p>{message}</p>
    </section>
  );
};

export default Widget;
