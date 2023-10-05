interface Props {
  fill?: string
}
function MongoDBIcon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 80 80">
      <g clipPath="url(#clip0_222_127)">
        <path
          fill={props.fill === '#B44F22' ? `${props.fill}70` : '#C1C1C1'}
          d="M39.363-.283l2.105 3.978c.458.718.99 1.385 1.59 1.99 1.763 1.772 3.437 3.63 4.94 5.619 3.567 4.712 5.973 9.92 7.691 15.605a38.584 38.584 0 011.632 10.59c.172 10.722-3.48 19.928-10.846 27.579a31.316 31.316 0 01-3.87 3.328c-.73 0-1.075-.562-1.375-1.081-.56-.95-.903-2.034-1.075-3.112-.259-1.298-.43-2.595-.345-3.934v-.605c-.06-.154-.703-59.677-.447-59.957z"
        ></path>
        <path
          fill={props.fill}
          d="M39.364-.415c-.087-.173-.173-.042-.26.042.043.868-.258 1.642-.73 2.382-.492.733-1.202 1.297-1.89 1.902-3.82 3.328-6.828 7.348-9.236 11.845-3.205 6.051-4.856 12.537-5.325 19.365-.214 2.462.775 11.153 1.546 13.66 2.105 6.657 5.886 12.234 10.785 17.076a43.3 43.3 0 003.82 3.286c.387 0 .429-.347.493-.605.17-.552.3-1.116.387-1.686l.863-6.484-.453-60.783z"
        ></path>
        <path
          fill={props.fill}
          d="M41.469 71.04c.086-.991.559-1.815 1.074-2.636-.493-.216-.902-.645-1.203-1.124-.258-.431-.473-.95-.64-1.426-.602-1.816-.73-3.72-.903-5.575v-1.123c-.214.174-.259 1.641-.259 1.86a43.364 43.364 0 01-.773 5.836c-.13.778-.215 1.554-.69 2.246 0 .087 0 .174.04.303.775 2.292.987 4.626 1.118 7.004v.868c0 1.037-.042.819.813 1.166.345.13.73.174 1.075.43.259 0 .301-.215.301-.388l-.129-1.426v-3.979c-.041-.693.087-1.383.173-2.033l.003-.002z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_222_127">
          <path fill={props.fill} d="M0 0H80V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default MongoDBIcon
