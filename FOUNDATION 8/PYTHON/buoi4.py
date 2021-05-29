# print(list(range(1,10,2)))
# l = [1,2,3]
# c = ["a", "b", "c"]
# print(l*3)
# print(l+c)
# numbers = list(range(10))
# # print(numbers[0])
# print(numbers)
# 2. Viết chương trình đếm số phần tử có kiểu str trong một list
# Ví dụ:
# l = ["a", "b", 1, 2, "c", True, False]
# count = 0
# for i in list_check:
#     if type(i) == str:
#         count += 1
# print(count)
# str_l = list(filter(lambda i: type(i)== str, l))
# # print(str_l)
# upper_list = list(map(lambda i: i.upper(), str_l))
# print(upper_list)

# 8. Viết chương trình kết hợp 2 phần tử liền kề nhau trong List strings
# VD: ['a', 'b', 'c', 'd', 'e']
# result ['ab', 'cd', 'e']
# l = ['a', 'b', 'c', 'd', 'e']
# result = []
# for i in range(0, len(l), 2):
#     if i < len(l) -1:
#         result.append(l[i]+l[i+1])
#     else:
#         result.append(l[i])
# print(result)
        
# cho 1 list số nguyên
# viết hàm find_second_value(l)
# tìm giá trị lớn thứ 2 trong list
# l = [1,2,4,7,4,5,6,15,15,13]
# def find_second_value(l):
#     l.sort(reverse = True)
#     max = l[0]
#     for value in l:
#         if value < max:
#             return value
# second = find_second_value(l)
# print(second)

# l = [
#     ("iphone", 888),
#     ("s21", 999),
#     ("max", 777),
#     ("galaxy", 1000)
# ]
# def get_price(item):
#     return item[1]
# l.sort(key = get_price, reverse = True)
# print(l)

# viết hàm sort_list(l)
# sắp xếp mảng 2 chiều các giá trị số
# theo tổng giá trị trong mảng
# l = [[1,2], [3,1], [4,-3]]
# kết quả [[4,-3],[1,2],[3,1]]
# l = [[1,2], [3,1], [4,-3]]
# def sum_list(l):
#     sum = 0
#     for value in l:
#         sum += value
#     return sum
# l.sort(key = sum_list)
# print(l)

# l = [[1,2], [3,1], [4,-3]]
# # def sum_list(l):
# #     return l[1]
# # l.sort(key = sum_list)
# l.sort(key = lambda l: l[1])
# print(l)
    















