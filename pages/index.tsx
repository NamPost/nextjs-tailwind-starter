
import ContentTransition from "../src/layouts/ContentTransition";
import Link from "next/link";
import PlainAlert from "../src/components/alerts/PlainAlert";
export default function Home() {
    return (
        <>
            <ContentTransition>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                    <div className="py-4 flex justify-center">
                        <h1 className="text-2xl text-secondary font-extrabold">
                            Welcome to the{" "}
                            <span className="text-3xl text-primary">
                                NamPost
                            </span>{" "}
                            Application Boilerplate
                        </h1>
                    </div>

                    {/* Replace with your content */}
                    <div className="py-4">
                        <div className="h-96 flex justify-center justify-items-center rounded-lg border-4 border-dashed border-gray-200 dark:border-black p-5">
                            <div>
                                <img
                                    className="ml-10 h-16 w-auto"
                                    src={"/logo_blue.png"}
                                    alt="Your Company"
                                />
                                <h2 className="text-secondary">Your content Goes Here</h2>
                                <div className="flex justify-center ">
                                    <Link as="/auth/login" href="/auth/login">
                                        <button
                                            type="submit"
                                            className="flex mt-5 justify-center rounded-md border border-transparent bg-primary  border-white py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Login
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /End replace */}
                </div>
            </ContentTransition>

            <PlainAlert />
        </>
    );
}
