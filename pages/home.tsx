import PageLayout1 from "../src/layouts/PageLayout1";
import ContentTransition from "../src/layouts/ContentTransition";
import Stats from "../src/components/Stats";
import Transactions from "../src/components/Transactions";
import PlainAlert from "../src/components/alerts/PlainAlert";
import TableCheckBoxes from "../src/components/TableCheckboxes";
export default function Home() {
    return (
        <>
            <PageLayout1>
                <ContentTransition>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                        <div className="py-4">
                            <Stats />
                        </div>
                        <div className="py-4">
                            <Transactions />
                        </div>
                        <div className="py-4">
                            <TableCheckBoxes />
                        </div>
                        {/* Replace with your content */}
                        <div className="py-4">
                            <div className="h-96 rounded-lg border-4 border-dashed border-gray-200 dark:border-black" />
                        </div>
                        {/* /End replace */}
                    </div>
                </ContentTransition>
            </PageLayout1>
            <PlainAlert />
        </>
    );
}
