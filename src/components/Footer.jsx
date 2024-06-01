import { Typography } from "@material-tailwind/react";

export function Footer() {
  return (
    <footer className="bg-gray-800 flex w-full h-1/10 flex-row flex-wrap items-center justify-between gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
      <div className="flex flex-col-reverse lg:flex-row lg:mx-28 mx-3 items-center justify-between w-full">
        <Typography color="blue-gray" className="font-normal text-white lg:mt-0 mt-5 ">
          &copy; 2023 Material Tailwind
        </Typography>

        <ul className="flex w-full lg:w-2/6 flex-wrap justify-center items-center gap-y-2 gap-x-8 text-white ">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-white font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-white font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-whitefont-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}
