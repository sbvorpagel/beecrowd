using System;

class URI
{
    static void Main(string[] args)
    {
        string[] input = Console.ReadLine().Split(' ');
        int initial_hour = int.Parse(input[0]);
        int initial_minute = int.Parse(input[1]);
        int final_hour = int.Parse(input[2]);
        int final_minute = int.Parse(input[3]);

        int initial_time = initial_hour * 60 + initial_minute;
        int final_time = final_hour * 60 + final_minute;

        if (initial_time < final_time)
        {
            Console.WriteLine($"O JOGO DUROU {(final_time - initial_time) / 60} HORA(S) E {(final_time - initial_time) % 60} MINUTO(S)");
        }
        else if (initial_time > final_time)
        {
            Console.WriteLine($"O JOGO DUROU {(24 * 60 - initial_time + final_time) / 60} HORA(S) E {(24 * 60 - initial_time + final_time) % 60} MINUTO(S)");
        }
        else
        {
            Console.WriteLine($"O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
        } 
    }
}