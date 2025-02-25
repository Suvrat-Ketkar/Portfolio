const Footer = () => {
    return (
      <footer className="p-4 bg-gray-100 dark:bg-gray-800 text-center">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://github.com/Suvrat-Ketkar" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            GitHub
          </a>
          <a href="https://linkedin.com/in/suvrat-ketkar" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            LinkedIn
          </a>
          <a href="mailto:suvratketkar@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100">
            Email
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;