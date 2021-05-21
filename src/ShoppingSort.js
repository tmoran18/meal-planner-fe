// shoppingListMeals.map((meal) =>
//   meal.ingredients.map((ingredient) => shoppingListArr.push(ingredient))
// )
// const newArr = addDuplicateValues(shoppingListArr)

// const addDuplicateValues = (arr) => {
//   var result = [
//     {
//       _id: '608c9240b60a4f0015a1b182',
//       name: 'Potatoes',
//       unit: '',
//       category: 'Vegetables',
//       user: '608c8ba2b60a4f0015a1b181',
//       date: '2021-04-30T23:26:56.595Z',
//       __v: 0,
//       qty: '4',
//     },
//   ]

//   arr.forEach((item, index) => {
//     // if the Array is empty, push the first item in
//     if (result.length === 0) {
//       result.push(item)
//       // else if there are no matches of item in result, push another
//     } else if (!result.some((elem) => elem._id === item._id)) {
//       result.push(item)
//     } else {
//       // else if there is a match, iterate over the results array
//       // Add the items qty to the results qty
//       result.forEach((item, index) => {
//         if (result[index]._id === item._id) {
//           result[index].qty += result[index].qty + item.qty
//         }
//       })
//     }

//     // If the arr is empty or there iteration id is not already in the arr, push another item in
//     // if (result.length === 0 || !result.some((elem) => elem.id === item.id)) {
//     //   console.log(`Pushing ${item} into result`)
//     //   result.push(item)
//     // } else {
//     // Loop over the results array length
//     // for (var i = 0; i < result.length; i++) {
//     //   // If a result matches
//     //   if (result[i].id === item.id) {
//     //     // Update the results qty
//     //     console.log(result[i].qty)
//     //     console.log(item.qty)
//     //     // result[i].qty += parseInt(result[i].qty) + parseInt(item.qty)
//     //   }
//     // }
//   })

//   return result
// }
