


let mala = document.getElementsByName("type");
function getInfo(mala) {
  let gender = "";
  for (let index = 0; index < mala.length; index++) {
    if (mala[index].checked == true) {
      gender = mala[index].value;
    }
  }
  return gender;
}
var registerArr=[]
document.querySelector("#btn-register").onclick = function (e) {
    e.preventDefault();
    var register = new UserRegister();
    register.name = document.querySelector('#name').value;
    register.email = document.querySelector('#email').value;
    register.password = document.querySelector('#password').value;register.phone = document.querySelector('#phone').value;
    register.gender = getInfo(mala);
    
    getRegister(register);
    console.log(register);
}










function getRegister(post){
    let promise = axios({
        url: "https://shop.cyberlearn.vn/api/Users/signup",
        method: "POST",
        data: post,
    })
    promise.then(function(data){
        console.log(data);
    })
    promise.catch(function(err){
        console.log(err);
    })
};