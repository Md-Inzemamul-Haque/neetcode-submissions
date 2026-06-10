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

        if(!this.keyStore[key]){
            this.keyStore[key]={}
        }

        this.keyStore[key][timestamp]=value
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let result = "";
        if (!this.keyStore[key]) {
            return result;
        }

        if (this.keyStore[key]) {
            Object.keys(this.keyStore[key])
                .sort((a, b) => a - b)
                .forEach((time) => {
                    if (time <= timestamp) {
                        console.log(this.keyStore[key][time]);
                        result = this.keyStore[key][time];
                    }
                });
        } else {
            return "";
        }
        return result;
    }
}
