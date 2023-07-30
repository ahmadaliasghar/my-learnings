
// 40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

type Album = {
    artistName: string;
    albumTitle: string;
    trackNumber?:number;
}

function make_album(artistName: string, albumTitle: string, trackNumber?: number):Album {
    return {
        artistName: artistName,
        albumTitle: albumTitle,
        trackNumber: trackNumber
    }
}

let album1 = make_album("Ahmad", "C++");
let album2 = make_album("ALi", "Java");
let album3 = make_album("Asghar", "TypeScript");
let album4 = make_album("John", "OOP", 1203);

console.log(album1)
console.log(album2)
console.log(album3)
console.log(album4)
