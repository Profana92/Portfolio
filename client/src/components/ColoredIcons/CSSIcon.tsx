interface Props {
  fill?: string
}
function CSSIcon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 80 80">
      <g fillRule="evenodd" clipPath="url(#clip0_112_445)" clipRule="evenodd">
        <path fill={props.fill} d="M68.477 14.648H9.776l4.891 56.254 24.459 7.338 24.459-7.338 4.892-56.254z"></path>
        <path
          fill={props.fill}
          d="M60.394 51.336l.426-4.892.638-7.338.638-7.337.638-7.338.425-4.892H39.126v53.81l14.85-4.456 5.023-1.506.655-7.535.655-7.534.085-.982z"
        ></path>
        <path
          fill={props.fill}
          d="M31.3-.028h-8.806v10.762H31.3V7.8h-5.87V2.908h5.87V-.028zm12.718 0v2.936h-4.892l4.892 4.891v2.935h-9.784V7.8h4.892l-4.892-4.891V-.028h9.784zm12.718 0v2.936h-4.892l4.892 4.891v2.935h-9.783V7.8h4.891l-4.891-4.891V-.028h9.783z"
        ></path>
        <path
          fill="#201D22"
          d="M34.169 64.524l-2.511-.754-8.037-2.41-.655-7.535-.216-2.49h7.826l.426 4.901 2.512.754 5.612 1.683v7.338l-4.957-1.487zM21.048 31.769h18.078V24.43H20.41l.638 7.338zM39.126 58.673l8.124-2.437.426-4.9.425-4.892h-8.975v-7.338h9.613l.638-7.337H39.126V24.43h18.716l-.638 7.338-.638 7.337-.638 7.338-.425 4.892-.217 2.49-.655 7.533-8.036 2.411-7.469 2.241v-7.338zM39.126 46.444h-6.53l-.637-7.338h7.167v7.338z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_112_445">
          <path fill={props.fill} d="M0 0H80V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default CSSIcon
