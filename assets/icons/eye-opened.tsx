import * as React from "react"
import Svg, { Path, Circle } from "react-native-svg"
import { Colors } from "../../shared/tokens"
const EyeOpenedIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
    stroke={Colors.gray}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
  >
    <Path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <Circle cx={12} cy={12} r={3} />
  </Svg>
)
export default EyeOpenedIcon
