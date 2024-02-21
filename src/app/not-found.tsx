"use client";
import React from "react";
import Error404 from "../components/error404";

export default function NotFound() {
  return (
    <main className="h-screen flex items-center justify-center">
      <Error404 />
    </main>
  );
}
