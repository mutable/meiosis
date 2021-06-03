import React, { useState } from "react";
import { joinClassnames } from "../../utils/tailwindHelpers";
import { TabsProps } from "./Tabs.types";

export const Tabs: React.FC<TabsProps & React.HTMLAttributes<HTMLDivElement>> = ({ tabs, defaultIndex, className, ...props }) => {
  const [activeTab, setActiveTab] = useState(tabs[defaultIndex || 0])

  return (
    <div className={className}>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue={activeTab.name}
          onChange={(e) => {
            setActiveTab(tabs.find(tab => tab.name == e.target.value) || tabs[0])
          }}
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => {
              return (<div
                key={tab.name}
                onClick={() => {
                  setActiveTab(tab)
                }}
                className={joinClassnames(
                  activeTab.name === tab.name
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer'
                )}
                aria-current={activeTab.name === tab.name ? 'page' : undefined}
              >
                {tab.name}
              </div>
              )
            })}
          </nav>
        </div>
      </div>

      <div>
        {activeTab.component}
      </div>
    </div>
  )
}