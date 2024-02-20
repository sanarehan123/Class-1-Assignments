function make_great(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
  }
  
  function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
      console.log(magician);
    });
  }
  
  // Array of magician names
  let magician_names: string[] = ['Harry Houdini', 'David Blaine', 'Penn Jillette', 'Teller'];
  
  // Update magician names to include 'the Great'
  magician_names = make_great(magician_names);
  
  // Display the modified magician names
  show_magicians(magician_names);
  