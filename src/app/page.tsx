import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="mt-16 p-4">
        <h1 className="text-3xl font-bold">Welcome to MyTodoApp</h1>
        {/* Your page content goes here */}
      </main>
    </div>
  );
}
