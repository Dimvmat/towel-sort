
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix) {
        let array = [];
        if (matrix.length > 0) {
            for (let i in matrix) {
                if (i % 2 === 0) {
                    array = array.concat(matrix[i]);
                } else {
                    array = array.concat(matrix[i].reverse());
                }
            }
        }
        return array;
    } else {
        return []
    }
}
