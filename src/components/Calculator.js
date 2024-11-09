
import React, { useState } from 'react';

const Calculator = () => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [totalArea, setTotalArea] = useState(0);
  const [requiredTiles, setRequiredTiles] = useState(0);
  const tilesSize = 250 * 500; // in mm, to be converted to sq. ft.

  const handleCalculate = () => {
    const areaInFeet = (length * width).toFixed(2);
    const areaInMeters = (areaInFeet / 10.764).toFixed(2); // 1 sq. ft. = 0.092903 sq. m.
    
    setTotalArea({
      sqFt: areaInFeet,
      sqM: areaInMeters,
    });

    const tilesPerBox = Math.floor(tilesSize / (12 * 12)); // Example: Number of tiles in a box, adjust as needed
    const totalTilesRequired = Math.ceil(areaInFeet / (tilesSize / 144)); // Convert size to sq. ft.
    setRequiredTiles(Math.ceil(totalTilesRequired / tilesPerBox));
  };

  return (
    <div className="p-6 mt-6 bg-white rounded shadow-lg">
      <h3 className="text-2xl font-bold mb-4">Box Calculation</h3>
      <div className="mb-4">
        <label className="block mb-2">Length</label>
        <input
          type="number"
          placeholder="Enter Length In Feet *"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Width</label>
        <input
          type="number"
          placeholder="Enter Width In Feet *"
          value={width}
          onChange={(e) => setWidth(e.target.value)}
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Tiles Size</label>
        <p>250 x 500 mm</p>
      </div>
      <button onClick={handleCalculate} className="bg-blue-500 text-white py-2 px-4 rounded mb-4">
        Calculate
      </button>
      <div>
        <h4 className="text-xl font-semibold">Calculations</h4>
        <p>Total Area Covered: {totalArea.sqM} Sq.M / {totalArea.sqFt} Sq.Ft</p>
        <p>Required Tiles: {requiredTiles}</p>
        <p>Required Boxes: {Math.ceil(requiredTiles / 10)} {/* Adjust based on box size */}</p>
      </div>
    </div>
  );
};

export default Calculator;
