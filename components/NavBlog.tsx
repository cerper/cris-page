import logo from "@/public/logo-a-color-1536x690.png";
import Image from "next/image";
import Link from "next/link";

const NavBlog = () => {
  return (
    <div className=" fixed top-0 z-50   flex h-[80px] w-full max-w-[1920px] items-center justify-between bg-white transition-all">
      <Link href="/">
        <Image
          src={logo}
          alt="logo de la empresa"
          width={150}
          height={70}
          className="ml-4 lg:ml-8"
        />
      </Link>{" "}
      <div className="mr-4 flex gap-4 lg:mr-8">
        <Link
          href="https://wa.link/t7ind9"
          className="transition-all duration-200 ease-in hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="60"
            viewBox="0 0 48 48"
          >
            <path
              fill="#fff"
              d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"
            ></path>
            <path
              fill="#fff"
              d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"
            ></path>
            <path
              fill="#cfd8dc"
              d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"
            ></path>
            <path
              fill="#40c351"
              d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"
            ></path>
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Link>
        <Link
          href=""
          className="transition-all duration-200 ease-in hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="60"
            height="60"
            viewBox="0 0 48 48"
          >
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1"
              cx="19.38"
              cy="42.035"
              r="44.899"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#fd5"></stop>
              <stop offset=".328" stopColor="#ff543f"></stop>
              <stop offset=".348" stopColor="#fc5245"></stop>
              <stop offset=".504" stopColor="#e64771"></stop>
              <stop offset=".643" stopColor="#d53e91"></stop>
              <stop offset=".761" stopColor="#cc39a4"></stop>
              <stop offset=".841" stopColor="#c837ab"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <radialGradient
              id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2"
              cx="11.786"
              cy="5.54"
              r="29.813"
              gradientTransform="matrix(1 0 0 .6663 0 1.849)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#4168c9"></stop>
              <stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop>
            </radialGradient>
            <path
              fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)"
              d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"
            ></path>
            <path
              fill="#fff"
              d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"
            ></path>
            <circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle>
            <path
              fill="#fff"
              d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};
export default NavBlog;
