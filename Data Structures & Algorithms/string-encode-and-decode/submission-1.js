class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       return strs.reduce( (accumulator, currentValue) => accumulator+currentValue.length + '#' + currentValue,"");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let sp = 0, len =0, res =[];
        while (str.length > 0) {
            sp = str.indexOf('#');
            if(sp == -1) {
                res.push(str);
                break;
            }
            len = Number.parseInt(str.slice(0, sp));
            res.push(str.slice(sp + 1, sp + 1 + len));
            str = str.slice(sp + 1 + len);

        }
        return res;
    }

}
