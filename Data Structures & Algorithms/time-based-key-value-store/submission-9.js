// class TimeMap {
//     constructor() {
//         this.keyStore = new Map();
//     }

//     /**
//      * @param {string} key
//      * @param {string} value
//      * @param {number} timestamp
//      * @return {void}
//      */
//     set(key, value, timestamp) {
//         if (!this.keyStore[key]) {
//             this.keyStore[key] = {};
//         }
//         this.keyStore[key][timestamp] = value;
//     }

//     /**
//      * @param {string} key
//      * @param {number} timestamp
//      * @return {string}
//      */
//     get(key, timestamp) {
//         let result = "";
//         if (!this.keyStore[key]) {
//             return result;
//         }

//         const values = Object.keys(this.keyStore[key]) || [];

//         let left = 0;
//         let right = values.length - 1;

//         while (left <= right) {
//             const mid = Math.floor((left + right) / 2);

//             if (values[mid] <= timestamp) {
//                 result = this.keyStore[key][values[mid]] || '';
//                 left = mid + 1;
//             } else {
//                 right = mid - 1;
//             }
//         }

//         return result;
//     }
// }

class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const values = this.keyStore.get(key) || [];

        this.keyStore.set(key, [...values, {
            value,
            timestamp
        }])
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const values = this.keyStore.get(key);
        if (!values) return "";

        let left = 0;
        let right = values.length - 1;
        let result = "";

        while (left <= right) {
            const middle = Math.floor((left + right) / 2);
            const entry = values[middle];

            if (entry.timestamp <= timestamp) {
                result = entry.value;
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }

        return result;
    }
}

