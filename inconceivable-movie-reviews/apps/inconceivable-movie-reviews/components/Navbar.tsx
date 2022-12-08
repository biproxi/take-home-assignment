import React from "react";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-1 px-4 sm:px-6 lg:px-8 trial">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  className="website-logo"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABYRJREFUaEPtmXWobFUUh78nBnYrdqJid3c3KrYPeSiIIiqYKMazBQURREz8w0bB7u4n5tNnYmOjGNjNd1n7st2cmTln7szce8EFwz1zz471W73WTGCc04Rxzj//A+izBhcD1gTWir8+Pw7sl+4dSxpYKmMyMTx/MPon8CYwPbAEMAfwl+9GA4B3LpsxmyQ8dzD7BzANWAaYEdgTeAT4BZgIXAOsDLw+CADTAcsXzK4BzFmY3l3AHcBLwGvA78AmwP3B6FbAD8CK8f3AANJTDajeFQp7XR2YLZj9GZgaTMqoHwE+CHwDbAp8UQDbEbgNeBrwWWDfA5cDR49EAzMAKxXMrgbMHAz8CLySSfRUwD1K9d2CyfUDxHvAFsC3xft9geuAe4A9gMcAzWzzugBmAlYpooHf/b+kRF4GFg271U5vBP7OGFEzTwA/ARsDnxZMaiJ3B+BtYp1L9AHt/VxgW+BDYKHQ2CJVAJSgktSxknMpaaUnidznR4HLgBcBJfcP4IFPhslsFlEj59PzdMbPwly+LkAYGq+PMPlO3K+gBCF9l5mfYNXEsA9oXxcBCwKzZzar1JK9yqyHuNEIoaSmFEwYXdxjiFPSHxXvNaH7gDeAYwvN6qD6kaRPeF9+9/vFWUNfUxidDJwWzrFLqElp7x6qzfcKUknPG3Zo1MhJqQkyOaZmozOn2L49kOK7+74smJXpEngV75UABHQQcFWYxa+AFyrVnEwmT4XEcsecK1R/MLB/hD6jkNFG0vZlMJdu6Q8tma2jAQGoRhOJ2U4HXRjYMi7Nz9gos+nng3FNK5FSLJlV2j2l0oTS972Bm4ATgEPDMY8Cls6cWy0k0pFze/VZE+o7tQLg/1Xz4uGQC1RwYhRJTOvcgyRD9A3AJ60AyIyRyXA1VukU4Kx2AGTcaLJcFF8XhoOvG4krAdNnXgAsxswZZuFES4Y/KYh9Ckno5GbYw4FLinfmGINJeVdaZt45HZjcCYCx3JB5HHBFxG+jxgapnI0T1wOeAS4Iv8n5OQk4G9gVuLNg1CLOKGYOyKORxZ65ououj6gNwMX3AuuEA+/chdT6oaFGAExAhskzVBnQjdR6raGWACxTq8imQkmeE5o4JHLAA8XirQE/V1ZUne4xqp0J/Jbts9Y5OWqkS4vzDNtVd51X+oBlhNIdT1TLiccqoEY+0C8QliJGubo0nLyaRqG6FzRZZ331QVbr1907lLzGAoDDInnZqb1dcG+raMNkeznUtAQNm81IAdi07AY4q7kWKDurOtK0v00ZvlzfdwA25alsticwkzahWQO05cMxFRv7DiCp0mbHvGCT3aTOV3u3Ro+hqQxUA3ZW9rvmDIdOzwKWF02qVmsqE6Mlum1rKwAm1bwPHk5eI/GBHWI+c0BM0F4F9gJuaWBDH0fh57ynitTqiRUvFFwa2XSVB0z5NvBuXhU4EjgfsP+VKSdvltVOz9rRWzFuzNeoFUsGHVuhOFea1OaQrgAoFaWzHWANpB1rzzkZXXbqAMAeQQ06vrFstmVVEMfHyMXCz3nqV90CsNbXxtMkIZ2zYZTW2q+kDauJRM551gbma2BO+o89gll5lhgxHgFc3OGMthpIM6KHskPstiyrrTQfbnG4Uwj7aOeXdUlh3BwDLrVppep00AjXjmoByH87aBWb0yWOIx3m2gZeXZf7sHkzsfbvaNKquM5vFj0HYD1veSsT5Yi8Ex5DpQHCHkFNz9NpQ6cwmkyoiQaei2m0/tOUdFr7ZkHY0Nxe44CeakBn/hywUjRKDYJqAahyYp20/AHCIa8/GznUdSQ5CGoLoFUYbceY8d+50aCoq0Q2KObq3NMSQG42dQ4arTXmo/809d2YzWgx7732x+aMKXWSxmgy2vHucQ/gX3aQq0CwmiFIAAAAAElFTkSuQmCC"
                  alt="Yay-Nay Icon"
                  width={0}
                  height={0}
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    href="/"
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-lg font-medium"
                  >
                    Yay-Nay Movie Reviews
                  </Link>

                  <Link
                    href="/modify"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contribute
                  </Link>

                  <Link
                    href="/display"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
