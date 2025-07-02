import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqs = [
  {
    question: "How can I place a bulk order?",
    answer:
      "Simply browse products, select your required quantity, and follow the checkout process. Our team will handle the rest!",
  },
  {
    question: "Is there a minimum order quantity?",
    answer:
      "Yes. Each product has a minimum selling quantity set by the supplier.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team via live chat or email. We’re here 24/7!",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 bg-white dark:bg-gray-700 text-black dark:text-gray-100">
      <div className="w-full mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className=" rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-lg font-semibold flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-600 focus:outline-none"
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 transform transition ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 text-md font-semibold bg-gray-50 dark:bg-gray-800">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
              <img
                  className="w-[600px] h-[600px] object-cover"
          src="https://i.ibb.co/Rkrs14Yz/website-faq-section-user-help-desk-customer-support-frequently-asked-questions-problem-solution-quiz.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default FAQSection;
