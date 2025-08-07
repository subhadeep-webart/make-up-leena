'use client';
import { useEffect } from 'react';
import { Fancybox } from '@fancyapps/ui';
import '@fancyapps/ui/dist/fancybox/fancybox.css';

export default function FancyboxWrapper({ children }) {
    useEffect(() => {
        Fancybox.bind("[data-fancybox='gallery']", {
            // Optional: Add any Fancybox options here
        });

        return () => {
            Fancybox.destroy();
        };
    }, []);

    return <>{children}</>;
}
