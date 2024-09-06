import * as React from "react"
import Svg, { Path } from "react-native-svg"

function HomeMenuSvg(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className="size-6"
      {...props}
    >
      <Path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </Svg>
  )
}

export default HomeMenuSvg
