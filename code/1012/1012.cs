using System;

class URI
{
    static void Main(string[] args)
    {
        double A, B, C;
        string[] input = Console.ReadLine().Split(' ');
        double.TryParse(input[0], out A);
        double.TryParse(input[1], out B);
        double.TryParse(input[2], out C);

        Console.WriteLine("TRIANGULO: " + TriangleArea(A, C).ToString("0.000"));
        Console.WriteLine("CIRCULO: " + CircleArea(C).ToString("0.000"));
        Console.WriteLine("TRAPEZIO: " + TrapeziumArea(A, B, C).ToString("0.000"));
        Console.WriteLine("QUADRADO: " + SquareArea(B).ToString("0.000"));
        Console.WriteLine("RETANGULO: " + RectangleArea(A, B).ToString("0.000"));
    }

    static double TriangleArea(double A, double C)
    {
        return (A * C) / 2;
    }

    static double CircleArea(double C)
    {
        const double pi = 3.14159;
        return pi * (C * C);
    }

    static double TrapeziumArea(double A, double B, double C)
    {
        return ((A + B) * C) / 2;
    }

    static double SquareArea(double B)
    {
        return B * B;
    }

    static double RectangleArea(double A, double B)
    {
        return A * B;
    }
}