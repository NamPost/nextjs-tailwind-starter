import {useEffect} from "react";
import {useSession, signIn, signOut} from "next-auth/react";
import {useRouter} from "next/router";
import {useAlert} from "./useAlert";
import Login from "../../pages/auth/login";

export const useAuthentication = () => {
    //Use Session Hook, Required on Authenticated Pages
    const {data: session, status} = useSession();
    //Use Router for Redirecting
    //const router = useRouter();
    const {showAlert} = useAlert();

    useEffect(() => {
        console.log("useAuthentication: ", session, status);
        if (!session && status === "unauthenticated") {
            // //No Session Present, Keep URL Structure, Show Login Screen
            // router.push(
            //     `/auth/login?error=Please login to access&uri=${router.asPath}`
            // );
            showAlert({
                title: "Unauthorized!",
                message: "Please login to access this data.",
                type: "error",
                icon: true,
                duration: 2500,
            });
        }
    }, []);


    const accessScreen = () => {

        //Check if Session is active, if not redirect to login page
        if (!session && status !== "loading") {
            //No Session Present, Keep URL Structure, Show Login Screen
            return <Login />;
        }else{
            return
        }
    }

    return {
        status,
        session,
        signIn,
        signOut,
        accessScreen
    };
};
