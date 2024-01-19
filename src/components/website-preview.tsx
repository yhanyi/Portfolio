import React from "react";

type Props = {
  link: string;
  Icon: any;
  text: string;
};

export default function WebsitePreview({ link, Icon, text }: Props) {
  const openPreview = () => {
    const modal = document.createElement("div");
    modal.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-gray-800",
      "bg-opacity-50",
      "flex",
      "justify-center",
      "items-center"
    );

    const iframe = document.createElement("iframe");
    iframe.src = link;
    iframe.classList.add(
      "w-3/4",
      "sm:w-7/10",
      "md:w-3/5",
      "lg:w-1/2",
      "h-1/2",
      "bg-white",
      "rounded-xl",
      "border",
      "border-dark",
      "dark:border-light"
    );

    modal.appendChild(iframe);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
      }
    });

    document.body.appendChild(modal);
  };

  return (
    <React.Fragment>
      <div
        onClick={openPreview}
        className="flex items-center justify-center group relative cursor-pointer"
      >
        <Icon className="w-5 h-5 hover:scale-110 hover:text-primary dark:hover:text-primaryDark transition-300" />
        <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 p-1 rounded-lg border border-gray-500  bg-white dark:bg-black text-black dark:text-white text-sm shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
          {text}
        </span>
      </div>
    </React.Fragment>
  );
}
