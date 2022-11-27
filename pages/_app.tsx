import "../styles/globals.css";
import {Suspense} from "react";
import type {AppProps} from "next/app";
import {SessionProvider} from "next-auth/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtoolsPanel} from "@tanstack/react-query-devtools";
import {SideBarMenuSlider} from "../src/hooks/useMenu";
//React Query Client
const queryClient = new QueryClient();
export default function App({
    Component,
    pageProps: {session, ...pageProps},
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <QueryClientProvider client={queryClient}>
                <Suspense fallback={<div>Loading...</div>}>
                    <SideBarMenuSlider />
                    
                        <Component {...pageProps} />
                    
                </Suspense>
                {/* <ReactQueryDevtoolsPanel
                className=""
                setIsOpen={function (isOpen: boolean): void {
                    console.log("Function not implemented.");
                }}
                onDragStart={function (
                    e: React.MouseEvent<HTMLDivElement, MouseEvent>
                ): void {
                  console.log("Function not implemented.");
                }}
            /> */}
            </QueryClientProvider>
        </SessionProvider>
    );
}
