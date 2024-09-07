export default function Hero() {
  return (
    <section id="hero">
      <div className="bg-red-50">
        <div className="container mx-auto flex flex-col md:flex-row items-center py-12 px-6 md:pt-24 md:pb-6">
          <div className="w-full text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              Where Data Meets Emotion
            </h1>
            <h3 className="text-xl text-gray-700 mb-12">
              Sentiment X is revolutionizing trading with AI-driven sentiment
              analysis, capturing real-time data from social media, news, and
              market trends to help you make informed decisions in a fast-paced
              environment.
            </h3>
            <button className="px-6 py-3 bg-gradient-to-b from-red-500 to-red-800 text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
          <path
            fill="#fef2f2"
            fillOpacity="1"
            d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,122.7C1120,128,1280,160,1360,170L1440,180L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
