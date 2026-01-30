/**
 * Colores Corporativos de Oeste Vaquero
 * Basados en el logo oficial (logotop-1.png) y la identidad visual
 */

export const colors = {
  // Colores Principales del Logo
  primary: {
    orange: '#f39548',      // Naranja principal del logo (cuadro del bigote)
    orangeDark: '#e67e22',  // Naranja oscuro para hover/activo
    orangeLight: '#f7c091', // Naranja claro para backgrounds
  },

  // Colores Western/Cowboy
  western: {
    brown: '#8b4513',       // Marrón cuero
    brownDark: '#5a2e14',   // Marrón oscuro
    brownLight: '#b45a1a',  // Marrón claro para bordes
    tan: '#d2b48c',         // Beige/arena
    black: '#1a1a1a',       // Negro western
    darkBrown: '#2b1a0e',   // Marrón muy oscuro para texto
  },

  // Colores de Texto
  text: {
    primary: '#171717',     // Negro principal
    secondary: '#374151',   // Gris oscuro
    tertiary: '#6b7280',    // Gris medio
    light: '#9ca3af',       // Gris claro
    white: '#ffffff',       // Blanco
  },

  // Colores de Fondo
  background: {
    white: '#ffffff',
    gray50: '#f9fafb',
    gray100: '#f3f4f6',
    gray200: '#e5e7eb',
    orangeLight: 'rgba(243, 149, 72, 0.1)',
    brownLight: 'rgba(139, 69, 19, 0.1)',
  },

  // Colores de Estado
  state: {
    success: '#10b981',     // Verde éxito
    error: '#ef4444',       // Rojo error
    warning: '#f59e0b',     // Amarillo advertencia
    info: '#3b82f6',        // Azul información
  },

  // Colores de Borde
  border: {
    light: '#e5e7eb',
    medium: '#d1d5db',
    dark: '#9ca3af',
    orange: '#f39548',
    brown: '#b45a1a',
  },

  // Gradientes Corporativos
  gradients: {
    orangeWarm: 'linear-gradient(45deg, #f39548, #e67e22)',
    orangeCool: 'linear-gradient(135deg, #f39548, #f7c091)',
    westernSunset: 'linear-gradient(135deg, rgba(243, 149, 72, 0.1), rgba(139, 69, 19, 0.1))',
    darkOverlay: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4))',
  },

  // Sombras
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.1)',
    md: '0 4px 8px rgba(0,0,0,0.3)',
    lg: '0 6px 12px rgba(0,0,0,0.4)',
    xl: '0 8px 25px rgba(0,0,0,0.15)',
  },
} as const;

/**
 * Utilidades para trabajar con colores
 */
export const colorUtils = {
  /**
   * Convierte un color hex a rgba con opacidad
   */
  hexToRgba: (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  },

  /**
   * Obtiene el color de texto apropiado (blanco o negro) según el fondo
   */
  getContrastText: (backgroundColor: string): string => {
    // Lista de colores oscuros que requieren texto blanco
    const darkColors = ['#8b4513', '#5a2e14', '#1a1a1a', '#2b1a0e'];
    return darkColors.includes(backgroundColor.toLowerCase()) 
      ? colors.text.white 
      : colors.text.primary;
  },
};

/**
 * Clases de Tailwind CSS predefinidas con los colores corporativos
 */
export const tailwindClasses = {
  // Botones
  button: {
    primary: 'bg-[#f39548] hover:bg-[#e67e22] text-white font-bold uppercase tracking-wide transition-all duration-300',
    secondary: 'bg-[#8b4513] hover:bg-[#5a2e14] text-white font-bold uppercase tracking-wide transition-all duration-300',
    outline: 'border-2 border-[#f39548] text-[#f39548] hover:bg-[#f39548] hover:text-white font-bold uppercase tracking-wide transition-all duration-300',
  },
  
  // Textos
  text: {
    primary: 'text-[#171717]',
    secondary: 'text-[#374151]',
    orange: 'text-[#f39548]',
    brown: 'text-[#8b4513]',
  },

  // Fondos
  bg: {
    orange: 'bg-[#f39548]',
    orangeLight: 'bg-[#f7c091]',
    brown: 'bg-[#8b4513]',
    white: 'bg-white',
  },

  // Bordes
  border: {
    orange: 'border-[#f39548]',
    brown: 'border-[#b45a1a]',
    light: 'border-gray-200',
  },
};

export default colors;
