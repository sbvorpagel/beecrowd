input_line_one = input().split(" ")
input_line_two = input().split(" ")

product_one_quantity = int(input_line_one[1])
product_one_price = float(input_line_one[2])

product_two_quantity = int(input_line_two[1])
product_two_price = float(input_line_two[2])

amount_to_pay = (product_one_quantity * product_one_price) + (
    product_two_quantity * product_two_price
)

print("VALOR A PAGAR: R$ %.2f" % amount_to_pay)
