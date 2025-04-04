'use client';

import { useTheme } from 'next-themes';

import { AlertTriangle, CheckCircle, Info, Loader, XCircle } from 'lucide-react';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
    const { theme = 'system' } = useTheme();

    return (
        <Sonner
            theme={theme as ToasterProps['theme']}
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: 'group toast group-[.toaster]:!bg-white group-[.toaster]:!text-black group-[.toaster]:!border-border group-[.toaster]:!shadow-lg',
                    description: 'group-[.toast]:!text-black',
                    actionButton: 'group-[.toast]:!bg-white group-[.toast]:!text-black',
                    cancelButton: 'group-[.toast]:!bg-white group-[.toast]:!text-black'
                  }

            }}
            icons={{
                success: <CheckCircle className='h-4 w-4 text-green-500' />,
                info: <Info className='h-4 w-4 text-blue-500' />,
                warning: <AlertTriangle className='h-4 w-4 text-amber-500' />,
                error: <XCircle className='h-4 w-4 text-red-500' />,
                loading: <Loader className='h-4 w-4 animate-spin text-gray-500' />
            }}
            {...props}
        />
    );
};

export { Toaster };
