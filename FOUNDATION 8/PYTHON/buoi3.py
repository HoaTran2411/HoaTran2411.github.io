# def sum(v1: float = 0, u1:str = "km", v2:float = 0, u2: str = "km") -> str:
#     """
#     ghi gì cũng được
#     """
#     pass
# print(sum( v2 = 100))

# 14. Viết hàm sum(value1, unit1, value2, unit2) nhận vào 2 tham số value1 và value2 là giá trị độ dài, 
# unit1 và unit2 là đơn vị độ dài. Quy đổi giá trị unit2 về cùng đơn vị với unit1, tính và in ra tổng giá trị
# VD: sum(1, 'km', 100, 'm') -> 1.1 km
# def to_km(value, unit):
#     if unit == "km":
#         return value
#     if unit == "m":
#         return value / 1000
#     if unit == "dm":
#         return value / 10000
#     if unit == "cm":
#         return value / 100000
#     if unit == "mm":
#         return value / 1000000

# def km_to(value, unit):
#     if unit == "km":
#         return value
#     if unit == "m":
#         return value * 1000
#     if unit == "dm":
#         return value * 10000
#     if unit == "cm":
#         return value * 100000
#     if unit == "mm":
#         return value * 1000000
    
    
# def sum(v1: int, u1: str, v2: int, u2: str):
#     print(f"{km_to(to_km(v1, u1) + to_km(v2,u2), u1)} {u1}")
# sum(1, "m", 5000, "cm")

# 9. Viết hàm print_number_pattern(n) in ra theo mẫu sau
# Ví dụ:
# n = 5
# 1
# 2  1
# 3  2  1
# 4  3  2  1
# 5  4  3  2  1

# def print_number_pattern(n:int):
#     for i in range(1,n+1):
#         s  = ""
#         for j in range(i, 0, -1):
#              s += f"{j:<3}" 
#              #trái tim để căn chỉnh text, gọi là cú pháp f-string
#         print(s)
# print_number_pattern(5)

# 7. Viết hàm in ra chữ số đầu và cuối của một số, VD: 12345 -> 15, lưu ý, không sử dụng phương thức của str
# def print_number(n:int):
#     last_number = n % 10
#     first_number = None
#     temp = n
#     while temp > 0:
#         first_number = temp % 10
#         temp //= 10
#     print(f"first number of {n} is {first_number}")
#     print(f"last number of {n} is {last_number}")
        
# print_number(123450)
        
# while True:
#     try: 
#         n = int(input("nhập N: "))
#         print("N là số chẵn" if n % 2 == 0 else "N là số lẻ")
#         n += "abc"
#         break
#     except (ValueError, TypeError) as e:
#         print("số không hợp lệ")
#     # except TypeError as e:
#     #     print("cộng chuỗi k hợp lệ")

def sum(a,b):
    if type(a) == int and type(b) == int:
        return a + b
    else:
        raise TypeError("a and b must be number")

try:
    print(sum(1,"n"))
except TypeError as e:
    print(e)



























