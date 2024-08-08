import { Toaster } from 'react-hot-toast';

export const ToasterConfig = () => {
  return (
    <Toaster
      position={`top-right`}
      toastOptions={{
        style: {
          zIndex: 9999,
        },
      }}
    />
  );
};
