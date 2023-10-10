interface Props {
  fill?: string
}
function TypeScriptIcon(props: Props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none" viewBox="0 0 80 80">
      <g clipPath="url(#clip0_112_456)">
        <path
          fill={props.fill}
          d="M68 0H12C5.373 0 0 5.373 0 12v56c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V12c0-6.627-5.373-12-12-12z"
        ></path>
        <path
          fill="#201D22"
          fillRule="evenodd"
          d="M44.73 36.233l-13.871-.037c-7.622-.013-13.909.012-13.947.063-.05.038-.088 1.511-.088 3.275v3.188h10.331v29.354h7.307V42.722h10.331l-.026-3.25-.037-3.239zm12.649-.252c-4.309.82-7.295 3.578-8.139 7.534-.24 1.134-.164 3.944.139 5.065.365 1.348 1.247 2.96 2.179 3.969 1.613 1.738 3.376 2.834 7.471 4.598 3.578 1.55 4.838 2.293 5.455 3.175.479.693.592 1.096.592 2.015 0 1.02-.302 1.714-1.033 2.382-1.713 1.537-5.19 1.726-7.723.39-.882-.466-2.343-1.864-3.01-2.885l-.48-.705-2.28 1.322-2.948 1.701c-.365.214-.693.416-.73.466-.089.152 1.335 2.255 2.066 3.062 1.864 2.066 4.888 3.64 8.075 4.208 1.462.264 4.687.302 6.047.063 4.397-.744 7.522-2.986 8.781-6.287 1.147-3.036.769-7.118-.92-9.676-1.511-2.292-3.942-3.905-9.624-6.35-3.087-1.335-4.07-1.99-4.599-3.086-.252-.504-.34-.87-.34-1.486-.012-2.104 1.537-3.364 3.943-3.2 1.638.113 2.71.755 3.73 2.242.34.504.642.832.718.781 2.09-1.298 5.543-3.616 5.518-3.716-.089-.34-1.172-1.764-1.903-2.545-1.41-1.462-2.948-2.356-4.964-2.86-1.373-.34-4.623-.441-6.021-.177z"
          clipRule="evenodd"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_112_456">
          <path fill={props.fill} d="M0 0H80V80H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}

export default TypeScriptIcon
