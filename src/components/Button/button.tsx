import React from "react";

export default function Button(props: { type: string; children: any; }) {
  const { type, children } = props;

  const className = type == "primary" ?
    "testbtn inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" :
    "testbtn inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"

  return (<button type="button" className={className}>
    {children}
  </ button>);
}