using System;

class URI
{
    static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(' ');
        double A = double.Parse(input[0]);
        double B = double.Parse(input[1]);
        double C = double.Parse(input[2]);

        if ((A + B > C) && (B + C > A) && (C + A > B))
        {
            Console.WriteLine("Perimetro = {0:0.0}", A + B + C);
        }
        else
        {
            Console.WriteLine("Area = {0:0.0}", ((A + B) * C) / 2);
        }
    }
}