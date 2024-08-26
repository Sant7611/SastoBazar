import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-gray-200">
        <div className="container mx-auto py-14 px-6">
          <div className="grid md:grid-cols-12 grid-cols-1 gap-7">
            <div className="lg:col-span-4 col-span-12">
              <a href="#" >
                <img src="../../src/assets/images/logo.png" alt="" className="h-12" />
              </a>
              <p className="mt-6 text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non deleniti expedita? Iure aperiam ab recusandae, cumque debitis dolores expedita temporibus dicta quae iusto necessitatibus? Eius adipisci perferendis 
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
