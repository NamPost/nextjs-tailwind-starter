// __tests__/index.test.jsx

import {render, screen} from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

// We need to mock the window object because it is not supported by jest-dom

Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});


// Simple first version of Testing Home Page / default index route

describe("Home", () => {
    it("renders the home page", () => {
        render(<Home />);
    });
    it("renders the sidebar and search box", () => {
        render(<Home />);
        //Expect logo to be in the document
        const logo = screen.getByAltText(/your company/i);
        expect(logo).toBeInTheDocument();
        //Expect Search Bar to be in the document
        const searchBar = screen.getByPlaceholderText(/search/i);
        expect(searchBar).toBeInTheDocument();
    });
    it("renders the Theme toggle", () => {
        render(<Home />);
        //Expect switch
        const switchToggle = screen.getByRole("switch", {name: /Use setting/i});
        expect(switchToggle).toBeInTheDocument();
    });
    it("renders the User Profile Picture", () => {
        render(<Home />);
        //Expect user profile picture
        const userProfile = screen.getByAltText(/User Profile/i);
        expect(userProfile).toBeInTheDocument();
    });
});
