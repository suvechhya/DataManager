# DataManager

This code creates a package that loads and manipulates Data.
The package is published in the given link: https://www.npmjs.com/package/data-manager-suvechhya
To install the package use the following command: npm i data-manager-suvechhya

# Build command:
npm run build

# Usage

  # Import the package:
  import DataManager from 'dataManager';

  # Create a new Instance
  const dm = new DataManager();

  # Load Data
  dm.loadData('../path-of-data') -- Only JSONs are supported

  # Load Schema
   dm.loadSchema('../path-of-schema') -- Only JSONs are supported

  # Show Data
  dm.show();

  # Select Data based on Condition
  const selectedDm = dm.select('population > 250000');
  selectedDm.show();

  # Project Selected Columns
  const projectedDm = dm.project(['Country']);
  projectedDm.show();

  # Group By Column
  const groupedData = dm.groupBy('Country');
  groupedData.show();
