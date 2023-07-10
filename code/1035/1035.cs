using System;

class URI
{
    static void Main(string[] args)
    {
        int A, B, C, D;
        string[] input = Console.ReadLine().Split(' ');
        A = int.Parse(input[0]);
        B = int.Parse(input[1]);
        C = int.Parse(input[2]);
        D = int.Parse(input[3]);

        if (
            B > C && D > A && 
            (C + D) > (A + B) && 
            C > 0 && D > 0 && 
            A % 2 == 0
        )
        {
            Console.WriteLine("Valores aceitos");
        }
        else
        {
            Console.WriteLine("Valores nao aceitos");
        }
    }
}