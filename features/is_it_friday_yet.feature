
#Feature: tên của ca kiểm thử.
Feature: Is it Friday yet?
  Everybody wants to know when it's Friday

  #Scenario: Trường hợp kiểm thử. Ở đây ta kiểm thử trường hợp đầu vào là Chủ nhật, không phải thứ sáu.
  Scenario: Sunday isn't Friday
    #Given, When, Then là các bước thực hiện ca kiểm thử đó

    #Given: Giống như là input đầu vào của ca kiểm thử
    Given today is Sunday
    #When: Mô tả sự kiện hoặc hành động
    When I ask whether it's Friday yet
    #Then: Kết quả mong muốn
    Then I should be told "Nope"

   Scenario: Friday is Friday
    Given today is Friday
    When I ask whether it's Friday yet
    Then I should be told "TGIF"