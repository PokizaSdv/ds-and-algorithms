// Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The pass through the list is repeated until the list is sorted. 

function bubbleSort(array) {
    let lastIdx = array.length - 1
    let sorted = false

    while(!sorted) {
        sorted = true
        for (let i = 0; i < lastIdx; i ++) {
            if(array[i] > array[i + 1]) {
                [array[i], array[i+1]] = [array[i+1], array[i]]
                sorted = false;
            }
        }
        lastIdx--;
    }
    return array
}
console.log(bubbleSort([3,5,6,7,2,8,1]))

//Insertion Sort: This algorithm builds the final sorted array one item at a time, by repeatedly taking the next item from the unsorted part of the array and inserting it into its correct position in the sorted part of the array.

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let ele = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > ele) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = ele;
    }
    return arr;
}
console.log(insertionSort([5,8,3,1]))

//Selection Sort: This algorithm divides the input array into two parts: a sorted subarray and an unsorted subarray. It repeatedly selects the smallest (or largest, depending on the sorting order) element from the unsorted subarray and moves it to the end of the sorted subarray.

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;
}
console.log(selectionSort([9,5,7,1]))

//Merge Sort: This algorithm follows the divide-and-conquer approach. It divides the input array into two halves, recursively sorts each half, and then merges the sorted halves to produce the final sorted array.

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
console.log(mergeSort([9,8,7,6]))

//Quick Sort: This algorithm also follows the divide-and-conquer approach. It selects a "pivot" element from the array and partitions the other elements into two subarrays according to whether they are less than or greater than the pivot. It then recursively sorts the subarrays.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] < mid) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat(mid, quickSort(right));
}
console.log(quickSort([7,6,5,4]))


//Heap Sort: This algorithm treats the input array as a binary tree and uses the heap data structure to sort the elements. It repeatedly extracts the maximum (or minimum) element from the heap and reconstructs the heap until all elements are sorted.

function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, 0, i);
    }
    return arr;
}

function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        maxHeapify(arr, i, arr.length);
    }
}

function maxHeapify(arr, i, length) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < length && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < length && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, largest, length);
    }
}
console.log(heapSort([5,4,3,2]))

