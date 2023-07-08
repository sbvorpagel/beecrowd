using System;

class URI
{
    static void Main(string[] args)
    {
        double base_salary, total_sales;
        decimal total_salary;

        Console.ReadLine();
        double.TryParse(Console.ReadLine(), out base_salary);
        double.TryParse(Console.ReadLine(), out total_sales);
        
        total_salary = Math.Round((decimal)(base_salary + (total_sales * 0.15)), 2, MidpointRounding.ToEven);
        Console.WriteLine("TOTAL = R$ " + total_salary.ToString("0.00"));
    }
}
