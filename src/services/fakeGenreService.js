export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Romantic" },
  { _id: "5b21ca3eeb7f6fbccd471828", name: "Fiction" },
  { _id: "5b21ca3eeb7f6fbccd471832", name: "Biography" },

];

export function getGenres() {
  return genres.filter(g => g);
}
 