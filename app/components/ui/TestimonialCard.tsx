interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  location: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-neutral-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-100 group">
      <div className="flex items-center space-x-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-400 text-xl">⭐</span>
        ))}
      </div>

      <p className="text-neutral-600 italic mb-8 text-lg leading-relaxed relative">
        <span className="text-4xl text-primary-200 absolute -top-4 -left-2">"</span>
        {testimonial.content}
      </p>

      <div className="flex items-center space-x-4">
        <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-full flex items-center justify-center text-2xl shadow-inner">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-bold text-neutral-900 text-lg">
            {testimonial.name}
          </div>
          <div className="text-neutral-600 text-sm">
            {testimonial.role}
          </div>
          <div className="text-primary-600 text-xs font-medium mt-1">
            {testimonial.location}
          </div>
        </div>
      </div>
    </div>
  );
}