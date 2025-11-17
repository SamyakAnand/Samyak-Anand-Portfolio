const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting build and test process...');

// Function to execute command
function runCommand(command, cwd) {
  return new Promise((resolve, reject) => {
    const process = exec(command, { cwd }, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${command}`);
        console.error(stderr);
        reject(error);
        return;
      }
      console.log(stdout);
      resolve(stdout);
    });
    
    process.stdout?.on('data', (data) => {
      console.log(data.toString());
    });
    
    process.stderr?.on('data', (data) => {
      console.error(data.toString());
    });
  });
}

// Main function
async function main() {
  try {
    // Check if we're in the correct directory
    const currentDir = process.cwd();
    console.log(`Current directory: ${currentDir}`);
    
    // Check if package.json exists
    if (!fs.existsSync(path.join(currentDir, 'package.json'))) {
      console.error('package.json not found. Please run this script from the project root directory.');
      process.exit(1);
    }
    
    // Clean previous build
    console.log('Cleaning previous build...');
    if (fs.existsSync(path.join(currentDir, 'dist'))) {
      fs.rmSync(path.join(currentDir, 'dist'), { recursive: true, force: true });
      console.log('Previous build cleaned.');
    }
    
    // Run build
    console.log('Running build...');
    await runCommand('npm run build', currentDir);
    
    // Check if build was successful
    if (fs.existsSync(path.join(currentDir, 'dist'))) {
      console.log('Build successful!');
      
      // List dist contents
      console.log('Dist contents:');
      const distContents = fs.readdirSync(path.join(currentDir, 'dist'));
      distContents.forEach(item => {
        console.log(`  ${item}`);
      });
      
      // Check if index.html exists
      if (fs.existsSync(path.join(currentDir, 'dist', 'index.html'))) {
        console.log('index.html found in dist folder.');
      } else {
        console.error('index.html NOT found in dist folder!');
      }
      
      console.log('\nBuild and test completed successfully!');
      console.log('You can now deploy the contents of the dist folder.');
    } else {
      console.error('Build failed - dist folder not created.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Build process failed:', error);
    process.exit(1);
  }
}

main();