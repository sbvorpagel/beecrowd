using System;

class URI
{
    static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(' ');
        int start_time = int.Parse(input[0]);
        int end_time = int.Parse(input[1]);

        if (start_time < end_time)
        {
            Console.WriteLine($"O JOGO DUROU {end_time - start_time} HORA(S)");
        }
        else
        {
            Console.WriteLine($"O JOGO DUROU {24 - start_time + end_time} HORA(S)");
        }
    }
}