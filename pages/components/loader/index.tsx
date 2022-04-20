import React, { useRef, useState, useEffect } from "react";
import LoadingBar from "react-top-loading-bar";
import axios from "axios";

export default function Loader() {
  const ref:any = useRef(null);

  const startLoadingBar = () => {
    console.log("Start Loading", ref);
    if (ref && ref.current) {
      ref.current.continuousStart();
    }
  };

  const completeLoadingBar = () => {
    console.log("Stop Loading", ref);
    if (ref && ref.current) {
      ref.current.complete();
    }
  };

  ActivateInterceptor(startLoadingBar, completeLoadingBar);

  return <LoadingBar height={2} color="#f11946" ref={ref} />;
}

function ActivateInterceptor(startLoadingBar:any, completeLoadingBar:any) {
  // Add a request interceptor
  axios.interceptors.request.use(
    (config) => {
      startLoadingBar();
      console.log("Request Getting Sent");
      // Do something before request is sent
      return config;
    },
    function (error) {
      completeLoadingBar();
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      console.log("Response Came");
      completeLoadingBar();
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      completeLoadingBar();
      return Promise.reject(error);
    }
  );
}
