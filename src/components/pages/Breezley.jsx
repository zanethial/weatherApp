import React from 'react';
import Breezley from './Breezley';

function App() {
  const appName = "Breezley"; // You can change this dynamically

  return (
    <div>
      <Breezley title={appName} />
      <main className="p-4">
        <p>Welcome to {appName}! Your weather and wind info in one place.</p>
      </main>
    </div>
  );
}

export default App;
