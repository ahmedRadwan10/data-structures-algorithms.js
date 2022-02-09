
function merge(arr1, arr2) {
    let resultArr = [];
    let i = 0;
    let j = 0;
    // looping over both arrays
    while (i < arr1.length && j < arr2.length) {
        // sort elements
        if (arr1[i] < arr2[j]) {
            resultArr.push(arr1[i]);
            i++;
        } else {
            resultArr.push(arr2[j]);
            j++;
        }
    }
    /* if arr1, arr2 have different sizes then, loop over the rest 
    to add to resultArr. */
    while (i < arr1.length) {
        resultArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        resultArr.push(arr2[j]);
        j++;
    }
    return resultArr;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

