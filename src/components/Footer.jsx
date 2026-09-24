export default function Footer() {
  return (
    <footer className="bg-transparent text-gray-300 dark:text-gray-800 flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-3 py-6 text-center w-full">
        <hr className="border-gray-300 dark:border-gray-700 midnight:border-gray-700 w-11/12 mx-auto mb-6" />

        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-sm font-medium tracking-wide px-5">
            Made for Some reason<br></br>By My heart{" "}
            {/* <span className="ml-2 text-xs text-gray-400">v0.1.3</span> */}
          </p>
        </div>

        <span className="text-xs text-gray-400 dark:text-gray-700">
          &copy; {new Date().getFullYear()} Arya Evil Inc. All rights reserved. &nbsp;
        </span>
      </div>
    </footer>
  );
}
