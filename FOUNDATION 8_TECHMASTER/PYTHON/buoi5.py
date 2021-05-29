# l1 = [1,2,3,4]
# print(list(zip(l1, "ab")))
# t = 1,2
# print(type(t))
# t = 1,
# print(type(t))
# d = dict(x=1, y=2, f= lambda x: x*10)
# print(d)
# print(d["f"](1))     lưu ý key luôn là chuỗi, truy cập d["key"]
# nếu truy cập vào 1 key k tồn tại, sẽ báo lỗi, hoặc dùng get,  nếu k tồn tại key đó sẽ trả về none
# hoặc dùng in để kiểm tra key có tồn tại trong dữ liệu không

# def get(key, default = None):
#     if key in d:
#         return d[key]
#     else:
#         return default
# print(d.get("xy", "nothing"))

# tìm ký tự có lần xuất hiện nhiều nhất trong 1 chuỗi, không tính khoảng trắng
#sentence = "This is a common interview question"
# def max_char(s):
#     pass
# a = list(sentence)
# b = list(set(a))
# print(a)
# print(b)
# count = 0
# for i in b:
#     for e in a:
#         print(f"{i} xuất hiện {a.count(i)} lần")
# sentence = 'This is a common interview question'
# cách 1: tuy nhiên k tối ưu hóa
# # max(*a): đếm số lần xuất hiện nhiều nhất
# def max_char(s):
#     a = [s.count(i) for i in list(s) if i != ' ']
#     max = a[0]
#     for j in a:
#         if a[j] > max:
#             max = a[j]
#             ind = j
#     return f'Ký tự xuất hiện nhiều nhất là {list(s)[ind]}'
# print(max_char(sentence))

#cách 2:
# def max_char(s):
#     l = dict()
#     for char in s:
#       if char != " ":
#         if char in l:
#             l[char] += 1
#         else:
#             l[char] = 1
#     l = list(l.items())
#     l.sort(key = lambda item: item[1])
#     return l.pop()
# char, count = max_char(sentence)
# print(f"ký tự {char} xuất hiện nhiều nhất {count} lần")
    
# 12. Viết chương trình hợp nhất 2 dictionaries
# VD:
# d1 = {"a": 1, "b": 2}
# d2 = {"a": 2, "c": 1}
# # => d3 = {a: 3, b: 2, c:1}
# def concat_two_dict(d1, d2):
#     keys = list(set([*d1.keys(), *d2.keys()]))
#     # result = dict()
#     # for i in keys:
#     #     total = d1.get(i,0) + d2.get(i,0)
#     #     result[i] = total
#     # print(result)
#     # return result
#     return {i: d1.get(i,0) + d2.get(i,0) for i in keys}
# print(concat_two_dict(d1,d2))

# 13. Viết chương trình in dictionaries theo dạng bảng
# VD: {C1: [1, 2], C2: [3, 4]}
# C1  C2
#  1   3
#  2   4

def print_as_table(d):
    column = list(d.keys())
    rows = list(zip(*d.values()))
    header = ""
    for col in column:
        header += f"{col:^12}"
        print(header)
    for row in rows:
        r = ""
        for v in row:
            r += f"{v:^12}"
        print(r)

print_as_table({"C1": [1, 2], "C2": [3, 4]})





























