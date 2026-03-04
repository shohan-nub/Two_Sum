export default  function sum(nums:number[],target:number):number[]{
    const temStore=new Map<number,number>();

    for(let j=0;j<nums.length;j++){
        const par=target-nums[j];//kot lagbe 

        if(temStore.has(par)){//toto ki  ache?? map er moddhe ? 
            return [temStore.get(par)!,j];// thakle seita map theke ene  return koro  ar naile 
        }
        temStore.set(nums[j],j); 
    }

    return[]
};

console.log(sum([10,20,30,40,55],30));