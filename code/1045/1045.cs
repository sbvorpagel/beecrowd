using System;
using System.Linq;

class URI
{
    static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(' ');

        double[] numbers = input
            .Select(double.Parse)
            .ToArray()
            .OrderBy(item => item)
            .Reverse()
            .ToArray();


        double A = numbers[0];
        double B = numbers[1];
        double C = numbers[2];

        if (A >= (B+C))
        {
            Console.WriteLine("NAO FORMA TRIANGULO");
        }
        else
        {
            if (Math.Pow(A, 2) == (Math.Pow(B, 2) + Math.Pow(C, 2)))
            {
                Console.WriteLine("TRIANGULO RETANGULO");
            }
            else if (Math.Pow(A, 2) > (Math.Pow(B, 2) + Math.Pow(C, 2)))
            {
                Console.WriteLine("TRIANGULO OBTUSANGULO");
            }
            else if (Math.Pow(A, 2) < (Math.Pow(B, 2) + Math.Pow(C, 2)))
            {
                Console.WriteLine("TRIANGULO ACUTANGULO");
            }

            if (A == B && B == C)
            {
                Console.WriteLine("TRIANGULO EQUILATERO");
            }
            else if (A == B || B == C || A == C)
            {
                Console.WriteLine("TRIANGULO ISOSCELES");
            }
        }
    }
}