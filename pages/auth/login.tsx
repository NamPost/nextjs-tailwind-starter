import {useEffect, useRef, useState} from "react";
import {Transition} from "@headlessui/react";
import Link from "next/link";
import CustomAlertExample from "../../src/components/alerts/CustomAlertExample";
import {motion} from "framer-motion";
import {useAlert} from "../../src/hooks/useAlert";
import {useAuthentication} from "../../src/hooks/useAuthentication";
import {useRouter} from "next/router";

export default function Login() {
    const {showAlert} = useAlert();
    const {session, signIn} = useAuthentication();
    const router = useRouter();
    useEffect(() => {
        console.log("LOGIN useEffect", router);
        //Check if session is available
        if (session) {
            //check if uri is set in query
            if (router.query.uri) {
                router.push(router.query.uri as string);
            } else {
                //router.push("/home");
            }
        }
    }, []);

    return (
        <div
            className="w-full
              h-screen
              bg-gradient-to-r
              from-red-900
              via-blue-900
              to-red-700
              background-animate
              overflow-hidden"
        >
            <div className="flex min-h-full">
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <motion.div
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            duration: 0.1,
                            delay: 1,
                        }}
                        initial={{opacity: 0, scale: 0.3}}
                    >
                        <div className="mx-auto w-full max-w-sm lg:w-96 bg-white dark:bg-darklight dark:border-black p-8 rounded-sm shadow-lg">
                            <div>
                                <img
                                    className="h-12 w-auto"
                                    src="/logo_blue.png"
                                    alt="Your Company"
                                />
                                <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-600 dark:text-gray-200">
                                    Sign in to your account
                                </h2>
                                <p className="mt-2 text-sm text-gray-600"></p>
                            </div>

                            <div className="mt-8">
                                <div>
                                    <div>
                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                            Sign in with
                                        </p>

                                        <div className="mt-1 grid grid-cols-3 gap-3">
                                            <div>
                                                <a
                                                    href="#"
                                                    className="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-black dark:bg-darksolid bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                >
                                                    <span className="sr-only">
                                                        Sign in with Facebook
                                                    </span>
                                                    <svg
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>

                                            <div>
                                                <a
                                                    href="#"
                                                    className="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-black dark:bg-darksolid bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                >
                                                    <span className="sr-only">
                                                        Sign in with Twitter
                                                    </span>
                                                    <svg
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                                    </svg>
                                                </a>
                                            </div>

                                            <div>
                                                <a
                                                    href="#"
                                                    className="inline-flex w-full justify-center rounded-md border border-gray-300 dark:border-black dark:bg-darksolid bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                                                >
                                                    <span className="sr-only">
                                                        Sign in with GitHub
                                                    </span>
                                                    <svg
                                                        className="h-5 w-5"
                                                        aria-hidden="true"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative mt-6">
                                        <div
                                            className="absolute inset-0 flex items-center"
                                            aria-hidden="true"
                                        >
                                            <div className="w-full border-t border-gray-300 dark:border-black" />
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="bg-white px-2 text-gray-500 dark:bg-darklight dark:text-gray-300">
                                                Or continue with
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <form
                                        action="#"
                                        method="POST"
                                        className="space-y-6"
                                    >
                                        <div>
                                            <label
                                                htmlFor="email"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                            >
                                                Email address
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    autoComplete="email"
                                                    required
                                                    className="block w-full appearance-none rounded-md border border-gray-300 dark:border-black dark:bg-darksolid dark:text-gray-200 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-1">
                                            <label
                                                htmlFor="password"
                                                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                            >
                                                Password
                                            </label>
                                            <div className="mt-1">
                                                <input
                                                    id="password"
                                                    name="password"
                                                    type="password"
                                                    autoComplete="current-password"
                                                    required
                                                    className="block w-full appearance-none rounded-md border border-gray-300  dark:border-black dark:bg-darksolid dark:text-gray-200  px-3 py-2 placeholder-gray-400 shadow-sm focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <input
                                                    id="remember-me"
                                                    name="remember-me"
                                                    type="checkbox"
                                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                                />
                                                <label
                                                    htmlFor="remember-me"
                                                    className="ml-2 block text-sm text-gray-900"
                                                >
                                                    Remember me
                                                </label>
                                            </div>

                                            <div className="text-sm">
                                                <a
                                                    href="#"
                                                    className="font-medium text-primary hover:text-primary"
                                                >
                                                    Forgot your password?
                                                </a>
                                            </div>
                                        </div>

                                        <div>
                                            <button
                                                type="submit"
                                                className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                            >
                                                Sign in
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    animate={{opacity: 1, scale: 1}}
                    transition={{
                        duration: 0.2,
                        delay: 1,
                    }}
                    initial={{opacity: 0, scale: 0.5}}
                >
                    {/* <Transition
                    show={showText}
                    enter="transition-opacity duration-300 duration-[300ms]"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0 "
                > */}
                    <div className="relative hidden w-full flex-1 lg:flex align-middle justify-center h-screen   my-auto">
                        <div className="flex h-full justify-center m-auto justify-items-center ">
                            <div className="m-auto align-middle my-auto">
                                <h1 className=" text-4xl text-white font-thin font-sans">
                                    <span className=" font-black">EEFT</span>{" "}
                                    Portal NamPost
                                </h1>
                                <h2 className="my-auto text-3xl text-white font-thin font-sans">
                                    <span className=" font-black">Manage</span>{" "}
                                    ENCR, EEFT and Namclear streams...
                                </h2>
                                <h2 className="my-auto text-3xl text-white font-thin font-sans">
                                    <span className=" font-black">FINTeq</span>{" "}
                                    payments hub and administration...
                                </h2>
                                <div>
                                    <Link as="/home" href="/home">
                                        <button
                                            type="submit"
                                            className="flex mt-5 justify-center rounded-md border border-transparent bg-transparent  border-white py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                        >
                                            Explore The Concept
                                        </button>
                                    </Link>
                                </div>

                                <button
                                    type="submit"
                                    onClick={() =>
                                        showAlert({
                                            title: "Hey Information!",
                                            message:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                            type: "success",
                                            icon: true,
                                        })
                                    }
                                    className="flex mt-5 justify-center rounded-md border border-transparent bg-transparent  border-white py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    Show Alert with Icon
                                </button>
                                <button
                                    type="submit"
                                    onClick={() =>
                                        showAlert({
                                            id: null,
                                            show: false,
                                            title: "Hey Error!",
                                            message:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                            type: "error",
                                            icon: false,
                                            duration: 2000,
                                            action: "Ok",
                                            actionFunction: () => {},
                                        })
                                    }
                                    className="flex mt-5 justify-center rounded-md border border-transparent bg-transparent  border-white py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    Show Alert Error no Icon
                                </button>

                                <button
                                    type="submit"
                                    onClick={() =>
                                        showAlert({
                                            CustomComponent: (
                                                <CustomAlertExample />
                                            ),
                                        })
                                    }
                                    className="flex mt-5 justify-center rounded-md border border-transparent bg-transparent  border-white py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    Alert Custom Component
                                </button>

                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    onClick={() =>
                                        showAlert({
                                            id: null,
                                            show: false,
                                            title: "Hey Error!",
                                            message:
                                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                            type: "error",
                                            icon: false,
                                            duration: 2000,
                                            action: "Ok",
                                            actionFunction: () => {},
                                        })
                                    }
                                    className="flex mt-5 justify-center rounded-md border border-transparent bg-transparent  border-white py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    Motion Hover
                                </motion.button>

                                <motion.button
                                    whileHover={{scale: 1.1}}
                                    whileTap={{scale: 0.9}}
                                    onClick={() => signIn()}
                                    className="flex mt-5 justify-center rounded-md border border-transparent bg-transparent  border-white py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                                >
                                    Next Auth SignIn
                                </motion.button>

                                <div className="flex mt-5 justify-center">
                                    {session && JSON.stringify(session)}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  </Transition> */}
                </motion.div>
            </div>
        </div>
    );
}
