using System;

class URI
{
    static void Main(string[] args)
    {
        double A, B, C, R1, R2;
        string[] input = Console.ReadLine().Split(' ');
        A = double.Parse(input[0]);
        B = double.Parse(input[1]);
        C = double.Parse(input[2]);

        if (A == 0 || (Math.Pow(B, 2) - (4 * A * C)) < 0)
        {
            Console.WriteLine("Impossivel calcular");
        }
        else
        {
            R1 = (-B + Math.Sqrt(Math.Pow(B, 2) - (4 * A * C))) / (2 * A);
            R2 = (-B - Math.Sqrt(Math.Pow(B, 2) - (4 * A * C))) / (2 * A);
            Console.WriteLine("R1 = {0:0.00000}", R1);
            Console.WriteLine("R2 = {0:0.00000}", R2);
        }
    }
}