import styled from 'styled-components'
import * as React from 'react'

export const S1NameSvg = styled.svg`
  color: #ff8d54;
  font-weight: 900;
  font-size: 4rem;
  line-height: 10rem;
  font-family: 'DM Serif Display';
  max-width: 688px;
  margin: 3rem 7rem;
  transition-duration: 1s;
  align-self: center;

  mask {
    transition-duration: 1s;
    transition-delay: 1s;
  }

  path {
    transition-duration: 1s;
  }

  @media screen and (max-width: 1024px) {
    margin: 2rem 5rem;
  }
  @media screen and (max-width: 600px) {
    margin: 10% 5%;
  }
`
export interface S1NameState {
  screenWidth: number
}
export class S1Name extends React.PureComponent<{}, S1NameState> {
  svg: React.RefObject<SVGSVGElement>
  constructor(props: {}) {
    super(props)
    this.state = {
      screenWidth: 0,
    }
    this.svg = React.createRef()
  }

  componentDidMount() {
    addEventListener('resize', () =>
      this.setState({ screenWidth: window.innerWidth })
    )
    this.setState({ screenWidth: window.innerWidth })
  }
  render() {
    if (this.state.screenWidth < 1024)
      return (
        <S1NameSvg style={{ lineHeight: '5rem' }} as="h1">
          Hugo SALOU
        </S1NameSvg>
      )

    return (
      <S1NameSvg
        width="790"
        height="138"
        viewBox="0 0 790 138"
        fill="#ff8d54"
        xmlns="http://www.w3.org/2000/svg"
        ref={this.svg}
        className="s1-name"
      >
        <mask
          id="path-1-outside-1"
          maskUnits="userSpaceOnUse"
          x="0.996124"
          y="0.367981"
          width="789"
          height="137"
          fill="black"
        >
          <rect
            fill="white"
            x="0.996124"
            y="0.367981"
            width="789"
            height="137"
          />
          <path d="M3.99612 101V99.56L6.87613 98.408C8.79613 97.736 10.0441 96.824 10.6201 95.672C11.2921 94.52 11.6281 93.032 11.6281 91.208V15.896C11.6281 13.976 11.2921 12.44 10.6201 11.288C10.0441 10.136 8.79613 9.22398 6.87613 8.55199L3.99612 7.39998V5.95998H40.5721V7.39998L38.1241 8.40799C36.3001 9.07999 35.0521 9.99198 34.3801 11.144C33.7081 12.2 33.3721 13.688 33.3721 15.608V50.6H67.7881V15.608C67.7881 13.688 67.4521 12.2 66.7801 11.144C66.2041 9.99198 64.9561 9.07999 63.0361 8.40799L60.4441 7.39998V5.95998H97.1641V7.39998L94.2841 8.55199C92.4601 9.22398 91.2121 10.136 90.5401 11.288C89.8681 12.44 89.5321 13.976 89.5321 15.896V91.208C89.5321 93.032 89.8681 94.52 90.5401 95.672C91.2121 96.824 92.4601 97.736 94.2841 98.408L97.1641 99.56V101H60.4441V99.56L63.0361 98.696C64.9561 97.928 66.2041 97.016 66.7801 95.96C67.4521 94.808 67.7881 93.272 67.7881 91.352V53.48H33.3721V91.352C33.3721 94.904 34.9561 97.352 38.1241 98.696L40.5721 99.56V101H3.99612Z" />
          <path d="M124.835 103.16C121.091 103.16 117.635 102.44 114.467 101C111.395 99.56 108.947 97.256 107.123 94.088C105.395 90.824 104.579 86.552 104.675 81.272L105.107 44.264C105.107 42.056 104.723 40.472 103.955 39.512C103.187 38.552 101.987 37.88 100.355 37.496L98.6266 36.92V35.48L124.403 30.44L125.843 31.88L125.123 52.328V87.032C125.123 90.104 125.987 92.36 127.715 93.8C129.539 95.24 131.795 95.96 134.483 95.96C137.171 95.96 139.571 95.576 141.683 94.808C143.795 94.04 145.907 92.888 148.019 91.352L148.595 44.408C148.595 42.2 148.259 40.664 147.587 39.8C146.915 38.84 145.667 38.168 143.843 37.784L142.403 37.352V35.912L167.603 30.44L169.043 31.88L168.611 52.328V91.352C168.611 93.464 168.899 95.096 169.475 96.248C170.051 97.4 171.299 98.36 173.219 99.128L174.659 99.56V101L149.459 102.44L148.163 93.944C144.995 96.536 141.539 98.744 137.795 100.568C134.147 102.296 129.827 103.16 124.835 103.16Z" />
          <path d="M212.006 76.088C205.382 76.088 199.766 74.984 195.158 72.776V77.672C195.158 80.648 196.646 82.424 199.622 83L226.694 88.04C231.206 88.904 235.286 90.056 238.934 91.496C242.582 92.84 245.51 94.808 247.718 97.4C249.926 99.896 251.03 103.352 251.03 107.768C251.03 112.472 249.494 116.792 246.422 120.728C243.35 124.76 238.79 127.976 232.742 130.376C226.79 132.872 219.35 134.12 210.422 134.12C202.742 134.12 196.646 133.304 192.134 131.672C187.622 130.136 184.406 128.12 182.486 125.624C180.662 123.128 179.75 120.488 179.75 117.704C179.75 114.248 180.902 110.744 183.206 107.192C185.606 103.736 188.534 100.952 191.99 98.84C189.014 97.688 186.854 96.2 185.51 94.376C184.166 92.552 183.494 90.584 183.494 88.472C183.494 86.552 183.974 84.776 184.934 83.144C185.99 81.416 187.238 79.688 188.678 77.96L193.43 71.912C186.422 67.88 182.918 61.544 182.918 52.904C182.918 45.992 185.366 40.376 190.262 36.056C195.254 31.736 202.55 29.576 212.15 29.576C217.046 29.576 221.318 30.152 224.966 31.304C228.71 32.456 231.782 34.088 234.182 36.2C237.254 35.72 240.134 34.952 242.822 33.896C245.606 32.744 248.102 31.208 250.31 29.288L252.326 30.728V38.072H236.054C239.51 41.912 241.238 46.856 241.238 52.904C241.238 59.624 238.742 65.192 233.75 69.608C228.854 73.928 221.606 76.088 212.006 76.088ZM211.862 73.208C215.702 73.208 218.486 71.624 220.214 68.456C222.038 65.288 222.95 60.008 222.95 52.616C222.95 45.224 222.038 40.04 220.214 37.064C218.486 33.992 215.798 32.456 212.15 32.456C208.598 32.456 205.91 34.04 204.086 37.208C202.262 40.28 201.35 45.512 201.35 52.904C201.35 60.296 202.166 65.528 203.798 68.6C205.526 71.672 208.214 73.208 211.862 73.208ZM190.406 113.096C190.406 118.76 192.134 123.032 195.59 125.912C199.142 128.792 204.71 130.232 212.294 130.232C220.262 130.232 226.262 128.936 230.294 126.344C234.326 123.752 236.342 120.104 236.342 115.4C236.342 112.712 235.334 110.552 233.318 108.92C231.398 107.288 228.086 106.04 223.382 105.176L197.318 100.28C196.55 100.088 195.782 99.896 195.014 99.704C193.67 101.624 192.566 103.784 191.702 106.184C190.838 108.68 190.406 110.984 190.406 113.096Z" />
          <path d="M291.296 103.16C284 103.16 277.664 101.672 272.288 98.696C266.912 95.624 262.736 91.304 259.76 85.736C256.88 80.168 255.44 73.64 255.44 66.152C255.44 58.664 256.976 52.184 260.048 46.712C263.216 41.24 267.488 37.016 272.864 34.04C278.336 31.064 284.48 29.576 291.296 29.576C298.112 29.576 304.208 31.064 309.584 34.04C314.96 36.92 319.184 41.096 322.256 46.568C325.424 52.04 327.008 58.568 327.008 66.152C327.008 73.736 325.52 80.312 322.544 85.88C319.664 91.352 315.536 95.624 310.16 98.696C304.88 101.672 298.592 103.16 291.296 103.16ZM291.296 100.28C294.656 100.28 297.344 99.32 299.36 97.4C301.376 95.48 302.816 92.072 303.68 87.176C304.64 82.28 305.12 75.368 305.12 66.44C305.12 57.416 304.64 50.456 303.68 45.56C302.816 40.664 301.376 37.256 299.36 35.336C297.344 33.416 294.656 32.456 291.296 32.456C287.936 32.456 285.2 33.416 283.088 35.336C281.072 37.256 279.584 40.664 278.624 45.56C277.76 50.456 277.328 57.416 277.328 66.44C277.328 75.368 277.76 82.28 278.624 87.176C279.584 92.072 281.072 95.48 283.088 97.4C285.2 99.32 287.936 100.28 291.296 100.28Z" />
          <path d="M395.94 103.592C390.66 103.592 385.285 102.92 379.812 101.576C374.341 100.328 369.781 98.648 366.133 96.536L366.852 76.952H368.292L372.757 86.312C374.101 89 375.54 91.4 377.076 93.512C378.612 95.528 380.724 97.112 383.412 98.264C385.332 99.224 387.157 99.896 388.885 100.28C390.709 100.568 392.724 100.712 394.932 100.712C400.788 100.712 405.397 99.128 408.757 95.96C412.213 92.792 413.94 88.712 413.94 83.72C413.94 79.016 412.788 75.368 410.484 72.776C408.18 70.088 404.484 67.496 399.396 65L393.492 62.408C385.236 58.76 378.756 54.584 374.052 49.88C369.444 45.08 367.141 38.744 367.141 30.872C367.141 25.208 368.581 20.312 371.461 16.184C374.437 12.056 378.516 8.88798 383.701 6.67998C388.981 4.47198 395.125 3.36798 402.133 3.36798C407.221 3.36798 412.021 4.03999 416.533 5.38399C421.141 6.72799 425.124 8.55197 428.484 10.856L427.62 28.136H426.18L420.276 17.336C418.644 13.976 417.012 11.624 415.38 10.28C413.748 8.83998 411.877 7.83198 409.765 7.25598C408.517 6.87198 407.364 6.63198 406.308 6.53598C405.252 6.34398 403.908 6.24797 402.276 6.24797C397.38 6.24797 393.253 7.68797 389.893 10.568C386.533 13.352 384.852 17.144 384.852 21.944C384.852 26.84 386.148 30.776 388.74 33.752C391.332 36.632 395.125 39.224 400.117 41.528L406.74 44.408C415.956 48.44 422.58 52.76 426.612 57.368C430.644 61.88 432.661 67.736 432.661 74.936C432.661 83.384 429.445 90.296 423.013 95.672C416.677 100.952 407.652 103.592 395.94 103.592Z" />
          <path d="M434.261 101V99.56L437.861 98.264C439.781 97.496 441.269 96.584 442.325 95.528C443.381 94.376 444.245 92.792 444.917 90.776L474.581 5.67198H486.821L516.053 91.352C516.821 93.464 517.685 95.096 518.645 96.248C519.605 97.304 521.093 98.216 523.109 98.984L524.837 99.56V101H488.261V99.56L490.421 98.84C492.437 98.072 493.637 97.016 494.021 95.672C494.501 94.232 494.453 92.552 493.877 90.632L487.109 69.896H455.141L448.229 90.2C447.557 92.312 447.317 93.992 447.509 95.24C447.797 96.488 448.949 97.496 450.965 98.264L454.133 99.56V101H434.261ZM456.149 67.016H486.245L471.701 22.232L456.149 67.016Z" />
          <path d="M529.371 101V99.56L532.395 98.408C534.411 97.64 535.659 96.728 536.139 95.672C536.715 94.52 537.003 92.984 537.003 91.064V15.896C537.003 13.976 536.715 12.44 536.139 11.288C535.563 10.136 534.315 9.22398 532.395 8.55199L529.371 7.39998V5.95998H566.091V7.39998L563.499 8.55199C561.675 9.22398 560.427 10.184 559.755 11.432C559.083 12.584 558.747 14.12 558.747 16.04V98.12H580.923C584.475 98.12 587.067 97.256 588.699 95.528C590.427 93.8 592.059 91.304 593.595 88.04L599.211 75.944H600.651L599.355 101H529.371Z" />
          <path d="M650.24 103.592C644.384 103.592 638.72 102.536 633.248 100.424C627.872 98.312 623.024 95.192 618.704 91.064C614.48 86.84 611.12 81.608 608.624 75.368C606.128 69.128 604.88 61.832 604.88 53.48C604.88 45.224 606.128 37.976 608.624 31.736C611.12 25.496 614.528 20.312 618.848 16.184C623.168 11.96 628.016 8.79198 633.392 6.67998C638.864 4.47198 644.48 3.36798 650.24 3.36798C656.096 3.36798 661.712 4.42398 667.088 6.53598C672.56 8.55198 677.408 11.672 681.632 15.896C685.952 20.024 689.36 25.256 691.856 31.592C694.352 37.832 695.6 45.128 695.6 53.48C695.6 61.64 694.352 68.888 691.856 75.224C689.36 81.464 685.952 86.696 681.632 90.92C677.408 95.048 672.56 98.216 667.088 100.424C661.712 102.536 656.096 103.592 650.24 103.592ZM650.24 100.568C655.52 100.568 659.792 99.176 663.056 96.392C666.32 93.512 668.672 88.664 670.112 81.848C671.648 74.936 672.416 65.48 672.416 53.48C672.416 41.384 671.648 31.928 670.112 25.112C668.672 18.2 666.32 13.352 663.056 10.568C659.792 7.68797 655.52 6.24797 650.24 6.24797C645.056 6.24797 640.832 7.68797 637.568 10.568C634.304 13.352 631.904 18.2 630.368 25.112C628.928 31.928 628.208 41.384 628.208 53.48C628.208 65.48 628.928 74.936 630.368 81.848C631.904 88.664 634.304 93.512 637.568 96.392C640.832 99.176 645.056 100.568 650.24 100.568Z" />
          <path d="M744.472 103.592C737.176 103.592 730.696 102.296 725.032 99.704C719.464 97.112 715.096 93.032 711.928 87.464C708.856 81.8 707.32 74.36 707.32 65.144V15.464C707.32 11.816 705.448 9.41598 701.704 8.26398L698.536 7.39998V5.95998H738.424V7.39998L734.248 8.55199C730.696 9.41599 728.92 11.816 728.92 15.752V68.888C728.92 77.816 730.792 84.44 734.536 88.76C738.28 92.984 743.656 95.096 750.664 95.096C757.96 95.096 763.72 92.84 767.944 88.328C772.264 83.816 774.424 77.432 774.424 69.176V16.328C774.424 14.408 774.088 12.728 773.416 11.288C772.84 9.75198 771.592 8.74398 769.672 8.26398L766.072 7.39998V5.95998H786.232V7.39998L782.344 8.40799C780.52 8.79198 779.32 9.70398 778.744 11.144C778.168 12.584 777.88 14.264 777.88 16.184V68.888C777.88 75.896 776.488 82.04 773.704 87.32C770.92 92.504 767.032 96.536 762.04 99.416C757.048 102.2 751.192 103.592 744.472 103.592Z" />
        </mask>
        <path
          d="M3.99612 101V99.56L6.87613 98.408C8.79613 97.736 10.0441 96.824 10.6201 95.672C11.2921 94.52 11.6281 93.032 11.6281 91.208V15.896C11.6281 13.976 11.2921 12.44 10.6201 11.288C10.0441 10.136 8.79613 9.22398 6.87613 8.55199L3.99612 7.39998V5.95998H40.5721V7.39998L38.1241 8.40799C36.3001 9.07999 35.0521 9.99198 34.3801 11.144C33.7081 12.2 33.3721 13.688 33.3721 15.608V50.6H67.7881V15.608C67.7881 13.688 67.4521 12.2 66.7801 11.144C66.2041 9.99198 64.9561 9.07999 63.0361 8.40799L60.4441 7.39998V5.95998H97.1641V7.39998L94.2841 8.55199C92.4601 9.22398 91.2121 10.136 90.5401 11.288C89.8681 12.44 89.5321 13.976 89.5321 15.896V91.208C89.5321 93.032 89.8681 94.52 90.5401 95.672C91.2121 96.824 92.4601 97.736 94.2841 98.408L97.1641 99.56V101H60.4441V99.56L63.0361 98.696C64.9561 97.928 66.2041 97.016 66.7801 95.96C67.4521 94.808 67.7881 93.272 67.7881 91.352V53.48H33.3721V91.352C33.3721 94.904 34.9561 97.352 38.1241 98.696L40.5721 99.56V101H3.99612Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M124.835 103.16C121.091 103.16 117.635 102.44 114.467 101C111.395 99.56 108.947 97.256 107.123 94.088C105.395 90.824 104.579 86.552 104.675 81.272L105.107 44.264C105.107 42.056 104.723 40.472 103.955 39.512C103.187 38.552 101.987 37.88 100.355 37.496L98.6266 36.92V35.48L124.403 30.44L125.843 31.88L125.123 52.328V87.032C125.123 90.104 125.987 92.36 127.715 93.8C129.539 95.24 131.795 95.96 134.483 95.96C137.171 95.96 139.571 95.576 141.683 94.808C143.795 94.04 145.907 92.888 148.019 91.352L148.595 44.408C148.595 42.2 148.259 40.664 147.587 39.8C146.915 38.84 145.667 38.168 143.843 37.784L142.403 37.352V35.912L167.603 30.44L169.043 31.88L168.611 52.328V91.352C168.611 93.464 168.899 95.096 169.475 96.248C170.051 97.4 171.299 98.36 173.219 99.128L174.659 99.56V101L149.459 102.44L148.163 93.944C144.995 96.536 141.539 98.744 137.795 100.568C134.147 102.296 129.827 103.16 124.835 103.16Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M212.006 76.088C205.382 76.088 199.766 74.984 195.158 72.776V77.672C195.158 80.648 196.646 82.424 199.622 83L226.694 88.04C231.206 88.904 235.286 90.056 238.934 91.496C242.582 92.84 245.51 94.808 247.718 97.4C249.926 99.896 251.03 103.352 251.03 107.768C251.03 112.472 249.494 116.792 246.422 120.728C243.35 124.76 238.79 127.976 232.742 130.376C226.79 132.872 219.35 134.12 210.422 134.12C202.742 134.12 196.646 133.304 192.134 131.672C187.622 130.136 184.406 128.12 182.486 125.624C180.662 123.128 179.75 120.488 179.75 117.704C179.75 114.248 180.902 110.744 183.206 107.192C185.606 103.736 188.534 100.952 191.99 98.84C189.014 97.688 186.854 96.2 185.51 94.376C184.166 92.552 183.494 90.584 183.494 88.472C183.494 86.552 183.974 84.776 184.934 83.144C185.99 81.416 187.238 79.688 188.678 77.96L193.43 71.912C186.422 67.88 182.918 61.544 182.918 52.904C182.918 45.992 185.366 40.376 190.262 36.056C195.254 31.736 202.55 29.576 212.15 29.576C217.046 29.576 221.318 30.152 224.966 31.304C228.71 32.456 231.782 34.088 234.182 36.2C237.254 35.72 240.134 34.952 242.822 33.896C245.606 32.744 248.102 31.208 250.31 29.288L252.326 30.728V38.072H236.054C239.51 41.912 241.238 46.856 241.238 52.904C241.238 59.624 238.742 65.192 233.75 69.608C228.854 73.928 221.606 76.088 212.006 76.088ZM211.862 73.208C215.702 73.208 218.486 71.624 220.214 68.456C222.038 65.288 222.95 60.008 222.95 52.616C222.95 45.224 222.038 40.04 220.214 37.064C218.486 33.992 215.798 32.456 212.15 32.456C208.598 32.456 205.91 34.04 204.086 37.208C202.262 40.28 201.35 45.512 201.35 52.904C201.35 60.296 202.166 65.528 203.798 68.6C205.526 71.672 208.214 73.208 211.862 73.208ZM190.406 113.096C190.406 118.76 192.134 123.032 195.59 125.912C199.142 128.792 204.71 130.232 212.294 130.232C220.262 130.232 226.262 128.936 230.294 126.344C234.326 123.752 236.342 120.104 236.342 115.4C236.342 112.712 235.334 110.552 233.318 108.92C231.398 107.288 228.086 106.04 223.382 105.176L197.318 100.28C196.55 100.088 195.782 99.896 195.014 99.704C193.67 101.624 192.566 103.784 191.702 106.184C190.838 108.68 190.406 110.984 190.406 113.096Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M291.296 103.16C284 103.16 277.664 101.672 272.288 98.696C266.912 95.624 262.736 91.304 259.76 85.736C256.88 80.168 255.44 73.64 255.44 66.152C255.44 58.664 256.976 52.184 260.048 46.712C263.216 41.24 267.488 37.016 272.864 34.04C278.336 31.064 284.48 29.576 291.296 29.576C298.112 29.576 304.208 31.064 309.584 34.04C314.96 36.92 319.184 41.096 322.256 46.568C325.424 52.04 327.008 58.568 327.008 66.152C327.008 73.736 325.52 80.312 322.544 85.88C319.664 91.352 315.536 95.624 310.16 98.696C304.88 101.672 298.592 103.16 291.296 103.16ZM291.296 100.28C294.656 100.28 297.344 99.32 299.36 97.4C301.376 95.48 302.816 92.072 303.68 87.176C304.64 82.28 305.12 75.368 305.12 66.44C305.12 57.416 304.64 50.456 303.68 45.56C302.816 40.664 301.376 37.256 299.36 35.336C297.344 33.416 294.656 32.456 291.296 32.456C287.936 32.456 285.2 33.416 283.088 35.336C281.072 37.256 279.584 40.664 278.624 45.56C277.76 50.456 277.328 57.416 277.328 66.44C277.328 75.368 277.76 82.28 278.624 87.176C279.584 92.072 281.072 95.48 283.088 97.4C285.2 99.32 287.936 100.28 291.296 100.28Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M395.94 103.592C390.66 103.592 385.285 102.92 379.812 101.576C374.341 100.328 369.781 98.648 366.133 96.536L366.852 76.952H368.292L372.757 86.312C374.101 89 375.54 91.4 377.076 93.512C378.612 95.528 380.724 97.112 383.412 98.264C385.332 99.224 387.157 99.896 388.885 100.28C390.709 100.568 392.724 100.712 394.932 100.712C400.788 100.712 405.397 99.128 408.757 95.96C412.213 92.792 413.94 88.712 413.94 83.72C413.94 79.016 412.788 75.368 410.484 72.776C408.18 70.088 404.484 67.496 399.396 65L393.492 62.408C385.236 58.76 378.756 54.584 374.052 49.88C369.444 45.08 367.141 38.744 367.141 30.872C367.141 25.208 368.581 20.312 371.461 16.184C374.437 12.056 378.516 8.88798 383.701 6.67998C388.981 4.47198 395.125 3.36798 402.133 3.36798C407.221 3.36798 412.021 4.03999 416.533 5.38399C421.141 6.72799 425.124 8.55197 428.484 10.856L427.62 28.136H426.18L420.276 17.336C418.644 13.976 417.012 11.624 415.38 10.28C413.748 8.83998 411.877 7.83198 409.765 7.25598C408.517 6.87198 407.364 6.63198 406.308 6.53598C405.252 6.34398 403.908 6.24797 402.276 6.24797C397.38 6.24797 393.253 7.68797 389.893 10.568C386.533 13.352 384.852 17.144 384.852 21.944C384.852 26.84 386.148 30.776 388.74 33.752C391.332 36.632 395.125 39.224 400.117 41.528L406.74 44.408C415.956 48.44 422.58 52.76 426.612 57.368C430.644 61.88 432.661 67.736 432.661 74.936C432.661 83.384 429.445 90.296 423.013 95.672C416.677 100.952 407.652 103.592 395.94 103.592Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M434.261 101V99.56L437.861 98.264C439.781 97.496 441.269 96.584 442.325 95.528C443.381 94.376 444.245 92.792 444.917 90.776L474.581 5.67198H486.821L516.053 91.352C516.821 93.464 517.685 95.096 518.645 96.248C519.605 97.304 521.093 98.216 523.109 98.984L524.837 99.56V101H488.261V99.56L490.421 98.84C492.437 98.072 493.637 97.016 494.021 95.672C494.501 94.232 494.453 92.552 493.877 90.632L487.109 69.896H455.141L448.229 90.2C447.557 92.312 447.317 93.992 447.509 95.24C447.797 96.488 448.949 97.496 450.965 98.264L454.133 99.56V101H434.261ZM456.149 67.016H486.245L471.701 22.232L456.149 67.016Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M529.371 101V99.56L532.395 98.408C534.411 97.64 535.659 96.728 536.139 95.672C536.715 94.52 537.003 92.984 537.003 91.064V15.896C537.003 13.976 536.715 12.44 536.139 11.288C535.563 10.136 534.315 9.22398 532.395 8.55199L529.371 7.39998V5.95998H566.091V7.39998L563.499 8.55199C561.675 9.22398 560.427 10.184 559.755 11.432C559.083 12.584 558.747 14.12 558.747 16.04V98.12H580.923C584.475 98.12 587.067 97.256 588.699 95.528C590.427 93.8 592.059 91.304 593.595 88.04L599.211 75.944H600.651L599.355 101H529.371Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M650.24 103.592C644.384 103.592 638.72 102.536 633.248 100.424C627.872 98.312 623.024 95.192 618.704 91.064C614.48 86.84 611.12 81.608 608.624 75.368C606.128 69.128 604.88 61.832 604.88 53.48C604.88 45.224 606.128 37.976 608.624 31.736C611.12 25.496 614.528 20.312 618.848 16.184C623.168 11.96 628.016 8.79198 633.392 6.67998C638.864 4.47198 644.48 3.36798 650.24 3.36798C656.096 3.36798 661.712 4.42398 667.088 6.53598C672.56 8.55198 677.408 11.672 681.632 15.896C685.952 20.024 689.36 25.256 691.856 31.592C694.352 37.832 695.6 45.128 695.6 53.48C695.6 61.64 694.352 68.888 691.856 75.224C689.36 81.464 685.952 86.696 681.632 90.92C677.408 95.048 672.56 98.216 667.088 100.424C661.712 102.536 656.096 103.592 650.24 103.592ZM650.24 100.568C655.52 100.568 659.792 99.176 663.056 96.392C666.32 93.512 668.672 88.664 670.112 81.848C671.648 74.936 672.416 65.48 672.416 53.48C672.416 41.384 671.648 31.928 670.112 25.112C668.672 18.2 666.32 13.352 663.056 10.568C659.792 7.68797 655.52 6.24797 650.24 6.24797C645.056 6.24797 640.832 7.68797 637.568 10.568C634.304 13.352 631.904 18.2 630.368 25.112C628.928 31.928 628.208 41.384 628.208 53.48C628.208 65.48 628.928 74.936 630.368 81.848C631.904 88.664 634.304 93.512 637.568 96.392C640.832 99.176 645.056 100.568 650.24 100.568Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
        <path
          d="M744.472 103.592C737.176 103.592 730.696 102.296 725.032 99.704C719.464 97.112 715.096 93.032 711.928 87.464C708.856 81.8 707.32 74.36 707.32 65.144V15.464C707.32 11.816 705.448 9.41598 701.704 8.26398L698.536 7.39998V5.95998H738.424V7.39998L734.248 8.55199C730.696 9.41599 728.92 11.816 728.92 15.752V68.888C728.92 77.816 730.792 84.44 734.536 88.76C738.28 92.984 743.656 95.096 750.664 95.096C757.96 95.096 763.72 92.84 767.944 88.328C772.264 83.816 774.424 77.432 774.424 69.176V16.328C774.424 14.408 774.088 12.728 773.416 11.288C772.84 9.75198 771.592 8.74398 769.672 8.26398L766.072 7.39998V5.95998H786.232V7.39998L782.344 8.40799C780.52 8.79198 779.32 9.70398 778.744 11.144C778.168 12.584 777.88 14.264 777.88 16.184V68.888C777.88 75.896 776.488 82.04 773.704 87.32C770.92 92.504 767.032 96.536 762.04 99.416C757.048 102.2 751.192 103.592 744.472 103.592Z"
          stroke="#FF8D54"
          strokeWidth="6"
          mask="url(#path-1-outside-1)"
        />
      </S1NameSvg>
    )
  }
}

export const S1Menu = styled.ul`
  font-family: 'Fira Code', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: normal;
  font-size: 1.52rem;
  line-height: 2.52rem;
  list-style: none;

  li {
    transform: translateX(0);
  }

  a {
    text-decoration: none;
    color: #ff536f;
    background: linear-gradient(
        to top,
        #ff536f 0%,
        #ff536f 6%,
        transparent 6.01%
      )
      no-repeat left bottom / 0 100%;
    text-decoration: none;
    transition: background-size 0.5s;

    &:hover {
      background-size: 100% 100%;
    }
  }
`
export const S1MenuItem = styled.li``
export const S1Icons = styled.div`
  font-size: 6rem;
  svg {
    padding: 1rem 0;
    margin: 0.15rem;
    fill: #f44336;
    transition-duration: 1s;
    border-radius: 10px;
    &:hover {
      fill: #e4e4e4;
      background-color: #f44336;
    }
  }
`
export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
`
export const S1Content = styled.div`
  padding-top: 25vh;
  display: flex;
  justify-content: space-around;
  text-align: left;
  align-items: center;
  @media screen and (max-width: 1024px) {
    text-align: center;
    flex-direction: column;
    padding-top: 0;
  }
`
