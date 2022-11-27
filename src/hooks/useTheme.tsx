import React,{useState, useEffect} from "react";
import {Switch} from "@headlessui/react";
import {classNames} from "../utils/utils";
import {atom, useAtom} from "jotai";

const themeAtom = atom("light");
/* 
This hook is used to toggle between light and dark mode. It uses the useLocalStorage hook to store the theme in localStorage.
 */
export const useTheme = () => {
    const [theme, setTheme] = useAtom(themeAtom);

    /* Initial useEffect to identify System media-theme */
    useEffect(() => {
        let browserTheme = "light";
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            browserTheme = "dark";
            document.documentElement.classList.add("dark");
        } else {
            browserTheme = "light";
            document.documentElement.classList.remove("dark");
        }
        console.log("useTheme useEffect", browserTheme);
        toggleTheme(browserTheme);
    }, []);

    const toggleTheme = (browserTheme: any) => {
        if (browserTheme === "dark") {
            document.documentElement.classList.add("dark", "bg-darklight");
        } else {
            document.documentElement.classList.remove("dark", "bg-darklight");
        }

        setTheme(browserTheme);
        localStorage.theme = browserTheme;
    };

    const handleChange = (event: Boolean) => {
        console.log(event);
        toggleTheme(event ? "dark" : "light");
    };

    /* Theme Switch */
    // eslint-disable-next-line react/display-name
    const ThemeSwitch = React.memo(() => {
        return (
            <Switch
                checked={theme === "dark" ? true : false}
                onChange={handleChange}
                className={classNames(
                    theme === "dark" ? "bg-black" : "bg-gray-200",
                    "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                )}
            >
                <span className="sr-only">Use setting</span>
                <span
                    className={classNames(
                        theme === "dark" ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white dark:bg-gray-500 shadow ring-0 transition duration-200 ease-in-out"
                    )}
                >
                    <span
                        className={classNames(
                            theme === "dark"
                                ? "opacity-0 ease-out duration-100"
                                : "opacity-100 ease-in duration-200",
                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                    >
                        
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-sun"
                        >
                            <circle cx="12" cy="12" r="5" />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                        </svg>
                    </span>
                    <span
                        className={classNames(
                            theme === "dark"
                                ? "opacity-100 ease-in duration-200"
                                : "opacity-0 ease-out duration-100",
                            "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12"
                            height="12"
                            viewBox="0 0 24 24"
                            
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-moon"
                        >
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                        </svg>
                    </span>
                </span>
            </Switch>
        );
    });

    return {theme, toggleTheme, ThemeSwitch};
};
