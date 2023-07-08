using System;

class URI
{
    static void Main(string[] args)
    {
        int num1, num2;
        int.TryParse(Console.ReadLine(), out num1);
        int.TryParse(Console.ReadLine(), out num2);
        Console.WriteLine("PROD = " + (num1 * num2));
    }
}