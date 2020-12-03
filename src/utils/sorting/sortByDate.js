export const sortByDate = (arr) => {
    let sorted = [...arr];

    sorted.sort(function(a, b) {
        if (a.date > b.date) {
            return -1;
          }
        if (a.date < b.date) {
            return 1;
        }
        return 0;
    });

    return sorted;
}
