import Home from "../app/page";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Smoke tests", () => {
    it("Should render the Main Page", () => {
        render(<Home />);
        expect(screen.getByTestId("header")).toBeInTheDocument();
        expect(screen.getByTestId("logo")).toBeInTheDocument();
        expect(screen.getByTestId("topMenu")).toBeInTheDocument();
        expect(screen.getByTestId("topSearch")).toBeInTheDocument();
        expect(screen.getByTestId("languageLelector")).toBeInTheDocument();
        expect(screen.getByTestId("login")).toBeInTheDocument();
        expect(screen.getByTestId("signin")).toBeInTheDocument();
        expect(screen.getByTestId("heroBaner")).toBeInTheDocument();
        expect(screen.getByTestId("topStatistics")).toBeInTheDocument();
        expect(screen.getByTestId("registration")).toBeInTheDocument();
        expect(screen.getByTestId("findMentorSeaarch")).toBeInTheDocument();
        expect(screen.getByTestId("motivationLayout")).toBeInTheDocument();
        expect(screen.getByTestId("mainStatistics")).toBeInTheDocument();
        expect(screen.getByTestId("empowerLayout")).toBeInTheDocument();
        expect(screen.getByTestId("footer")).toBeInTheDocument();
        expect(screen.getByTestId("importantLinks")).toBeInTheDocument();
        expect(screen.getByTestId("subscribeLayout")).toBeInTheDocument();
    });
});