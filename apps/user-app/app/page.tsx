"use client"
import { getServerSession } from 'next-auth';
import { DashboardAppbarClient } from '../components/DashboardAppbarClient';
import { authOptions } from './lib/auth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Page() {
  const router = useRouter();

  // Assuming you're using next-auth useSession for client-side session handling
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/dashboard");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="spotlight-bg h-max">
      <DashboardAppbarClient/>
      <div className="rounded-full text-white  ">
        
      </div>
    </div>
  );
}
