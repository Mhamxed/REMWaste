# Skip Selector UI

This project is a responsive React TypeScript page that displays available skip sizes fetched from the [We Want Waste API](https://app.wewantwaste.co.uk). It includes interactive skip cards and a sticky selection summary bar that appears once a user selects a skip. The UI is optimized for both desktop and mobile experiences.

## Features

- **API Integration**  
  Fetches skip data dynamically from:  
  `https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft`

- **Skip Cards UI**  
  - Each skip size (4 to 14 yards) is displayed as a card with:
    - Yard size
    - Hire period
    - Features
    - Popular
    - is it allowed on the road or not
    - Price
    - "Select This Skip" button

- **Sticky Summary Bar**  
  - When a skip is selected, a sticky bar appears at the bottom of the screen showing:
    - Skip size
    - Price
    - Hire duration
    - Continue button

- **Mobile Responsive Design**  
  - added responsiveness to the progress bar
  - Layout adapts cleanly to small screens
  - Cards become stacked and buttons easier to tap



## Tech Stack

- **React** + **TypeScript**
- **Tailwind CSS**
- **Fetch API** or `axios` for data retrieval

## How to Run Locally

```bash
git clone https://github.com/Mhamxed/REMWaste
cd skip-selector-ui
npm install
npm run dev

