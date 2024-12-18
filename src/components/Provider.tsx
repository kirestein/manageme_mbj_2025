import * as React from "react";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from "react-toastify";

export function ProviderApp({ children }: { children: React.ReactNode }) {
    // 2. Wrap NextUIProvider at the root of your app
    return (
        <NextUIProvider>
            <ToastContainer position='bottom-right' hideProgressBar className='z-50' />
            {children}
        </NextUIProvider>
    );
}