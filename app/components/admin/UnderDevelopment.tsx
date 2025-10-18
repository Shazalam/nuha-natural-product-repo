interface UnderDevelopmentProps {
  tabName: string;
}

export default function UnderDevelopment({ tabName }: UnderDevelopmentProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
      <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">🚧</span>
      </div>
      <h3 className="text-xl font-bold text-neutral-900 mb-2">Under Development</h3>
      <p className="text-neutral-600">
        The {tabName.charAt(0).toUpperCase() + tabName.slice(1)} section is currently being developed.
      </p>
    </div>
  );
}