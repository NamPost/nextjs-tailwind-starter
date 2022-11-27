import {Transition} from "@headlessui/react";
import {useEffect,useState} from "react";

export default function ContentTransition({children}: any) {
    const [showComponent, setShowComponent] = useState(false);
    useEffect(() => {
        //Run Enter Transition
        setTimeout(() => {
            setShowComponent(true);
        }, 50);

        // Cleanup and run exit transition
        return function cleanup() {
            setShowComponent(false);
        };
    }, []);
    return (
        <Transition
            show={showComponent}
            enter="transition ease-in-out duration-150 transform"
            enterFrom="translate-y-full"
            enterTo="translate-y-0"
            leave="transition ease-in-out duration-150 transform"
            leaveFrom="translate-y-0"
            leaveTo="-translate-y-full"

            // enter="transform transition ease-in duration-[300ms]"
            // enterFrom="opacity-0 translate-y-1 scale-50"
            // enterTo="opacity-100 translate-y-0 duration-150"
            // leave="transition ease-in duration-150"
            // leaveFrom="opacity-100 translate-y-0"
            // leaveTo="opacity-0 translate-y-1 "
        >
            <Transition.Child
                enter="transition ease-in-out duration-150 transform"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="transition ease-in-out duration-150 transform"
                leaveFrom="translate-y-0"
                leaveTo="-translate-y-full"
            >
               {children}
            </Transition.Child>
        </Transition>
    );
}
