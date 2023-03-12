/*
A researcher is studying cell division in a large number of samples. Counting the cells in each sample is automated, but when she looks at the data, she immediately notices that something is wrong.

The data are arrays of integers corresponding to the number of cells in the sample over time. The first element data[0] is the initial count. The next element data[1] is the cell count at a later time. data[2] is the next count, and so on.

The cells are reproducing, so the elements of the array are supposed to be non-decreasing (there is no cell death), but the automatic cell counter has undercounted. In fact, the researcher has verified that the counter undercounts by 1 at random. The error rate is unknown.

Your task is to create a new non-decreasing array that is minimally different from the data array. For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] then the returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because data[4] < data[3] is clearly an error.

The first entry of the array is correct, and does not require an adjustment.
The array will never be empty.
*/

//My solution
function cleanedCounts(data) {
  let high = data[0];
    const newArr = data.map(function(val, i){
      if(i > 0 && val < high){
        val = high;
      }
      if(val > high){
        high = val;
      }
      return val;
    })
    return newArr;
}
