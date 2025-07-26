const Subscribe = () => {
  return (
    <div className="bg-stone-800 text-white px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 max-w-screen-lg mx-auto rounded-2xl mb-5 hover:from-green-700 hover:to-green-900">
      <h1 className="text-lg md:text-5xl font-extrabold text-center md:text-left">
        Stay up to date with our latest offers...
      </h1>

      <form className="w-full md:w-auto items-center gap-4">
        <div className='flex flex-col gap-5'>
          <div>
          <input 
            type="email"
            placeholder="Enter your email address"
            required
            className="pl-5 pr-4 py-2 rounded-full text-black w-full md:w-72"
          />
          </div>

        <button
          type="submit"
          className="bg-white text-stone-800 font-medium py-2 px-6 rounded-full hover:bg-stone-200 transition"
        >
          Subscribe to Newsletter
        </button>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
