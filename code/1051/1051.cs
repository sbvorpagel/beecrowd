using System;

class URI
{
    static void Main(string[] args)
    {
        decimal salary = decimal.Parse(Console.ReadLine());

        if (salary > 4500m)
        {
            Console.WriteLine($"R$ {(salary - 4500m) * 0.28m + 1500m * 0.18m + 1000m * 0.08m:0.00}");
        }
        else if (salary > 3000m)
        {
            Console.WriteLine($"R$ {(salary - 3000m) * 0.18m + 1000m * 0.08m:0.00}");
        }
        else if (salary > 2000m)
        {
            Console.WriteLine($"R$ {(salary - 2000m) * 0.08m:0.00}");
        } 
        else 
        {
            Console.WriteLine("Isento");
        }
    }
}