function sortByName(a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
};

const products = [
	{code: 1001, name: 'עגבניה', unit_price: 3.90},
	{code: 1002, name: 'מלפפון', unit_price: 3.90},
	{code: 1003, name: 'פלפל', unit_price: 5.90},
	{code: 1004, name: 'גזר', unit_price: 2.90},
	{code: 1005, name: 'תפוח אדמה', unit_price: 4.90},
	{code: 1006, name: 'חציל', unit_price: 5.90},
	{code: 1007, name: 'בצל', unit_price: 4.90},
	{code: 1008, name: 'תפוח עץ', unit_price: 8.90},
	{code: 1009, name: 'ענבים', unit_price: 19.90},
	{code: 1010, name: 'בננה', unit_price: 6.90},
	{code: 1011, name: 'בטטה', unit_price: 7.90},
	{code: 1012, name: 'אבטיח', unit_price: 1.90},
];

function get_product(code){
	i = products.map(product => product.code).indexOf(code);
	return products[i];
}
function cart_payment (cart)
{
	payment = 0;
	for (item of cart) {
		product = get_product(item.code)
		payment += product.unit_price * item.weight;
	}
	return payment;
}
function cart_sort_items_by_name (cart)
{
	extended_items = [];
	for (item of cart) {
		product = product = get_product(item.code)
		extended_items.push({code: item.code, name: product.name, unit_price: product.unit_price, weight: item.weight, price: product.unit_price * item.weight});
	}
	extended_items.sort(sortByName);
  return extended_items;
}
cart = [
  {code: 1001, weight: 3.000}, 
	{code: 1004, weight: 1.300}, 
	{code: 1002, weight: 3.800},
	{code: 1012, weight: 9.200},
	{code: 1008, weight: 2.100}, 
];

console.log("Products:");
console.log(products.sort(sortByName));
console.log("Cart:")
console.log(cart_sort_items_by_name(cart));
console.log('לתשלום', cart_payment(cart),'ש"ח');