// import { authOptions } from '../../lib/auth';
import { redirect } from 'next/navigation';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
//   const session = await getServerSession(authOptions);
  
  // Redirect if not admin
//   if (!session || session.user.role !== 'admin') {
//     redirect('/');
//   }
  if (false) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {children}
    </div>
  );
}