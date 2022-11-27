import PageLayout1 from "../src/layouts/PageLayout1";
import ContentTransition from "../src/layouts/ContentTransition";

export default function Template() {
    return (
        <>
            <PageLayout1>
                <ContentTransition>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-300">
                            Template
                        </h1>
                    </div>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        {/* Replace with your content */}
                        <div className="py-4">
                            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 dark:border-black" />
                        </div>
                        {/* /End replace */}
                    </div>
                </ContentTransition>
            </PageLayout1>
        </>
    );
}
