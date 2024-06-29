import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 ">
      <div className="mx-auto p-4 md:p-6">
        <h2 className="text-lg font-bold">Developed with Love by</h2>
        <ul className="flex flex-wrap justify-center">
          <li className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold">Shrey Nagda</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:shreynagda2714@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  shreynagda2714@gmail.com
                </a>
              </p>
            </div>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold">Arvind Mandal</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:mandalarvind877@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  mandalarvind877@gmail.com
                </a>
              </p>
            </div>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold">Mayank Mishra</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:mayank71104@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  mayank71104@gmail.com
                </a>
              </p>
            </div>
          </li>
          <li className="w-full md:w-1/2 lg:w-1/4 xl:w-1/4 p-4">
            <div className="bg-white rounded shadow-md p-4">
              <h3 className="text-lg font-bold">Varad Mahale</h3>
              <p className="text-gray-600">
                <a
                  href="mailto:varadm110@gmail.com"
                  className="text-blue-600 hover:text-blue-800"
                >
                  varadm110@gmail.com
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
