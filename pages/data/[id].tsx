import {useEffect} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import PageLayout1 from "../../src/layouts/PageLayout1";
import ContentTransition from "../../src/layouts/ContentTransition";
import {useRouter} from "next/router";
import {BellIcon, PencilIcon, ChevronLeftIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

export async function fetchPost(id: any) {
    console.log("Gonna Fetch Post", id);

    async function asyncFetch() {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${id}`
        );
        console.log(response);
        const data = await response.json();
        return data;
    }
    const posts = await asyncFetch();

    return posts;
}

export default function DataItem() {
    const router = useRouter();
    const {id} = router.query;

    // Get Posts Query
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ["post", id],
        queryFn: () => fetchPost(id),
    });

    useEffect(() => {
        console.log(
            "+++++++++++++Single Data Item +++++++",
            id,
            router,

            data,
            error
        );
    }, []);

    return (
        <>
            <PageLayout1>
                <ContentTransition>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="flex border-white justify-between">
                            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300 ">
                                Data Item sample Page {" "}
                                {isLoading && !isError ? "Loading..." : ""}{" "}
                                Post
                            </h1>

                            <Link as="/data" href="/data">
                                <button
                                    type="button"
                                    className="inline-flex justify-center rounded-md border border-gray-300 dark:border-black bg-white dark:bg-darksolid px-4 py-2 text-sm font-medium text-gray-700 shadow-sm dark:text-gray-100 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                >
                                    <ChevronLeftIcon
                                        className="-ml-1 mr-2 h-5 w-5 text-gray-400 dark:text-gray-100"
                                        aria-hidden="true"
                                    />
                                    <span>Back</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        {/* Replace with your content */}
                        <div className="py-4">
                            {isLoading && (
                                <div className="w-10 h-10 animate-spin mx-auto"></div>
                            )}
                            {isError && (
                                <span className="text-red">
                                    {JSON.stringify(error)}
                                </span>
                            )}
                            {!isLoading && !isError && data && !data.id && (
                                <span className="text-red-400">
                                    Post Not FOund
                                </span>
                            )}
                            {!isLoading && !isError && data && data.id && (
                                <>
                                    <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6 dark:border-black mb-2">
                                        <div>
                                            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-300">
                                                {data.title}
                                            </h1>
                                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-100">
                                                #400 opened by{" "}
                                                <a
                                                    href="#"
                                                    className="font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    {data.userId}
                                                </a>{" "}
                                                in{" "}
                                                <a
                                                    href="#"
                                                    className="font-medium text-gray-900 dark:text-gray-300"
                                                >
                                                    Customer Portal
                                                </a>
                                            </p>
                                        </div>
                                        <div className="mt-4 flex space-x-3 md:mt-0">
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-gray-300 dark:border-black bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                            >
                                                <PencilIcon
                                                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span>Edit</span>
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex justify-center rounded-md border border-gray-300 dark:border-black bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                            >
                                                <BellIcon
                                                    className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                                    aria-hidden="true"
                                                />
                                                <span>Subscribe</span>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-medium text-gray-500 dark:text-gray-100">
                                            Tags
                                        </h2>
                                        <ul
                                            role="list"
                                            className="mt-2 leading-8"
                                        >
                                            <li className="inline">
                                                <a
                                                    href="#"
                                                    className="relative inline-flex items-center rounded-full border border-gray-300 dark:border-black px-3 py-0.5"
                                                >
                                                    <div className="absolute flex flex-shrink-0 items-center justify-center">
                                                        <span
                                                            className="h-1.5 w-1.5 rounded-full bg-rose-500"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div className="ml-3.5 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Bug
                                                    </div>
                                                </a>{" "}
                                            </li>
                                            <li className="inline">
                                                <a
                                                    href="#"
                                                    className="relative inline-flex items-center rounded-full border border-gray-300 dark:border-black px-3 py-0.5"
                                                >
                                                    <div className="absolute flex flex-shrink-0 items-center justify-center">
                                                        <span
                                                            className="h-1.5 w-1.5 rounded-full bg-primary"
                                                            aria-hidden="true"
                                                        />
                                                    </div>
                                                    <div className="ml-3.5 text-sm font-medium text-gray-900 dark:text-gray-300">
                                                        Accessibility
                                                    </div>
                                                </a>{" "}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="py-3 xl:pt-6 xl:pb-0">
                                        <h2 className="sr-only">Description</h2>
                                        <div className="prose max-w-none text-gray-900 dark:text-gray-300">
                                            <p>{data.body}</p>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                        {/* /End replace */}
                    </div>
                </ContentTransition>
            </PageLayout1>
        </>
    );
}
