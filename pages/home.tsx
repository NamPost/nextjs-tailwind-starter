import PageLayout1 from "../src/layouts/PageLayout1";
import ContentTransition from "../src/layouts/ContentTransition";
import Stats from "../src/components/Stats";
import Transactions from "../src/components/Transactions";
import TableCheckBoxes from "../src/components/TableCheckboxes";
//UseAuthentication Hook for Auth Pages
import {useAuthentication} from "../src/hooks/useAuthentication";


export default function Home() {
    //Use Session Hook, Required on Authenticated Pages
    const {session, status, accessScreen} = useAuthentication();

    //Check if Session is active, if not redirect to login page
    accessScreen();

    //Is authenticated, show page
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
        </>
    );
}
