// import { AppRoutes } from "@/router";
// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
//         <div className="">
//           <AppRoutes />
//         </div>
//       </div>
//     </main>
//   );
// }

// pages/index.tsx
import React from 'react';
import WelcomeScreen from './home/pages';
 
const Dashboard = () => {
  return (
    <div>
      <WelcomeScreen />
    </div>
  );
};

export default Dashboard;
