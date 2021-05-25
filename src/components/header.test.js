import react from "react"
import { render } from "@testing-library/react"
import header from "./header"

test("render contents", () => {
  const component = render(<header />)
  console.log(component)
})
