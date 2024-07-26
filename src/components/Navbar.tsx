import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              MyTodoApp
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/login" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
              Login
            </Link>
            <Link href="/register" className="text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium">
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;