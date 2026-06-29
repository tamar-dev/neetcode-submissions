class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
 
        let dic = {};
        for(let i=0; i < nums.length; i++){
            if(!dic[nums[i]]){
                dic[nums[i]] = 1;
            }
            else{
                return true
            }
        }
    return false
    }
}
