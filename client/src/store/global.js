import { readable } from "svelte/store";

export const BASE_URL = readable("http://localhost:8080");

const getCookie = (name) => {
  return document.cookie.split("; ").reduce((r, v) => {
    const parts = v.split("=");
    return parts[0] === name ? decodeURIComponent(parts[1]) : r;
  }, "");
};

export const cookie = readable(getCookie("token"));
