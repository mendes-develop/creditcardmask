
//  function maskify(data) {
//    let array = []
//    if (data.length < 5){
//      return data 
//    } else {
//      for (let i = 0; i > data.length; i++){
//        if
//      }
//    }
// }
// function maskify(data) {
//   let array = []
//   for (let i = 0; i > data.length; i++){
//   }
// }


// // maskify("Alex Mendes")
// maskify('Alex')
function maskify(data){
  let visible = data.slice(-4)
  let countNum = ''
  for (let i = (data.length)-4; i > 0; i--){countNum += "#"}
  return (countNum+visible)
}