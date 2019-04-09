import styled from "@emotion/styled"
import Component1 from "./Component1"

const Component2 = styled("div")({
  background: "#0f0",
  display: "inline-block",
  padding: "0.5rem",
  [`& + ${Component1}`]: {
      marginLeft: "1rem"
  },
  [`${Component1} + &`]: {
      marginLeft: "1rem"
  }
})

export default Component2
