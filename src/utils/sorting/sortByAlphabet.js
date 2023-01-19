export const sortByAlphabet = (arr) => {
    let sorted = [...arr];

    sorted.sort(function(a, b) {
        if (a.title > b.title) {
            return 1;
          }
        if (a.title < b.title) {
            return -1;
        }
        return 0;
    });

    return sorted;
}
