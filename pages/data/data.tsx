import {useEffect} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import PageLayout1 from "../../src/layouts/PageLayout1";
import ContentTransition from "../../src/layouts/ContentTransition";
import Link from "next/link";


export async function fetchPosts() {
    console.log("Gonna Fetch Posts");

    async function asyncFetch() {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response);
        const data = await response.json();
        return data;
    }
    const posts = await asyncFetch();

    return posts;
}

export default function Data() {


    // Get Posts Query
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    //const route = useMatch(routeConfig.id)
    useEffect(() => {
        console.log(
            "+++++++++++++All Data: ",
            isError,
            isLoading,
            data,
            error
        );
    }, []);

    return (
        <>
            <PageLayout1>
                <ContentTransition>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 text-gray-900 dark:text-gray-300">
                        <h1 className="text-2xl font-semibold ">
                            Data Page Sample {isLoading && !isError ? "Loading..." : ""}{" "}
                            Posts
                        </h1>
                        <p>This is a page to show how data fetching works.</p>
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
                            {!isLoading && !isError && data && !data.length && (
                                <span className="text-red-400">
                                    You have no notes
                                </span>
                            )}
                            {data &&
                                data.length > 0 &&
                                data.map((note: {id: String,title: String, content: String}, index: any) => (
                                    <div
                                        key={index}
                                        className={`text-left text-gray-900 dark:text-gray-300 ${
                                            index !== data.length - 1
                                                ? "border-b pb-2 dark:border-black"
                                                : ""
                                        }`}
                                    >
                                        <h2>{note.title}</h2>
                                        <p>{note.content}</p>
                                        <span>
                                            <Link
                                                href={`/data/${note.id}`}
                                                as={`/data/${note.id}`}
                                            >
                                                <button className="link text-gray-400">
                                                    View
                                                </button>
                                            </Link>
                                        </span>
                                    </div>
                                ))}
                        </div>
                        {/* /End replace */}
                    </div>
                </ContentTransition>
            </PageLayout1>
        </>
    );
}
