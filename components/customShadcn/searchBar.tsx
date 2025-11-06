"use client";

import { searcBarPlaceholders } from "@/lib/const/constants";
import React from "react";
import { PlaceholdersAndVanishInput } from "../ui/vanishingInput";

const SearchBar = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <PlaceholdersAndVanishInput
      placeholders={searcBarPlaceholders}
      onChange={handleChange}
      onSubmit={onSubmit}
    />
  );
};

export default SearchBar;
