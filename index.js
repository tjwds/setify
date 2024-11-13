const setify = (array) => {
  return {
    has: (item) => array.includes(item),
    get size() {
      return array.length;
    },
    keys: () => array[Symbol.iterator](),
  };
};

export default setify;
