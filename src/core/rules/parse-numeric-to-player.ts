type boardNumericEntry = -1 | 0 | 1;

const boardNumericEntryDictionary = {
  [-1]: {
    text: "X",
  },
  [0]: {
    text: "",
  },
  [1]: {
    text: "0",
  },
};

export function parseNumericToPlayer(value: boardNumericEntry) {
  return boardNumericEntryDictionary[value].text;
}
