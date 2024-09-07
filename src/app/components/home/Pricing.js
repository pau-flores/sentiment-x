export default function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "$9.99/mo",
      features: [
        "Access to basic sentiment data",
        "Limited social media analysis",
        "Email support",
      ],
    },
    {
      title: "Pro",
      price: "$19.99/mo",
      features: [
        "All data sources included",
        "Advanced AI analysis",
        "Priority email and chat support",
      ],
    },
    {
      title: "Enterprise",
      price: "$29.99/mo",
      features: [
        "Custom sentiment reports",
        "Dedicated account manager",
        "24/7 support",
      ],
    },
  ];

  return (
    <section id="pricing">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f3e8ff"
            fillOpacity="1"
            d="M0,192L80,197.3C160,203,320,213,480,208C640,203,800,181,960,181.3C1120,181,1280,203,1360,213.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="pt-10 pb-[150px] bg-gradient-to-b from-purple-100 to-red-50">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Choose Your Plan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="p-8 bg-white bg-opacity-20 border border-pink-300 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg"
              >
                <h4 className="text-lg font-semibold text-red-600 mb-4 text-center uppercase">
                  {plan.title}
                </h4>

                <p className="text-3xl font-bold text-cyan-600 mb-6 text-center">
                  {plan.price}
                </p>

                <ul className="text-gray-700 mb-8 space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-center">
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="text-center">
                  <button className="px-6 py-3 text-white font-semibold rounded-lg shadow bg-red-600 hover:bg-red-700 transition duration-300">
                    {plan.title === "Enterprise" ? "Contact Us" : "Get Started"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
