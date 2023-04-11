import Image from "next/image";

function index() {
  const handleOpenLoader = () => {
    const windowFeatures =
      "width=600,height=520,resizable,scrollbars=yes,status=1";
    window.open("/cutzuengineloader", "cutzuEngine Loader", windowFeatures);
  };
  const mainColor = "text-orange-500";
  const logoPath = "/redlogo.png";
  const mainName = "cutzu";

  return (
    <div className="relative flex flex-col h-screen w-full items-center justify-center bg-neutral-900 hover:cursor-default">
      <div className="flex w-full items-center justify-center gap-3">
        <Image
          src={logoPath}
          width={500}
          height={500}
          className="h-[50px] w-[52px] hue-rotate-[63deg]"
          alt="Logo"
        />
        <h1 className="text-3xl font-light tracking-widest text-white">
          <span className={`text-3xl font-semibold ${mainColor}`}>
            {mainName}
          </span>
          ENGINE
        </h1>
      </div>
      <button
        onClick={() => {
          handleOpenLoader();
        }}
        className="rounded-md border mt-10 border-white border-opacity-5 bg-white bg-opacity-[0.025] px-10 py-4 text-base font-bold text-white transition-all duration-300 active:bg-white active:bg-opacity-10"
      >
        Loader
      </button>
      <span className="absolute left-2 top-0 text-2xl font-semibold text-neutral-300">
        {`Login object is logged in console :)`}
      </span>
      <span className="absolute right-2 bottom-2 text-2xl">
        Created as a fun side project by{" "}
        <a
          href="https://www.alexfarkas.me/"
          className={`${mainColor} text-3xl`}
          target="_blank"
        >
          CutzuSD
        </a>
      </span>
    </div>
  );
}

export default index;
