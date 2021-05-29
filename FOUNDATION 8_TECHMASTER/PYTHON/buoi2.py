# n = int(input("nhập 1 số N: "))
# if n % 2 == 0:
#     # print(f"{n} là số chẵn")
#     # pass, để bỏ qua khối rỗng nhưng không bị báo lỗi
# else:
#     print(f"{n} là số lẻ")

# for n in range(1, 10, -2):  // -2 để in số chẵn và in ngược
#     print(n);    //nhớ thụt lề sau ":"
# kiểm tra xem n có phải số nguyên tố hay không
# n = 20
# for i in range(2, n//2):
#     if n % i == 0:
#         print(f"{n} không phải số nguyên tố!")
#         break
# else: 
#     print(f"{n} là số nguyên tố")

# 1. Viết chương trình yêu cầu nhập một số nguyên n, kiểm tra và in ra số đó có chia hết cho cả 3 và 5 hay không
# Ví dụ:
# Nhập một số nguyên: 5
# 5 không chia hết cho cả 3 và 5
# n = int(input("nhập vào 1 số nguyên: "))
# if n % 3 == 0 and n % 5 == 0:
#     print(f"{n} chia hết cho cả 3 và 5")
# else:
#     print(f"{n} không chia hết đồng thời cho cả 3 và 5")

# 2. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra số lớn nhất
# Ví dụ:
# Nhập số a: 1
# Nhập số b: 2
# Nhập số c: 3
# Số lớn nhất trong 3 số [1 2 3] là 3
# max = a = int(input("nhập vào số thứ nhất: "))
# b = int(input("nhập vào số thứ hai: "))
# c = int(input("nhập vào số thứ ba: "))
# max = b if b > max else c if c > max else a
# print(max)

# 3. Viết chương trình yêu cầu nhập 3 số a, b, c tương ứng với độ dài 3 cạnh tam giác. 
# Kiểm tra và in ra 3 số có tạo thành một tam giác hợp lệ hay không
# Ví dụ:
# Nhập cạnh a: 1
# Nhập cạnh b: 3
# Nhập cạnh c: 3
# [1 3 3] là một tam giác hợp lệ
# tam giác hợp lệ là tổng của 2 cạnh luôn lớn hơn cạnh còn lại
# a = int(input("nhập vào độ dài cạnh thứ nhất của tam giác: "))
# b = int(input("nhập vào độ dài cạnh thứ hai của tam giác: "))
# c = int(input("nhập vào độ dài cạnh thứ ba của tam giác: "))
# if a + b <= c or a + c <= b or b + c <= a:
#     print(f"3 số {a}, {b}, {c} không tạo thành 1 tam giác hợp lệ")
# else:
#     print("đây là 1 tam giác hợp lệ")

# 4. Viết chương trình yêu cầu nhập 3 số a, b, c. Kiểm tra và in ra 3 số là dãy tăng dần (a < b < c), giảm dần (a > b > c) hay không
# Ví dụ:
# Nhập số a: 1
# Nhập số b: 2
# Nhập số c: 3
# [1 2 3] là dãy tăng dần
# a = int(input("nhập vào số thứ nhất: "))
# b = int(input("nhập vào số thứ hai: "))
# c = int(input("nhập vào số thứ ba: "))
# if a < b < c:
#     print(f"[{a} {b} {c}] là dãy tăng dần")
# elif a > b > c:
#     print(f"[{a} {b} {c}] là dãy giảm dần")
# else:
#     print("đây k phải dãy tăng hay giảm dần")

# 5. Viết chương trình yêu cầu nhập một ký tự, kiểm tra và in ra ký tự đó có thuộc bảng alphabet (a-zA-Z) hay không
# Ví dụ:
# Nhập một ký tự: g
# 'g' thuộc bảng ký tự alphabet
# a = input("nhập vào một ký tự bất kỳ: ")
# if a.isalpha():
#     print(f"{a} thuộc bảng alphabet")
# else:
#     print(f"{a} không thuộc bảng alphabet")
# hoặc kiểm tra lớn hơn ký tự a nhỏ hơn ký tự z

# 6. Viết chương trình yêu cầu nhập một tháng trong năm, kiểm tra và in ra mùa tương ứng
# Ví dụ:
# Nhập một tháng bất kỳ: 5
# Tháng 5 là mùa hè
# a = int(input("nhập vào 1 số tương ứng vs tháng bất kỳ của bạn: "))
# if 1 <= a <= 3:
#     print(f"tháng {a} là mùa xuân")
# elif 4 <= a <= 6:
#     print(f"tháng {a} là mùa hè")
# elif 7 <= a <= 9:
#     print(f"tháng {a} là mùa thu")
# elif 10 <= a <= 12:
#     print(f"tháng {a} là mùa đông")
# else:
#     print(f"bạn nhập số k hợp lệ, k tương ứng tháng nào cả")


# 7. Viết chương trình yêu cầu nhập một số, in ra bảng cửu chương của số đó
# Ví dụ:
# Nhập một số (1 - 9): 5
# 5 x 1 = 5
# 5 x 2 = 10
# ...
# a = int(input("nhập vào 1 số bất kỳ bạn thích: "))
# for i in range(1, 11):
#     print(f"{a} * {i} = {a * i}")

# 8. Viết chương trình yêu cầu nhập một số nguyên dương n, kiểm tra các số trong khoảng từ 1 - n
# - Nếu số chia hết cho 3 in ra Fizz
# - Nếu số chia hết cho 5 in ra Buzz
# - Nếu số chia hết cho 3 và 5 in ra FizzBuzz
# - Nếu không chia hết cho cả 3 và 5 in ra số đó
# Ví dụ:
# Nhập một số nguyên dương: 10
# 1
# 2
# Fizz
# 4
# Buzz
# ...
# n = int(input("nhập vào 1 số nguyên dương bất kỳ: "))
# for i in range(1, n+1):
#     if i % 3 == 0 and i % 5 == 0:
#         print("FizzBuzz")
#     elif i % 3 == 0:
#         print("Fizz")
#     elif i % 5 == 0:
#         print("Buzz")
#     else:
#         print(i)
    
# for- else để sử dụng khi check 1 số là số nguyên tố hay không, bởi else sẽ được thực thi khi các mục trong chuỗi đã được lặp hết
# lệnh break trong for giúp dừng vòng lặp for, lúc này phần else sẽ k dc thực thi, else sẽ chạy khi k có break nào dc thực thi
# 9. Viết chương trình yêu cầu người dùng nhập số nguyên dương n tính tổng tất cả các số chia hết cho 3 và 5 trong khoảng từ 1 -> n
# Ví dụ:
# Nhập một số nguyên dương: 10
# Tổng các số từ 1 đến 10 là 55

# n = int(input("nhập vào số nguyên dương n bất kỳ: "))
# total = 0
# for i in range(1, n+1):
#     if i % 3 == 0 and i % 5 == 0:
#         total += i
# print(total)

# 10. Viết chương trình yêu cầu người dùng nhập một loạt số, tính và in ra trung bình cộng của các số đó
# - Cho phép nhập số lượng số bất kỳ
# - In ra kết quả ngay lập tức với mỗi số nhập vào
# - Dừng nhập và in ra kết quả khi người dùng nhập 'q' hoặc 'c'
# Ví dụ:
# Nhập một số: 2
# Dãy số đã nhập: 2
# Trung bình cộng các số: 2.0
# Nhập một số: 5
# Dãy số đã nhập: 2 5
# Trung bình cộng các số: 3.5
# ...
# Nhập một số: q
# Exit!

# sum = 0
# average = 0
# arrNum = []
# i = 1
# while i > 0:
#     a = input("nhập vào 1 số bất kỳ: ")
#     if a == "q" or a == "c":
#         print("exist!")
#         break
#     else:
#         sum = (sum + int(a))
#         average = sum/i
#         arrNum.append(a)
#         print(f"dãy số đã nhập {' '.join(arrNum)}")
#         print(f"trung bình cộng bằng {average}")
#         i += 1

# 13. Viết nearest(a, b) kiểm tra và trả về số gần với 100 nhất
# VD: nearest(105, 99) -> 99
nearest = a = int(input("nhập vào số a: "))
b = int(input("nhập vào số b: "))
nearest = b if abs(a-100) > abs(b-100) else a
print(nearest)



        
























