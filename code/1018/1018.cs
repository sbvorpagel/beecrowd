using System;

class URI
{
    static void Main(string[] args)
    {
        int total_value;
        int[] banknotes = new int[] { 100, 50, 20, 10, 5, 2, 1 };

        total_value = int.Parse(Console.ReadLine());

        Console.WriteLine(total_value);

        foreach (int banknote in banknotes)
        {
            Console.WriteLine("{0} nota(s) de R$ {1},00", total_value / banknote, banknote);
            total_value %= banknote;
        }
    }
}