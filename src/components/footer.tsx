export default function Footer() {
  return (
    <footer className="bg-zinc-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 text-center md:mb-0">
            <a href="#" className="flex flex-col items-center">
              <span className="self-center whitespace-nowrap font-semibold text-white text-center">
                © 2024 - 2025 | Pedro Siqueira - Full-stack Developer
              </span>
            </a>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between"></div>
      </div>
    </footer>
  );
}
