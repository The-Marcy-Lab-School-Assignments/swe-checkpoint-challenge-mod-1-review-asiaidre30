// Return a URL-friendly "slug": lowercase with hyphens instead of spaces.
// Return null if the title contains banned characters: "!", "#", "?"
const createSlug = (title) => {
  const bannedChars = ["!", "#", "?"];

  for (let i = 0; i < bannedChars.length; i++) {
    const banned = bannedChars[i];
    if (title.includes(banned)) {
      return null;
    }
  }
  const lower = title.toLowerCase();

  let slug = "";
  for (let i = 0; i < lower.length; i++) {
    const char = lower[i];

    if (char === " ") {
      slug += "-";
    } else {
      slug += char;
    }
  }
  return slug;
};

module.exports = {
  createSlug,
};
