import React from 'react';
import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  /** Title of the accordion section */
  title?: string;
  /** Array of accordion items */
  items: AccordionItem[];
  /** Allow multiple accordions to be open at once */
  allowMultiple?: boolean;
  /** Default expanded item ID */
  defaultExpanded?: string;
}

/**
 * FAQ Accordion component for displaying collapsible question/answer content
 */
export const Accordion: React.FC<AccordionProps> = ({
  title = 'Frequently Asked Questions',
  items,
  allowMultiple = false,
  defaultExpanded,
}) => {
  const [expanded, setExpanded] = React.useState<string | string[] | false>(
    allowMultiple ? (defaultExpanded ? [defaultExpanded] : []) : (defaultExpanded || false)
  );

  const handleChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    if (allowMultiple) {
      setExpanded((prev) => {
        const prevArray = Array.isArray(prev) ? prev : [];
        if (isExpanded) {
          return [...prevArray, panel];
        }
        return prevArray.filter((p) => p !== panel);
      });
    } else {
      setExpanded(isExpanded ? panel : false);
    }
  };

  const isExpanded = (panel: string) => {
    if (allowMultiple) {
      return Array.isArray(expanded) && expanded.includes(panel);
    }
    return expanded === panel;
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 800 }}>
      {title && (
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
          {title}
        </Typography>
      )}
      {items.map((item) => (
        <MuiAccordion
          key={item.id}
          expanded={isExpanded(item.id)}
          onChange={handleChange(item.id)}
          sx={{
            mb: 1,
            '&:before': { display: 'none' },
            boxShadow: 1,
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`${item.id}-content`}
            id={`${item.id}-header`}
          >
            <Typography>{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography color="text.secondary">{item.answer}</Typography>
          </AccordionDetails>
        </MuiAccordion>
      ))}
    </Box>
  );
};

export default Accordion;
