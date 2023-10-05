interface Props {
  fill?: string
}
function NGINXIcon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 80 80">
      <g clipPath="url(#clip0_112_373)">
        <path fill="#201D22" fillRule="evenodd" d="M13.5 16.5h53v44h-53v-44z" clipRule="evenodd"></path>
        <path
          fill={props.fill}
          d="M74.312 59.024V19.342L39.562-.5 4.813 19.342v39.682l34.75 19.843 34.75-19.843zM28.43 54.359a4.24 4.24 0 01-4.255 4.265h-.256c-2.41 0-4.31-1.984-4.31-4.265V24.005c0-2.332 2.101-4.267 5.012-4.267 2.157 0 4.614.843 6.118 2.678L50.696 46.03V24.005c0-2.385 2.004-4.267 4.311-4.267h.254c2.406 0 4.31 1.984 4.31 4.267V54.36h.05c0 2.331-2.156 4.266-5.109 4.266-2.108 0-4.517-.842-6.019-2.675L28.43 32.335v22.025z"
        ></path>
        <path
          fill="#201D22"
          d="M24.619 19.738c-2.907 0-5.013 1.936-5.013 4.265v30.353c0 2.285 1.904 4.268 4.312 4.268h.254a4.24 4.24 0 004.258-4.268v-22.02L39.561 45.44V32.857l-8.821-10.44c-1.507-1.837-3.962-2.679-6.121-2.679z"
        ></path>
        <path
          fill={props.fill === '#B44F22' ? `${props.fill}70` : '#C1C1C1'}
          d="M39.563-.5L4.813 19.342v39.682l34.75 19.843V45.439L28.429 32.334v22.025a4.24 4.24 0 01-4.255 4.265h-.256c-2.41 0-4.31-1.984-4.31-4.265V24.005c0-2.332 2.101-4.267 5.012-4.267 2.157 0 4.614.843 6.118 2.678l8.825 10.44V-.5z"
        ></path>
        <path
          fill="#201D22"
          d="M54.675 58.656c2.943 0 5.075-1.943 5.075-4.28V23.908c0-2.293-1.928-4.284-4.366-4.284h-.257c-2.385 0-4.312 1.884-4.312 4.284v22.103l-11.27-13.153v12.63l8.932 10.478c1.525 1.844 4.011 2.69 6.198 2.69z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_112_373">
          <path fill={props.fill} d="M0 0H80V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default NGINXIcon
