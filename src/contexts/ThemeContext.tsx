import { CookiesProvider, useCookies } from 'react-cookie';
// Define the types of themes
export type Theme = 'blue' | 'red' | 'aqua' | 'magenta';

// Interface for the context state
interface ThemeContextState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Default values for the context
const themeArray: Theme[] = ['blue', 'red', 'aqua', 'magenta'];

const defaultTheme: Theme = 'magenta';
const defaultState: ThemeContextState = {
  theme: defaultTheme,
  setTheme: () => {}, // Placeholder function
};

export const themeStyles = {
  blue: '#394cfa',
  red: '#fa3939',
  aqua: '#00ffd9',
  magenta: '#E0115F',
};

export const darkThemeStyles = {
  blue: '#0f5f94',
  red: '#a62525',
  aqua: '#008b8b', // Darker shade of aqua (dark cyan)
  magenta: '#9f9f00',
};

export const themeShadows = {
  blue: 'rgba(24, 117, 223, 0.5)', // Adjusted for shadow effect
  red: 'rgba(135, 47, 31, 0.5)',
  aqua: 'rgba(0, 255, 255, 0.5)', // Aqua shadow with opacity
  magenta: 'rgba(139, 0, 139, 0.5)',
};

// Create the Theme Context
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { CharacterName, useCharacter } from './CharacterContext';
import { validateCookies } from '../utils/cookieValidation';

const ThemeContext = createContext<ThemeContextState>(defaultState);

// Theme Provider Component
interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  // cookies.theme we can access the cookie like this,and select the next possible theme
  const [cookies, setCookie] = useCookies(['theme', 'character']);
  const { characterName, setCharacterName } = useCharacter();
  const [theme, setTheme] = useState<Theme>(
    themeArray[(themeArray.indexOf(cookies.theme) + 1) % themeArray.length] ||
      'magenta'
  );

  useEffect(() => {
    console.log('Setting theme cookie');
    const newCookies: { theme: string; character: string } = validateCookies(
      theme,
      characterName
    );
    setCookie('theme', 'magenta', { path: '/' });
    setCookie('character', 'bison', { path: '/' });
    setTheme('magenta' as Theme);
    setCharacterName(newCookies.character as CharacterName);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom Hook to use Theme Context
export const useTheme = (): ThemeContextState => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export function changeTheme(character?: CharacterName, theme?: Theme): Theme {
  return 'magenta';
}

//   const themeArray: Theme[] = ["blue", "red", "aqua","magenta"];
//   if (character && !theme) {
//     switch (character) {
//       case "kyo": {
//         return themeArray[themeArray.indexOf("blue")];
//       }
//       case "iori": {
//         return themeArray[themeArray.indexOf("red")];
//       }
//       case "kula": {
//         return themeArray[themeArray.indexOf("aqua")];
//       }
//       case "bison": {
//         return themeArray[themeArray.indexOf("magenta")]
//       }
//     }
//   } else {
//     if (theme) {
//       const themeArray: Theme[] = ["blue", "red", "aqua","magenta"];
//       return themeArray[(themeArray.indexOf(theme) + 1) % themeArray.length];
//     } else {
//       return themeArray[0];
//     }
//   }
// }
