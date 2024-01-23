import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

const Accordions = () => {
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  return (
    <div className='Accordian_Section'>
      <Accordion  style={{
            width: '60vw', maxWidth: '60vw'
        }}
        expanded={expanded === 'panel1'}
        onChange={handleAccordionChange('panel1')}
        slotProps={{ transition: { unmountOnExit: true } }}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel-content"
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Header 1
        </AccordionSummary>
        <AccordionDetails
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleAccordionChange('panel2')}
        slotProps={{ transition: { unmountOnExit: true } }}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel-content"
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Header 2
        </AccordionSummary>
        <AccordionDetails
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleAccordionChange('panel3')}
        slotProps={{ transition: { unmountOnExit: true } }}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel-content"
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Header 3
        </AccordionSummary>
        <AccordionDetails
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>

      <Accordion 
       
        expanded={expanded === 'panel4'}
        onChange={handleAccordionChange('panel4')}
        slotProps={{ transition: { unmountOnExit: true } }}
      >
        <AccordionSummary
          id="panel-header"
          aria-controls="panel-content"
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Header 4
        </AccordionSummary>
        <AccordionDetails
          style={{ width: '60%', maxWidth: '60%' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Accordions;
