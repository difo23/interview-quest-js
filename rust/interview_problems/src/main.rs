mod k_closest;

fn main() {
    let number_list = vec![1, 3, 7, 8, 9];
    let list = k_closest::k_closets(&number_list, 3, 5);
    println!("{:?}", list)
}
