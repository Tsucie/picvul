import { useState } from "react";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import ShowcaseDB from "../../db/showcase.json";

export default function Showcase() {
  return (
    <div className="font-semibold pb-20">
      <h1>Picvul Showcase</h1>
      <div className="menu flex gap-5 justify-between mt-4">
        <button className="flex items-center gap-2 border py-2 px-3 h-fit rounded-full text-gray-800 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <div className="font-semibold text-sm">Popular</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
          <div className="absolute -translate-x-3 translate-y-24 pt-8 hidden group-hover:block z-20">
            <div className="bg-white shadow-2xl px-5 py-4 w-32 border text-left rounded-xl cursor-default flex flex-col gap-2 text-sm font-semibold">
              <div className="px-2 py-1 rounded-lg bg-blue-100/80 hover:bg-blue-100/80 cursor-pointer">
                Popular
              </div>
              <div className="px-2 py-1 rounded-lg hover:bg-blue-100/80 cursor-pointer">
                Latest
              </div>
              <div className="px-2 py-1 rounded-lg hover:bg-blue-100/80 cursor-pointer">
                Date
              </div>
              <div className="px-2 py-1 rounded-lg hover:bg-blue-100/80 cursor-pointer">
                Related
              </div>
            </div>
          </div>
        </button>
        <div className="menu-list category gap-5 hidden overflow-x-auto lg:flex">
          {ShowcaseDB.category.map((e) => (
            <button
              key={e}
              className={`border px-3 py-1.5 rounded-full ${
                e == "All Categories"
                  ? "border-transparent bg-slate-800 text-white"
                  : ""
              }  whitespace-nowrap hover:bg-slate-800 hover:text-white hover:motion-safe:duration-500`}
            >
              {e}
            </button>
          ))}
        </div>
        <button className="flex items-center gap-2 h-fit border py-2 pl-3 pr-4 rounded-full text-gray-800 group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          <div className="font-semibold text-sm">Filters</div>
          <div className="absolute -translate-x-16 translate-y-24 pt-8 hidden group-hover:block z-20">
            <div className="bg-white shadow-2xl px-5 py-4 border text-left rounded-xl cursor-default flex flex-col gap-2 text-sm font-semibold whitespace-nowrap">
              <div className="px-2 py-1 rounded-lg bg-blue-100/80 hover:bg-blue-100/80 cursor-pointer">
                All Categories
              </div>
              <div className="px-2 py-1 rounded-lg hover:bg-blue-100/80 cursor-pointer">
                NFT
              </div>
              <div className="px-2 py-1 rounded-lg hover:bg-blue-100/80 cursor-pointer">
                UIUX Design
              </div>
              <div className="px-2 py-1 rounded-lg hover:bg-blue-100/80 cursor-pointer">
                3D Design
              </div>
            </div>
          </div>
        </button>
      </div>
      <div className="container mx-auto flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5">
          {ShowcaseDB.data.map((e) => (
            <Card
              key={e.index}
              username={e.username}
              fullname={e.fullname}
              isFollowing={e.isFollowing}
              profil_img={e.profil_img}
              post_img={e.post_img}
              isLike={e.isLike}
            />
          ))}
        </div>
        <button className="bg-gray-100 w-fit self-center py-2 px-5 mt-16 rounded-xl font-semibold shadow-lg hover:bg-gray-700 hover:text-white hover:motion-safe:duration-500">
          show more..
        </button>
      </div>
    </div>
  );
}

const Card = ({
  username,
  fullname,
  isFollowing,
  profil_img,
  post_img,
  isLike,
}) => {
  const [Like, setLike] = useState(isLike);
  const [FollowState, setFollowState] = useState(isFollowing);

  return (
    <div className="card p-2 md:p-1.5 bg-white border h-fit rounded-xl group md:hover:scale-105 md:hover:motion-safe:duration-500 md:hover:shadow-2xl">
      <div className="h-80 lg:h-60 rounded-xl overflow-hidden flex flex-col shadow-lg">
        <LazyLoadImage
          className="h-full w-full object-cover"
          alt={`${username}_post`}
          effect="blur"
          height="100%"
          width="100%"
          src={post_img}
        />
        {Like ? (
          <a
            onClick={() => {
              setLike(Like ? false : true);
            }}
            className="p-2 bg-white rounded-md h-fit w-fit self-end absolute translate-y-3 -translate-x-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        ) : (
          <a
            onClick={() => {
              setLike(Like ? false : true);
            }}
            className="p-2 bg-white/30 backdrop-blur-md rounded-md h-fit w-fit self-end absolute translate-y-3 -translate-x-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
        <Link href={`/${username}/${Math.floor(Math.random() * 10000)}`}>
          <a className="absolute translate-y-32 lg:translate-y-24 py-1.5 px-3 rounded-full bg-white font-semibold w-fit text-sm self-center mt-5 hidden group-hover:block hover:scale-105 hover:motion-safe:duration-500">
            Details
          </a>
        </Link>
      </div>
      <div className="absolute -translate-y-6 translate-x-2 border-2 overflow-hidden border-white rounded-full h-12 w-12">
        <Link href={`/${username}`}>
          <a>
            <LazyLoadImage
              className="h-full w-full object-cover"
              src={profil_img}
              effect="blur"
              height="100%"
              width="100%"
              alt={`${username}_profile`}
            />
          </a>
        </Link>
      </div>
      <div className="flex justify-between px-1.5 mt-8 mb-3 font-semibold text-sm">
        <Link href={`/${username}`}>
          <a>{fullname}</a>
        </Link>
        {FollowState ? (
          <div className="flex flex-col items-end">
            <a
              className="text-gray-400 cursor-pointer"
              onClick={() => {
                setFollowState(FollowState ? false : true);
              }}
            >
              Following
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-end">
            <a
              className="text-blue-500 cursor-pointer"
              onClick={() => {
                setFollowState(FollowState ? false : true);
              }}
            >
              Follow
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
