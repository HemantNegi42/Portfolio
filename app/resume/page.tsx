export default function Resume() {
  return (
    <div className="flex flex-col justify-center items-center bg-[#E6DACE]">
      <h1 className="text-5xl font-bold py-20">Resume</h1>
      <div className="w-[50%]">
        <div className="flex justify-between mb-10">
          <h1 className="text-2xl font-bold">Education</h1>
          <button className="bg-[#0050FF] text-lg text-white px-6 rounded-full hover:bg-[#E6DACE] border-[#0050FF] border-2 hover:text-black ">
            Download
          </button>
        </div>
        <div className="px-10 py-20 bg-white shadow-2xl rounded-lg flex justify-between my-8 flex-col lg:flex-row">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[#0050FF] text-2xl font-bold">2022-2024</h1>
            <p className="text-lg ">Graphic Era Hill University</p>
            <p className="text-sm">MCA</p>
          </div>
          <div className="lg:w-1/2">
            <p>
              During my time at Graphic Era Hill University, I excelled in
              programming languages like C,C++ and Java and actively
              participated in projects focused on Full Stack Web Devlopment.
            </p>
          </div>
        </div>
        <div className="my-8 px-10 py-20 bg-white shadow-2xl rounded-lg flex justify-between">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[#0050FF] text-2xl font-bold">2018-2021</h1>
            <p className="text-lg ">MBGPG KU</p>
            <p className="text-sm">BSc.</p>
          </div>
          <div className="w-1/2">
            <p>
              During my time at K University, I excelled in programming
              languages like C,C++ and Java and actively participated in
              projects focused on Full Stack Web Devlopment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
