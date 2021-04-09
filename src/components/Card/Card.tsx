import React from "react";
import { Badge } from "../Badge/Badge";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({ title, status, description, description2, action, href, ...props }) => (
  <div className="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
    <div className="w-full flex items-center justify-between p-6 space-x-6">
      <div className="flex-1 truncate">
        <div className="flex items-center space-x-3">
          <h3 className="text-gray-900 text-sm font-medium truncate">{title}</h3>
          {status && <Badge {...status} />}
        </div>
        <p className="mt-1 text-gray-500 text-sm truncate">{description}</p>
        {description2 && <p className="mt-1 text-gray-500 text-sm truncate">{description2}</p>}
      </div>
    </div>
    <div>
      <div className="-mt-px flex divide-x divide-gray-200">
        <div className="-ml-px w-0 flex-1 flex">
          <a href={href} className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-pink-600 font-medium border border-transparent rounded-br-lg hover:text-gray-500">
            <svg className="w-5 h-5 text-gray-400" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="server" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M432 120a24 24 0 1 0-24-24 24 24 0 0 0 24 24zm0 272a24 24 0 1 0 24 24 24 24 0 0 0-24-24zm48-200H32a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zm-112 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm64 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24z" opacity="0.4"></path><path className="fa-primary" fill="currentColor" d="M456 256a24 24 0 1 0-24 24 24 24 0 0 0 24-24zm24-224H32A32 32 0 0 0 0 64v64a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32V64a32 32 0 0 0-32-32zm-112 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm64 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm48 232H32a32 32 0 0 0-32 32v64a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64a32 32 0 0 0-32-32zm-112 88a24 24 0 1 1 24-24 24 24 0 0 1-24 24zm64 0a24 24 0 1 1 24-24 24 24 0 0 1-24 24z"></path></g></svg>
            <span className="ml-3">{action}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
);

