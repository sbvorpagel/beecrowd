using System;

class URI
{
    static void Main(string[] args)
    {
        decimal salary;

        decimal.TryParse(Console.ReadLine(), out salary);

        if (salary <= 400)
        {
            Print(salary, 15);
        }
        else if (salary <= 800)
        {
            Print(salary, 12);
        }
        else if (salary <= 1200)
        {
            Print(salary, 10);
        }
        else if (salary <= 2000)
        {
            Print(salary, 7);
        }
        else
        {
            Print(salary, 4);
        }
    }

    private static void Print(decimal salary, int percent)
    {
        decimal new_salary = salary * (1 + percent / 100m);
        decimal money_earned = salary * percent / 100m;

        Console.WriteLine($"Novo salario: {new_salary:0.00}");
        Console.WriteLine($"Reajuste ganho: {money_earned:0.00}");
        Console.WriteLine($"Em percentual: {percent} %");
    }
}