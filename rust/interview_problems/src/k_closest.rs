
use std::collections::HashMap;
use std::convert::TryFrom;

pub fn k_closets(list: &[i32], k: i32, x: i32) -> &[i32] {
    let mut result = HashMap::new();
    let mut suma = 0;
    let mut i = 0;
    let mut min_sum = i32::MAX;

    for num in list.iter() {
        suma += i32::abs(x - num);

        if i >= k - 1 {
            min_sum = min_sum.min(suma);
            result.insert(
                suma.clone(),
                &list.clone()
                    [usize::try_from(i - (k - 1)).unwrap()..usize::try_from(i + 1).unwrap()],
            );
            suma -= i32::abs(list[usize::try_from(i - (k - 1)).unwrap()] - x);
        }
        i += 1;
    }
    println!("{:?} ", result);
    let res = result.get(&min_sum);
    return res.unwrap();
}
