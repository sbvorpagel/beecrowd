using System;
using System.Linq;

class URI
{
    static void Main(string[] args)
    {
        string[] input = Console
            .ReadLine()
            .Split(' ');
        int[] numbers = input
            .Select(int.Parse)
            .ToArray();
        int[] sortedNumbers = numbers
            .OrderBy(item => item)
            .ToArray();

        PrintArray(sortedNumbers);
        PrintEmptyLine();
        PrintArray(numbers);
    }

    private static void PrintArray(int[] array)
    {
        foreach (int item in array)
        {
            Console.WriteLine(item);
        }
    }

    private static void PrintEmptyLine()
    {
        Console.WriteLine();
    }
}
