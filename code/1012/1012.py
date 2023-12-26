input_line = input().split(" ")

A = float(input_line[0])
B = float(input_line[1])
C = float(input_line[2])

print("TRIANGULO: %.3f" % (A * C / 2))
print("CIRCULO: %.3f" % (3.14159 * C ** 2))
print("TRAPEZIO: %.3f" % ((A + B) * C / 2))
print("QUADRADO: %.3f" % (B ** 2))
print("RETANGULO: %.3f" % (A * B))
