import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col pl-24 min-h-screen items-center justify-center text-white bg-black-100">
      <div className="flex w-full justify-left items-center mb-8">
        <Image
          className="rounded-lg"
          src="https://i.imgur.com/gSFtFCJ.png"
          alt="Trophy"
          width={100}
          height={50}
        />
      </div>
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Kitten Coup #2139</h1>
        </div>
        <div className="flex">
          <div className="relative mb-8 mr-8">
            <Image
              className="rounded-lg"
              src="https://i.imgur.com/InBPg5a.png"
              alt="Kitten Coup #2139"
              width={300}
              height={300}
            />
          </div>
          <div className=" p-8 rounded-lg">
            <h2 className="text-2xl mb-4">Participants (11)</h2>
            <ul className="list-none space-y-2">
              <li className="bg-white-100 pl-4 pr-24 rounded-3xl">GpPSNu4FrEtdtW7rDs8s3twyAinTMEbz3SqaNrh9Bp6</li>
              <li className="bg-white-100 pl-4 pr-24 rounded-3xl">0xdb676b49cb0Df7A375393F90035B2a6afd4E8054</li>
              <li className="bg-white-100 pl-4 pr-24 rounded-3xl">0xdb676b49cb0Df7A375393F90035B2a6afd4E8054</li>
              <li className="bg-white-100 pl-4 pr-24 rounded-3xl">bc1qzp407zevtm2u9dx2dyp5er4ytutz2raf089xtv</li>
              <li className="bg-white-100 pl-4 pr-24 rounded-3xl">GpPSNu4FrEtdtW7rDs8s3twyAinTMEbz3SqaNrh9Bp6</li>
              <li className="bg-white-100 pl-4 pr-24 rounded-3xl">bc1qzp407zevtm2u9dx2dyp5er4ytutz2raf089xtv</li>
            </ul>
          </div>

        </div>
        <div className="flex mt-8 space-x-4">
          <button className="bg-black-100 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-white-200 hover:text-black-100 border">Reset Giveaway</button>
          <button className="bg-black-100 pl-4 pr-4 pt-2 pb-2 rounded-3xl hover:bg-white-200 hover:text-black-100 border">End Giveaway</button>
        </div>
      </div>
    </main>
  );
}
