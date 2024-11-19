"use client";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-96 bg-slate-100 text-black transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button
        className="text-2xl font-bold w-[87%] m-4 text-right"
        onClick={toggleSidebar}
      >
        ✕
      </button>
      <nav className="flex flex-col mt-10">
        <Link href="/" className="mx-5 text-blue-400 my-2">
          Home
        </Link>
        <a href="#" className="mx-5 hover:text-blue-400  my-2">
          Stock Market
        </a>
        <a href="#" className="mx-5 hover:text-blue-400 my-2">
          Technology
        </a>
        <a href="#" className="mx-5 hover:text-blue-400 my-2">
          Politics
        </a>
        <a href="#" className="mx-5 hover:text-blue-400 my-2">
          Automobile
        </a>
        <a href="#" className="mx-5 hover:text-blue-400 my-2">
          Health
        </a>
        <a href="#" className="mx-5 hover:text-blue-400 my-2">
          Interactive Sessions
        </a>
      </nav>
    </div>
  );
};

const Responsive = ({ toggleSidebar }) => {
  return (
    <div className="flex justify-between items-center p-3">
      <a href="#" className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="197"
          height="24"
          viewBox="0 0 197 24"
          fill="none"
        >
          <path
            d="M0.63125 23V20.888C1.12192 20.8667 1.52725 20.8027 1.84725 20.696C2.18858 20.5893 2.44458 20.344 2.61525 19.96C2.80725 19.576 2.90325 18.9573 2.90325 18.104V5.848C2.90325 5.272 2.91392 4.71733 2.93525 4.184C2.97792 3.65067 3.00992 3.24533 3.03125 2.968C2.68992 2.98933 2.26325 3.01067 1.75125 3.032C1.23925 3.032 0.865917 3.04267 0.63125 3.064V0.599998C2.10325 0.578665 3.57525 0.567999 5.04725 0.567999C6.54058 0.567999 8.02325 0.557332 9.49525 0.535999C12.0553 0.514666 14.0819 0.994666 15.5753 1.976C17.0899 2.936 17.7939 4.39733 17.6873 6.36C17.6233 7.27733 17.2179 8.16267 16.4713 9.016C15.7246 9.848 14.5939 10.4667 13.0793 10.872V10.904C15.2126 11.2453 16.7806 11.96 17.7833 13.048C18.7859 14.1147 19.2873 15.3093 19.2873 16.632C19.2873 18.0187 18.9459 19.192 18.2633 20.152C17.6019 21.0907 16.6846 21.8053 15.5113 22.296C14.3379 22.7653 13.0046 23 11.5113 23H0.63125ZM7.54325 10.424L9.20725 10.392C10.5513 10.3493 11.4793 9.92267 11.9913 9.112C12.5246 8.28 12.7913 7.27733 12.7913 6.104C12.7913 5.25067 12.6206 4.58933 12.2793 4.12C11.9379 3.62933 11.5113 3.27733 10.9993 3.064C10.4873 2.85067 9.95392 2.75467 9.39925 2.776C9.05792 2.776 8.74858 2.82933 8.47125 2.936C8.19392 3.04267 7.96992 3.288 7.79925 3.672C7.62858 4.03467 7.54325 4.632 7.54325 5.464V10.424ZM7.41525 20.728C7.96992 20.728 8.50325 20.728 9.01525 20.728C9.52725 20.728 10.0286 20.7173 10.5193 20.696C11.8206 20.632 12.7699 20.216 13.3673 19.448C13.9646 18.68 14.2633 17.7093 14.2633 16.536C14.2633 15.5547 14.0606 14.7867 13.6553 14.232C13.2499 13.656 12.7273 13.2507 12.0873 13.016C11.4686 12.7813 10.8179 12.664 10.1353 12.664C9.60192 12.664 9.14325 12.664 8.75925 12.664C8.37525 12.664 7.96992 12.6747 7.54325 12.696V17.912C7.54325 18.488 7.53258 19.032 7.51125 19.544C7.48992 20.056 7.45792 20.4507 7.41525 20.728ZM30.016 2.712C29.5467 2.73333 29.1413 2.79733 28.8 2.904C28.4587 3.01067 28.192 3.256 28 3.64C27.8293 4.00267 27.744 4.62133 27.744 5.496V14.296C27.744 16.0667 27.9893 17.4427 28.48 18.424C28.9707 19.384 29.6 20.056 30.368 20.44C31.1573 20.824 31.9787 21.0373 32.832 21.08C34.6027 21.144 35.9787 20.6107 36.96 19.48C37.9413 18.3493 38.432 16.6 38.432 14.232V5.848C38.432 5.272 38.4427 4.71733 38.464 4.184C38.4853 3.65067 38.5173 3.24533 38.56 2.968C38.2187 2.98933 37.7813 3.01067 37.248 3.032C36.736 3.032 36.3627 3.04267 36.128 3.064V0.599998H43.552V2.712C43.0827 2.73333 42.6773 2.79733 42.336 2.904C41.9947 3.01067 41.728 3.256 41.536 3.64C41.3653 4.00267 41.28 4.62133 41.28 5.496V13.496C41.28 15.9493 40.8853 17.912 40.096 19.384C39.328 20.8347 38.2613 21.8907 36.896 22.552C35.552 23.192 34.0267 23.512 32.32 23.512C30.528 23.512 29.0347 23.256 27.84 22.744C26.6453 22.232 25.696 21.5173 24.992 20.6C24.3093 19.6827 23.8187 18.6267 23.52 17.432C23.2427 16.2373 23.104 14.9573 23.104 13.592V5.848C23.104 5.272 23.1147 4.71733 23.136 4.184C23.1787 3.65067 23.2107 3.24533 23.232 2.968C22.8907 2.98933 22.464 3.01067 21.952 3.032C21.44 3.032 21.0667 3.04267 20.832 3.064V0.599998H30.016V2.712ZM58.8405 7.768C58.5632 5.99733 57.9445 4.65333 56.9845 3.736C56.0245 2.81867 54.7978 2.37067 53.3045 2.392C52.3872 2.392 51.5765 2.648 50.8725 3.16C50.1898 3.672 49.8485 4.33333 49.8485 5.144C49.8485 6.12533 50.2752 6.936 51.1285 7.576C51.9818 8.216 53.2832 8.89867 55.0325 9.624C55.8432 9.944 56.6752 10.3173 57.5285 10.744C58.3818 11.1707 59.1712 11.6827 59.8965 12.28C60.6218 12.856 61.2085 13.5387 61.6565 14.328C62.1045 15.096 62.3285 16.0027 62.3285 17.048C62.3285 18.3067 61.9872 19.4267 61.3045 20.408C60.6218 21.3893 59.6618 22.1573 58.4245 22.712C57.2085 23.2453 55.7792 23.512 54.1365 23.512C53.2832 23.512 52.3552 23.3733 51.3525 23.096C50.3712 22.84 49.4432 22.456 48.5685 21.944L48.6645 23.288H46.2005V15.8H48.3125C48.6112 17.592 49.2938 18.9467 50.3605 19.864C51.4485 20.76 52.7392 21.208 54.2325 21.208C55.3632 21.208 56.2805 20.9093 56.9845 20.312C57.7098 19.7147 58.0725 19.0107 58.0725 18.2C58.0725 17.4533 57.8058 16.8347 57.2725 16.344C56.7605 15.8533 56.1098 15.4373 55.3205 15.096C54.5525 14.7547 53.7632 14.424 52.9525 14.104C51.5872 13.5493 50.3498 12.9307 49.2405 12.248C48.1525 11.544 47.2885 10.712 46.6485 9.752C46.0085 8.77067 45.6885 7.58667 45.6885 6.2C45.6885 5.53867 45.8165 4.856 46.0725 4.152C46.3285 3.42667 46.7445 2.76533 47.3205 2.168C47.8965 1.54933 48.6645 1.048 49.6245 0.664C50.5845 0.279999 51.7685 0.0879993 53.1765 0.0879993C54.0298 0.0879993 54.9578 0.215999 55.9605 0.471998C56.9845 0.727999 57.8592 1.112 58.5845 1.624L58.4565 0.311998H60.9525V7.768H58.8405ZM74.2215 2.712C73.7522 2.73333 73.3468 2.79733 73.0055 2.904C72.6642 3.01067 72.3975 3.256 72.2055 3.64C72.0348 4.00267 71.9495 4.62133 71.9495 5.496V17.752C71.9495 18.328 71.9388 18.8827 71.9175 19.416C71.8962 19.9493 71.8642 20.3547 71.8215 20.632C72.1628 20.5893 72.5895 20.568 73.1015 20.568C73.6348 20.5467 74.0082 20.536 74.2215 20.536V23H65.0375V20.888C65.5282 20.8667 65.9335 20.8027 66.2535 20.696C66.5948 20.5893 66.8508 20.344 67.0215 19.96C67.2135 19.576 67.3095 18.9573 67.3095 18.104V5.848C67.3095 5.272 67.3202 4.71733 67.3415 4.184C67.3842 3.65067 67.4162 3.24533 67.4375 2.968C67.0962 2.98933 66.6695 3.01067 66.1575 3.032C65.6455 3.032 65.2722 3.04267 65.0375 3.064V0.599998H74.2215V2.712ZM94.4365 23.32L84.1965 10.232C83.9192 9.86933 83.6312 9.48533 83.3325 9.08C83.0338 8.67467 82.7352 8.25867 82.4365 7.832H82.4045L82.4685 17.752C82.4685 18.328 82.4578 18.8827 82.4365 19.416C82.4152 19.9493 82.3832 20.3547 82.3405 20.632C82.6818 20.5893 83.1085 20.568 83.6205 20.568C84.1538 20.5467 84.5272 20.536 84.7405 20.536V23H77.4445V20.888C77.9352 20.8667 78.3405 20.8027 78.6605 20.696C79.0018 20.5893 79.2578 20.344 79.4285 19.96C79.6205 19.576 79.7165 18.9573 79.7165 18.104L79.6525 5.848C79.6525 5.272 79.6632 4.71733 79.6845 4.184C79.7058 3.65067 79.7378 3.24533 79.7805 2.968C79.4392 2.98933 79.0018 3.01067 78.4685 3.032C77.9565 3.032 77.5832 3.04267 77.3485 3.064V0.599998H82.3725L92.1645 12.952C92.6978 13.6347 93.1352 14.2213 93.4765 14.712C93.8392 15.2027 94.1485 15.6293 94.4045 15.992H94.4365V5.848C94.4365 5.272 94.4472 4.71733 94.4685 4.184C94.4898 3.65067 94.5112 3.24533 94.5325 2.968C94.1912 2.98933 93.7645 3.01067 93.2525 3.032C92.7405 3.032 92.3672 3.04267 92.1325 3.064V0.599998H99.4285V2.712C98.9592 2.73333 98.5538 2.79733 98.2125 2.904C97.8712 3.01067 97.6045 3.256 97.4125 3.64C97.2418 4.00267 97.1565 4.62133 97.1565 5.496V23.32H94.4365ZM113.043 15.288C113.043 14.392 112.904 13.752 112.627 13.368C112.349 12.9627 111.965 12.7067 111.475 12.6C111.005 12.4933 110.483 12.4507 109.907 12.472L109.075 12.504V17.752C109.075 18.328 109.064 18.872 109.043 19.384C109.021 19.896 108.989 20.2907 108.947 20.568H113.235C113.875 20.568 114.493 20.4293 115.091 20.152C115.688 19.8533 116.179 19.3733 116.562 18.712C116.947 18.0293 117.139 17.112 117.139 15.96H119.219L119.059 23H102.163V20.888C102.653 20.8667 103.059 20.8027 103.379 20.696C103.72 20.5893 103.976 20.344 104.147 19.96C104.339 19.576 104.435 18.9573 104.435 18.104V5.848C104.435 5.272 104.445 4.71733 104.467 4.184C104.509 3.65067 104.541 3.24533 104.562 2.968C104.221 2.98933 103.795 3.01067 103.283 3.032C102.771 3.032 102.397 3.04267 102.163 3.064V0.599998H118.163L118.355 6.808H116.243C116.243 5.63467 116.04 4.74933 115.635 4.152C115.229 3.55467 114.728 3.16 114.131 2.968C113.533 2.75467 112.947 2.65867 112.371 2.68L111.219 2.712C110.771 2.712 110.387 2.776 110.067 2.904C109.747 3.01067 109.501 3.26667 109.331 3.672C109.16 4.056 109.075 4.664 109.075 5.496V10.296H112.819L112.691 7.512H115.155V15.288H113.043ZM135.059 7.768C134.782 5.99733 134.163 4.65333 133.203 3.736C132.243 2.81867 131.017 2.37067 129.523 2.392C128.606 2.392 127.795 2.648 127.091 3.16C126.409 3.672 126.067 4.33333 126.067 5.144C126.067 6.12533 126.494 6.936 127.347 7.576C128.201 8.216 129.502 8.89867 131.251 9.624C132.062 9.944 132.894 10.3173 133.747 10.744C134.601 11.1707 135.39 11.6827 136.115 12.28C136.841 12.856 137.427 13.5387 137.875 14.328C138.323 15.096 138.547 16.0027 138.547 17.048C138.547 18.3067 138.206 19.4267 137.523 20.408C136.841 21.3893 135.881 22.1573 134.643 22.712C133.427 23.2453 131.998 23.512 130.355 23.512C129.502 23.512 128.574 23.3733 127.571 23.096C126.59 22.84 125.662 22.456 124.787 21.944L124.883 23.288H122.419V15.8H124.531C124.83 17.592 125.513 18.9467 126.579 19.864C127.667 20.76 128.958 21.208 130.451 21.208C131.582 21.208 132.499 20.9093 133.203 20.312C133.929 19.7147 134.291 19.0107 134.291 18.2C134.291 17.4533 134.025 16.8347 133.491 16.344C132.979 15.8533 132.329 15.4373 131.539 15.096C130.771 14.7547 129.982 14.424 129.171 14.104C127.806 13.5493 126.569 12.9307 125.459 12.248C124.371 11.544 123.507 10.712 122.867 9.752C122.227 8.77067 121.907 7.58667 121.907 6.2C121.907 5.53867 122.035 4.856 122.291 4.152C122.547 3.42667 122.963 2.76533 123.539 2.168C124.115 1.54933 124.883 1.048 125.843 0.664C126.803 0.279999 127.987 0.0879993 129.395 0.0879993C130.249 0.0879993 131.177 0.215999 132.179 0.471998C133.203 0.727999 134.078 1.112 134.803 1.624L134.675 0.311998H137.171V7.768H135.059ZM154.184 7.768C153.907 5.99733 153.288 4.65333 152.328 3.736C151.368 2.81867 150.142 2.37067 148.648 2.392C147.731 2.392 146.92 2.648 146.216 3.16C145.534 3.672 145.192 4.33333 145.192 5.144C145.192 6.12533 145.619 6.936 146.472 7.576C147.326 8.216 148.627 8.89867 150.376 9.624C151.187 9.944 152.019 10.3173 152.872 10.744C153.726 11.1707 154.515 11.6827 155.24 12.28C155.966 12.856 156.552 13.5387 157 14.328C157.448 15.096 157.672 16.0027 157.672 17.048C157.672 18.3067 157.331 19.4267 156.648 20.408C155.966 21.3893 155.006 22.1573 153.768 22.712C152.552 23.2453 151.123 23.512 149.48 23.512C148.627 23.512 147.699 23.3733 146.696 23.096C145.715 22.84 144.787 22.456 143.912 21.944L144.008 23.288H141.544V15.8H143.656C143.955 17.592 144.638 18.9467 145.704 19.864C146.792 20.76 148.083 21.208 149.576 21.208C150.707 21.208 151.624 20.9093 152.328 20.312C153.054 19.7147 153.416 19.0107 153.416 18.2C153.416 17.4533 153.15 16.8347 152.616 16.344C152.104 15.8533 151.454 15.4373 150.664 15.096C149.896 14.7547 149.107 14.424 148.296 14.104C146.931 13.5493 145.694 12.9307 144.584 12.248C143.496 11.544 142.632 10.712 141.992 9.752C141.352 8.77067 141.032 7.58667 141.032 6.2C141.032 5.53867 141.16 4.856 141.416 4.152C141.672 3.42667 142.088 2.76533 142.664 2.168C143.24 1.54933 144.008 1.048 144.968 0.664C145.928 0.279999 147.112 0.0879993 148.52 0.0879993C149.374 0.0879993 150.302 0.215999 151.304 0.471998C152.328 0.727999 153.203 1.112 153.928 1.624L153.8 0.311998H156.296V7.768H154.184ZM160.381 23V20.888C160.872 20.8667 161.277 20.8027 161.597 20.696C161.939 20.5893 162.195 20.344 162.365 19.96C162.557 19.576 162.653 18.9573 162.653 18.104V5.848C162.653 5.272 162.664 4.71733 162.685 4.184C162.728 3.65067 162.76 3.24533 162.781 2.968C162.44 2.98933 162.013 3.01067 161.501 3.032C160.989 3.032 160.616 3.04267 160.381 3.064V0.599998H169.565V2.712C169.096 2.73333 168.691 2.79733 168.349 2.904C168.008 3.01067 167.741 3.256 167.549 3.64C167.379 4.00267 167.293 4.62133 167.293 5.496V17.752C167.293 18.328 167.283 18.872 167.261 19.384C167.24 19.896 167.208 20.2907 167.165 20.568H171.453C172.712 20.5467 173.693 20.1093 174.397 19.256C175.123 18.3813 175.485 17.0693 175.485 15.32H177.629L177.437 23H160.381ZM182.121 23V20.888C182.612 20.8667 183.017 20.8027 183.337 20.696C183.678 20.5893 183.934 20.344 184.105 19.96C184.297 19.576 184.393 18.9573 184.393 18.104V15.32L178.505 6.008C178.206 5.51733 177.929 4.97333 177.673 4.376C177.417 3.77867 177.289 3.30933 177.289 2.968C176.948 2.98933 176.66 3.01067 176.425 3.032C176.19 3.032 175.956 3.04267 175.721 3.064V0.599998H185.161V2.712C184.244 2.648 183.572 2.82933 183.145 3.256C182.718 3.66133 182.761 4.30133 183.273 5.176L185.705 9.176C185.812 9.34667 185.972 9.624 186.185 10.008C186.398 10.3707 186.612 10.7653 186.825 11.192C187.06 11.5973 187.23 11.96 187.337 12.28H187.369C187.476 12.024 187.657 11.64 187.913 11.128C188.169 10.616 188.489 9.95467 188.873 9.144L190.537 5.88C190.644 5.64533 190.793 5.34667 190.985 4.984C191.177 4.6 191.38 4.22667 191.593 3.864C191.828 3.48 192.041 3.17067 192.233 2.936C191.892 2.95733 191.454 2.97867 190.921 3C190.388 3.02133 190.004 3.04267 189.769 3.064V0.599998H196.841V2.712C196.094 2.81867 195.454 3.128 194.921 3.64C194.388 4.13067 193.812 4.96267 193.193 6.136C192.51 7.45867 191.817 8.792 191.113 10.136C190.409 11.48 189.716 12.8133 189.033 14.136V17.752C189.033 18.328 189.022 18.8827 189.001 19.416C188.98 19.9493 188.948 20.3547 188.905 20.632C189.268 20.5893 189.726 20.568 190.281 20.568C190.857 20.5467 191.252 20.536 191.465 20.536V23H182.121Z"
            fill="#111218"
          />
        </svg>
      </a>
      <button className="text-xl" onClick={toggleSidebar}>
        ☰
      </button>
    </div>
  );
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [width, setWidth] = useState(0);
  const navigate = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Update width state when window is resized
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="p-3">
        {width < 883 ? (
          <Responsive toggleSidebar={toggleSidebar} />
        ) : (
          <>
            <div className="topbar flex justify-around">
              <Icon icon="ic:twotone-search" width="2.3em" height="2.3em" />
              <a href="#" className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="197"
                  height="24"
                  viewBox="0 0 197 24"
                  fill="none"
                >
                  <path
                    d="M0.63125 23V20.888C1.12192 20.8667 1.52725 20.8027 1.84725 20.696C2.18858 20.5893 2.44458 20.344 2.61525 19.96C2.80725 19.576 2.90325 18.9573 2.90325 18.104V5.848C2.90325 5.272 2.91392 4.71733 2.93525 4.184C2.97792 3.65067 3.00992 3.24533 3.03125 2.968C2.68992 2.98933 2.26325 3.01067 1.75125 3.032C1.23925 3.032 0.865917 3.04267 0.63125 3.064V0.599998C2.10325 0.578665 3.57525 0.567999 5.04725 0.567999C6.54058 0.567999 8.02325 0.557332 9.49525 0.535999C12.0553 0.514666 14.0819 0.994666 15.5753 1.976C17.0899 2.936 17.7939 4.39733 17.6873 6.36C17.6233 7.27733 17.2179 8.16267 16.4713 9.016C15.7246 9.848 14.5939 10.4667 13.0793 10.872V10.904C15.2126 11.2453 16.7806 11.96 17.7833 13.048C18.7859 14.1147 19.2873 15.3093 19.2873 16.632C19.2873 18.0187 18.9459 19.192 18.2633 20.152C17.6019 21.0907 16.6846 21.8053 15.5113 22.296C14.3379 22.7653 13.0046 23 11.5113 23H0.63125ZM7.54325 10.424L9.20725 10.392C10.5513 10.3493 11.4793 9.92267 11.9913 9.112C12.5246 8.28 12.7913 7.27733 12.7913 6.104C12.7913 5.25067 12.6206 4.58933 12.2793 4.12C11.9379 3.62933 11.5113 3.27733 10.9993 3.064C10.4873 2.85067 9.95392 2.75467 9.39925 2.776C9.05792 2.776 8.74858 2.82933 8.47125 2.936C8.19392 3.04267 7.96992 3.288 7.79925 3.672C7.62858 4.03467 7.54325 4.632 7.54325 5.464V10.424ZM7.41525 20.728C7.96992 20.728 8.50325 20.728 9.01525 20.728C9.52725 20.728 10.0286 20.7173 10.5193 20.696C11.8206 20.632 12.7699 20.216 13.3673 19.448C13.9646 18.68 14.2633 17.7093 14.2633 16.536C14.2633 15.5547 14.0606 14.7867 13.6553 14.232C13.2499 13.656 12.7273 13.2507 12.0873 13.016C11.4686 12.7813 10.8179 12.664 10.1353 12.664C9.60192 12.664 9.14325 12.664 8.75925 12.664C8.37525 12.664 7.96992 12.6747 7.54325 12.696V17.912C7.54325 18.488 7.53258 19.032 7.51125 19.544C7.48992 20.056 7.45792 20.4507 7.41525 20.728ZM30.016 2.712C29.5467 2.73333 29.1413 2.79733 28.8 2.904C28.4587 3.01067 28.192 3.256 28 3.64C27.8293 4.00267 27.744 4.62133 27.744 5.496V14.296C27.744 16.0667 27.9893 17.4427 28.48 18.424C28.9707 19.384 29.6 20.056 30.368 20.44C31.1573 20.824 31.9787 21.0373 32.832 21.08C34.6027 21.144 35.9787 20.6107 36.96 19.48C37.9413 18.3493 38.432 16.6 38.432 14.232V5.848C38.432 5.272 38.4427 4.71733 38.464 4.184C38.4853 3.65067 38.5173 3.24533 38.56 2.968C38.2187 2.98933 37.7813 3.01067 37.248 3.032C36.736 3.032 36.3627 3.04267 36.128 3.064V0.599998H43.552V2.712C43.0827 2.73333 42.6773 2.79733 42.336 2.904C41.9947 3.01067 41.728 3.256 41.536 3.64C41.3653 4.00267 41.28 4.62133 41.28 5.496V13.496C41.28 15.9493 40.8853 17.912 40.096 19.384C39.328 20.8347 38.2613 21.8907 36.896 22.552C35.552 23.192 34.0267 23.512 32.32 23.512C30.528 23.512 29.0347 23.256 27.84 22.744C26.6453 22.232 25.696 21.5173 24.992 20.6C24.3093 19.6827 23.8187 18.6267 23.52 17.432C23.2427 16.2373 23.104 14.9573 23.104 13.592V5.848C23.104 5.272 23.1147 4.71733 23.136 4.184C23.1787 3.65067 23.2107 3.24533 23.232 2.968C22.8907 2.98933 22.464 3.01067 21.952 3.032C21.44 3.032 21.0667 3.04267 20.832 3.064V0.599998H30.016V2.712ZM58.8405 7.768C58.5632 5.99733 57.9445 4.65333 56.9845 3.736C56.0245 2.81867 54.7978 2.37067 53.3045 2.392C52.3872 2.392 51.5765 2.648 50.8725 3.16C50.1898 3.672 49.8485 4.33333 49.8485 5.144C49.8485 6.12533 50.2752 6.936 51.1285 7.576C51.9818 8.216 53.2832 8.89867 55.0325 9.624C55.8432 9.944 56.6752 10.3173 57.5285 10.744C58.3818 11.1707 59.1712 11.6827 59.8965 12.28C60.6218 12.856 61.2085 13.5387 61.6565 14.328C62.1045 15.096 62.3285 16.0027 62.3285 17.048C62.3285 18.3067 61.9872 19.4267 61.3045 20.408C60.6218 21.3893 59.6618 22.1573 58.4245 22.712C57.2085 23.2453 55.7792 23.512 54.1365 23.512C53.2832 23.512 52.3552 23.3733 51.3525 23.096C50.3712 22.84 49.4432 22.456 48.5685 21.944L48.6645 23.288H46.2005V15.8H48.3125C48.6112 17.592 49.2938 18.9467 50.3605 19.864C51.4485 20.76 52.7392 21.208 54.2325 21.208C55.3632 21.208 56.2805 20.9093 56.9845 20.312C57.7098 19.7147 58.0725 19.0107 58.0725 18.2C58.0725 17.4533 57.8058 16.8347 57.2725 16.344C56.7605 15.8533 56.1098 15.4373 55.3205 15.096C54.5525 14.7547 53.7632 14.424 52.9525 14.104C51.5872 13.5493 50.3498 12.9307 49.2405 12.248C48.1525 11.544 47.2885 10.712 46.6485 9.752C46.0085 8.77067 45.6885 7.58667 45.6885 6.2C45.6885 5.53867 45.8165 4.856 46.0725 4.152C46.3285 3.42667 46.7445 2.76533 47.3205 2.168C47.8965 1.54933 48.6645 1.048 49.6245 0.664C50.5845 0.279999 51.7685 0.0879993 53.1765 0.0879993C54.0298 0.0879993 54.9578 0.215999 55.9605 0.471998C56.9845 0.727999 57.8592 1.112 58.5845 1.624L58.4565 0.311998H60.9525V7.768H58.8405ZM74.2215 2.712C73.7522 2.73333 73.3468 2.79733 73.0055 2.904C72.6642 3.01067 72.3975 3.256 72.2055 3.64C72.0348 4.00267 71.9495 4.62133 71.9495 5.496V17.752C71.9495 18.328 71.9388 18.8827 71.9175 19.416C71.8962 19.9493 71.8642 20.3547 71.8215 20.632C72.1628 20.5893 72.5895 20.568 73.1015 20.568C73.6348 20.5467 74.0082 20.536 74.2215 20.536V23H65.0375V20.888C65.5282 20.8667 65.9335 20.8027 66.2535 20.696C66.5948 20.5893 66.8508 20.344 67.0215 19.96C67.2135 19.576 67.3095 18.9573 67.3095 18.104V5.848C67.3095 5.272 67.3202 4.71733 67.3415 4.184C67.3842 3.65067 67.4162 3.24533 67.4375 2.968C67.0962 2.98933 66.6695 3.01067 66.1575 3.032C65.6455 3.032 65.2722 3.04267 65.0375 3.064V0.599998H74.2215V2.712ZM94.4365 23.32L84.1965 10.232C83.9192 9.86933 83.6312 9.48533 83.3325 9.08C83.0338 8.67467 82.7352 8.25867 82.4365 7.832H82.4045L82.4685 17.752C82.4685 18.328 82.4578 18.8827 82.4365 19.416C82.4152 19.9493 82.3832 20.3547 82.3405 20.632C82.6818 20.5893 83.1085 20.568 83.6205 20.568C84.1538 20.5467 84.5272 20.536 84.7405 20.536V23H77.4445V20.888C77.9352 20.8667 78.3405 20.8027 78.6605 20.696C79.0018 20.5893 79.2578 20.344 79.4285 19.96C79.6205 19.576 79.7165 18.9573 79.7165 18.104L79.6525 5.848C79.6525 5.272 79.6632 4.71733 79.6845 4.184C79.7058 3.65067 79.7378 3.24533 79.7805 2.968C79.4392 2.98933 79.0018 3.01067 78.4685 3.032C77.9565 3.032 77.5832 3.04267 77.3485 3.064V0.599998H82.3725L92.1645 12.952C92.6978 13.6347 93.1352 14.2213 93.4765 14.712C93.8392 15.2027 94.1485 15.6293 94.4045 15.992H94.4365V5.848C94.4365 5.272 94.4472 4.71733 94.4685 4.184C94.4898 3.65067 94.5112 3.24533 94.5325 2.968C94.1912 2.98933 93.7645 3.01067 93.2525 3.032C92.7405 3.032 92.3672 3.04267 92.1325 3.064V0.599998H99.4285V2.712C98.9592 2.73333 98.5538 2.79733 98.2125 2.904C97.8712 3.01067 97.6045 3.256 97.4125 3.64C97.2418 4.00267 97.1565 4.62133 97.1565 5.496V23.32H94.4365ZM113.043 15.288C113.043 14.392 112.904 13.752 112.627 13.368C112.349 12.9627 111.965 12.7067 111.475 12.6C111.005 12.4933 110.483 12.4507 109.907 12.472L109.075 12.504V17.752C109.075 18.328 109.064 18.872 109.043 19.384C109.021 19.896 108.989 20.2907 108.947 20.568H113.235C113.875 20.568 114.493 20.4293 115.091 20.152C115.688 19.8533 116.179 19.3733 116.562 18.712C116.947 18.0293 117.139 17.112 117.139 15.96H119.219L119.059 23H102.163V20.888C102.653 20.8667 103.059 20.8027 103.379 20.696C103.72 20.5893 103.976 20.344 104.147 19.96C104.339 19.576 104.435 18.9573 104.435 18.104V5.848C104.435 5.272 104.445 4.71733 104.467 4.184C104.509 3.65067 104.541 3.24533 104.562 2.968C104.221 2.98933 103.795 3.01067 103.283 3.032C102.771 3.032 102.397 3.04267 102.163 3.064V0.599998H118.163L118.355 6.808H116.243C116.243 5.63467 116.04 4.74933 115.635 4.152C115.229 3.55467 114.728 3.16 114.131 2.968C113.533 2.75467 112.947 2.65867 112.371 2.68L111.219 2.712C110.771 2.712 110.387 2.776 110.067 2.904C109.747 3.01067 109.501 3.26667 109.331 3.672C109.16 4.056 109.075 4.664 109.075 5.496V10.296H112.819L112.691 7.512H115.155V15.288H113.043ZM135.059 7.768C134.782 5.99733 134.163 4.65333 133.203 3.736C132.243 2.81867 131.017 2.37067 129.523 2.392C128.606 2.392 127.795 2.648 127.091 3.16C126.409 3.672 126.067 4.33333 126.067 5.144C126.067 6.12533 126.494 6.936 127.347 7.576C128.201 8.216 129.502 8.89867 131.251 9.624C132.062 9.944 132.894 10.3173 133.747 10.744C134.601 11.1707 135.39 11.6827 136.115 12.28C136.841 12.856 137.427 13.5387 137.875 14.328C138.323 15.096 138.547 16.0027 138.547 17.048C138.547 18.3067 138.206 19.4267 137.523 20.408C136.841 21.3893 135.881 22.1573 134.643 22.712C133.427 23.2453 131.998 23.512 130.355 23.512C129.502 23.512 128.574 23.3733 127.571 23.096C126.59 22.84 125.662 22.456 124.787 21.944L124.883 23.288H122.419V15.8H124.531C124.83 17.592 125.513 18.9467 126.579 19.864C127.667 20.76 128.958 21.208 130.451 21.208C131.582 21.208 132.499 20.9093 133.203 20.312C133.929 19.7147 134.291 19.0107 134.291 18.2C134.291 17.4533 134.025 16.8347 133.491 16.344C132.979 15.8533 132.329 15.4373 131.539 15.096C130.771 14.7547 129.982 14.424 129.171 14.104C127.806 13.5493 126.569 12.9307 125.459 12.248C124.371 11.544 123.507 10.712 122.867 9.752C122.227 8.77067 121.907 7.58667 121.907 6.2C121.907 5.53867 122.035 4.856 122.291 4.152C122.547 3.42667 122.963 2.76533 123.539 2.168C124.115 1.54933 124.883 1.048 125.843 0.664C126.803 0.279999 127.987 0.0879993 129.395 0.0879993C130.249 0.0879993 131.177 0.215999 132.179 0.471998C133.203 0.727999 134.078 1.112 134.803 1.624L134.675 0.311998H137.171V7.768H135.059ZM154.184 7.768C153.907 5.99733 153.288 4.65333 152.328 3.736C151.368 2.81867 150.142 2.37067 148.648 2.392C147.731 2.392 146.92 2.648 146.216 3.16C145.534 3.672 145.192 4.33333 145.192 5.144C145.192 6.12533 145.619 6.936 146.472 7.576C147.326 8.216 148.627 8.89867 150.376 9.624C151.187 9.944 152.019 10.3173 152.872 10.744C153.726 11.1707 154.515 11.6827 155.24 12.28C155.966 12.856 156.552 13.5387 157 14.328C157.448 15.096 157.672 16.0027 157.672 17.048C157.672 18.3067 157.331 19.4267 156.648 20.408C155.966 21.3893 155.006 22.1573 153.768 22.712C152.552 23.2453 151.123 23.512 149.48 23.512C148.627 23.512 147.699 23.3733 146.696 23.096C145.715 22.84 144.787 22.456 143.912 21.944L144.008 23.288H141.544V15.8H143.656C143.955 17.592 144.638 18.9467 145.704 19.864C146.792 20.76 148.083 21.208 149.576 21.208C150.707 21.208 151.624 20.9093 152.328 20.312C153.054 19.7147 153.416 19.0107 153.416 18.2C153.416 17.4533 153.15 16.8347 152.616 16.344C152.104 15.8533 151.454 15.4373 150.664 15.096C149.896 14.7547 149.107 14.424 148.296 14.104C146.931 13.5493 145.694 12.9307 144.584 12.248C143.496 11.544 142.632 10.712 141.992 9.752C141.352 8.77067 141.032 7.58667 141.032 6.2C141.032 5.53867 141.16 4.856 141.416 4.152C141.672 3.42667 142.088 2.76533 142.664 2.168C143.24 1.54933 144.008 1.048 144.968 0.664C145.928 0.279999 147.112 0.0879993 148.52 0.0879993C149.374 0.0879993 150.302 0.215999 151.304 0.471998C152.328 0.727999 153.203 1.112 153.928 1.624L153.8 0.311998H156.296V7.768H154.184ZM160.381 23V20.888C160.872 20.8667 161.277 20.8027 161.597 20.696C161.939 20.5893 162.195 20.344 162.365 19.96C162.557 19.576 162.653 18.9573 162.653 18.104V5.848C162.653 5.272 162.664 4.71733 162.685 4.184C162.728 3.65067 162.76 3.24533 162.781 2.968C162.44 2.98933 162.013 3.01067 161.501 3.032C160.989 3.032 160.616 3.04267 160.381 3.064V0.599998H169.565V2.712C169.096 2.73333 168.691 2.79733 168.349 2.904C168.008 3.01067 167.741 3.256 167.549 3.64C167.379 4.00267 167.293 4.62133 167.293 5.496V17.752C167.293 18.328 167.283 18.872 167.261 19.384C167.24 19.896 167.208 20.2907 167.165 20.568H171.453C172.712 20.5467 173.693 20.1093 174.397 19.256C175.123 18.3813 175.485 17.0693 175.485 15.32H177.629L177.437 23H160.381ZM182.121 23V20.888C182.612 20.8667 183.017 20.8027 183.337 20.696C183.678 20.5893 183.934 20.344 184.105 19.96C184.297 19.576 184.393 18.9573 184.393 18.104V15.32L178.505 6.008C178.206 5.51733 177.929 4.97333 177.673 4.376C177.417 3.77867 177.289 3.30933 177.289 2.968C176.948 2.98933 176.66 3.01067 176.425 3.032C176.19 3.032 175.956 3.04267 175.721 3.064V0.599998H185.161V2.712C184.244 2.648 183.572 2.82933 183.145 3.256C182.718 3.66133 182.761 4.30133 183.273 5.176L185.705 9.176C185.812 9.34667 185.972 9.624 186.185 10.008C186.398 10.3707 186.612 10.7653 186.825 11.192C187.06 11.5973 187.23 11.96 187.337 12.28H187.369C187.476 12.024 187.657 11.64 187.913 11.128C188.169 10.616 188.489 9.95467 188.873 9.144L190.537 5.88C190.644 5.64533 190.793 5.34667 190.985 4.984C191.177 4.6 191.38 4.22667 191.593 3.864C191.828 3.48 192.041 3.17067 192.233 2.936C191.892 2.95733 191.454 2.97867 190.921 3C190.388 3.02133 190.004 3.04267 189.769 3.064V0.599998H196.841V2.712C196.094 2.81867 195.454 3.128 194.921 3.64C194.388 4.13067 193.812 4.96267 193.193 6.136C192.51 7.45867 191.817 8.792 191.113 10.136C190.409 11.48 189.716 12.8133 189.033 14.136V17.752C189.033 18.328 189.022 18.8827 189.001 19.416C188.98 19.9493 188.948 20.3547 188.905 20.632C189.268 20.5893 189.726 20.568 190.281 20.568C190.857 20.5467 191.252 20.536 191.465 20.536V23H182.121Z"
                    fill="#111218"
                  />
                </svg>
              </a>
              <button
                className="text-[15px] px-10 py-[10px] group hover:bg-black border-black border-[1px]"
                onClick={() => navigate.push("/admin")}
              >
                <p className="group-hover:text-white font-bold">Admin Panel</p>
              </button>
            </div>

            <div className="flex justify-center p-4">
              <Link href="/" className="mx-5">
                Home
              </Link>
              <a href="#" className="mx-5">
                Stock Market
              </a>
              <a href="#" className="mx-5">
                Technology
              </a>
              <a href="#" className="mx-5">
                Politics
              </a>
              <a href="#" className="mx-5">
                Automobile
              </a>
              <a href="#" className="mx-5">
                Health
              </a>
              <a href="#" className="mr-10 ml-3">
                Interactive Sessions
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
