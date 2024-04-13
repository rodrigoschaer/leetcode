const sortArray = (arr: number[]): number[] => {
	const mergeSort = (arr: number[], l: number, r: number): void => {
		if (l < r) {
			const m = Math.floor((l + r) / 2);
			mergeSort(arr, l, m);
			mergeSort(arr, m + 1, r);
			merge(arr, l, m, r);
		}
	}

	const merge = (arr: number[], left: number, mid: number, right: number): void => {
		let leftArr = arr.slice(left, mid + 1);
		let rightArr = arr.slice(mid + 1, right + 1);

		let i = left; // result array iterator
		let j = 0; // left array iterator
		let k = 0; // right array iterator

		while (j < leftArr.length && k < rightArr.length) {
			if (leftArr[j] < rightArr[k]) {
				arr[i++] = leftArr[j++];
			} else {
				arr[i++] = rightArr[k++];
			}
		}

		while (j < leftArr.length) {
			arr[i++] = leftArr[j++];
		}

		while (k < rightArr.length) {
			arr[i++] = rightArr[k++];
		}

		return;
	}

	mergeSort(arr, 0, arr.length - 1);
	return arr;
}
