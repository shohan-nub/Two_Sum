function Sum(nums, target) {
    if (nums.length < 2)
        return [];
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] + nums[i + 1] == target) {
            return [i, i + 1];
        }
    }
    return [];
}
Sum([2, 3, 4, 5, 6], 5);
