import React from "react";

export default function LanguageSwitcher() {
    let locale = 'kh';
    const changeLocale = (locale: string) => {
        console.log(locale);
        
        if (locale === 'kh') {
            locale = 'en';
        } else {
            locale = 'kh';
        }
    }
  return (
    <div className="bg-slate-600">
      <label className="inline-flex items-center cursor-pointer gap-4">
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Khmer
        </span>
        <input type="checkbox" value="" className="sr-only peer"  onChange={
            () => changeLocale(locale)
        }/>
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          English
        </span>
      </label>
    </div>
  );
}
