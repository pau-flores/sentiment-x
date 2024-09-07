export default function Steps() {
  const steps = [
    {
      title: "Step 1: Connect your trading account",
      description:
        "Link your trading account to Sentiment X and instantly unlock real-time AI-powered sentiment data tailored to your trading strategies. Gain insights from social media, news, and market trends to make smarter decisions.",
      image: "/images/graph.png",
    },
    {
      title: "Step 2: Analyze Market Sentiment",
      description:
        "Select the data sources you want to monitor, including social media platforms, global news, and other market indicators. Sentiment X’s cutting-edge system processes the data in real-time to provide actionable insights.",
      image: "/images/graph.png",
    },
    {
      title: "Step 3: Execute and Optimize Trades",
      description:
        "Use the sentiment analysis to execute informed trades in a fast-paced market. Continuously track performance and fine-tune your strategies using historical sentiment trends and AI-driven predictions.",
      image: "/images/graph.png",
    },
  ];

  return (
    <section id="instructions">
      <div className="container mx-auto pt-2 pb-0 px-6 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-10">How It Works</h3>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse md:flex-row ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center mb-4 md:mb-10`}
          >
            <div className="md:w-1/2 p-6">
              <h4 className="text-2xl font-semibold text-cyan-600 mb-4">
                {step.title}
              </h4>
              <p className="text-gray-600">{step.description}</p>
            </div>

            <div className="md:w-1/2 px-6">
              <img
                src={step.image}
                alt={step.title}
                className="max-w-80 h-auto mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
