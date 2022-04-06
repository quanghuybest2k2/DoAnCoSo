function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
}

//quick sort
function QuickSort(Arr) {
    if (Arr.length <= 1) {
        return Arr;
    }

    const pivot = Arr[Arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for (let i = 0; i < Arr.length - 1; i++) {
        if (Arr[i] < pivot) {
            leftArr.push(Arr[i]);
        }
        else {
            rightArr.push(Arr[i])
        }
    }

    return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];

}
//end quick sort

//Selection Sort
function swap(arr, xp, yp) {
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSort(arr) {
    var i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < arr.length - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < arr.length; j++)
            if (arr[j] < arr[min_idx])
                min_idx = j;

        // Swap the found minimum element with the first element
        swap(arr, min_idx, i);
    }

    for (var i = 0; i < arr.length; i++)
        console.log(arr[i] + " ");
}

//function printArray(arr) {
//    for (var i = 0; i < arr.length; i++)
//        console.log(arr[i] + " ");
//}


//end Selection Sort

function execution_time(func) {
    var startTime = performance.now()

    func();

    var endTime = performance.now()

    return endTime - startTime; // ms
}
