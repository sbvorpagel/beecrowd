using System;

class URI
{
    static void Main(string[] args)
    {
        int duration_in_seconds;
        int hours, minutes, seconds;

        duration_in_seconds = int.Parse(Console.ReadLine());

        hours = duration_in_seconds / 3600;
        duration_in_seconds %= 3600;
        minutes = duration_in_seconds / 60;
        duration_in_seconds %= 60;
        seconds = duration_in_seconds;

        Console.WriteLine("{0}:{1}:{2}", hours, minutes, seconds);
    }
}