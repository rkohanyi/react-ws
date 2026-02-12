import { render, fireEvent, cleanup } from "@testing-library/react"
import { test, expect, vi, afterEach } from "vitest"
import { AddNewMovie } from "../../src/components/AddNewMovie"

afterEach(() => {
    cleanup()
    vi.clearAllMocks()
})

test("component loads with button visible", () => {
    const { getByRole } = render(<AddNewMovie onMovieAdd={vi.fn()} />)
    expect(getByRole("button")).toBeInTheDocument()
})

test("when button clicked id and title available", () => {
    const mockOnMovieAdd = vi.fn()
    const { getByText, getByLabelText } = render(<AddNewMovie onMovieAdd={mockOnMovieAdd} />)

    const button = getByText("Add new movie!")
    const movieIdInput = getByLabelText("ID")
    const movieTitleInput = getByLabelText("Title")

    fireEvent.input(movieIdInput, { target: { value: "123" } })
    fireEvent.input(movieTitleInput, { target: { value: "The Matrix" } })

    fireEvent.click(button)

    expect(mockOnMovieAdd).toHaveBeenCalledWith("123", "The Matrix")
})