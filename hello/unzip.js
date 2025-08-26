const AdmZip = require('adm-zip');
const fs = require('fs');
const path = require('path');

try {
  console.log('Starting to unzip hello.zip...');
  
  // Check if hello.zip exists
  if (!fs.existsSync('hello.zip')) {
    console.error('hello.zip not found!');
    process.exit(1);
  }
  
  // Create zip instance
  const zip = new AdmZip('hello.zip');
  
  // Extract to current directory
  zip.extractAllTo('./', true);
  
  console.log('Successfully extracted hello.zip!');
  
} catch (error) {
  console.error('Error extracting zip file:', error);
  process.exit(1);
}