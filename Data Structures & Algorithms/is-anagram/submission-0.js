class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;
        let dic = {};
        for(let i=0; i < s.length; i++){
            if(!dic[s[i]]){
                dic[s[i]] = 1;
            }
            else{
                dic[s[i]]++
            }
        }

        for(let i=0; i < t.length; i++){
            if(!dic[t[i]]){
                return false
            }
            else{
                dic[t[i]]--
            }
        }
        return true;
    }
}
