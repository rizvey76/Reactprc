import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';
import HoverCounter from './HoverCounter';

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme} = context;

    
    return (
        <div>
            <h1>This is a content</h1>
           
                    <HoverCounter
                      
                        theme={theme}
                        
                    />

        </div>
    );
}