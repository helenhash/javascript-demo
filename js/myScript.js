// For ... in
var branches = ["Apple", "Samsung", "Sony"];
for (var branch in branches) {
	console.log(branches[branch]);
}

// Variable Scope
scope = "global";
function checkVariableScope() {
	scope = "local";
	console.log(scope);
	var myLocalVar = "myLocalVar";
	console.log(myLocalVar);
}

checkVariableScope();
console.log(scope);
// console.log(myLocalVar);


// Function
function showAlertMsg(message) {
	alert(message);
}

showAlertMsg("My Message");

// 1. Object literal
var userInfo = {
	firstName: "Nguyen Van",
	lastName: "A"	
};
console.log("Full Name: " + userInfo.firstName + " " + userInfo.lastName);

// Regular Expression
const REGEX_LETTERS_ONLY = /^[- a-zA-Z_ÀÁ ÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềếéểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/i;
function isValidName(inputText) {
	return REGEX_LETTERS_ONLY.test(inputText);
}

const REGEX_PASSWORD = /^.*(?=.*\d)(?=.*[a-zA-Z]).*$/i;
function isValidPassword(inputText) {
	return REGEX_PASSWORD.test(inputText);
}
