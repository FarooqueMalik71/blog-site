import Image from "next/image";

import Slink from "@/app/(blog)/slink";
export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center px-4 py-28">
      {/* Hero Section */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          About <span className="text-blue-600">Digital Diaries</span>
        </h1>
        <p className="text-lg text-gray-600">
          Welcome to Digital Diaries, your go-to blog for all things related to
          Information Technology. We explore trends, share insights, and dive
          deep into the world of tech to keep you informed and inspired.
        </p>
      </div>

      {/* Content Section */}
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full flex flex-col lg:flex-row items-center lg:items-start">
        {/* Profile Picture */}
        <div className="mb-6 lg:mb-0 lg:mr-8">
          <Image
            src="/images/pic.png" // Replace with your image path
            alt="Muhammad Farooque"
            width={600}
            height={600}
            className="rounded-full shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Meet the Author: Muhammad Farooque
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Hello, I'm Muhammad Farooque, the creator of Digital Diaries. With
            a passion for Information Technology and a love for exploring
            innovative solutions, I created this platform to share my knowledge
            and connect with like-minded individuals.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Through Digital Diaries, I aim to deliver valuable content, covering
            everything from emerging technologies to tips for IT enthusiasts.
            Whether you're a tech professional or a curious learner, you'll find
            something here to spark your interest.
          </p>
        </div>
      </div>
     <Slink/>
    </div>
  );
}
