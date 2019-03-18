const assert = require('assert');
const { Given, When, Then } = require('cucumber');

//Hàm kiểm tra xem có phải thứ sáu hay không. Nếu là Friday thì trả kết quả là TGIF, ngược lại trả Nope
let isItFriday = today => {
    if(today === "Friday"){
        return "Yes";
    }
    else{
        return "Nope";
    }
}

//Truyền input đầu vào cho ca kiểm thử thứ nhất: Sunday is not Friday
// So với ví dụ trước, giờ ta sẽ truyền giá trị sai cho biến today is Friday là Friday thay vì Sunday 
// Do ca kiểm thử này đang kiểm tra xem nếu hôm nay không phải thứ 6, thì liệu chương trình có trả về Nope hay không
Given('today is Sunday', () => {
    this.today = 'Friday';
  });

//Truyền input đầu vào cho ca kiểm thử thứ hai: Friday is Friday
Given('today is Friday', () => {
    this.today = 'Friday';
});

//Khi hành động xảy ra, lấy giá trị từ Given và gán vào biến actualAnswer
When('I ask whether it\'s Friday yet', () => {
    this.actualAnswer = isItFriday(this.today);
});

//So sánh kết quả mong muốn với kết quả thực tế
Then('I should be told {string}', (expectedAnswer) => {
    assert.equal(this.actualAnswer, expectedAnswer);
  });

