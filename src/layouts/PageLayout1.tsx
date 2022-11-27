import {Transition} from "@headlessui/react";
import SideBarMenu from "../components/nav/SideBarMenu";
import TopAppBarSearch from "../components/nav/TopAppBarSearch";

import {useMenu} from "../hooks/useMenu";
export default function PageLayout1({children}:any) {
    const {sidebarOpen} = useMenu();
    return (
        <div>
            {/* Static sidebar for desktop */}
            <SideBarMenu />

            <div className="flex flex-1 flex-col md:pl-64 ">
                {/* Top App Search Bar */}
                <TopAppBarSearch />

                <main className="flex-1">
                    <Transition
                        show={!sidebarOpen}
                        enter="transform transition ease-in duration-[300ms]"
                        enterFrom="opacity-0 translate-y-1 scale-50"
                        enterTo="opacity-100 translate-y-0 duration-150"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1 "
                    >
                        <div className="py-6">
                            {children}
                        </div>
                    </Transition>
                </main>
            </div>
        </div>
    );
}
