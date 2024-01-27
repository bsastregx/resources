// Access command-line arguments
const args = process.argv.slice(2); // The first two elements are not relevant

// Print the command-line arguments
console.log('Command-line arguments:', args);

// Use command-line arguments in your application
if (args.length > 0) {
  const firstArgument = args[0];
  console.log('First argument:', firstArgument);
} else {
  console.log('No command-line arguments provided.');
}