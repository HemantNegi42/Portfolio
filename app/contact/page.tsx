"use client";
export default function ContactPage() {
  return (
    <div className="bg-[#E6DACE] p-10">
      <h1 className="text-center text-5xl font-bold">Let&apos;s Talk</h1>
      <div className="lg:w-[50%] my-4 mx-auto p-10 bg-white shadow-2xl rounded-lg ">
        <div className="grid lg:grid-cols-2 my-8 gap-3">
          <div>
            <h1>First Name* </h1>
            <input className="p-3 mt-4 border w-full border-b-sky-400"></input>
          </div>
          <div>
            <h1>Last Name* </h1>
            <input
              className="p-3 mt-4 border w-full border-b-sky-400"
              type="email"
            ></input>
          </div>
          <div>
            <h1>Email* </h1>
            <input className="p-3 mt-4 border w-full border-b-sky-400"></input>
          </div>
          <div>
            <h1>Subject </h1>
            <input className="p-3 mt-4 border w-full border-b-sky-400"></input>
          </div>
          <div>
            <h1>Message </h1>
            <input className="p-3 mt-4 border w-full border-b-sky-400"></input>
          </div>
        </div>
        <button className="bg-[#0050FF] text-white px-8 py-2 rounded-full hover:bg-white border-[#0050FF] border-2 hover:text-black">
          send
        </button>
      </div>
    </div>
  );
}
