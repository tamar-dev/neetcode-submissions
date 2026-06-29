class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let dic ={}, res = [];
        //create map
        for (let i = 0; i < nums.length; i++) {
            if(dic[[nums[i]]]){
                dic[[nums[i]]]++
            } else {
                dic[[nums[i]]] = 1;
            } 
        }

       let getMaxFromMap = (dic) => { return  Object.keys(dic).reduce((a, b) => dic[a] > dic[b] ? a : b);}

        for(;k > 0;k--){
           res.push(getMaxFromMap(dic));
           dic[res[res.length-1]] = 0;
        }
        return res;
    }
}
