using System;

class URI
{
    static void Main(string[] args)
    {
        int num1, num2, num3;
        string[] input = Console.ReadLine().Split(' ');

        int.TryParse(input[0], out num1);
        int.TryParse(input[1], out num2);
        int.TryParse(input[2], out num3);

        int greatest = Greatest(num1, num2);
        greatest = Greatest(greatest, num3);

        Console.WriteLine(greatest + " eh o maior");
    }

    static int Greatest(int a, int b)
    {
        return (a + b + Math.Abs(a - b)) / 2;
    }
}