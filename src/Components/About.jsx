import { motion } from "framer-motion";

const About = () => {
  return (
    <div
      className="min-h-screen px-4 md:px-10 lg:px-20 py-32 bg-white
    dark:bg-gray-700 dark:text-white text-gray-800"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          About Us
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Welcome to our global B2B wholesale marketplace—where businesses
          connect, grow, and thrive together.
        </p>
      </motion.div>

      {/* Mission and Vision */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 dark:bg-gray-500 dark:text-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-2 text-primary dark:text-white">
            Our Mission
          </h2>
          <p children="dark:text-gray-300">
            To empower manufacturers, distributors, and retailers around the
            world by offering a seamless, reliable, and secure wholesale
            platform tailored for bulk transactions.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-blue-50 dark:bg-gray-500 dark:text-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold mb-2 text-primary dark:text-white">
            Our Vision
          </h2>
          <p className="dark:text-gray-300">
            To become the world’s most trusted B2B marketplace by fostering
            global trade, simplifying logistics, and helping businesses scale
            with confidence.
          </p>
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-4">Why Choose Us?</h2>
        <p className="text-gray-700 dark:text-white max-w-xl mx-auto">
          We offer a powerful platform packed with modern features to streamline
          your wholesale business.
        </p>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: "Bulk Ordering",
            desc: "Easily place and manage large volume purchases with minimum quantity control.",
          },
          {
            title: "Secure Transactions",
            desc: "SSL encryption and JWT authentication for safe and verified user activity.",
          },
          {
            title: "Diverse Categories",
            desc: "Electronics, apparel, home appliances, tools, and more in one place.",
          },
          {
            title: "Responsive Design",
            desc: "Enjoy seamless browsing from mobile, tablet, or desktop.",
          },
          {
            title: "Powerful Dashboard",
            desc: "Manage products, purchases, and updates from a single control panel.",
          },
          {
            title: "Fast Deployment",
            desc: "Production-ready deployment using Firebase, MongoDB, and Netlify/Surge.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-6 bg-blue-50 dark:bg-gray-500 dark:text-white rounded-2xl shadow-md  hover:shadow-xl transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
