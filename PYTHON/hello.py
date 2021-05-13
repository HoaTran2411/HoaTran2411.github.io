# print("hello world")
# name = input(">")
# print(f"hello {name}!")
# print("welcome to python!")
# list = [1,2,4]
# print(id(list))
# list[2] = 0
# print(id(list))
# s = "hello"
# print(s[0:2]) không bao gồm chỉ mục 2
# tham số 1: tham số bắt đầu, tham số 2 là bước nhảy
# print(s[0::2]) 
# # đảo ngược chuỗi
# print(s[::-1])
# print(s[-2:5])
# # print(s[-2:3]) --> kết quả ra rỗng vì -2: lấy bắt đầu từ vị trí -2 về phía bên phải, vị trí 3 lấy ký tự từ 0 đến 3 --> 2 cái này k có ký tự chung
# name = "mai"
# print(f"chào {name:5} hihi")  
# print("hoa hoet".upper())
# s = "hello"
# print(s.startswith('h'))
# print(s.find("i"))
# print(s.isalnum())
# import math // phải có dòng này thì mới dùng dc công thức bên dưới
# print(math.ceil(1.33))


# print(str(True) + "aaa")
# print("tên bạn là gì?")
# name = input(">>>")
# print(f"tên tôi là {name}")

# print("tuoi cua ban")
# age = int(input(">>>"))
# print(f"toi {age} tuoi")

# 1. Viết chương trình yêu cầu người dùng nhập vào 2 số a, b. Tính và in ra kết quả của các phép tính(+ - * / // % ...) giữa 2 số đó
# a = int(input("nhập số a: "))
# b = int(input("nhập số b: "))
# print(f"tổng của a+ b bằng {a+b}")


# 2. Viết chương trình yêu cầu người dùng nhập vào bán kính hình tròn(r), tính và in ra chu vi, diện tích hình tròn đó

# import math
# print("nhập vào bán kính hình tròn")
# r = int(input(">>>"))
# print(f"chu vi hình tròn là {r * 2 * math.pi}")

# 3. Viết chương trình yêu cầu người dùng nhập vào chiều dài(w), chiều rộng(w) của hình chữ nhật, tính và in ra chu vi, diện tích hình chữ nhật đó
# length = int(input("chiều dài hình cn là: "))
# width = int(input("chiều rộng hình cn là: "))
# print(f"chu vi hình chữ nhật là {(length + width) * 2}")

# 4. Viết chương trình yêu cầu người dùng nhập vào giá trị độ dài(long) với đơn vị là cm, quy đổi 
# và in ra giá trị tương ứng ở các đơn vị km, dm, m, mm
# print("nhập vào cm")
# a = int(input(">>>"))
# print(f"{a} cm bằng {a/10} dm")

# 5. Viết chương trình yêu cầu người dùng nhập vào giá trị nhiệt độ thang nhiệt Celsius(c), quy đổi 
# và in ra nhiệt độ tương ứng trong thang nhiệt Fahrenheit và Kevin
# print("vui lòng nhập vào giá trị C độ")
# a = int(input('>>> '))
# print(f"{a} độ C bằng {9/5 * a + 32} độ F")
# print(f"{a} độ C bằng {a + 273.15} độ K")

# 6. Viết chương trình yêu cầu người dùng nhập vào số phút(tính từ 0h của ngày hôm nay, 
# giả sử số phút nhập không quá 1440), tính và in ra giá trị giờ: phút tương ứng(VD: 325 -> 5: 25)
# import math
# a = int(input("nhập vào số phút bạn muốn quy đổi: "))
# print(f"{a} phút tương ứng {math.floor(a/60)} : {a % 60}")

# 1. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một giá trị số (index), hiển thị chuỗi được cắt từ 0 đến vị trí index
# string = str(input('vui lòng nhập chuỗi của bạn: '))
# a = int(input('vui lòng nhập 1 số bất kỳ: '))
# print(f"chuỗi sau khi cắt từ 0 đến vị trí index {a} là {string[:a + 1]}")

# 2. Viết chương trình yêu cầu người dùng nhập tên, in ra tên viết tắt theo mẫu:
# ví dụ: nhập tên ba Nguyễn, in ra ba Ng.
# cách làm tìm ra vị trí của dấu cách, cắt từ vị trí dấu cách cộng 2

# 3. Viết chương trình yêu cầu người dùng nhập địa chỉ email, ẩn địa chỉ email và in ra theo mẫu trong ví dụ:
# Ví dụ:
# Nhập email: banguyen@gmail.com
# ba...@gmail.com

# a = str(input('vui lòng nhập địa chỉ email của bạn: '))
# print(f"{a[:2]}...{a[a.index('@'):]}")


# 4. Viết chương trình yêu cầu người dùng nhập một chuỗi, và một ký tự bất kỳ trong chuỗi đó. 
# Đếm số lần xuất hiện của ký tự trong chuỗi, và hiển thị chuỗi khi thay thế ký tự đó thành 😉

# Ví dụ:
# Nhập một chuỗi bất kỳ: Hello world
# Nhập một ký tự trong chuỗi: o
# Ký tự 'o' xuất hiện 2 lần trong chuỗi 'Hello world'
# Hell😉 w😉rld
a = str(input("nhập vào chuỗi: "))
b = str(input("nhập vào ký tự bất kỳ: "))
print(f"số lần xuất hiện của ký tự {b} trong chuỗi {a} là: {a.count(b, 0, len(a))}")
print(a.replace(b, "&&"))























