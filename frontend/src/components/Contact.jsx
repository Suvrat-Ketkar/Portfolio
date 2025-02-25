const Contact = () => {
    return (
      <section className="p-4">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-4">
            Feel free to reach out to me for collaborations, questions, or just to say hi!
          </p>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium">Message</label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
          <div className="mt-6">
            <p className="text-lg">Or connect with me on:</p>
            <div className="flex space-x-4 mt-2">
              <a href="https://github.com/yourusername" className="text-blue-500 hover:underline">GitHub</a>
              <a href="https://linkedin.com/in/yourusername" className="text-blue-500 hover:underline">LinkedIn</a>
              <a href="mailto:your@email.com" className="text-blue-500 hover:underline">Email</a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;