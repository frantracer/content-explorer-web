export const loadContentItems = () => {
  const item_array = [
    { title: "title10", src: "https://www.youtube.com/embed/9iDncS9-2vI", type: "youtube" },
    { title: "title20", src: "https://www.youtube.com/embed/uBFKXLxKMDY", type: "youtube" },
    { title: "title30", src: "https://www.youtube.com/embed/NxvQPzrg2Wg", type: "youtube" },
    { title: "a kitten", src: "http://placekitten.com/g/350/200", type: "image" }
  ];
  return { type: 'UPDATE_CONTENT', items : item_array };
}

export const unloadContentItems = () => {
  const item_array = [];
  return { type: 'UPDATE_CONTENT', items : item_array };
}

export const loadCredentials = (credentials) => {
  return { type: 'UPDATE_CREDENTIALS', credentials: credentials };
}
