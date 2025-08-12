import { render, screen } from "@testing-library/react";
import SearchBox from "../../src/components/SearchBox";
import userEvent from "@testing-library/user-event";

describe("SearchBox", () => {
  const renderSearchBox = () => {
    const onChangeMock = vi.fn();
    render(<SearchBox onChange={onChangeMock} />);
    return {
      input: screen.getByPlaceholderText(/search/i),
      onChangeMock,
      user: userEvent.setup(),
    };
  };
  it("should render an input field for searching", () => {
    const { input } = renderSearchBox();
    expect(input).toBeInTheDocument();
  });
  it("should call onChange when typing in the input", async () => {
    const { input, onChangeMock, user } = renderSearchBox();
    const searchTerm = "Test Search";
    await user.type(input, `${searchTerm}{enter}`);
    expect(onChangeMock).toHaveBeenCalledWith(searchTerm);
  });
  it("should not call onChange if input field is empty", async () => {
    const { input, onChangeMock, user } = renderSearchBox();
    await user.type(input, "{enter}");
    expect(onChangeMock).not.toHaveBeenCalledWith();
  });
});
