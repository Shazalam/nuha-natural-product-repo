// Color scheme constants
export const colors = {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  neutral: {
    50: '#fafafa',
    100: '#f4f4f5',
    200: '#e4e4e7',
    300: '#d4d4d8',
    400: '#a1a1aa',
    500: '#71717a',
    600: '#52525b',
    700: '#3f3f46',
    800: '#27272a',
    900: '#18181b',
  }
};

// Reusable button styles
export const buttonStyles = {
  primary: "bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center space-x-2",
  secondary: "border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-300 font-semibold text-lg flex items-center justify-center space-x-2",
  white: "bg-white text-primary-600 px-10 py-5 rounded-2xl hover:bg-neutral-100 transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
};

// Animation styles
export const animations = {
  float: "animate-float",
  hoverScale: "hover:scale-110 transition-transform duration-300",
  hoverLift: "transform hover:-translate-y-2 transition-all duration-300",
  cardHover: "transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl"
};