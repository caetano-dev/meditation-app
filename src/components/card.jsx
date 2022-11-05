import React from "react";
import Button from "./button";

function Card({ image, alt, title, description, linkTo}) {
  return (
    <div className="max-w-sm m-5 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={image}
          alt={alt}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <a href={linkTo}>
          <Button text="Start session" />
        </a>
      </div>
    </div>
  );
}

export default Card;
