interface Props {
  fill?: string
}
function HTMLIcon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 80 80">
      <g fillRule="evenodd" clipPath="url(#clip0_112_438)" clipRule="evenodd">
        <path
          fill={props.fill}
          d="M68.673 14.679H9.893l4.9 56.375 24.49 7.353 24.491-7.353 4.899-56.375zM16.75-.027v10.784h2.939V6.836h3.919v3.921h2.939V-.027h-2.94v3.921H19.69V-.027h-2.939zM40.263-.027v10.784h2.939V4.875l2.449 3.922L48.1 4.875v5.882h2.939V-.027h-2.94l-2.448 3.431L43.2-.027h-2.938zm12.735 0v10.784h8.817V7.816h-5.878V-.027h-2.939z"
        ></path>
        <path
          fill="#201D22"
          d="M31.805 63.907l-8.047-2.416-.657-7.55-.216-2.496h7.837l.427 4.911 8.134 2.443v7.353l-7.478-2.245zm7.478-32.07H29.018l.64 7.353h9.625v7.354H22.459l-.639-7.354-.64-7.353-.638-7.354h18.741v7.354z"
        ></path>
        <path
          fill={props.fill}
          d="M60.58 51.445l.426-4.902.639-7.353.639-7.353.639-7.354.425-4.902H39.283v53.924l14.87-4.464 5.03-1.51.655-7.55.656-7.55.086-.986z"
        ></path>
        <path fill={props.fill} d="M28.507-.027v2.94h3.429v7.844h2.939V2.914h3.428V-.027h-9.796z"></path>
        <path
          fill="#201D22"
          d="M39.283 31.837h18.102l.64-7.354H39.282v7.354zm8.987 14.706h-8.987V39.19h17.464l-.64 7.353-.425 4.903-.217 2.494-.656 7.55-8.047 2.416-7.479 2.246v-7.353l8.135-2.443.427-4.91.425-4.903z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_112_438">
          <path fill={props.fill} d="M0 0H80V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default HTMLIcon
