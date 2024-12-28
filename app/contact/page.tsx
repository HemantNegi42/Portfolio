export default function ContactPage() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E6DACE]">
      <h1 className="text-5xl font-bold py-20">Let's Talk</h1>
      <div className="w-[50%] px-10 py-20 bg-white shadow-2xl rounded-lg grid lg:grid-cols-2 my-8 gap-3">
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
          <input
            className="p-3 mt-4 border w-full border-b-sky-400"
            type=""
          ></input>
        </div>
      </div>
    </div>
  );
}
