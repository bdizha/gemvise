export type GradientTheme = 'dark' | 'dark-light' | 'light-dark' | 'dark-light-dark' | 'light-dark-light' | 'dark-light-dark-long' | 'pink-purple' | 'pink-purple-pink' | 'purple-pink' | 'purple-pink-purple';

export const gradientPaths: Record<GradientTheme, string> = {
  'dark': '/gradients/named/GV-Gradient-Dark.png',
  'dark-light': '/gradients/named/GV-Gradient-Dark-Light.png',
  'light-dark': '/gradients/named/GV-Gradient-Light-Dark.png',
  'dark-light-dark': '/gradients/named/GV-Gradient-Dark-Light-Dark.png',
  'light-dark-light': '/gradients/named/GV-Gradient-Light-Dark-Light.png',
  'dark-light-dark-long': '/gradients/named/GV-Gradient-Dark-Light-Dark-Long.png',
  'pink-purple': '/gradients/named/GV-Gradient-Pink-Purple.png',
  'pink-purple-pink': '/gradients/named/GV-Gradient-Pink-Purple-Pink.png',
  'purple-pink': '/gradients/named/GV-Gradient-Purple-Pink.png',
  'purple-pink-purple': '/gradients/named/GV-Gradient-Purple-Pink-Purple.png'
};
