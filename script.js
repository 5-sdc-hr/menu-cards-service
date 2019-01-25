import http from "k6/http";
// import { check, sleep } from "k6";

export const options = {
  vus: 100,
  duration: '60s',
  rps: 2000,
};

export default function () {
  const id = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3003/api/restaurants/${id}/menu`);
};