import {useEffect, useState} from "react";
import {Transition} from "@headlessui/react";
import {
    XMarkIcon,
    CheckCircleIcon,
    InformationCircleIcon,
    ExclamationCircleIcon,
} from "@heroicons/react/24/outline";
import {atom, useAtom} from "jotai";

type AlertProps = {
    id: Number | any;
    show: Boolean;
    title: String;
    message: String;
    type: String;
    icon: Boolean;
    duration: Number | null;
    action: String;
    actionFunction: Function;
    CustomComponent: any;
};

const alertPropsAtom = atom({
    id: 0,
    show: false,
    title: "",
    message: "",
    type: "",
    icon: false,
    duration: 0,
    action: "",
    actionFunction: () => {},
    CustomComponent: null,
} as AlertProps);

const alertStackAtom = atom([]);
/* 
This hook is used to contain and show the Alert

 */
export const useAlert = () => {
    const [alertProps, setAlertProps] = useAtom(alertPropsAtom);
    const [alertStack, setAlertStack] = useAtom<any>(alertStackAtom) as any;

    //Show Alert Method
    const showAlert = (props: any) => {
        //Add new Alert to alert stack
        setAlertStack([...alertStack, {...props, id: alertStack.length + 1}]);
    };
    //Hide Alert method
    const hideAlert = (id: Number) => {
        if (id && id > 0) {
            //Find Alert in stack and remove it
            setAlertStack(() =>
                alertStack.filter((alert: AlertProps) => alert.id !== id)
            );
        }
    };
    //Purge All Alerts on unMount Free memory
    const clearAlert = () => {
        //Find Alert in stack and remove it
        setAlertStack(() => []);
    };
    return {
        alertProps,
        showAlert,
        hideAlert,
        alertStack,
        clearAlert
    };
};

/* Parent Container to manage all current Alerts */
export const AlertContainer = () => {
    const {alertStack, hideAlert,clearAlert} = useAlert();

    return (
        <div className="z-30 fixed bottom-0 right-0 w-96 h-auto">
            <div className="flex flex-col items-end justify-end h-full overflow-hidden">
                {/* <div>({alertStack.length})</div> */}
                {alertStack.map((alert: AlertProps, index: number) => {
                    return (
                        <AlertComponent
                            key={index}
                            id={alert.id}
                            show={alert.show}
                            title={alert.title}
                            message={alert.message}
                            type={alert.type}
                            icon={alert.icon}
                            action={alert.action}
                            duration={alert.duration}
                            actionFunction={alert.actionFunction}
                            CustomComponent={alert.CustomComponent}
                            hideAlert={hideAlert}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export const AlertComponent = ({
    show,
    id,
    title,
    message,
    type,
    icon,
    duration,
    action,
    actionFunction,
    hideAlert,
    CustomComponent
}: any) => {
    const [showMe, setShowMe] = useState(false);

    //Function to close alert
    const closeAlert = () => {
        setShowMe(false);
        //Give a minor delay to allow for the animation to finish before moving of the stack
        //setTimeout(() => {
        //hideAlert(id);
        //}, 2000);
    };

    useEffect(() => {
        
        setShowMe(true);
        if (duration && duration > 0) {
            setTimeout(() => {
                closeAlert();
            }, duration);
        }
    }, []);

    return (
        <Transition
            show={showMe}
            className="w-96 px-4 py-1 sm:items-start sm:p-6 "
            appear={true}
        >
            <Transition.Child
                enter="transition ease-in-out duration-50 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-50 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-y-full translate-x-full"
                // enter="transform transition duration-[400ms]"
                // enterFrom="opacity-0 rotate-[-120deg] scale-50"
                // enterTo="opacity-100 rotate-0 scale-100"
                // leave="transform duration-200 transition ease-in-out duration-[4000ms]"
                // leaveFrom="opacity-100 rotate-0 scale-100 "
                // leaveTo="opacity-0 scale-95 "
            >
                <>
                    {/* Full Alert Notification with Icon and Message */}
                    {message && icon && !CustomComponent && (
                        <AlertMessageBody
                            alertProps={{
                                id,
                                title,
                                message,
                                type,
                                icon,
                                action,
                                actionFunction,
                                showMe,
                            }}
                            setShowAlert={() => closeAlert()}
                        />
                    )}

                    {/* Simple Inline SnackBar, no Message and Icon */}
                    {!icon && !CustomComponent &&(
                        <AlertNoIconBody
                            alertProps={{
                                title,
                                message,
                                type,
                                icon,
                                action,
                                actionFunction,
                            }}
                            setShowAlert={() => closeAlert()}
                        />
                    )}

                    {/* Render Custom TW component */}
                    {CustomComponent && (
                        CustomComponent 
                    )}

                </>
            </Transition.Child>
           
        </Transition>
    );
};

/* Alert Information Body with Icon */

export const AlertMessageBody = (alertProps: any) => {
    return (
        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-darklight dark:border-2 dark:border-black shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
                <div className="flex items-start">
                    {/* Success ALert */}
                    {alertProps.alertProps.type === "success" && (
                        <div className="flex-shrink-0">
                            <CheckCircleIcon
                                className="h-6 w-6 text-green-500"
                                aria-hidden="true"
                            />
                        </div>
                    )}
                    {/* Notice ALert */}
                    {alertProps.alertProps.type === "info" && (
                        <div className="flex-shrink-0">
                            <InformationCircleIcon
                                className="h-6 w-6 text-yellow-500"
                                aria-hidden="true"
                            />
                        </div>
                    )}
                    {/* Error ALert */}
                    {alertProps.alertProps.type === "error" && (
                        <div className="flex-shrink-0">
                            <ExclamationCircleIcon
                                className="h-6 w-6 text-red-500"
                                aria-hidden="true"
                            />
                        </div>
                    )}
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            {alertProps.alertProps.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                            {alertProps.alertProps.message}
                        </p>
                    </div>

                    <div className="ml-4 flex flex-shrink-0">
                        <button
                            type="button"
                            className="inline-flex rounded-md bg-white dark:bg-black text-gray-400 dark:text-gray-100 hover:text-gray-500 focus:outline-none "
                            onClick={() => {
                                alertProps.setShowAlert();
                            }}
                        >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="mt-3 flex space-x-7 ml-9">
                    {alertProps.alertProps.actionFunction && (
                        <button
                            type="button"
                            onClick={() => alertProps.alertProps.actionFunction}
                            className="rounded-md bg-white dark:bg-darklight text-sm font-medium text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            {alertProps.alertProps.action}
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={() => {
                            alertProps.setShowAlert();
                        }}
                        className="rounded-md bg-white dark:bg-darklight text-sm font-medium text-gray-700 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
};

/* Alert no body and icon */

export const AlertNoIconBody = (alertProps: any) => {
    return (
        <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white dark:bg-darklight dark:border-2 dark:border-black shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="p-4">
                <div className="flex items-start">
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                            {alertProps.alertProps.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-200">
                            {alertProps.alertProps.message}
                        </p>
                    </div>

                    <div className="ml-4 flex flex-shrink-0">
                        <button
                            type="button"
                            className="inline-flex rounded-md bg-white dark:bg-black text-gray-400 hover:text-gray-500 focus:outline-none "
                            onClick={() => {
                                alertProps.setShowAlert();
                            }}
                        >
                            <span className="sr-only">Close</span>
                            <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="mt-3 flex space-x-7 ml-4">
                    {alertProps.alertProps.actionFunction && (
                        <button
                            type="button"
                            onClick={() => alertProps.alertProps.actionFunction}
                            className="rounded-md bg-white text-sm font-medium dark:bg-darklight  text-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            {alertProps.alertProps.action}
                        </button>
                    )}
                    <button
                        type="button"
                        onClick={() => {
                            alertProps.setShowAlert();
                        }}
                        className="rounded-md bg-white text-sm font-medium dark:bg-darklight  text-gray-700 hover:text-gray-500 dark:text-gray-300 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                        Dismiss
                    </button>
                </div>
            </div>
        </div>
    );
};
