import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to UnifiedCare MVP</h1>
      <p className="text-lg text-center">Use the navigation to manage clients, caregivers, shifts, visits, and compliance.</p>
    </div>
  );
};

export default Home;
