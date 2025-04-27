import "./App.css";

function App() {
  return (
    <div className="bg-[#B8A886] w-screen h-screen overflow-y-scroll flex justify-center font-black">
      <div className="max-w-5xl px-20 pr-10 py-20 flex flex-col">
        {/* Greeting */}
        <div className="flex items-end">
          <span className="text-9xl font-Inter-Black">hi</span>
          <span className="text-4xl ml-2 -mb-2 font-Inter-Black">
            ( नमस्ते )
          </span>
        </div>

        <div className="flex items-end mt-2">
          <span className="text-9xl font-Inter-Black">I am kriish</span>
          <span className="text-4xl ml-2 -mb-2 font-Inter-Black">
            ( क्रिश )
          </span>
        </div>
        <div className="flex mt-8">
          <span className="text-3xl font-bold py-2 font-Inter-Medium">
            I'm an (aspiring) software engineer with a{" "}
            <span className="text-[#C25555] font-Inter-Black">knack</span>
            <br />
            for
            <span className="text-[#657D46] font-Inter-Black"> UI</span>
            <span className="text-[#3F6E55] font-Inter-Black">/</span>
            <span className="text-[#4F8A8C] font-Inter-Black">UX</span>
          </span>
        </div>

        <div className="flex mt-8">
          <span className="text-3xl font-Inter-Medium py-2">
            Welcome to my portfolio website! Explore my work
            <br />
            and get to know more about me.
          </span>
        </div>
        <div className="flex flex-wrap justify-start gap-6 py-10">
          <button className="bg-black hover:bg-[#333] transition-all duration-300 px-6 py-3 rounded-lg shadow-md hover:scale-105">
            <span className="text-lg font-bold text-white">UI/UX</span>
          </button>

          <button className="bg-black hover:bg-[#333] transition-all duration-300 px-6 py-3 rounded-lg shadow-md hover:scale-105">
            <span className="text-lg font-bold text-white">Software Eng.</span>
          </button>

          <button className="bg-black hover:bg-[#333] transition-all duration-300 px-6 py-3 rounded-lg shadow-md hover:scale-105">
            <span className="text-lg font-bold text-white">More...</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
