import { render, screen } from "@testing-library/react"
import App from "./App"

test("requires sign in before creating a meeting", () => {
  render(<App />)
  const createMeetingButton = screen.getByRole("button", {
    name: /create meeting/i
  })

  expect(createMeetingButton).toBeDisabled()
})
