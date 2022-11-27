import {useEffect} from "react";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import PageLayout1 from "../../layouts/PageLayout1";
import ContentTransition from "../../layouts/ContentTransition";
import {useMatch} from "@tanstack/react-router";
import { routeConfig } from "../../routes/router";

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

    const { Link } = useMatch('/data')
    // Get Posts Query
    const {isLoading, isError, data, error} = useQuery({
        queryKey: ["posts"],
        queryFn: fetchPosts,
    });
    //const route = useMatch(routeConfig.id)
    useEffect(() => {
        console.log(
            "+++++++++++++++++++++++++++++++++++++++++++",
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
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">
                            Data {isLoading && !isError ? "Loading..." : ""}{" "}
                            Posts
                        </h1>
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
                                        className={`text-left ${
                                            index !== data.length - 1
                                                ? "border-b pb-2"
                                                : ""
                                        }`}
                                    >
                                        <h2>{note.title}</h2>
                                        <p>{note.content}</p>
                                        <span>
                                            <Link
                                                to="/data/$id"
                                                params={{
                                                    id: `${note.id}`,
                                                }}
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
