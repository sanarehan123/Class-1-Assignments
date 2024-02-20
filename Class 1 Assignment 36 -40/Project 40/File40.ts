function make_album(artist: string, title: string, tracks?: number): Record<string, any> {
    const album: Record<string, any> = {
      artist: artist,
      title: title
    };
  
    if (tracks) {
      album.tracks = tracks;
    }
  
    return album;
  }
  
  // Create albums using the make_album function
  const album1 = make_album('Taylor Swift', 'Folklore', 16);
  const album2 = make_album('Ed Sheeran', '÷ (Divide)');
  const album3 = make_album('Beyoncé', 'Lemonade', 12);
  
  // Print the album information
  console.log(album1);
  console.log(album2);
  console.log(album3);
  