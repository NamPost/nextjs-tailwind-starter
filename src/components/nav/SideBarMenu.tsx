import {Fragment, useState, useEffect} from "react";
import {Transition} from "@headlessui/react";

import SideBarMenuContent from "./SideBarMenuContent";
export default function SideBarMenu() {
    const [showSideBarMenu, setShowSideBarMenu] = useState(true);
    // useEffect(() => {
    //     setTimeout(() => {
    //         setShowSideBarMenu(true);
    //     },300);

    // }, []);
    return (
        <div role="sidebar">
            <Transition
                as={Fragment}
                show={showSideBarMenu}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
            >
                <Transition.Child
                    as={Fragment}
                    enter="transition ease-in-out duration-300 transform"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transition ease-in-out duration-300 transform"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                >
                    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col bg-white dark:bg-darksolid">
                        {/* Sidebar component, swap this element with another sidebar if you like */}
                        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 dark:border-darklight pt-5">
                            <SideBarMenuContent />
                        </div>
                    </div>
                </Transition.Child>
            </Transition>
        </div>
    );
}
