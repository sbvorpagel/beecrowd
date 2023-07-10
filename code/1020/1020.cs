using System;

class URI
{
    static void Main(string[] args)
    {
        int age_in_days;

        age_in_days = int.Parse(Console.ReadLine());

        Console.WriteLine("{0} ano(s)", age_in_days / 365);
        age_in_days %= 365;
        Console.WriteLine("{0} mes(es)", age_in_days / 30);
        age_in_days %= 30;
        Console.WriteLine("{0} dia(s)", age_in_days);   
    }
}