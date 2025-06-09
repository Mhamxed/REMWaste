import StatusBar from './components/Statusbar'
import SkipCardGrid from './components/Skips'
import { useState } from 'react';
import StickyBottomBar from './components/SelelctedSkipBar';
import type { SkipData } from './types/SkipData.ts';

function App() {
  const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);

  const handleClear = () => {
    setSelectedSkip(null);
  };

  const handleProceed = () => {
    alert('Proceeding to next step...');
  };

  return (
    <>
      <StatusBar/>
      <SkipCardGrid setSelectedSkip={setSelectedSkip}/>
      <StickyBottomBar selectedSkip={selectedSkip}
        onClear={handleClear}
        onProceed={handleProceed}/>
    </>
  )
}

export default App
