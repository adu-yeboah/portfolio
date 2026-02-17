const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-900 relative z-10">
      <div className="container mx-auto px-6 text-center text-gray-600">
        <p>© {new Date().getFullYear()} Adu Yeboah Samuel. Built with Next.js & Framer Motion.</p>
      </div>
    </footer>
  );
};

export default Footer;
