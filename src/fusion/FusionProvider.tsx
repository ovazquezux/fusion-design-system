import React from 'react';
import { BuilderComponent, builder } from '@builder.io/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '../theme';

// Import registered components to ensure they're available
import '../builder/components';

// Initialize builder
import { BUILDER_API_KEY } from '../builder/config';
builder.init(BUILDER_API_KEY);

interface FusionProviderProps {
  children?: React.ReactNode;
  theme?: 'dark' | 'light';
}

/**
 * FusionProvider wraps your app with Builder.io and MUI theming
 * Use this component to enable Fusion features in your application
 */
export const FusionProvider: React.FC<FusionProviderProps> = ({ 
  children, 
  theme = 'dark' 
}) => {
  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

interface FusionContentProps {
  /** Builder.io model name (e.g., 'page', 'section', 'component') */
  model?: string;
  /** Content entry ID from Builder.io */
  contentId?: string;
  /** URL path for content matching */
  url?: string;
  /** Theme mode */
  theme?: 'dark' | 'light';
  /** Fallback content when Builder content is not found */
  fallback?: React.ReactNode;
}

/**
 * FusionContent renders Builder.io content with your MUI theme
 * Use this to display Figma designs imported through Fusion
 */
export const FusionContent: React.FC<FusionContentProps> = ({
  model = 'page',
  contentId,
  url,
  theme = 'dark',
  fallback,
}) => {
  const [content, setContent] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchContent = async () => {
      try {
        let fetchedContent;
        
        if (contentId) {
          fetchedContent = await builder.get(model, { 
            query: { id: contentId } 
          }).promise();
        } else if (url) {
          fetchedContent = await builder.get(model, { 
            url 
          }).promise();
        } else {
          fetchedContent = await builder.get(model).promise();
        }
        
        setContent(fetchedContent);
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, [model, contentId, url]);

  const selectedTheme = theme === 'dark' ? darkTheme : lightTheme;

  if (loading) {
    return (
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <div style={{ padding: '20px', textAlign: 'center' }}>
          Loading...
        </div>
      </ThemeProvider>
    );
  }

  if (!content && fallback) {
    return (
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        {fallback}
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider theme={selectedTheme}>
      <CssBaseline />
      <BuilderComponent model={model} content={content} />
    </ThemeProvider>
  );
};

export default FusionProvider;
