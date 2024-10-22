import React from "react";
import Image from "next/image";

export const SidebarHeader = () => {
  return (
    <div className="flex space-x-2">
      <Image
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80"
        alt="Avatar"
        height="40"
        width="40"
        className="object-cover object-top rounded-full flex-shrink-0"
      />
      <div className="flex text-sm flex-col">
        <p className="font-bold text-primary">Samar Hayat</p>
        <p className="font-light text-secondary">Developer</p>
      </div>
    </div>
  );
};
