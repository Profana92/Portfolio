interface Props {
  fill?: string
}
function FigmaIcon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 80 80">
      <g clipPath="url(#clip0_222_112)">
        <path
          fill={props.fill}
          d="M67.406-.5H11.594C4.914-.5-.5 4.915-.5 11.595v55.81c0 6.68 5.415 12.095 12.095 12.095h55.81c6.68 0 12.095-5.415 12.095-12.094V11.594C79.5 4.914 74.085-.5 67.406-.5z"
        ></path>
        <path
          fill="#2F134D"
          d="M27.5 75.5c6.624 0 12-5.376 12-12v-12h-12c-6.624 0-12 5.376-12 12s5.376 12 12 12zM15.5 39.5c0-6.624 5.376-12 12-12h12v24h-12c-6.624 0-12-5.376-12-12zM15.5 15.5c0-6.624 5.376-12 12-12h12v24h-12c-6.624 0-12-5.376-12-12zM39.5 3.5h12c6.624 0 12 5.376 12 12s-5.376 12-12 12h-12v-24zM63.5 39.5c0 6.624-5.376 12-12 12s-12-5.376-12-12 5.376-12 12-12 12 5.376 12 12z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_222_112">
          <path fill={props.fill} d="M0 0H80V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default FigmaIcon
