const Coin3 = () => {
    return ( <svg
        width={45}
        height={45}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#prefix__filter0_d_33:42)">
          <circle cx={22.353} cy={18.776} r={18.023} fill="#EEE" />
          <path
            d="M14.414 23.096c0-1.952.24-3.528.72-4.728.48-1.216 1.24-2.12 2.28-2.712 1.056-.608 2.448-.96 4.176-1.056V9.488h2.112V14.6c1.6.096 2.928.44 3.984 1.032 1.072.576 1.872 1.464 2.4 2.664.528 1.184.792 2.76.792 4.728v3.6h-2.136v-3.552c0-1.584-.192-2.848-.576-3.792-.368-.944-.928-1.632-1.68-2.064-.736-.448-1.664-.712-2.784-.792v6.264H21.59v-6.264c-1.2.08-2.176.344-2.928.792-.736.448-1.272 1.144-1.608 2.088-.336.944-.504 2.192-.504 3.744v3.576h-2.136v-3.528z"
            fill="#4C37BB"
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_d_33:42"
            x={0.33}
            y={0.753}
            width={44.046}
            height={44.046}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={4} />
            <feGaussianBlur stdDeviation={2} />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_33:42" />
            <feBlend
              in="SourceGraphic"
              in2="effect1_dropShadow_33:42"
              result="shape"
            />
          </filter>
        </defs>
      </svg> );
}
 
export default Coin3;