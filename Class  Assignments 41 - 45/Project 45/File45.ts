function create_car(manufacturer: string, model: string, ...extras: Record<string, any>[]): Record<string, any> {
    const carInfo: Record<string, any> = {
      manufacturer: manufacturer,
      model: model,
      ...extras
    };
    return carInfo;
  }
  
  // Call the function with car information and additional details
  const carDetails = create_car('Toyota', 'Camry', { color: 'Silver', sunroof: true });
  
  // Print the returned object to ensure all information is stored correctly
  console.log(carDetails);
