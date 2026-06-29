class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let dic = {};
        nums.forEach( (n,i) => dic[n] = [...(dic[n]??[]), i]);
        nums.sort();
        for(let i = 0, x = nums[i]; i<nums.length-1; i++, x = nums[i]){
            if(dic[target-x]?.length){
                if(x == target-x){
                return [dic[x][0],dic[x][1]];
            }
                return [dic[x][0],dic[target-x][0]];
            }
        }
    }
}
