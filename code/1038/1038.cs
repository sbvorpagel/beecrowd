using System;
using System.Collections.Generic;

class URI
{
    static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(' ');
        int X = int.Parse(input[0]);
        int Y = int.Parse(input[1]);
        Dictionary<int, double> table = new Dictionary<int, double>()
        {
            { 1, 4.00 },
            { 2, 4.50 },
            { 3, 5.00 },
            { 4, 2.00 },
            { 5, 1.50 }
        };

        Console.WriteLine("Total: R$ {0:0.00}", table[X] * Y);
    }
}