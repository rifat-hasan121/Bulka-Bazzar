import { motion } from "framer-motion";

const reasons = [
  {
    title: "Secure Transactions",
    desc: "All your payments are protected with top-notch encryption and security protocols.",
  },
  {
    title: "Wide Product Range",
    desc: "Explore thousands of products across diverse wholesale categories.",
  },
  {
    title: "Verified Sellers",
    desc: "Work only with trusted suppliers verified by our team.",
  },
  {
    title: "Responsive Support",
    desc: "24/7 dedicated support to solve your business needs.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16  text-black dark:text-gray-100">
      <div className=" mx-auto px-4">
        <motion.h2
          className="text-lg md:text-xl font-bold bg-black inline px-4 rounded-tr-2xl text-gray-100"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        <hr className="border-1 dark:border-white border-black" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 my-6">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-3xl font-semibold text-primary dark:text-gray-200 my-4">
                {item.title}
              </h3>
              <p className="text-xl my-6 text-gray-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
