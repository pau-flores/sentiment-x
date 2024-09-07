import { FaBitcoin } from "react-icons/fa";
import { LuBrainCircuit } from "react-icons/lu";
import { IoMdAnalytics } from "react-icons/io";

export default function Features() {
  return (
    <section id="features">
      <div className="container mx-auto pt-2 pb-24 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-16">
          <span className="bg-gradient-to-r from-red-500 to-red-800 text-transparent bg-clip-text">
            Sentiment X
          </span>
          <span className="ml-2">Features</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow rounded-lg">
            <IoMdAnalytics className="text-5xl text-red-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-cyan-600 mb-4">
              Sentiment-Enhanced Trading
            </h4>
            <p className="text-gray-600">
              Combine traditional trading strategies with advanced sentiment
              analysis for smarter, faster decision-making.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <LuBrainCircuit className="text-5xl text-red-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-cyan-600 mb-4">
              AI-Powered Insights
            </h4>
            <p className="text-gray-600">
              Leverage the power of AI and NLP to analyze market sentiment and
              stay ahead of trends.
            </p>
          </div>

          <div className="p-6 bg-white shadow rounded-lg">
            <FaBitcoin className="text-5xl text-red-500 mb-4 mx-auto" />
            <h4 className="text-xl font-semibold text-cyan-600 mb-4">
              High-Frequency Trading
            </h4>
            <p className="text-gray-600">
              Capture opportunities in high-frequency trading markets, aiming to
              secure 1% of this dynamic market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
