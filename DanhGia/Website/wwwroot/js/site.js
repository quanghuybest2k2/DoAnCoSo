// ================================== Thuật toán chuỗi ====================================
function bblSort_chuoi(arr) {
    for (var i = 0; i < arr.length; i++) {
        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {

            if (sosanh(arr[j], arr[j + 1]) > 0) { //sosanh(arr[j], arr[j + 1]) > 0 ;;;;//arr[j].localeCompare(arr[j + 1]) > 0
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    //console.log(arr);
}

function selectionSort_chuoi(arr) {
    var i, j, min_idx;
    // One by one move boundary of unsorted subarray
    for (i = 0; i < arr.length - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < arr.length; j++) {
            if (sosanh(arr[j], arr[min_idx]) < 0) //sosanh(arr[j], arr[min_idx]) > 0
            {
                min_idx = j;
            }
        }
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
   // console.log(arr);
}
function insertionSort_chuoi(arr) {
    var i, key, j;
    for (i = 1; i < arr.length; i++) {
        key = arr[i];
        j = i - 1;
        while (j >= 0 && sosanh(arr[j], key) > 0) { //j >= 0 && sosanh(arr[j], key) > 0
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    //console.log(arr);
}
// ================================== Thuật toán số ====================================
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {

                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    //console.log(arr);
}
//Selection Sort
function selectionSort(arr) {
    var i, j, min_idx;

    // One by one move boundary of unsorted subarray
    for (i = 0; i < arr.length - 1; i++) {
        // Find the minimum element in unsorted array
        min_idx = i;
        for (j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx])
            {
                min_idx = j;
            }
        }
        temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
    //console.log(arr);
}
//end Selection Sort
//Insertion Sort
function insertionSort(arr)
{
    for (var i = 1; i < arr.length; i++)
    {
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key){
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    //console.log(arr);
}
//end Insertion Sort


function execution_time(func) {
    var startTime = performance.now()

    func();

    var endTime = performance.now()

    return endTime - startTime; // ms
}

function sosanh(a, b) {
    //return a.toString().toLowerCase().localeCompare(b.toString().toLowerCase());
    return a.toString().localeCompare(b.toString());
}
