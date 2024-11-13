import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="text-center mb-6 md:mb-0 ">
            <a href="#" className="items-center flex flex-col">
              <span className="text-center self-center font-semibold whitespace-nowrap text-white">
              © 2024 Pedro Siqueira - Full-stack Developer
              </span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
        </div>
      </div>
    </footer>
  );
}
