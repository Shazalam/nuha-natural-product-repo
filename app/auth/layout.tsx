import Link from 'next/link';

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary-50 via-green-50 to-emerald-100">
            {/* Header */}
            {children}
        </div>
    );
}