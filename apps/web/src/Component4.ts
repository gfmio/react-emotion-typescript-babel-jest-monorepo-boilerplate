import styled from "@emotion/styled"
import Component3 from "./Component3"

const Component4 = styled("div")({
  background: "#0ff",
  display: "inline-block",
  padding: "0.5rem",
  [`& + ${Component3}`]: {
      marginLeft: "1rem"
  },
  [`${Component3} + &`]: {
      marginLeft: "1rem"
  }
})

export default Component4
