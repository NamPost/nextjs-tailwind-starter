// __tests__/index.test.jsx

import {render, screen, act, waitFor} from "@testing-library/react";
import Login from "../pages/auth/login";
import "@testing-library/jest-dom";

// Simple first version of Testing Home Page / default index route

describe("Login Page", () => {
    it("renders the login page", () => {
        render(<Login />);
    });
    it("renders the login form", async () => {
        //Use Waitfor to wait until the component is fully rendered
        const {getByRole} = render(<Login/>)
        await waitFor(() => {
            const heading = getByRole("heading", {
                name: /EEFT Portal NamPost/i,
            });
            expect(heading).toBeInTheDocument();
            const logoLogin = screen.getByAltText(/your company/i);
            expect(logoLogin).toBeInTheDocument(); 
            const loginButton = getByRole("button", {
                name: /Sign in/i,
            });
            expect(loginButton).toBeInTheDocument();
        });
    });
    it("renders the login form with error", async () => {
        //This is Where we validate invalid creds and error message
    });

});
