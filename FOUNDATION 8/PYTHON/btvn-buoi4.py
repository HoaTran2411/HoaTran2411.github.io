# 1. Viết chương trình gợi ý người dùng nhập một dãy số tùy ý (phân tách bằng dấu cách), lưu vào một list.
# Sắp xếp list số đã nhập, sau đó, tìm và hiển thị số lớn thứ 3 (Lưu ý trường hợp nhiều số trùng nhau)
# Ví dụ:
# Nhập dãy số: 1 43 53 53 32 65 43 10
# List of numbers: [1 10 32 43 43 53 53 65]
# Số lớn thứ 3 trong dãy đã nhập là 43
# a = input("nhập 1 dãy số bất kỳ: ")
# b = list(a.split(" "))
# numbers = []
# bước 1: loại bỏ phần tử trùng lặp trong list
# for i in b:
#     if i not in numbers:
#         numbers.append(i)
# #bước 2: sắp xếp và tìm ra số lớn t3 trong dãy
# for i in numbers:
#     numbers.sort(reverse=True)
# third_number = numbers[2]
# print(numbers)
# print(third_number)

# chữa bài:
# try:
#     print("nhập 1 dãy số: ")
#     l = input("> ").split(" ")
#     l = list(map(lambda i: int(i), l))
#     l.sort(reverse=True)
#     n = None
#     count = 0
#     for i in l:
#         if not n:
#             n = i
#             count += 1
#         elif i < n:
#             n = i
#             count +=1
#         if count == 3:
#             break
#     l.reverse()
#     print(f"số lớn thứ 3 trong dãy {l}: {n}")
# except ValueError as e:
#     print("Dãy số không hợp lệ!")


# 3. Viết chương trình xáo trộn các phần tử trong List (theo thứ tự ngẫu nhiên).
# Sử dụng hàm random.randint(a, b) để lấy số ngẫu nhiên
# Ví dụ:
# l = [1, 2, 3, 4, 5, 6]
# Kết quả
# l = [5, 2, 4, 6, 1, 3]

# import random
# def shuffle(arr):
#     for i in range(len(arr) - 1, 0, -1):
#         j = random.randint(0,i)
#         temp = arr[i]
#         arr[i] = arr[j]
#         arr[j] = temp
#     print(arr)
#     return arr
# l = [1, 2, 3, 4, 5, 6, 2, 2]
# shuffle(l)

#chữa bài: dùng shuffle
# from random import shuffle
# l = [5, 2, 4, 6, 1, 3]
# shuffle(l)
# #shuffle(l) trả về none
# print(l)

# 4. Viết chương trình cộng giá trị của 2 hoặc nhiều List chứa các số nguyên (lưu ý số lượng phần tử trong các List
# có thể khác nhau, cộng giá trị các phần tử có index tương ứng).
# Ví dụ:
# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]
# Kết quả
# l4 = [9, 6, 8, 6]
# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]
# def sum_value(arr1,arr2):
#     l4 = []
#     if len(arr1) >= len(arr2):
#         first_arr = arr1
#         second_arr = arr2
#     else:
#         first_arr = arr2
#         second_arr = arr1
#     for i,v in enumerate(first_arr):
#         if i < len(second_arr):
#             a = first_arr[i] + second_arr[i]
#             l4.append(a)
#         else:
#             l4.append(v)
#     return l4
# a = sum_value(l1,l2)
# b = sum_value(a, l3)
# print(b)
# hoặc dùng hàm combine 2 list để lấy phần tử thừa

#chữa bài:
# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]
# def combine_list(*args):
#     max_len = max(*map(lambda l: len(l), args))
#     result = []
#     for i in range(0, max_len):
#         sum = 0
#         for l in args:
#             if i < len(l):
#                 sum += l[i]
#         result.append(sum)
#     return result
# print(combine_list(l1,l2,l3))
# args tương ứng vs tham số argument trong JS: chứa tất cả tham số truyền vào hàm


# 5. Viết chương trình tìm giá trị lớn nhất, nhỏ nhất trong 3 List (số nguyên) cho trước
# Ví dụ:
# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]
# Số lớn nhất: 6
# Số nhỏ nhất: 1

# l1 = [1, 2, 3]
# l2 = [3, 4, 5, 6]
# l3 = [5]
# l4 = l1+l2+l3
# l4.sort()
# print(f"số lớn nhất là: {l4[-1]}")
# print(f"số nhỏ nhất là: {l4[0]}")

# 6. Viết chương trình chuyển đổi một số nguyên thành một binary list tương ứng
# VD: 10 -> [1, 0, 1, 0]
# try:
#     n = int(input("nhập 1 số nguyên: "))
#     print(f"giá trị {n} trong hệ nhị phân: {list(map(lambda i: int(i), list(bin(n))[2:]))}")
# except ValueError as e:
#     print(e)
# cách khác
# try:
#     n = int(input("nhập 1 số nguyên: "))
#     l = [int(i) for i in bin(n)[2:]] --> câu lệnh số 1 int(i) để append trực tiếp i vào list
#     print(f"giá trị {n} trong hệ nhị phân: {l}")
# except ValueError as e:
#     print(e)


# 7. Viết chương trình sắp xếp các chữ số của một số sao cho giá trị sau khi sắp xếp là nhỏ nhất
# (lưu ý giữ nguyên số lượng các chữ số)
# VD: 23434004
# result 20033444
#sắp xếp sort, sau đó dùng vòng lặp for đổi số bé nhất khác không lên vị trí số 0 và đổi vị trí số 0 về vị trí đó
# n = 23434004
# #list tự phân tách các phần tử riêng thành 1 list
# l = list(str(n))
# l.sort()
# #phải chuyển các phần tử trong list về dạng số để so sánh
# if int(l[0]) == 0:
#     for index, value in enumerate(l):
#         if int(value) != 0:
#             l[0], l[index] = l[index], l[0]
#             break
# n = "".join(l)
# print(n)


# 9. Viết chương trình tìm các cặp giá trị trong một List số nguyên sao cho tổng giá trị của chúng bằng một giá trị chỉ định. 
# Các cặp giá trị đặt trong một list of tuples
# Ví dụ:
# l = [2, 3, 4, 5, 6], n = 9
# Kết quả
# l = [(3, 6), (4, 5)]
# def f(_list, n):
#     result = []
#     for i in range(0, len(_list) - 1):
#         for j in range(i+1, len(_list)):
#             if _list[j] + _list[i] == n:
#                 result.append([_list[i], _list[j]])
#     return result
# print(f([2, 3, 4, 5, 6], 9))
# lưu ý append() -> trong dấu ngoặc chỉ nhận 1 giá trị

# def f(l, n):
#     return [[l[i], l[j]]         (thực thi cuối, append kết quả)
#     for i in range(0, len(l)-1)  (thực hiện đầu tiên)
#     for j in range(i+1, len(l))  (thực thi thứ 2)
#     if l[i]+l[j]== n]            (thực thi thứ 3)
# print(f([2, 3, 4, 5, 6], 9))


# 10. Viết chương trình tách một list các giá trị hỗn hợp(số, chuỗi) thành các tuples chứa các giá trị dựa theo 
# kiểu dữ liệu của chúng, các tuples đặt trong một list
# Ví dụ:
# l = [1, 2, 3, 'a', 'b', 'c']
# Kết quả
# l = [(1, 2, 3), ('a', 'b', 'c')]



# 11. Viết chương trình tìm số lần xuất hiện nhiều nhất của một ký tự trong một chuỗi(không tính dấu cách)
# Ví dụ:
# Xin chào các bạn, mình tên là Ba
# ()

#viết chương trình lọc ra các giá trị true trong list
l = ["a", "b", 1, 2, "c", True, False]
a = [i for i in l if i == 1 and type(i) == int]
b = [i for i in l if bool(i) == True]
print(a)
print(b)

















