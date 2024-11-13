export function Tecnologies() {
  return (
    <div className="mx-10 mb-20" id="tech">
      <h1 className="text-center text-2xl mb-10 text-white font-bold">Tech Stack</h1>
      <div className="grid justify-around grid-cols-2 gap-10 sm-gap-5 md-gap-0 sm:grid-cols-3 md:grid-cols-8 md:mx-20" id="tecnologia">
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/java.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/next.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/typescript.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/javascript.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/tailwind.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/python.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/kotlin.svg"} />
        </div>
        <div className="flex items-center justify-center">
          <img className="w-16" src={"./tecnologies/mysql.svg"} />
        </div>
      </div>
    </div>
  );
}
